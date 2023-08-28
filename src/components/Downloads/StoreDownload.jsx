import React from "react";
import playstore from "../../assets/images/playstore.svg";
import appstore from "../../assets/images/appstore.svg";

export const StoreDownload = () => {
  const toPlayStore = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.callphoneng.airvend",
      "_blank"
    );
  };
  const toAppStore = () => {
    window.open("https://apps.apple.com/ng/app/airvend/id1439778926", "_blank");
  };
  return (
    <div className="p-0">
      <button className="mr-2" onClick={toPlayStore}>
        <img src={playstore} alt="image" />
      </button>
      <button className="ml-2" onClick={toAppStore}>
        <img src={appstore} alt="image" />
      </button>
    </div>
  );
};
