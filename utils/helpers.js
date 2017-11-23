import moment from 'moment';

export function currentDate () {
  return moment().format('DDMMYYYY');
}