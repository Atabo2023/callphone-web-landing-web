import React, { useState } from "react";
import { motion } from "framer-motion";
import cardicon from "../../../../assets/icons/miniIcon/cardicon.svg";
import bankicon from "../../../../assets/icons/miniIcon/bankicon.svg";
import phonecardicon from "../../../../assets/icons/miniIcon/phonecard.svg";

const StyledCard = ({ children }) => (
  <div className="border border-gray-300 rounded-xl shadow-md m-5 p-6 max-w-xs">
    {children}
  </div>
);

const Vendcards = () => {
  const [bankCardOpen, setBankCardOpen] = useState(false);
  const [debitCardOpen, setDebitCardOpen] = useState(false);
  const [airvendCardOpen, setAirvendCardOpen] = useState(false);

  return (
    <div className="md:flex lg:px-24 p-5 justify-center">
      <StyledCard>
        <motion.div
          onHoverStart={() => setBankCardOpen(true)}
          onHoverEnd={() => setBankCardOpen(false)}
        >
          <motion.div
            className={`flex ${
              bankCardOpen ? "animate-open-card" : " grid items-center"
            }`}
            onClick={() => setBankCardOpen(!bankCardOpen)}
            layout
          >
            <p className="justify-center px-6 py-5">
              <motion.img
                src={bankicon}
                alt="svg"
                initial={{ scale: 1, x: 20, y: 20 }}
                animate={{ scale: bankCardOpen ? 1.1 : 1 }}
              />
            </p>
            <motion.p
              initial={{ scale: 1, x: 20, y: 20 }}
              animate={{ scale: bankCardOpen ? 0.7 : 1 }}
              className="font-medium lg:pl-4 pr-2 mb-5 text-3xl"
            >
              Fund Via Bank Transfer
            </motion.p>
          </motion.div>
          {bankCardOpen && (
            <motion.p layout className="text-lg hover:visible pt-4">
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
            className={`flex ${
              debitCardOpen ? "animate-open-card" : " grid items-center"
            }`}
            onClick={() => setDebitCardOpen(!debitCardOpen)}
            layout
          >
            <p className="justify-center py-5">
              <motion.img
                src={cardicon}
                alt="svg"
                initial={{ scale: 1, x: 20, y: 20 }}
                animate={{ scale: debitCardOpen ? 1.1 : 1 }}
              />
            </p>
            <motion.p
              initial={{ scale: 1, x: 20, y: 20 }}
              animate={{ scale: debitCardOpen ? 0.7 : 1 }}
              className="font-medium lg:pl-4 pr-2 mb-5 text-3xl"
            >
              Fund Via Debit Card
            </motion.p>
          </motion.div>
          {debitCardOpen && (
            <motion.p layout className="text-lg hover:visible pt-4">
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
            className={`flex ${
              airvendCardOpen ? "animate-open-card" : " grid items-center"
            }`}
            onClick={() => setAirvendCardOpen(!airvendCardOpen)}
            layout
          >
            <p className="justify-center py-5">
              <motion.img
                src={phonecardicon}
                alt="svg"
                initial={{ scale: 1, x: 20, y: 20 }}
                animate={{ scale: airvendCardOpen ? 1.1 : 1 }}
              />
            </p>
            <motion.p
              initial={{ scale: 1, x: 20, y: 20 }}
              animate={{ scale: airvendCardOpen ? 0.7 : 1 }}
              className="font-medium lg:pl-0 pr-4  mb-5 text-3xl"
            >
              Fund Via Airvend
            </motion.p>
          </motion.div>
          {airvendCardOpen && (
            <motion.p layout className="text-lg pt-4 hover:visible">
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
