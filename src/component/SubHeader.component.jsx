import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    padding-right: 30px;
    height: 60px;
`;

const BorderCotainer = styled.div`
    height: 3px;
    background-color: #dfdbdb;
    margin-top: 10%;
    padding-left: 40px;
    padding-right: 40px;
`;

const Icon1 = styled(AiOutlineShoppingCart)`
    padding: 10px;
    height: 25px;
    width : 25px;
    border-style: solid;
    border-color: green;
    border-width: 2px;
    border-radius: 50px;
    cursor: pointer;
`;

const Icon2 = styled(MdLocalShipping)`
    color: white;
    padding: 10px;
    height: 25px;
    width : 25px;
    background-color: green;
    border-style: solid;
    border-color: green;
    border-width: 2px;
    border-radius: 50px;
    cursor: pointer;
`;

const P = styled.p`
    height: 20px;
    font-size: large;
    font-weight: 500;
`;

function SubHeader() {
    return(
        <Container>
             <P>Shipping and Payment</P>
                <SubContainer>
                    <Icon1 />
                    <BorderCotainer />
                    <Icon2 />
                </SubContainer>
        </Container>
    );
}

export default SubHeader;