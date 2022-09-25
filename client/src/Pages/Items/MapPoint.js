import React from 'react';
import s from "./MapPoint.module.css"

const MapPoint = ({title, des}) => {

    return (
        <div className={s.map_point}>
            <div className={s.point}></div>
            <div className={s.text}>
                <h3 className={s.title}>{title}</h3>
                <p className={s.des}>{des}</p>
            </div>
        </div>
    );
};

export default MapPoint;