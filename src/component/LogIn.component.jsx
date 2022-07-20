import styled from "styled-components";

const SignContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    color: #bbb5b5;
    margin-top: 20px;
    padding-left: 10px;
    height: 40px;
    width: 200px;
    border-style: solid;
    border-color: #adadad;
    border-width: 1px;
    border-radius: 40px; 
`;

function Login() {
    return (
        <SignContainer>
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Password" />
        </SignContainer>
    );
}

export default Login;