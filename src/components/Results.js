import React from 'react'

export const Results = (values, calculations) => {
    // const { income, repairs, financing, property, expenses } = values.values
    console.log(values, calculations)
    return (

        <div className="flex justify-around">
            <div>
                {/* <h1>{financing.PurchasePrice === 0 ? '480000' : financing.PurchasePrice}</h1> */}
                <h2>Purchase Price</h2>
            </div>

            <div className="flex flex-col">
                <div className="">
                    <h1>Calculations</h1>
                </div>
                <div className="">
                    pie chart calculations
                        </div>


            </div>
        </div>


    )
}
