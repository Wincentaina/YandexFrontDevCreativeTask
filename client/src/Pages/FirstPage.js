import React from 'react';
import s from "./FirstPage.module.css"
import email from "../imgs/email.png"
import github from "../imgs/github.png"
import arrow from "../imgs/arrow.png"

const FirstPage = () => {
    return (
        <div className={s.first_page}>
            <div className={s.container}>
                <div className={s.title}>
                    <div className={s.minimalism}>
                        “МИНИМАЛИЗМ И УДОБСТВО - НАШЕ ВСЁ”
                    </div>
                    <div className={s.yellow_text}>
                        Мой основной принцип в разработке и жизни
                    </div>
                    <div className={s.author}>
                        Автор: Комиссаров Семён Сергеевич
                    </div>
                </div>
                <section className={s.arrow}>
                    <img src={arrow} alt=""/>
                </section>
                <div className={s.communicate}>
                    <a href="mailto:high.yn.kom@gmail.com"><img src={email} alt="my email"/></a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/Wincentaina"><img src={github} alt="my github"/></a>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;