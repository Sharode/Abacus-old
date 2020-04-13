import React from 'react'

export const Title = ({ value, tag }) => {
    return (
        <div className="m-2">
            <p className="text-lg font-light">
                {value}
            </p>
            <p className="text-lg font-bold">
                {tag}
            </p>
        </div>


    )
}

export const FormDetails = ({ value, tag }) => {
    return (
        <div className="flex justify-between">
            <p className="text-base font-light">
                {tag}
            </p>
            <p className="text-base font-bold">
                {value}
            </p>

        </div>
    )
}


// export const TitleAmount = ({ value }) => {
//     return (
//         <p className="text-xl font-light">
//             {value}
//         </p>
//     )
// }
