import { getLocalTimeZone } from '../../core/functions';

export class TVADate {
  getCurrentDate() {
    return new Date().getTime();
  }

  getCurrentTimeZone() {
    return getLocalTimeZone();
  }

  getSeconds() {
    return new Date().getSeconds()
  }
}
