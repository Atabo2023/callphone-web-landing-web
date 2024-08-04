import React from "react";
import squareImage from "../../assets/images/square.png";


const CampusCardIcon = () => {
    return (
        <>
<div className="relative top-[10.5rem] left-[26rem] rounded-md bg-tertiary py-4 px-6 drop-shadow-xl w-[23rem]">
    <img className="absolute mr-5" src={squareImage} alt="whatSAppImg" />
    <div className="flex flex-col ml-[4.5rem] text-start justify-center">
    <h1 className="text-xl font-Rubik font-semibold text-norm">Airvend Ambassador</h1>
    <p className="text-sm font-medium text-secondary font-inter"> Find attached your acceptance email</p>
    </div>
</div>
        </>
    )
}

export default CampusCardIcon;