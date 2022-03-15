import React, { Component }  from 'react';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";


export const App = () => {
	return (
		<>
			<Header />
			<GlobalStyle />
		</>
	);
}
