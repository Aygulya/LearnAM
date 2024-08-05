import React from "react";
import { Link } from "react-router-dom";
import "./Panel.css"
const Panel = () => {
    return (
        <div className="allDay">
            <p className="panel">
                <p className="textPan">
                <Link to="/information/limits">
                    Лимиты банков в системе
                </Link>
                <Link to="/information/listGrades">
                    Список уровней
                </Link>
                <Link to="/information/getDocs">
                    Как получить документы в приложениях банков
                </Link>
                <Link to="/information/photoshop">
                    Фотошоп
                </Link>
                <Link to="/information/errors">
                    Виды ошибок
                </Link>
                <Link to="/information/interface">
                    Интерфейс приложения, горячие клавиши, руководство для трейдеров
                </Link>
                </p>
            </p>
        </div>
    );
}

export default Panel;
