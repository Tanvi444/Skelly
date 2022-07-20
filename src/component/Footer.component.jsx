import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SubContainer = styled.div`
    display: flex;
    padding: 40px;
    margin-right: 30px;
    margin-left : 30px;
`;

const SubContainer2 = styled.div`
    display: flex;
    padding: 40px;
    margin-right: 30px;
    margin-left : 30px;
    width: 480px;
    justify-content: space-between;
`;

const ButtonContainer1 = styled.div`
    :hover{
       background-color: honeydew;
       color: grey;
    }
    height: 30px;
    width: 200px;
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
    width: 200px;
    padding:10px;
    padding-top: 8px;
    padding-bottom: 0px;
    border-style: solid;
    border-color: #adadad;
    border-width: 1px;
    border-radius: 40px;    
    cursor: pointer;
`;


const Icon = styled(BiArrowBack)`
    height: 20px;
    width: 20px;
    padding-top: 17px;
    padding-right:30px;
    cursor: pointer;
`;

const P = styled.p`
    font-weight: 400;
`;

function Footer(){
    return(
        <Container>
            <SubContainer>
                <Icon />
                <P>Back</P>
            </SubContainer>
            <SubContainer2>
                <ButtonContainer1>
                    Continue Shopping
                </ButtonContainer1>
                <ButtonContainer2>
                    Proceed To Payment
                </ButtonContainer2>
            </SubContainer2>
        </Container>
    );
}
export default Footer;