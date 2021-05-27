import moment from 'moment'

export const DATE_FORMAT = 'YYYY-MM-DD'

export const dateFormat = (date, format = DATE_FORMAT) => {
  if (!date) {
    return
  }
  return moment(date).format(format)
}
