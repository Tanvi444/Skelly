import styled from "styled-components";
import { MdOutlineLocalShipping } from "react-icons/md";

const Container = styled.div`
    padding-left: 100px;
`;

const CartItem = styled.div`
    margin-top: 40px;
    display: flex;
`;

const ItemName = styled.div`
    margin-right: 100px;
    width: 150px;
`;

const ImgView = styled.div`
    height: 80px;
    width: 60px;
    border-radius: 50px;
    margin-right:40px;
`;

const GreyContainer = styled.div`
    margin-top: 50px;
    margin-bottom:50px;
    margin-left:50px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #BBBBBB;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 300px;
`;

const LastContainer = styled.div`
    margin-top: 50px;
    margin-bottom:50px;
    margin-left:50px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    width: 300px;
`;

const Img = styled.img`
    height: inherit;
`;

const P = styled.p`
    margin:0;
    font-size: large;
    font-weight: 400;
    text-align: left;
`;

const P2 = styled.p`
    margin:0;
    color: grey;
    margin-top:10px;
    font-size: small;
    font-weight: 400;
    text-align: left;
`;

const Icon = styled(MdOutlineLocalShipping)`
    height: 30px;
    width : 30px;
    margin-right: 40px;
    margin-top: 10px;
`;

function Cart() {
    const url1="https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPETHNIC-YARD-RASA7142119E7E2BDD/1580467229105_0..jpg?imwidth=282&impolicy=hq";
    return (
        <Container>
            <P>Your Cart</P>
            <CartItem>
                <ImgView>
                    <Img src={url1} alt="" />
                </ImgView>
                <ItemName>
                    <P>Black wedding Kurta/Kurti</P>
                    <P2>#322480</P2>
                </ItemName>
                <p>$999</p>
            </CartItem>
            <CartItem>
                <ImgView>
                    <Img src={url1} alt="" />
                </ImgView>
                <ItemName>
                    <P>Black wedding Kurta/Kurti</P>
                    <P2>#322480</P2>
                </ItemName>
                <p>$999</p>
            </CartItem>
            <GreyContainer>
                <p>Total Cost</p>
                <p>$999</p>
            </GreyContainer>
            <LastContainer>
                <Icon />
                <P>You are $1 away from free shipping!</P>
            </LastContainer>
        </Container>    
    );
}

export default Cart;