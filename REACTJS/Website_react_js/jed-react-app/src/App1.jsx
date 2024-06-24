import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
    let heroData = [
        { text1: "Web3 Global", text2: "Conference" },
        { text1: "The Future is", text2: "Decentralized" },
        { text1: "Join Us ", text2: "Insights & Networking" },
    ];

    const [heroCount, setHeroCount] = useState(0);

    const [playStatus, setPlayStatus] = useState(false);
    useEffect(() => {
        setInterval(() => {
            setHeroCount((count) => {
                return count === 2 ? 0 : count + 1;
            });
        }, 5000);
    }, []);
    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
        </div>
    );
};

export default App;
