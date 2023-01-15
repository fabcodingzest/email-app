export function formatDate(date: number): string {
  const dateFormat = new Date(date)
  let hr = dateFormat.getHours()
  let min: string | number = dateFormat.getMinutes()
  if (min < 10) {
    min = '0' + `${min}`
  }
  let ampm = 'am'
  if (hr > 12) {
    hr -= 12
    ampm = 'pm'
  }
  return `${dateFormat.getDate()}/${
    dateFormat.getMonth() + 1
  }/${dateFormat.getFullYear()} ${hr}:${min}${ampm}`
}