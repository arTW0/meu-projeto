import React, { FormEvent, useState } from "react"
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container, RadioBox, TransactionType } from "./styles"
import { api } from "../../services/api"

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
	const [type, setType] = useState('deposit')
	const [title, setTitle] = useState('')
	const [value, setValue] = useState(0)
	const [categoty, setCategory] = useState('')

	const handleCreateNewTransaction = (event: FormEvent) => {
		event.preventDefault()
		const data = {type, title, value, categoty}

		api.post('/transactions', data)
	}

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

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar Transação</h2>

				<input 
					placeholder="Título"
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>

				<input
					type='number'
					placeholder="Valor"
					value={value}
					onChange={event => setValue(Number(event.target.value))}
				/>

				<TransactionType>
					<RadioBox
						type="button"
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
						activeColor='green'
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
						activeColor='red'
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionType>

				<input
					placeholder="Categoria"
					value={categoty}
					onChange={event => setCategory(event.target.value)}
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