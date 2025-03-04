import React, { useState, useEffect } from 'react';
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Imgmodal from './Imgmodal'

import Baile from "../img/baile.jpg";
import Bailebb from "../img/bailebb.jpg";
import Bb from "../img/bb.jpg";
import Bb2 from "../img/bb2.jpg";
import Ber from "../img/ber.jpg";
import Black from "../img/black.jpg";
import Black2 from "../img/black2.jpg";
import Defuale from "../img/defuale.jpg";
import Gg from "../img/gg.jpg";
import Gg2 from "../img/gg2.jpg";
import Gg3 from "../img/gg3.jpg";
import Moonflwer from "../img/moonflwer.jpg";
import One from "../img/one.jpg";
import Ring from "../img/ring.jpg";
import Shy from "../img/shy.jpg";
import Sit from "../img/sit.jpg";
import To from "../img/to.jpg";
import To2 from "../img/to2.jpg";

import Wsolor from "../img/wsolor.jpg";
import Wsolor2 from "../img/wsolor2.jpg";
import Wsolor3 from "../img/wsolor3.jpg";
import Msolor from "../img/msolor.jpg";

const imgArrTo = [To2, Bailebb, Baile, Bb, Bb2, Ber, Black, Black2, Defuale, Gg, Gg2, Gg3, Moonflwer, Ring, Shy, Sit];

const Imagepat = () => {
    const images = [To2, Bailebb, Baile, Bb, Bb2, Ber, Black, Black2, Defuale, Gg, Gg2, Gg3, Moonflwer, Ring, Shy, Sit];
    const [currentIndex, setCurrentIndex] = useState(0);

    // 이미지 변경 함수
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // 3초마다 이미지 변경
    useEffect(() => {
        const interval = setInterval(goToNext, 3000);
        return () => clearInterval(interval); // 컴포넌트가 언마운트 될 때 interval을 제거
    }, []);

    return (
        <div className="carousel-container">
            <div className="thumbnails">
                <img src={images[currentIndex]} alt={`Thumbnail ${currentIndex + 1}`} className="thumbnail" />
            </div>
        </div>
    );
};

export default Imagepat;
