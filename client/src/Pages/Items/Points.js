import React from 'react';
import s from "./Points.module.css"

const Points = () => {
    return (
        <div className={s.points}>
            <div className={s.point}></div>
            <div className={s.point}></div>
        </div>
    );
};

export default Points;