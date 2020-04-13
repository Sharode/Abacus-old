import React from 'react'
// import { ErrorMessage } from './ErrorMessage'

export const FormSection = ({ values, fields, handleChange, parameter, step }) => {
    return (
        <div className="mb-6">
            <div className="min-h-24 bg-white shadow-md rounded px-8 py-6 sm:px-16 sm:py-12">
                {fields.map((obj) => {
                    const { name } = obj
                    return (
                        <div key={name} className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={name}>
                                    {obj.label}
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    name={name}
                                    className="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    type={obj.type}
                                    placeholder={obj.placeholder}
                                    onChange={(e) => handleChange(e, parameter)}
                                    value={values[name]}
                                />
                                {/* <ErrorMessage
                                    name={name}
                                // error={}
                                /> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
