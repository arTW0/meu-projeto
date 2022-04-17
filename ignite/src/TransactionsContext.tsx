import React, { createContext, useEffect, useState, ReactNode } from "react"
import { api } from "./services/api"

interface Transaction {
	id: number;
	title: string;
	type: string;
	value: number;
	category: string;
	createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		api.get('/transactions')
			.then(response => setTransactions(response.data.transactions))
	}, [])

	const createTransaction = (transaction: TransactionInput) => {
		api.post('/transactions', transaction)
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}> 
			{children}
		</TransactionsContext.Provider>
	)
}