import React from 'react'

export const Results = ({ values }) => {
    console.log(values)
    return (
        <div>
            {JSON.stringify(values, null, 3)}
        </div>

    )
}
