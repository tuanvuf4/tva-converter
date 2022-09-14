import { getLocalTimeZone } from '../../core/functions';

export class TVADate {
  static getCurrentDate() {
    return new Date().getTime();
  }

  static getCurrentTimeZone() {
    return getLocalTimeZone();
  }
}
