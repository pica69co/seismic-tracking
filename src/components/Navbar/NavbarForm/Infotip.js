import { Tooltip } from 'reactstrap';


export default function InfoTip({
  setTooltipOpen,
  target,
  tooltipOpen
  })
 {
  const openTooltip = () => setTooltipOpen(!tooltipOpen);
  return (
    <Tooltip
      placement="bottom"
      isOpen={tooltipOpen}
      target={target}
      toggle={openTooltip}>
      Insert date  
      <span>{target === 'startTime' ? ' start ' : ' fin '}</span>
      in format: YY/MM/AAAA
    </Tooltip>
  );
}
