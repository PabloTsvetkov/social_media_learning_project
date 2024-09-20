import React from 'react';

import s from './Dialogues.module.css';
import DialogPreview from './DialogPreview/DialogPreview';

import { Routes, Route } from 'react-router-dom';
import PickChatPreview from './PickChatPreview/PickChatPreview';

export default function Dialogs(props) {

    let dialogsPreview = [
        { name: 'Alice Alisova', id: '1' },
        { name: 'Sam Araratov', id: '2' },
        { name: 'Pokrov Smallov', id: '3' },
        { name: 'Brat Lublin', id: '4' },
        { name: 'Red Boolev', id: '5' },
    ];

    return (
        <>
            <div className={s.dialogsBlock}>
                <div className={s.dialogsName}>
                    {dialogsPreview.map((dialogItem) => (<DialogPreview name={dialogItem.name} id={dialogItem.id} />))}
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