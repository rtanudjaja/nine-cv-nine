import styled from "styled-components";

export const CCard = styled.section`
  padding: 10px;
  text-align: left;
  background-image: url("../../cc-layout.PNG");
  width: 480px;
  height: 296px;
  color: white;
`;

export const CCardImg = styled.div`
  padding: 10px;
  text-align: right;
  height: 106px;
`;

export const CCardDetails = styled.div`
  height: 80px;
`;

export const CCardDetailsBetween = styled(CCardDetails)`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 510px 1fr;
  margin: auto;
`;

export const Heading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2em;
`;

export const NumberHeading = styled(Heading)`
  font-size: 2.5em;
  letter-spacing: 0.15em;
`;

export const Form = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin: 15px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
`;

export const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 10px 1fr;
`;