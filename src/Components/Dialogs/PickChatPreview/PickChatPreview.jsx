import React from 'react';

import { IoChatbubblesOutline } from "react-icons/io5";

import s from './PickChatPreview.module.css';

export default function PickTheChatPreview() {
    return (
        <div className={s.pickTheChatPreview}>
            <IoChatbubblesOutline />
            Pick the chat
        </div>
    )
}