export enum HoldStatuses {
    HOLD = 'hold',
    REFUSED = 'refused',
    CONFIRMED = 'confirmed'
}

export type HoldInfo = {
    status: HoldStatuses,
    price: {
        offer: number,
        paid: number,
        salary: number
    },
    phone: string,
    broker: string,
    datedAt: Date,
    dateString: string
}

export interface HoldsInfo {
    date: string,
    countHold: number,
    sumHold: number,
    brokerSalary: number,
    bonuses: number,
    sumPay: number,
    sumOffer: number
}

export type HoldsTableResponse = {
    tableData: HoldsInfo[]
}
