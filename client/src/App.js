import s from "./App.module.css"
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import anime from "animejs";
import React from "react";
import ThirdPage from "./Pages/ThirdPage";

function App() {

    const animationRef = React.useRef(null);
    React.useEffect(() => {
        animationRef.current = anime.timeline({
            autoplay: true,
            loop: true,
            easing: 'easeInOutSine'
        });

        animationRef.current.add({
            targets: 'section',
            translateY: 15,
            duration: 2000,
            easing: 'linear',
            direction: 'alternate'
        })
        animationRef.current.add({
            targets: 'section',
            translateY: 0,
            duration: 2000,
            easing: 'linear',
            direction: 'alternate'
        })
    })

    return (
        <div className={s.main_container}>
            <FirstPage/>
            <SecondPage/>
            <ThirdPage />
        </div>
    );
}

export default App;
