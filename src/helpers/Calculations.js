export const CashFlow = ({ Amount, Other }) => {
    const monthlyIncome = parseInt(Amount) + parseInt(Other)
    return monthlyIncome
}

