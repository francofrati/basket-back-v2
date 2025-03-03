import * as dayjs from 'dayjs'

export const formatDate = (date: string, dayjsFormat: string) => {
    return dayjs(date).format(dayjsFormat)
}