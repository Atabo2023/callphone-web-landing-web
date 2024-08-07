import React from "react";
import squareImage from "../../assets/images/square.png";


const CampusCardIcon = () => {
    return (
        <>
        <div className="p-8 xl:p-0">
<div className="relative top-[0.5rem] my-12 xl:my-0 left-[2rem] md:top-[10.5rem] md:left-[26rem] xltop-[10.5rem] xl:left-[26rem]  rounded-md bg-tertiary py-4 px-6 drop-shadow-xl w-[23rem]">
    <img className="absolute mr-5" src={squareImage} alt="whatSAppImg" />
    <div className="flex flex-col ml-[4.5rem] text-start justify-center">
    <h1 className="text-xl font-Rubik font-semibold text-norm">Airvend Ambassador</h1>
    <p className="text-sm font-medium text-secondary font-inter"> Find attached your acceptance email</p>
    </div>
</div>
</div>
        </>
    )
}

export default CampusCardIcon;