import React from "react";
import "./Background.css";

import video1 from "../../../public/img/video1.mp4";
import image1 from "../../../public/img/image1.png";
import image2 from "../../../public/img/image2.png";
import image3 from "../../../public/img/image3.png";

const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className="background" autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
        );
    } else if (heroCount === 0) {
        return <img src={image1} className="background fade-in" alt="" />;
    } else if (heroCount === 1) {
        return <img src={image2} className="background fade-in" alt="" />;
    } else if (heroCount === 2) {
        return <img src={image3} className="background fade-in" alt="" />;
    }
};
export default Background;
