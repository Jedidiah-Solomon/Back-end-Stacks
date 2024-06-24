import React from "react";
import "./Hero.css";
import arrow_btn from "../../../public/img/arrow_btn.png";
import play_icon from "../../../public/img/play_icon.png";
import pause_icon from "../../../public/img/pause_icon.png";

const Hero = ({
    heroData,
    setHeroCount,
    heroCount,
    setPlayStatus,
    playStatus,
}) => {
    return (
        <div className="hero">
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="marquee-container">
                <span className="marquee-text">
                    Date: Saturday, 26th October, 2024 | Time: 9:00 - 16:00 WAT
                </span>
            </div>
            <div className="hero-agenda">
                <p>Agenda</p>
                <a href="#">
                    <img src={arrow_btn} alt="" />
                </a>
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    {/* Dot 1 */}
                    <li
                        onClick={() => setHeroCount(0)}
                        className={
                            heroCount === 0 ? "hero-dot orange" : "hero-dot"
                        }
                    ></li>

                    {/* Dot 2 */}
                    <li
                        onClick={() => setHeroCount(1)}
                        className={
                            heroCount === 1 ? "hero-dot orange" : "hero-dot"
                        }
                    ></li>

                    {/* Dot 3 */}
                    <li
                        onClick={() => setHeroCount(2)}
                        className={
                            heroCount === 2 ? "hero-dot orange" : "hero-dot"
                        }
                    ></li>
                </ul>
            </div>

            <div className="hero-play">
                <img
                    onClick={() => setPlayStatus(!playStatus)}
                    src={playStatus ? pause_icon : play_icon}
                    alt=""
                />
                <p>Be with Us</p>
            </div>
        </div>
    );
};

export default Hero;
