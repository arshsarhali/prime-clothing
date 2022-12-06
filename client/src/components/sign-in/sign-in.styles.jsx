import styled from 'styled-components'

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 800px) {
		width: 90vw;
		display: block;
		padding: 20px;
		margin: auto;
		border-style: solid;
	}
`

export const TestUsr = styled.div`
	margin-top: 10px;
`

export const TestCred = styled.div`
	color: red;
	font-size: 20px;
`
