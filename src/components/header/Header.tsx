import React from 'react';
import style from './style/Header.module.scss'
import {SvgIcon} from "../../common/style/SvgIcon/SvgIcon";
import {currentWidthType} from "../../common/types";

export const Header = ({currentWindowDimensions}: currentWidthType) => {

    return (
        <div className={style.header__body}>
            <div className={style.header__container}>
                <div className={style.header__header}>

                    <SvgIcon/>

                    {
                        currentWindowDimensions.width && currentWindowDimensions.width > 1039 &&
                        <>
                            <ul>
                                <li>About</li>
                                <li>Services</li>
                                <li>Pricing</li>
                                <li>Blog</li>
                            </ul>
                            <div className={style.header__contact}>
                                Contact
                            </div>
                        </>

                    }

                </div>
                <h1>
                    Portfolio
                </h1>
                <p>
                    Agency provides a full service range including technical skills, design, business understanding.
                </p>
            </div>
        </div>
    )
}