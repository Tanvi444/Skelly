import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
`;

const FormContainer = styled.select`
    color: grey;
    margin-top: 20px;
    padding-left: 10px;
    height: 40px;
    width: 220px;
    border-style: solid;
    border-color: #adadad;
    border-width: 1px;
    border-radius: 40px; 
`;

const DetailContainer = styled.div`
    height: 200px;
    justify-content: space-between;
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

function SignIn() {
    return (
        <Container>
            <DetailContainer>
                <Input type="text" placeholder="Email" />
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="text" placeholder="Phone Number" />
            </DetailContainer>
            <DetailContainer>
                <Input type="text" placeholder="Address" />
                <Input type="text" placeholder="City" />
                <Input type="text" placeholder="Postal Code/ZIP" />
                <FormContainer name="country" id="country">
                    <option value="India1">India1</option>
                    <option value="India2">India2</option>
                    <option value="India3">India3</option>
                    <option value="India4">India4</option>
                    <option value="India5">India5</option>
                    <option value="India6">India6</option>
                    <option value="India7">India7</option>
                </FormContainer>
            </DetailContainer>
        </Container>
    );
}

export default SignIn;