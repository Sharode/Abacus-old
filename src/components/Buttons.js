import React from 'react'



export const Continue = ({ handleClick }) => {
    return (
        <div className="flex items-center justify-end mt-4">
            <div className="">
                <button
                    type="button"

                    // disabled={isSubmitting}
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    onClick={handleClick}
                >
                    continue
                </button>
            </div>
        </div>
    )
}

export const Back = ({ handleClick }) => {
    return (
        <div className="flex items-center justify-end mt-4">
            <div className="">
                <button
                    onClick={handleClick}
                    type="button"
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                >
                    Back
            </button>
            </div>
        </div>
    )
}

export const Submit = ({ handleClick }) => {
    return (
        <div className="flex items-center justify-end mt-4">
            <div className="">
                <button
                    onClick={handleClick}
                    type="submit"
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                >
                    Submit
            </button>
            </div>
        </div>
    )

}