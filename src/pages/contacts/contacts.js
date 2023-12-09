import './contacts.css';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Contacts() {

    return (
        <>
            <div className='contact-container'>
                <div className='background-title'><h1 className='title'>Контакты</h1></div>
                <div className='container-for-contacts'>
                    <form className="form">
                        <p className='text-contacts'>Остались вопросы, напишите мне</p>
                        <TextField classes="input-form" id="outlined-basic" label="ФИО" variant="outlined" />
                        <TextField className="input-form" id="outlined-basic" label="E-mail" variant="outlined" />
                        <TextField className="input-form" id="outlined-basic" label="Сообщение" variant="outlined" />
                        <Button className='button-form' variant="contained">Отправить</Button>
                    </form>
                </div>
                <div className='container-for-contacts'>
                    <div className='grid-contacts'>
                        <p className='grid-element'>Телефон</p>
                        <p className='grid-element'>E-mail</p>
                        <p className='grid-element'>+7(911)958-63-06</p>
                        <p className='grid-element'>shena3333@mail.ru</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contacts;