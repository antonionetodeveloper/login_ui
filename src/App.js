import styled from "styled-components";
import svg from "./svg.svg"

import { Button } from "./Components/button";

export const App = () => {
  return (
    <Container>
      <div>
        <div>
          <h1>Entrar</h1>
          <form onSubmit={() => {}}>
            <input placeholder="Email" type="email"/>
            <input placeholder="Senha" type="password"/>
            <Button text="Entrar"/>
          </form>
          <p>Ainda não tem? <a href="/">Crie uma conta</a></p>
        </div>
 
        <img src={svg} alt="sucesso"/>
      </div>

      <footer><a href="https://storyset.com/worker">Worker illustrations by Storyset</a></footer>
    </Container>
  );

}

const Container = styled.div`
  &{
    background-color: #eff2ff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    div{
      display: flex;
      align-items: center;
      margin: auto;
      gap: 10vw;
      
      div{
        display: flex;
        background-color: #ecf0f3;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 40vw;
        height: 60vh;
        box-shadow: 10px 9px 15px rgba(0, 0, 0, 0.2), -18px -19px 16px rgba(255 ,255, 255, 0.6);
        border-radius: 2vw;
        padding: 0vw 1vw 5vw 1vw;
        gap: 0;


        h1{
          font-weight: 700;
          font-size: 3vw;
        }

        p{
          font-style: italic;
          font-weight: 300;
          a{
            color: #234567;
          }
        }

        form{
          display: flex;
          flex-direction: column;
          gap: 2vw;

          input{
            border: 0px;
            padding: 1vw 2vw 1vw 2vw;
            width: 20vw;
            border-radius: 1vw;
            font-family: "Montserrat";
            box-shadow: 0 0 0 0;
            outline: 0;
            background-color: #ecf0f3;
            box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
            
            :focus{
              box-shadow: inset 0 0 0.5em rgba(209, 217, 230, 1);
            }
          }
        }
        
      }

      img{
        width: 30vw;
      }
    }

    footer{
      text-align: end;
      a{
        margin-right: 2vw;
        position: relative;
        bottom: 2vw;
        color: #1495FD;
      }
    }
  }
`;
