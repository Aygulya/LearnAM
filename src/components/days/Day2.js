import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/image/principRabotySistemy.png'
import img2 from '../assets/image/pytSosdaniaZayavki.png'
import img3 from '../assets/image/pytZayavki.png'
import newWay from '../assets/image/newWay.jpg'
import chatDrop from '../assets/image/chatDrop.jpg'
import img4 from '../assets/image/1.png'
import img5 from '../assets/image/2.png'
import img6 from '../assets/image/3.png'
import img7 from '../assets/image/4.png'
import l1 from '../assets/image/logic1.jpg'
import l2 from '../assets/image/logic2.jpg'
import l3 from '../assets/image/logic3.jpg'
import l4 from '../assets/day1/2.jpg'
import day3 from '../assets/image/day3.png'
import "./Day.css"
import ButtonNP from '../buttonNP'
import Header from '../Header';
const Day2 = () => {
    return (
        <>
                            <Header currentDay={2} /> 
        <div className="allDay">
            <h3>Принцип работы системы</h3>
            <p className='textDay8'>
            <img src={img1} alt="Принцип работы системы" />
            </p>

            <h3>ПУТЬ СОЗДАНИЯ ЗАЯВКИ</h3>
            <p className='textDay8'>
            <img src={img2} alt="Путь создания заявки" />
            {/* <img src={day3}/> */}
            </p>

            <h3>Статусы инвойсов</h3>
            <h4>Tass a Coin</h4>
            <p className="textDay">
          <span className='blue'>Новый </span>- короткий стартовый статус инвойса - идёт
 подбор карты дропа<br/>
 <span className='blue'>Создан </span> - короткий стартовый статус инвойса. Требует
 дополнения<br/>
 <span className='blue'>В ожидании </span> - базовый временный статус, когда карта и
 ордер сформированы, и ожидается финализация<br/><br/>
 У выплаты может быть, если она попала в тикет, и тикет
 не закрыт.<br/><br/>
 <span className='red'>Верификация </span>- между ТаС и DM нарушилась связь.<br/>
 После обновления не замечено. (В данный момент
 отсутствует).<br/><br/>
 <span className='red'>Отклонен </span>- вместо просрочен<br/><br/>
 <span className='red'>Отменен </span>- финальный статус (скорее всего закрыт через
тикет, либо ошибка в системе)<br/><br/>
<span className='green'>Оплачен </span>- финальный

            </p>

            <h4>Статусы ордеров</h4>
            <h4 className='bold'>DropoMania</h4>
            <p className='textDay'>
                <span className='bold'>Депозит:</span><br/>
                <span className='darkBlue'>В ожидании</span>— <span className='orange'>просрочен</span> — <span className='darkOrange'>проверка</span>
                (не закрытый тикет) - <span className='green'>оплачен</span> /<span className='red'>отменен</span>  (тикет)<br/><br/>
            </p>
            <p className='textDay'>
                <span className='bold'>Выплата:</span><br/>
                <span className='darkBlue'>В ожидании</span>— <span className='orange'>просрочен</span>(не финальный) / <span className='orange'>неудача</span> (нажал дроп, не финальный, тикет) — <span className='red'>отклонен</span>
                (финальный, только вручную, оператор) /<span className='green'>оплачен</span> (финальный)
            </p>

            <h4>Примечание (важное)</h4>
            <p className='textDay'>
                ВЕРИФИКАЦИЯ:<br/><br/>
                Когда по техническим причинам в ТАС привязалась
                карта, но не создался ордер (по различным причинам,
                такие как активный не закрытый ордер у дропа), для
                этого мы убеждаемся, что средства по чеку из синей
                вавады действительно поступили (спрашиваем у дропа
                инфу по чеку, поступали ли средства), далее мы
                оплачиваем заявку в ТАС меняя статус верификация на
                оплачен и вводим <span className='bold'>сумму из чека</span>. Далее мы заполняем
                таблицу верификации, чтобы старший смены в
                дальнейшем на основе этой информации поднял вручную
                баланс дропу на сумму оплаченной заявки.
            </p>
            <h3>ПУТЬ ЗАЯВКИ</h3>
            <p className='textDay8'>
            <img src={newWay}/>
            </p>
      <h3>СХЕМА РАБОТЫ ПО СИНЕЙ</h3>
       <p className='textDay'>
      <span className='bold'> РАБОТА ПО СИНЕЙ </span>- схема<br/><br/>
      <span className='bold'> СХЕМА </span><br/>
      <span className='bold'>1. </span>Видим чек от синей - пишем «см», тэгая(«ответить») это
сообщение(любое последующее сообщение - тэгаем именно первое
сообщение синей с чеком)<br/>
<span className='bold'>2. </span>Копируем номер заявки(инвойс) - открываем ТаС для поиска - на
странице invoices(слева) нажимаем на фильтр(справа), и вставляем
скопированный из синей инвойс в графу «Merchant Invoice ID». Перед
вами карточка именно этой заявки.<br/>
<span className='bold'>3. </span> Копируем Invoice ID из карточки инвойса, и переходим в DM.
<br/><span className='bold'>4. </span>В DM открываем Orders(слева), вставляем в фильтре(справа)
скопированный инвойс и открываем карточку ордера
<br/><span className='bold'>5. </span> Если всё ок, и статус просрочен - оплачиваем, нажав в верхнем углу
кнопку pay, введя <span className='bold'> сумму, которая в чеке </span>(комиссию <span className='bold'> не </span> учитываем) -
пишем в синюю <span className='bold'> "Оплачен" </span>. ГОТОВО.<br/><br/>
Если кейс нельзя решить сразу - обращаем внимание на ЗАКРЕП в
синей. Там есть все шаблоны.
ВАЖНО оповещать синюю о тех или иных ситуациях.
<br/><br/>
Если что-то не так, например не совпадает карта, или время, или другой
статус -  рассматривают индивидуально.<br/><br/>

       </p> 
       <p className='textDay8'>
       <img src={l2}/>
       <img src={l3}/>
       <img src={l4}/>
       </p>
       <ButtonNP currentDay={2}/>
        </div>
        </>
    )
}

export default Day2;

