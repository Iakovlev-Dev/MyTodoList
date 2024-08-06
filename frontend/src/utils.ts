import {Months} from "./const";

export function getAmountDays (month: string | null, year: string) {
    switch (month) {
        case Months.February:
            if((+year) % 4 === 0) {
                return 29
            }
            return 28
        case Months.January:
        case Months.March:
        case Months.May:
        case Months.July:
        case Months.August:
        case Months.October:
        case Months.December:
            return 31
        case Months.April:
        case Months.June:
        case Months.September:
        case Months.November:
            return 30
        default:
            return 0
    }
}

export function getDate (day: string, month: string, year: string): string {
    if (month === Months.March || month === Months.August) {
        month = month + 'а'
    } else {
        month = month.slice(0, -1) + 'я'
    }
    return day + ' ' + month + ' ' + year
}

export const getNumberMonth = (month: string) => {
    return Object.values(Months).indexOf(month)
}
