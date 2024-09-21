import React from 'react';

import s from './Dialogues.module.css';
import DialogPreview from './DialogPreview/DialogPreview';

import { Routes, Route } from 'react-router-dom';
import PickChatPreview from './PickChatPreview/PickChatPreview';

export default function Dialogs(props) {
    return (
        <>
            <div className={s.dialogsBlock}>
                <div className={s.dialogsName}>
                    {props.dialogsPreview.map((dialogItem) => (<DialogPreview name={dialogItem.name} id={dialogItem.id} />))}
                </div>

                <div className={s.dialog}>
                    <Routes>
                        <Route path='/' element={<PickChatPreview />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}