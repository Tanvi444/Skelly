import React from 'react';
import styled from "styled-components";
import webicon from "./../static/webicon.png"
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Container = styled.div`
    display:flex;
    justify-content: space-between;
    height: 60px;
    border-bottom-style: solid;
    border-width: 3px;
    border-color: #ebebeb;
`;

const SubContainer1 = styled.div`
    display:flex;
    width: 200px;
    height: 60px;
    justify-content: space-between;
`;

const SubContainer2 = styled.div`
    display:flex;
    width: 100px;
    height: 60px;
    justify-content: space-between;
`;

const TextContainer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    display: flex;
`;

const P = styled.p`
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
`;
const P1 = styled.p`
    color: #cece1e;
    cursor: pointer;
`;

const Img = styled.img`
    height: 30px;
    margin: 10px;
    margin-top: 8px;
    margin-right: 0;
    cursor: pointer;
`;

const Icon1 = styled(AiOutlineUser)`
    padding-top: 15px;
    padding-right: 10px;
    height: 25px;
    width : 25px;
    cursor: pointer;
`;

const Icon2 = styled(AiOutlineShoppingCart)`
    padding-right: 10px;
    padding-top: 15px;
    height: 25px;
    width : 25px;
    cursor: pointer;
`;

const Icon3 = styled(AiOutlineSearch)`
    padding-top: 15px;
    padding-right: 40px;    
    height: 25px;
    width : 25px;
    cursor: pointer;
`;

function Header(){
    return (
        <Container>
            <SubContainer2>
                <Img src={webicon} alt="" />
                <TextContainer>
                    <P1>E-</P1>
                    <p>Shop</p>
                </TextContainer>
                
            </SubContainer2>

            <SubContainer1>
                <P>Men</P>
                <P>Women</P>
                <P>kids</P>
            </SubContainer1>

            <SubContainer1>
                <Icon1 />
                <Icon2 />
                <Icon3 />
            </SubContainer1>
        </Container>
    );
}
export default Header;