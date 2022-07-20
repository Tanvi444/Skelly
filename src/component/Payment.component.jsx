import styled from "styled-components";
import discover from './../static/discover.png';
import google from './../static/google-pay.png';
import ideal from './../static/ideal.png';
import maestro from './../static/maestro.png';
import visa from './../static/visa.png';
import paypal from './../static/paypal.png';
import dhl from './../static/dhl.png';
import dpd from './../static/dpd.png';
import fedex from './../static/fedex.png';
import inpost from './../static/inpost.png';

const Container = styled.div`
    padding-left: 50px;
    padding-right: 50px;
`;

const SubContainer = styled.div`
    display: flex;
    width: 400px;
    padding-bottom: 30px;
    justify-content: space-between;
`;


const ImgConatainer = styled.div`
    :hover{
       background-color: honeydew;
       border-color: green;
    }
    padding: 10px;
    height: 40px;
    width : 100px;
    border-style: solid;
    border-color: green;
    border-width: 2px;
    border-radius: 50px;
    cursor: pointer;
`;

const ImgConatainer2 = styled.div`
    :hover{
       background-color: honeydew;
       border-color: green;
    }
    padding: 10px;
    height: 40px;
    width : 150px;
    border-style: solid;
    border-color: green;
    border-width: 2px;
    border-radius: 50px;
    cursor: pointer;
`;

const Img = styled.img`
    position: relative;
    top: -10px;
    height: 60px;
    width : 60px;
`;

const Img2 = styled.img`
    position: relative;
    top: -10px;
    height: 50px;
    width : 110px;
`;

const Img3 = styled.img`
    position: relative;
    top: -15px;
    height: 80px;
    width : 110px;
`;

const Img4 = styled.img`
    position: relative;
    top: -60px;
    height: 160px;
    width : 110px;
`;

const P = styled.p`
    margin:0;
    margin-bottom: 40px;
    font-size: large;
    font-weight: 400;
    text-align: left;
`;



function Payment() {
    return (
        <Container>
            <P>Payment method</P>
            <SubContainer>
                <ImgConatainer>
                    <Img src={paypal} alt="" />
                </ImgConatainer>
                <ImgConatainer>
                    <Img src={visa} alt="" />
                </ImgConatainer>
                <ImgConatainer>
                    <Img src={google} alt="" />
                </ImgConatainer>
            </SubContainer>
            <SubContainer>
                <ImgConatainer>
                    <Img src={maestro} alt="" />
                </ImgConatainer>
                <ImgConatainer>
                    <Img src={ideal } alt="" />
                </ImgConatainer>
                <ImgConatainer>
                    <Img src={discover} alt="" />
                </ImgConatainer>
            </SubContainer>
            <P>Delivery method</P>
            <SubContainer>
                <ImgConatainer2>
                    <Img2 src={inpost} alt="" />
                </ImgConatainer2>
                <ImgConatainer2>
                    <Img2 src={dpd} alt="" />
                </ImgConatainer2>
            </SubContainer>
            <SubContainer>
                <ImgConatainer2>
                    <Img4 src={dhl} alt="" />
                </ImgConatainer2>
                <ImgConatainer2>
                    <Img3 src={fedex} alt="" />
                </ImgConatainer2>
            </SubContainer>
        </Container>
    );
}

export default Payment;
