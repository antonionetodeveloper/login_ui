import { useState } from "react";
import { Link } from "react-router-dom";

import svg from "./svg.svg"
import { Container } from "./styles";
import { Button } from "../../Components/button";

export const Login = () => {
	const [login, setLogin] = useState()
	const [pass, setPass] = useState()
  // "login" e "pass" são os valores de login, para uma possível altenticação.

  return (
    <Container>
      <div>
        <div>
          <h1>Entrar</h1>
          <form onSubmit={() => {alert(`o site só tem o propósito de mostrar a parte visual, e não de ser funcional. Suas informações não serão guardadas em nenhum lugar, Não se preocupe.`)}}>
            <input placeholder="Email" type="email"    onChange={(props) => setLogin(props.target.value)}/>
            <input placeholder="Senha" type="password" onChange={(props) => setPass(props.target.value)} />
            <Button text="Entrar"/>
          </form>
          <p>Ainda não tem? <Link to={"/cadastro"}>Crie uma conta</Link></p>
        </div>
        <img src={svg} alt="sucesso"/>
      </div>
      <footer><a href="https://storyset.com/worker">Worker illustrations by Storyset</a></footer>
    </Container>
  );

}