import React, { useState } from 'react'
import { FIELDS } from '../constants/index'
import { FormSection } from './FormSection'
import { Results } from './Results'
import { Continue, Back } from './Buttons'


export const Form = () => {

    const [state, setState] = useState({
        property: {
            Address: '',
            City: '',
            State: '',
        },

        financing: {
            PurchasePrice: 0,
            Amount: 0,
            TermYears: 0,
            DownPaymentRate: 0,
            InterestRate: 0,
            MortgageInsurance: 0,
            Points: 0,
            ClosingCosts: 0,
        },

        repairs: {
            Amount: 0,
            Valuation: 0,
        },

        income: {
            Amount: 0,
            Other: 0,
        },

        expenses: {
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
        }
    })
    const [step, setStep] = useState(1)


    const nextStep = () => {
        setStep(prev => prev + 1)
    }

    const previousStep = () => {
        if (step !== 1) {
            setStep(prev => prev - 1)
        }

    }
    // wrong syntax use (input ) => (E)
    const handleChange = (input, e) => {
        setState(prevState => {
            return {
                prevState,
                [input]: e.target.value
            }
        })
    }

    switch (step) {
        case 1:
            return (
                <div>
                    <FormSection
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={state.property}
                        fields={FIELDS.property}
                    />
                    <div>
                        <Back handleClick={previousStep} />
                        <Continue handleClick={nextStep} />
                    </div>

                </div>

            );
        case 2:
            return (
                <div>
                    <FormSection
                        nextStep={nextStep}
                        handleChange={handleChange}
                        previousStep={previousStep}
                        values={state.financing}
                        fields={FIELDS.financing}
                    />
                    <div>
                        <Back handleClick={previousStep} />
                        <Continue handleClick={nextStep} />
                    </div>
                </div>

            );
        case 3:
            return (
                <div>
                    <FormSection
                        nextStep={nextStep}
                        previousStep={previousStep}
                        values={state.expenses}
                        fields={FIELDS.expenses}

                    />
                    <div>
                        <Back handleClick={previousStep} />
                        <Continue handleClick={nextStep} />
                    </div>
                </div>
            );

        case 4:
            return (
                <div>
                    <FormSection
                        nextStep={nextStep}
                        previousStep={previousStep}
                        values={state.repairs}
                        fields={FIELDS.repairs}

                    />
                    <div>
                        <Back handleClick={previousStep} />
                        <Continue handleClick={nextStep} />
                    </div>
                </div>
            );
        case 5:
            return (
                <div>
                    <FormSection
                        nextStep={nextStep}
                        previousStep={previousStep}
                        values={state.income}
                        fields={FIELDS.income}
                    />
                    <div>
                        <Back handleClick={previousStep} />
                        <Continue handleClick={nextStep} />
                    </div>
                </div>
            );
        case 6:
            return (
                <Results
                    values={state}
                />
            );
        default:
    }

    return (
        <div>

        </div>
    )
}
