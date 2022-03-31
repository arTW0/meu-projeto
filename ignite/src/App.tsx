import React, { Component, useState }  from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransaction";

Modal.setAppElement('#root')

export const App = () => {
	const [
		isNewTransactionModal, setIsNewTransactionModal
	] = useState(false)

	const handleNewTransactionModalOpen = () => {
		setIsNewTransactionModal(true)
	}

	const handleNewTransactionModalClose = () => {
		setIsNewTransactionModal(false)
	}
	
	return (
		<>
			<Header onOpenNewTransactionModal={
				handleNewTransactionModalOpen
			}/>
			<Dashboard />
			<NewTransactionModal
				isOpen={isNewTransactionModal}
				onRequestClose={handleNewTransactionModalClose}
			/>
			<GlobalStyle />
		</>
	);
}
