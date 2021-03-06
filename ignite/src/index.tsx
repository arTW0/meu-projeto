import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model, Server } from 'miragejs'
import { App } from './App'

createServer ({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Desenvolvimento de website',
					type: 'deposit',
					category: 'Desenvolvimento',
					value: 1200,
					createdAt: new Date('2022-02-20 11:00:00'),
				},

				{
					id: 2,
					title: 'Aluguel',
					type: 'withdraw',
					category: 'Casa',
					value: 1100,
					createdAt: new Date('2022-02-22 00:00:00'),
				}
			],
		})
	},

	routes () {
		this.namespace = 'api'

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody)

			return schema.create('transaction', data)
		})

		this.get('/transactions', () => {
			return this.schema.all('transaction')
		})
	}
})

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
