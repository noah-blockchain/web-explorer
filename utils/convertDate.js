function getCalendarDate(dateString) {
  const date = new Date(dateString)

  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (month < 10) month = `0${month}`
  if (day < 10) day = `0${day}`

  return `${year}-${month}-${day}`
}

function getDateWithTime(dateString) {
  const date = new Date(dateString)
  const calendarDate = getCalendarDate(dateString)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${calendarDate} ${hours}:${minutes}:${seconds}`
}

function convertDate(dateString, options = {}) {
  switch (options.format) {
    default:
      return getDateWithTime(dateString)
  }
}

export default convertDate
