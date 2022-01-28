import styled from "styled-components";

export const Container = styled.div`

	&{
		background-color: #eff2ff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		
		div{
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: auto;

			img{
				width: 40vw;
			}

			div{
				background-color: #ecf0f3;
				width: 30vw;
				height: 30vw;
				border-radius: 2vw;
				box-shadow: 10px 9px 15px rgba(0, 0, 0, 0.2), -18px -19px 16px rgba(255 ,255, 255, 0.6);
				padding: 0vw 1vw 5vw 1vw;

				display: flex;
				flex-direction: column;	
				justify-content: center;
				
				form{
					display: flex;
					flex-direction: column;
					gap: 1vw;

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
				a{
					font-style: italic;
					font-weight: 300;
					color: #234567;
					margin-top: 1vw;
				}
			}
		}
		footer{
			background-color: #eff2ff;
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