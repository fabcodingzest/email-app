export function formatDate(date: number): string {
  const dateFormat = new Date(date)
  let month: string | number = dateFormat.getMonth() + 1
  let hr = dateFormat.getHours()
  let min: string | number = dateFormat.getMinutes()
  if (month < 10) {
    month = '0' + `${month}`
  }
  if (min < 10) {
    min = '0' + `${min}`
  }
  let ampm = 'am'
  if (hr > 12) {
    hr -= 12
    ampm = 'pm'
  }
  return `${dateFormat.getDate()}/${month}/${dateFormat.getFullYear()} ${hr}:${min}${ampm}`
}
