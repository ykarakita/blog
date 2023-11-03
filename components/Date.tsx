import { format, parseISO } from 'date-fns'

export const Date = (dateString: string): string => {
  const date = parseISO(dateString)
  return format(date, 'yyyy-MM-dd')
}
