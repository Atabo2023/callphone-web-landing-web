import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import cardicon from "../../../../assets/icons/miniIcon/cardicon.svg";
import bankicon from "../../../../assets/icons/miniIcon/bankicon.svg";
import phonecardicon from "../../../../assets/icons/miniIcon/phonecard.svg";

const StyledCard = ({ children }) => (
  <Card
    bordered={false}
    style={{
      height: 300,
      boxShadow: "0 4px 8px 0 rgb(240, 239, 252)",
      margin: 10,
      width: 400,
      // padding: 20,
    }}
  >
    {children}
  </Card>
);

const Vendcards = () => {
  const [bankCardOpen, setBankCardOpen] = useState(false);
  const [debitCardOpen, setDebitCardOpen] = useState(false);
  const [airvendCardOpen, setAirvendCardOpen] = useState(false);

  return (
    <div className="md:flex justify-center ">
      <StyledCard>
        <motion.div
          onHoverStart={() => setBankCardOpen(true)}
          onHoverEnd={() => setBankCardOpen(false)}
        >
          <motion.div
            className="block items-center"
            onClick={() => setBankCardOpen(!bankCardOpen)}
            layout
          >
            <p className="justify-center pl-20 py-5">
              <motion.img
                src={bankicon}
                alt="svg"
                initial={{ scale: 1, x: 0, y: 0 }}
                animate={{ scale: bankCardOpen ? 0.7 : 1 }}
              />
            </p>
            <motion.p
              className="font-medium text-3xl"
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={{ scale: bankCardOpen ? 0.7 : 1 }}
            >
              Fund Via Bank Transfer
            </motion.p>
          </motion.div>
          {bankCardOpen && (
            <motion.p layout className="text-lg hover:visible">
              Fund your Airvend account with bank transfer. Copy your Airvend
              account details, transfer money into the account, and it instantly
              reflects in your Airvend account. You can fund your account or
              request friends, family, customers, employers, etc., to fund the
              account.
            </motion.p>
          )}
        </motion.div>
      </StyledCard>
      <StyledCard>
        <motion.div
          onHoverStart={() => setDebitCardOpen(true)}
          onHoverEnd={() => setDebitCardOpen(false)}
        >
          <motion.div
            className="block items-center"
            // layout="position"
            // whileHover={{ scale: 0.2, x: -90, y: 20 }}
            onClick={() => setDebitCardOpen(!debitCardOpen)}
            layout="position"
          >
            <p className="justify-center pl-20 py-5">
              <motion.img
                src={cardicon}
                alt="svg"
                initial={{ scale: 1 }}
                animate={{ scale: debitCardOpen ? 0.7 : 1 }}
              />
            </p>

            <motion.p
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={{ scale: debitCardOpen ? 0.7 : 1 }}
              className="font-medium text-3xl "
            >
              Fund Via Debit Card
            </motion.p>
          </motion.div>
          {debitCardOpen && (
            <motion.p
              // whileHover={{ y: -50 }}
              layout
              className="text-lg  hover:visible"
            >
              Easily fund your Airvend account with your debit card. Choose the
              debit card funding option, enter the amount and your card details,
              and your card will be debited. The money reflects instantly in
              your Airvend account.
            </motion.p>
          )}
        </motion.div>
      </StyledCard>
      <StyledCard>
        <motion.div
          onHoverStart={() => setAirvendCardOpen(true)}
          onHoverEnd={() => setAirvendCardOpen(false)}
        >
          <motion.div
            className="block items-center"
            onClick={() => setAirvendCardOpen(!airvendCardOpen)}
            layout="position"
          >
            <p className="justify-center pl-20 py-5">
              <motion.img
                src={phonecardicon}
                alt="svg"
                initial={{ scale: 1 }}
                animate={{ scale: airvendCardOpen ? 0.7 : 1 }}
              />
            </p>

            <motion.p
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={{ scale: airvendCardOpen ? 0.7 : 1 }}
              className="font-medium text-3xl "
            >
              Fund Via Airvend
            </motion.p>
          </motion.div>
          {airvendCardOpen && (
            <motion.p
              // whileHover={{ y: -50 }}
              layout
              className="text-lg  hover:visible"
            >
              You can also use the Airvend tag option to fund your account. Copy
              your Airvend tag and send it to another Airvend user for instant
              funds transfer from their account to yours. It’s fast, seamless,
              and an ideal way to collect money from friends, family, and
              partners.
            </motion.p>
          )}
        </motion.div>
      </StyledCard>
    </div>
  );
};

export default Vendcards;

{
  /* <StyledCard>
        <div>
          <img className="justify-center" src={cardicon} alt="svg" />
        </div>
        <p className="font-bold text-lg">Fund Via Debit Card</p>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
          umquam ds reprehenderit temporibus eligendi
        </p>
      </StyledCard>

      <StyledCard>
        <div>
          <img className="justify-center" src={phonecardicon} alt="svg" />
        </div>
        <p className="font-bold text-lg">Fund Via Airvend</p>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
          umquam rehenderit temporibus eligendi
        </p>
      </StyledCard> */
}
