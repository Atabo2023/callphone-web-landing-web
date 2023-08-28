import React from "react";
import { Card } from "antd";
import cardicon from "../../../../assets/icons/miniIcon/cardicon.svg";
import bankicon from "../../../../assets/icons/miniIcon/bankicon.svg";
import phonecardicon from "../../../../assets/icons/miniIcon/phonecard.svg";

const StyledCard = ({ children }) => (
  <Card
    // title="Card title"
    bordered={false}
    style={{
      width: 400,
      padding: 20,
      height: 300,
      boxShadow: "0 4px 8px 0 rgb(240, 239, 252)",
      margin: 10,
    }}
  >
    {children}
  </Card>
);

const Vendcards = () => {
  return (
    <div className="md:flex justify-center ">
      <StyledCard>
        <div>
          <img
            className="place-content-center transform scale-100 hover:bg-amber-700 scale-80 transition-transform"
            src={bankicon}
            alt="svg"
          />
        </div>
        <p className="font-bold text-lg transition-opacity hover:opacity-100">
          Fund Via Bank Transfer
        </p>
        <p className="text-lg transition-opacity hover:visible opacity-100 transform translate-y-0 hover:translate-y-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
          umquam deeprehenderit temporibus eligendi
        </p>
      </StyledCard>

      <StyledCard>
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
      </StyledCard>
    </div>
  );
};

export default Vendcards;
