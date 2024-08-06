export const NameSpace = {
    TODO_CARDS: "TODO_CARDS",
} as const

type MonthEnum <T> = {
    [key: string]: T
}

export const Months: MonthEnum<string> = {
    January: 'Январь',
    February: 'Февраль',
    March: 'Март',
    April: 'Апрель',
    May: 'Май',
    June: 'Июнь',
    July: 'Июль',
    August: 'Август',
    September: 'Сентябрь',
    October: 'Октябрь',
    November: 'Ноябрь',
    December: 'Декабрь'
}

export enum DayOfWeek {
    Monday = "MO",
    Tuesday = "TU",
    Wednesday = "WE",
    Thursday = "TH",
    Friday = "FR",
    Saturday = "SA",
    Sunday = "SU",
}

interface DaysWeek <T> {
    [key: number]: T
}
export const DayOfWeekNumber: DaysWeek<string> = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",

}
