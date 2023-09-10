import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create()(
  devtools((set) => ({
    startTime: 'NOW - 3days',
    endTime: '',
    numOfDays: '3 Days',
    setStartTime: (startTime) => set((state) => ({ ...state, startTime })),
    setEndTime: (endTime) => set((state) => ({ ...state, endTime })),
    setNumOfDays: (numOfDays) => set((state) => ({ ...state, numOfDays }))
  }))
);

export default useStore;
