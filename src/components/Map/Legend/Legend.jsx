import React, { useEffect } from 'react'
import { Control, DomUtil } from 'leaflet'
import { useMap } from 'react-leaflet'

import { circleMarkerColor } from '../utils'
import './index.css' 

const Legend = () => {
  const map = useMap()

  useEffect(()=>{
    if(!map) return

    const legend = new Control({ position:'bottomright' })
    legend.onAdd = () => {
        const div = DomUtil.create('div', 'info legend')
        const grades = [0,1,2,3,5,7]
        const labels = []

        labels.push('<h4>Magnitude</h4>')

        grades.forEach((from, idx) => {
            const to = grades[idx + 1]
            labels.push(`<i style="background:${circleMarkerColor(from+1)}"></i>${from}${to ? `&ndash;${to}` : '+'}`)
        })
        div.innerHTML = labels.join('<br>')
        return div
    }
    legend.addTo(map)
  },[map])
    
  return (
    <div>Legend</div>
  )
}

export default Legend