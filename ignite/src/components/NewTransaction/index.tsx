import React, { useState } from "react"
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container, RadioBox, TransactionType } from "./styles"

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
	const [typeDeposit, setTypeDeposit] = useState('deposit')

	return (
		<Modal 
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button 
				type="button" 
				onClick={onRequestClose}
				className= "react-modal-close"
			>
				<img src={closeImg} alt="Fechar modal" />
			</button>

			<Container>
				<h2>Cadastrar Transação</h2>

				<input 
					placeholder="Título"
				/>

				<input
					type='number'
					placeholder="Valor"
				/>

				<TransactionType>
					<RadioBox
						type="button"
						onClick={() => setTypeDeposit('deposit')}
						isActive={typeDeposit === 'deposit'}
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => setTypeDeposit('withdraw')}
						isActive={typeDeposit === 'withdraw'}
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionType>

				<input
					placeholder="Categoria"
				/>

				<button
					type="submit"
				> 
          Cadastrar 
				</button>
			</Container>

		</Modal>
	)
}