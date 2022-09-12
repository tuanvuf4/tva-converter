namespace NumberConverter {

  export interface DateTime {
    currentDate: number;
  }

  export const getCurrentDate = () => {
    return new Date().getTime()
  }
  
}