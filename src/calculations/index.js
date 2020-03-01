export const CashFlow = ({ Amount, Other }) => {
    const monthlyIncome = parseInt(Amount) + parseInt(Other)
    return monthlyIncome
}


export const downPayment = (PurchasePrice, downPayment) => {
    return PurchasePrice * downPayment
}

export const summationCalc = (...args) => {

    const total = args
        .map((item) => parseInt(item))
        .reduce((prev, curr) => prev + curr)
    return total
}

export const CashOnCash = (CashFlow, totalCashNeeded) => {
    // annual cashflow / totalcashneeded

    return (CashFlow / totalCashNeeded).toFixed(2)


}


