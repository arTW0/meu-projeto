import React from "react"
import { Container } from "./styles"

export const TansactionsTable = () => {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Desenvolvimento de website</td>
						<td className="deposit">R$1200,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2022</td>
					</tr>
					<tr>
						<td>Aluguel</td>
						<td className="withdraw">- R$1100,00</td>
						<td>Casa</td>
						<td>22/02/2022</td>
					</tr>
					{/* <tr>
						<td>Desenvolvimento de website</td>
						<td className="withdraw">R$1200,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2022</td>
					</tr> */}
				</tbody>
			</table>
		</Container>
	)
}