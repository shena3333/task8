import React from 'react';
import './header.css'

function Header() {
    return (

        <>
            <header className="menu">
                <div className="button">
                    <a className='element-menu' href="/">Главная</a>
                </div>
                <div className="button">
                    <a className='element-menu' href="/portfolio">Портфолио</a>
                </div>
                <div className="button">
                    <a className='element-menu' href="/photo">Фотогалерея</a>
                </div>
                <div className="button">
                    <a className='element-menu' href="/contacts">Контакты</a>
                </div>
                <div className="button">
                    <a className='element-menu' href="/plus">С новым годом</a>
                </div>
            </header>
        </>
    )
}

export default Header;