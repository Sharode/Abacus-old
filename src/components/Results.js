import React from 'react'
import { useBuyAndHoldResultsContext } from '../context'
import { Title, FormDetails } from '../elements'

export const Results = () => {
    const { formDetails, calculations } = useBuyAndHoldResultsContext()
    console.log(formDetails, calculations)

    return (
        <div className="flex flex-col">
            <div>
                fvklfnvs
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-11/12 mr-3 pr-4 mx-auto md:w-1/3">
                    <h1>Form details</h1>

                    <FormDetails value={formDetails.financing.PurchasePrice} tag="Purchase Price" />
                    <FormDetails value={formDetails.financing.ClosingCost} tag="Purchase Closing Cost" />
                    <FormDetails value={formDetails.financing.PurchasePrice} tag="Estimated Repairs" />
                    <FormDetails value={formDetails.financing.PurchasePrice} tag="Total Project Cost" />
                    <FormDetails value={formDetails.financing.PurchasePrice} tag="After Repair Value" />

                    <br />

                    <FormDetails value={formDetails.financing.PurchasePrice} tag="Down Payment" />
                    <FormDetails value={formDetails.financing.PurchasePrice} tag="Loan Amount" />
                    <FormDetails value={formDetails.financing.PurchasePrice} tag="Loan Points" />
                    <FormDetails value={formDetails.financing.PurchasePrice} tag="Amortized Over" />
                    <FormDetails value={formDetails.financing.PurchasePrice} tag="Loan Interest Rate" />
                    <FormDetails value={formDetails.financing.PurchasePrice} tag="Monthly P&I" />

                </div>

                <div className="w-11/12 flex flex-col mx-auto md:w-2/3">

                    <div className="flex flex-row">
                        <div className="">
                            <Title value={calculations.monthlyIncome} tag="Monthly Expenses" />
                            <Title value={calculations.monthlyExpenses} tag="Monthly Income" />


                            <Title value={calculations.monthlyCashFlow} tag="Monthly Cash Flow" />

                        </div>
                        <div className="">
                            <Title value={calculations.NetOperatingIncome} tag="Total Cash Needed" />

                            <Title value={calculations.totalCashNeeded} tag="NOI" />
                            <Title value={calculations.CashOnCashReturn} tag="Cash on Cash Return" />

                        </div>
                    </div>




                    <div className="">
                        pie chart calculations
                     </div>
                </div>
            </div>

        </div>


    )
}
