const DAILY_OFFICE_COSTS: number = 4000
const HOLD_MULTIPLIER: number = 2
const COEFFICIENT_RATE: number = 0.6

function calculateBrokerSalary(sumSalary: number, sumBonuses: number, sumPay: number): number {
    const result: number = Math.round(sumSalary * HOLD_MULTIPLIER * COEFFICIENT_RATE) + sumBonuses + sumPay + DAILY_OFFICE_COSTS
    return result
}
