import React, { useState, useContext, createContext } from 'react';

const BuyAndHoldResultsContext = createContext(null);
const SetBuyAndHoldResultsContext = createContext(null);

export const useBuyAndHoldResultsContext = () => {
	const results = useContext(BuyAndHoldResultsContext);
	if (!results) throw new Error('Used outside of the Results context');

	return results;
};

export const useSetBuyAndHoldResultsContext = () => {
	const setResults = useContext(SetBuyAndHoldResultsContext);

	if (!setResults) throw new Error('Used outside of the setREsults context');

	return setResults;
};

export const Controller = ({ children }) => {
	const [ results, setResults ] = useState({});

	return (
		<BuyAndHoldResultsContext.Provider value={results}>
			<SetBuyAndHoldResultsContext.Provider value={setResults}>{children}</SetBuyAndHoldResultsContext.Provider>
		</BuyAndHoldResultsContext.Provider>
	);
};
