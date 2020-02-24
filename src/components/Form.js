import React, { useState, Fragment } from 'react'
import { FIELDS } from '../constants/index'
import { FormSection } from './FormSection'
import { Results } from './Results'
import { Continue, Back, Submit } from './Buttons'



export const Form = () => {

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

    const results = { income, repairs, financing, property, expenses }


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

    const handleChange = (e, para) => {
        e.preventDefault()
        switch (para) {
            case 'property':
                setProperty({ ...property, [e.target.name]: e.target.value })
                break
            case 'income':
                console.log(e.target.name)
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
        }


    }

    const handleSubmit = (e) => {
        setStep(6)
        e.preventDefault()
        console.log(results)
    }



    const fieldVal = step === 1 ? 'property' : step === 2 ? 'financing' : step === 3 ? 'expenses' : step === 4 ? 'repairs' : step === 5 ? 'income' : null

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {step === 6 ? null : (
                <div>
                    <FormSection
                        nextStep={nextStep}
                        previousStep={previousStep}
                        handleChange={handleChange}
                        values={results[fieldVal]}
                        parameter={fieldVal}
                        fields={FIELDS[fieldVal]}
                    />
                    <div>
                        {step !== 1 && <Back handleClick={previousStep} />}
                        {step <= 4 && <Continue handleClick={nextStep} />}
                        {step === 5 && <Submit handleClick={handleSubmit} />}

                    </div>
                </div>)
            }

            {step !== 6 ? null :
                <Results values={results} />
            }

        </form>

    )
}
