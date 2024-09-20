import React from "react";

import miniHeader from './../../../miniheader.jpg';
import profileImage from './../../../profileImage.png';

import s from './ProfileTopHeader.module.css';

import { FaUniversity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";

export default function ProfileTopHeader() {
    return (
        <>
            <div className={s.profileHeader}>
                <div className={s.headerBackgroundContainer}>
                    <img src={miniHeader} alt="miniHeader for profile" />
                </div>
                <div className={s.profileShortInfo}>
                    <div className={s.profileImage}>
                        <img src={profileImage} alt='profile image' />
                    </div>
                    <div className={s.profileDescription}>
                        <span className={s.profileName}>Bob Bobov</span><br />
                        <div className={s.extraInfo}>
                            <span href='#'><FaLocationDot /> Moscow</span>
                            <span href='#'><FaUniversity /> HSE'22</span>
                            <span href='#'><RiInformation2Fill />  More</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}