import React from 'react';
import s from "./SecondPage.module.css"
import MapPoint from "./Items/MapPoint";
import Points from "./Items/Points";
import arrow from "../imgs/arrow.png";

const SecondPage = () => {

    const api_array = [
        {
            id: 1,
            title: "Первое знакомство. Изучение Python",
            des: "Структура кода, циклы, функции"
        },
        {
            id: 2,
            title: "Framework Django ",
            des: "Python ООП, классы. Основы Html, CSS"
        },
        {
            id: 3,
            title: "Начало фронтенда. Изучение JavaScript",
            des: "Углубление в верстку, штудирование справочника js, решение задач "
        },
        {
            id: 4,
            title: "Первый frontend framework. React",
            des: "Основы React. JSX, функциональные компоненты, cостояния, хуки "
        },
        {
            id: 5,
            title: "Изучение базовых алгоритмов",
            des: "Быстрая сортировка, Алгоримт Дейкстры, Динамическое программирование"
        },
        {
            id: 6,
            title: "Знакомство с express-js",
            des: "Роутинг, модели, middleware, валидация. Понимание работы REST API, JWT"
        },
    ]

    const items = api_array.map((item) => {
        return item.id === 6 ? (
            <MapPoint title={item.title} des={item.des} key={item.id}/>
        ): (
            <div className="item" key={item.id + 100}>
                <MapPoint title={item.title} des={item.des} key={item.id}/>
                <Points />
            </div>
        )
    })
    return (
        <div className={s.second_page}>
            <div className={s.container}>
                <div className={s.title}>
                    Мой профессиональный путь
                </div>
                <div className={s.road_map}>
                    {items}
                </div>
                <section className={s.arrow}>
                    <img src={arrow} alt=""/>
                </section>
            </div>
        </div>
    );
};

export default SecondPage;