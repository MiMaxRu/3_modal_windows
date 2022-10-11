import React from 'react';//Подключение библиотеки React
import m from './Gif1.module.css'//Подключение файла стилей css

function Gif1() {
    const [open, setOpen] = React.useState(false);//переменная для хранения информации об открытии или закрытии модального окна|задаём отслеживание этой переменной для перерисовки страницы
    return (
        <div className={m.mod1content}>
            <button onClick={() => setOpen(true)} className={m.open}>Открыть первый конверт</button>{/*Кнопка открытия модального окна */}

            {open && (//Модальное окно
                <div className={m.modal}>
                    <button onClick={() => setOpen(false)} className={m.close}>X</button>{/*Кнопка закрытия модального окна */}
                    <img src="https://i.gifer.com/SG1h.gif" />{/*ссылка на gif анимацию*/}
                </div>

            )
            }
        </div >
    );
}
export default Gif1;//Экспорт компоненты
