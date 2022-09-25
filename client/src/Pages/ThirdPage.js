import React from 'react';
import s from "./ThirdPage.module.css"
import MapPoint from "./Items/MapPoint";

const ThirdPage = () => {
    return (
        <div className={s.third_page}>
            <div className={s.container}>
                <div className={s.title}>
                    Немного о многом
                </div>
                <div className={s.info}>
                    <div className={s.com_dev}>
                        <h3>Опыт коммерческой разработки:</h3>
                        <MapPoint title="Парсеры на Python" des="Получение данных с api, парсинг, отправка данных на api" />
                        <MapPoint title="Разработка лендинга для стоматологической клиники" des="Backend - express-js. Frontend - React" />
                        <MapPoint title="Разработка telegram бота" des="Разработка REST api + telegram bot" />
                    </div>
                    <div className={s.extra}>
                        <h3>Extra:</h3>
                        <div className={s.list}>
                            <div className={s.item}>
                                <div className={s.point}></div>
                                <div className={s.text}>Умение работать в figma</div>
                            </div>
                            <div className={s.item}>
                                <div className={s.point}></div>
                                <div className={s.text}>Совбодное понимание документации на английском языке</div>
                            </div>
                            <div className={s.item}>
                                <div className={s.point}></div>
                                <div className={s.text}>Навык работы с Linux</div>
                            </div>
                            <div className={s.item}>
                                <div className={s.point}></div>
                                <div className={s.text}>Понимание git</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdPage;