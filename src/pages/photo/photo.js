import './photo.css';
import React from 'react';
import foto1 from './1.bmp';
import foto2 from './2.bmp';
import foto3 from './3.bmp';
import foto4 from './4.bmp';
import foto5 from './5.bmp';


function Photo() {

    return (
        <>
            <div className='container-photo'>
                <div className='gallery-container'>
                    <p className='gallery'>Галерея работ:</p>
                </div>
                {/* <div><img className='main-foto' src={foto1} alt="main-image" /></div> */}
                <div className="foto-box">
                    <img className="foto foto1" alt='icon' src={foto1} />
                    <img className="foto foto2" alt='icon' src={foto2} />
                    <img className="foto foto3" alt='icon' src={foto3} />
                    <img className="foto foto4" alt='icon' src={foto4} />
                    <img className="foto foto5" alt='icon' src={foto5} />
                </div>
            </div>
        </>
    )
}

// function PhotoFunc() {

//         // создание фотогалереи
//         const fotoUrl = ['./1.bmp', './2.bmp', './3.bmp', './4.bmp','./5.bmp'];
//         let fotoGallery = [];
//         let fotoBox = document.querySelector('.foto-box');
//         fotoUrl.map((value) => {
//             let img = document.createElement('img');
//             img.src = value;
//             img.className = 'foto';
//             fotoGallery.push(img)
//         });
//         fotoGallery.map((value) => {
//             fotoBox.append(value)
//         })
//         // создание фотогалереи конец
//         // вывод фото как главного при наведении
//         const mainFoto = document.querySelector('.main-foto');
//         document.addEventListener("mouseover", function (e) {
//             if (e.target.closest('.foto')) {
//                 mainFoto.src = e.target.src;
//             }
//         });
// // вывод фото как главного при наведении конец
// }

// PhotoFunc()

export default Photo;