import { useState } from "react";
import { CCard, CCardImg, CCardDetails, Container } from './CreditCard.style'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("xxxx xxxx xxxx xxxx xxxx");
  const [name, setName] = useState("xxxxx xxxxx");
  const [expDate, setExpDate] = useState("xx/xx");

  return (
    <Container>
      <div>
        <CCard>
          <CCardImg>
            <img
              src="../../visa-logo.png"
              alt="Credit Card Type Logo"
              height="30%"
            />
          </CCardImg>
          <CCardDetails>card number</CCardDetails>
          <CCardDetails>cardholder name expiration valid thru</CCardDetails>
        </CCard>
      </div>
      <div>
        FORM
      </div>
    </Container>
  );
};

export default CreditCard;
