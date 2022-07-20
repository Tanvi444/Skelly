import React, { useState } from 'react';
import styled from "styled-components";
import SignIn from './SignIn.component';
import Login from './LogIn.component';
import SubHeader from './SubHeader.component';
import Payment from './Payment.component';
import Cart from './Cart.component';
import Footer from './Footer.component';

const Container = styled.div`
    width: 100%;
`;

const HeaderContainer = styled.div`
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 50px;
    height: 60px;
    justify-content: space-between;
`;

const DataContainer = styled.div`
    display: flexbox;
    padding-left: 40px;
    padding-right: 40px;
`;

const LoginContainer = styled.div`
    width: 40%;
`;

const SignLogContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    margin-top: 20px;
`;

const ButtonContainer1 = styled.div`
    :hover{
       background-color: honeydew;
       color: grey;
    }
    height: 30px;
    width: 80px;
    padding:10px;
    padding-top: 8px;
    padding-bottom: 0px;
    background-color: green;
    border-style: solid;
    border-color: green;
    border-width: 2px;
    border-radius: 40px;
    color: white;
    cursor: pointer;
`;

const ButtonContainer2 = styled.div`
    :hover{
       background-color: honeydew;
       border-color: green;
    }
    height: 30px;
    width: 80px;
    padding:10px;
    padding-top: 8px;
    padding-bottom: 0px;
    border-style: solid;
    border-color: #adadad;
    border-width: 1px;
    border-radius: 40px;    
    cursor: pointer;
`;

const P1 = styled.p`
    margin:0;
`;

const P2 = styled.p`
    margin-top:50px;
    width: max-content;
    
`;

function Body() {
    const [login, setLogin] = useState(true);

    return (
        <Container>
            <HeaderContainer />
            <SubHeader />
            <DataContainer>
                <LoginContainer>
                    <SignLogContainer>
                        <ButtonContainer1 onClick={() => { setLogin(true) }}>
                            <P1>LOG IN</P1>
                        </ButtonContainer1>
                        <ButtonContainer2 onClick={() => { setLogin(false) }}>
                            <P1>SIGN UP</P1>
                        </ButtonContainer2>
                    </SignLogContainer>
                    <P2>Shipping Information</P2>
                    {login ?
                        <Login />
                        :
                        <SignIn />
                    }
                </LoginContainer>

                <Payment />
                <Cart />
            </DataContainer>
            <Footer />
        </Container>
    );
}

export default Body;