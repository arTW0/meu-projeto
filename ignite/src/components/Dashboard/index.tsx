import React, { Component }  from 'react';
import { Container } from "./styles"
import { Summary } from '../Summary';
import { TansactionsTable } from '../TransactionsTable';

export const Dashboard = () => {
	return (
		<Container>
			<Summary />
			<TansactionsTable />
		</Container>
	)
}