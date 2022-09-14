import { getLocalTimeZone } from "../../core/functions";

export namespace TVADate {
  export const getCurrentDate = () => {
    return new Date().getTime()
  }

  export const getCurrentTimeZone = () => {
    return getLocalTimeZone()
  }
}