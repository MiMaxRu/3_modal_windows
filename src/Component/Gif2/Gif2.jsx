import React from 'react';//Подключение библиотеки React
import './Gif2.css'//Подключение файла стилей css
function Gif2() {
    const [open, setOpen] = React.useState(false);//переменная для хранения информации об открытии или закрытии модального окна|задаём отслеживание этой переменной для перерисовки страницы
    return (
        <div className="mod1content">
            <button onClick={() => setOpen(true)} className="open">Открыть второй конверт</button>{/*Кнопка открытия модального окна */}
            <div className={`overlay animated ${open?'show':''}`} >{/*Здесь мы указываем условие в названии класса.
             Если значение переменной open будет true, 
             то получим название класса: overlay animated show, если false то: overlay animated*/}
                
                <div className="modal">
                    <button onClick={() => setOpen(false)} className="close">X</button>{/*Кнопка закрытия модального окна */}
                    <img src="https://i.gifer.com/SG1h.gif" />{/*ссылка на gif анимацию*/}
                </div>
            </div>
        </div>
    );
}
export default Gif2;//Экспорт компоненты
