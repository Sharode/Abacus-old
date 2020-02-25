import React from 'react'


const BtnClass = `bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold`


export const NavForm = ({ handleClick }) => {

    return (
        <nav>
            <ul className="flex border-b">
                <li className="-mb-px mr-1">
                    <button
                        id="1"
                        onClick={(e) => handleClick(e)}
                        className={BtnClass} href="#">Property</button>
                </li>
                <li className="mr-1">
                    <button
                        id="2"
                        onClick={(e) => handleClick(e)}
                        className={BtnClass} href="#">Financing</button>
                </li>
                <li className="mr-1">
                    <button
                        id="3"
                        onClick={(e) => handleClick(e)}
                        className={BtnClass} href="#">Expenses</button>
                </li>
                <li className="mr-1">
                    <button
                        id="4"
                        onClick={(e) => handleClick(e)}
                        className={BtnClass} href="#">Repairs</button>
                </li>
                <li className="mr-1">
                    <button
                        id="5"
                        onClick={(e) => handleClick(e)}
                        className={BtnClass} href="#">Income</button>
                </li>
            </ul>
        </nav>
    )

}