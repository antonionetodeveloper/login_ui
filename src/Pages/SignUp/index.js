import { Link } from "react-router-dom"

import { Container } from "./styles"
import svg from "./svg.svg"
import { Button } from "../../Components/button"

export const SignUp = () => {
	return(
		<Container>
			<div>
				<img src={svg} alt="Cadastrar"/>
				<div>
					<h1>Cadastrar</h1>
					<form onSubmit={() => {alert(`o site só tem o propósito de mostrar a parte visual, e não de ser funcional. Suas informações não serão guardadas em nenhum lugar, Não se preocupe.`)}}>
						<input placeholder="Nome"  type="user"    />
						<input placeholder="Email" type="email"   />
						<input placeholder="Senha" type="password"/>
						<Button text="Cadastrar"/>
					</form>
					<Link to={"/"}>Já tenho uma conta</Link>
				</div>
			</div>
			<footer><a href="https://storyset.com/people">People illustrations by Storyset</a></footer>	
		</Container>
	)
}