import React, { useState } from 'react'
import { FIELDS } from '../constants/index'
import { FormSection } from './FormSection'
import { Results } from './Results'
import { Continue, Back, Submit } from './Buttons'
import { NavForm } from './NavForm'
import { useSetBuyAndHoldResultsContext } from '../context'

import { summationCalc, CashOnCash } from '../calculations'


export const Form = () => {

    const setResults = useSetBuyAndHoldResultsContext()

    const [property, setProperty] = useState({
        Address: '',
        City: '',
        State: '',
    })
    const [income, setIncome] = useState({
        Amount: 0,
        Other: 0,
    })
    const [repairs, setRepairs] = useState({
        Amount: 0,
        Valuation: 0,
    })
    const [expenses, setExpenses] = useState({
        Vacancy: 0,
        CapEx: 0,
        Maintenance: 0,
        Management: 0,
        Electricity: 0,
        WaterSewer: 0,
        Trash: 0,
        HOA: 0,
        HomeInsurance: 0,
        PropertyTaxes: 0,
    })
    const [financing, setFinancing] = useState({
        PurchasePrice: 0,
        Amount: 0,
        TermYears: 0,
        DownPaymentRate: 0,
        InterestRate: 0,
        MortgageInsurance: 0,
        Points: 0,
        ClosingCosts: 0,
    })

    const [step, setStep] = useState(1)

    const formDetails = { income, repairs, financing, property, expenses }

    const nextStep = () => {
        if (step <= 5) {
            setStep(prev => prev + 1)
        }
    }

    const previousStep = () => {
        if (step !== 1) {
            setStep(prev => prev - 1)
        }
    }

    const handleChange = (e, parameter) => {
        e.preventDefault()
        switch (parameter) {
            case 'property':
                setProperty({ ...property, [e.target.name]: e.target.value })
                break
            case 'income':
                setIncome({ ...income, [e.target.name]: e.target.value })
                break
            case 'repairs':
                setRepairs({ ...repairs, [e.target.name]: e.target.value })
                break
            case 'expenses':
                setExpenses({ ...expenses, [e.target.name]: e.target.value })
                break
            case 'financing':
                setFinancing({ ...financing, [e.target.name]: e.target.value })
                break
            default:
                throw new Error()
        }
    }

    const runCalculations = () => {

        const totalCashNeeded = summationCalc(repairs.Amount, financing.PurchasePrice, financing.ClosingCosts)

        const { Vacancy, CapEx, Maintenance, Management, Electricity, WaterSewer, Trash, HOA, HomeInsurance, PropertyTaxes } = expenses

        const monthlyExpenses = summationCalc(Vacancy, CapEx, Maintenance, Management, Electricity, WaterSewer, Trash, HOA, HomeInsurance, PropertyTaxes)

        const AnnualExpenses = monthlyExpenses * 12

        const monthlyIncome = summationCalc(income.Amount, income.Other)

        const AnnualIncome = monthlyIncome * 12

        const monthlyCashFlow = monthlyIncome - monthlyExpenses
        const NetOperatingIncome = AnnualIncome - AnnualExpenses

        const CashOnCashReturn = CashOnCash(NetOperatingIncome, totalCashNeeded)

        const calculations = { NetOperatingIncome, AnnualExpenses, AnnualIncome, CashOnCashReturn, monthlyCashFlow, monthlyExpenses, monthlyIncome, totalCashNeeded }

        setResults({ formDetails, calculations })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runCalculations()
        setStep(6)

    }

    const NavClick = (e) => {
        const { id } = e.target
        // eslint-disable-next-line
        if (step == id) return null
        setStep(parseInt(id))
    }

    const fieldVal = step === 1 ? 'property' : step === 2 ? 'financing' : step === 3 ? 'expenses' : step === 4 ? 'repairs' : step === 5 ? 'income' : null

    return (
        <div>
            {step === 6 ? null : (
                <div>
                    <NavForm handleClick={NavClick} />
                    <form onSubmit={(e) => handleSubmit(e)}>

                        <div>
                            <FormSection
                                nextStep={nextStep}
                                previousStep={previousStep}
                                handleChange={handleChange}
                                values={formDetails[fieldVal]}
                                parameter={fieldVal}
                                fields={FIELDS[fieldVal]}
                            />
                            <div className="flex justify-around">
                                {step !== 1 && <Back handleClick={previousStep} />}
                                {step <= 4 && <Continue handleClick={nextStep} />}
                                {step === 5 && <Submit handleClick={handleSubmit} />}

                            </div>
                        </div>
                    </form>
                </div>)
            }
            {step !== 6 ? null :
                <Results />
            }
        </div>

    )
}



