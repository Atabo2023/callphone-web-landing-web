import React from "react";
import noteImage from "../../assets/images/note.png";
import Ellipse1Image from "../../assets/images/Ellipse1.png";
import Ellipse2Image from "../../assets/images/Ellipse2.png";
const CampusIcon = () => {
    
    return (
        <>
<div>
        <div className="flex justify-end">
    <img src={Ellipse1Image} alt="ellipseIcon" />
  </div>
        <div className="relative bottom-80">
    <img src={Ellipse2Image} alt="ellipseIcon" />
  </div>
        <div className="flex justify-center mt-1">
    <img src={noteImage} alt="noteIcon" />
  </div>
</div>
        </>
    )
}
export default CampusIcon;