import './portfolio.css';
import React from 'react';

function Portfolio() {

    return (
        <div className='portfolio-container'>
            <div className='flex-container'>
                <div className='content-container'>
                    <p>Мои навыки</p>
                    <ul>
                        <li>создане макетов с помощью Figma;</li>
                        <li>верстка страницы (HTML,CSS);</li>
                        <li>разработка страницы с помощью JS;</li>
                        <li>создание отзывчивого дизана страницы; </li>
                        <li>создание сайта на основе CMS;</li>
                        <li>создание сайта c помощью фреймворка React;</li>
                        <li>контроль версий при помощи github.</li>
                    </ul>
                </div>
                <div className='content-container'>
                    <p>Примеры работ на Git:</p>
                    <ul>
                        <li>
                            <a href="https://github.com/shena3333/project3Kondrikova">HTML,CSS</a>
                        </li>
                        <li>
                            <a href="https://github.com/shena3333/calc">JS</a>
                        </li>

                        <li>
                            <a href="https://github.com/shena3333/task7">VUE.js</a>
                        </li>
                        <li>
                            <a href="https://github.com/shena3333/task10">React</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Portfolio;