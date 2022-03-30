import React, { Component, useState }  from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export const App = () => {
	const [
		isNewTransactionModal, 
		setIsNewTransactionModal
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
			<Modal 
				isOpen={isNewTransactionModal}
				onRequestClose={handleNewTransactionModalClose}
			>
				<h2>Cadastrar Transação</h2>
			</Modal>
			<GlobalStyle />
		</>
	);
}
