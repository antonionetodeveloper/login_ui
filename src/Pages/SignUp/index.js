import { useState } from "react"
import { Link } from "react-router-dom"

import { Container } from "./styles"
import svg from "./svg.svg"
import { Button } from "../../Components/button"

export const SignUp = () => {
	const [newName, setNewName] = useState()
	const [newLogin, setNewLogin] = useState()
	const [newPass, setNewPass] = useState()
	// "newName", "newLogin" e "newPass" são valores reais, que podem passar pela validação/criação de um novo usuário.

	return(
		<Container>
			<div>
				<img src={svg} alt="Cadastrar"/>
				<div>
					<h1>Cadastrar</h1>
					<form onSubmit={() => {alert(`o site só tem o propósito de mostrar a parte visual, e não de ser funcional. Suas informações não serão guardadas em nenhum lugar, Não se preocupe.`)}}>
						<input placeholder="Nome"  type="user"     onChange={(props) => setNewName (props.target.value)}/>
						<input placeholder="Email" type="email"    onChange={(props) => setNewLogin(props.target.value)}/>
						<input placeholder="Senha" type="password" onChange={(props) => setNewPass (props.target.value)}/>
						<Button text="Cadastrar"/>
					</form>
					<Link to={"/"}>Já tenho uma conta</Link>
				</div>
			</div>
			<footer><a href="https://storyset.com/people">People illustrations by Storyset</a></footer>	
		</Container>
	)
}