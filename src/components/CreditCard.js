import { useState } from "react";
import { CCard, CCardImg, CCardDetails, CCardDetailsBetween, Container, Heading, NumberHeading, Form, TextInput, TwoCols } from './CreditCard.style'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("xxxxxxxxxxxxxxxxxxxx");
  const [name, setName] = useState("xxxxx xxxxx");
  const [expDate, setExpDate] = useState("xx/xx");

  //Regex to determine if the card number is visa or master card
  //If it does not match visa, it will be set to master card by default
  const _visaCardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const _imgUrl = _visaCardRegex.test(cardNumber) ? ("../../visa-logo.png") : ("../../mc-logo.png");
  const _cclen = cardNumber.length;
  const _formatCCNumber = cardNumber ? (_cclen % 4 != 0 ?
    [cardNumber.slice(0, _cclen % 4)].concat(cardNumber.slice(_cclen % 4, _cclen).match(/.{4}/g)).join(" ") :
    cardNumber.match(/.{4}/g).join(" ")) :
    "xxxx xxxx xxxx xxxx xxxx";
  const _formatName = name.toUpperCase();
  const _formatExpDate = expDate.toUpperCase();

  return (
    <Container>
      <CCard>
        <CCardImg>
          <img
            src={_imgUrl}
            alt="Credit Card Type Logo"
            height="40%"
          />
        </CCardImg>
        <CCardDetails>card number<NumberHeading>{_formatCCNumber}</NumberHeading></CCardDetails>
        <CCardDetailsBetween>
          <div>
            cardholder name<Heading>{_formatName}</Heading>
          </div>
          <div>
            valid thru<Heading>{_formatExpDate}</Heading>
          </div>
        </CCardDetailsBetween>
      </CCard>
      <Form>
        <label for="fname">Name</label>
        <TextInput type="text" id="name" name="name" placeholder="Your name.." value={name} onChange={(e) => setName(e.target.value ? e.target.value.slice(0, 10) : "")} />

        <label for="lname">Card Number</label>
        <TextInput type="text" id="ccnumber" name="ccnumber" placeholder="Your credit card number.." value={cardNumber} onChange={(e) => setCardNumber(e.target.value ? e.target.value.slice(0, 24) : "")} />

        <TwoCols>
          <div>
            <label for="lname">Expiration (mm/yy)</label>
            <TextInput type="text" id="ccnumber" name="ccnumber" placeholder="MM / YY" value={expDate} onChange={(e) => setExpDate(e.target.value ? e.target.value : "")} />
          </div>
          <span />
          <div>
            <label for="lname">Security Code</label>
            <TextInput type="password" id="ccnumber" name="ccnumber" placeholder="Code.." />
          </div>
        </TwoCols>
      </Form>
    </Container>
  );
};

export default CreditCard;
