import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/image/principRabotySistemy.png'
import img2 from '../assets/image/pytSosdaniaZayavki.png'
import img3 from '../assets/image/pytZayavki.png'
import newWay from '../assets/image/newWay.jpg'
import chatDrop from '../assets/image/chatDrop.jpg'
import img4 from '../assets/image/1.png'
import img21 from '../assets/day2/21.jpg'
import img22 from '../assets/day2/22.jpg'
import l24 from '../assets/day2/24.jpg'
import l25 from '../assets/day2/25.jpg'
import l26 from '../assets/day2/26.jpg'
import img5 from '../assets/image/2.png'
import img6 from '../assets/image/3.png'
import img7 from '../assets/image/4.png'
import l1 from '../assets/image/logic1.jpg'
import l2 from '../assets/image/logic2.jpg'
import l3 from '../assets/image/logic3.jpg'
import l23 from '../assets/day2/23.jpg'
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
            <p className='textDay8'>
            <img src={img21} alt="Статусы инвойсов" />
            </p>
            <p className='textDay8'>
            <img src={img22} alt="Статусы инвойсов" />
            </p>
            {/* <h4>Tass a Coin</h4>
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
            </p> */}

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
      <span className='bold'> Схему работы по синей ваваде рассмотрим в презентации по  </span> 
      <a href='https://docs.google.com/presentation/d/1UAqsvwk0bVTGitlzcpMsSTM1S-Sn9UAoMS3zK4Qbrmo/edit#slide=id.g2d0dd167e86_3_7' target="_blank" rel="noopener noreferrer">ссылке </a><br/><br/>
      {/* <span className='bold'> СХЕМА </span><br/>
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
статус -  рассматривают индивидуально.<br/><br/> */}

       </p> 
       <p className='textDay8'>
       <img src={l2}/>
       <img src={l3}/>
       <img src={l4}/>
       </p>
       <h2>Немного определений, важных для взаимодействия</h2>
       <p className='textDay8'>
       <ul className='textListDay'>
        <li>
           <span className='bold' >
           Партнер</span> -  руководитель команд, который может иметь множество промо (команд) и напрямую сотрудничает с нашим проектом: создает новые команды, договаривается об индивидуальных условиях работы. Он несет всю ответственность за всех своих сотрудников. 
</li><li>
<span className='bold' >
Куратор </span>(тим-лид) - менеджер, который следит за работой агентов (промо) и передает их запросы в чат менеджмент. 
</li><li>
<span className='bold' >Оунер </span>- партнер или куратор, который получает часть вознаграждения агентов своего промокода. 
</li><li>
<span className='bold' >Агенты </span>- операторы, которые  обрабатывают ордера. Их аккаунты отображены в нашей системе PP. Их заявки мы обрабатываем в чате "Support" только на переключение карт.
</li><li>
<span className='bold' >Юзеры </span>- пользователи мерчанта, которые не связаны напрямую с нашей системей. Они "создают" заявки (ивойсы, которые становятся ордерами) которые обрабатывают наши агенты.
        </li>
       </ul>
       </p>
       <p className='textDay8'>
       <img src={l23}/>
       </p>
       <p className='textDay8'>
        <h4>Виды вознаграждений:</h4>
       <ul className='textListDay'>
        
        <li>
           <span className='bold' >
           Партнерское вознаграждение</span> - процент от оборота команды (обычно 0,4%), которое выплачивается партнеру один раз в месяц, 1 числа (+3 дня) криптовалютой.</li><li>
<span className='bold' >
Кастомное вознаграждение </span>(тим-лид) - 
вознаграждение, которое получает оунер. Считается как разница между базовым процентом и процентом вознаграждения, которое получает команда. Выплачивается 1 и 15 числа (+3 дня) криптовалютой. </li><li>
<span className='bold' >За выходные и праздничные дни -  </span>вознаграждение, которое получают агенты за работу в выходные и праздники: 
<br/>- 0,15% от суммы обработанного ордера на пополнение 
<br/>- 0,25% на вывод. 
<br/>Выплачивается два раза в месяц - 1 и 15 числа путем списания рабочего баланса с аккаунтов агентов.</li>
       </ul>
       </p>
       <p className='textDay8'>
       <img src={l24}/>
       </p>

        <h3>Виды ордеров</h3>
       <br/>
<h4>На сайте мерчанта, юзер может выбрать один из способов пополнения или вывода своих средств.
</h4>
       <p className='textDay8'>
       <img src={l25}/>
       </p>
       <p className='textDay'>
       1. Переводы по номеру карты. 
<br/><br/>
Юзер в таком случае указывает номер своей карты (в случае вывода) и в системе подбирается карта с соответствующим балансом. Банк отправителя\получателя может различаться - межбанковский перевод.
       </p>
       <p className='textDay8'>
       <img src={l26}/>
       </p>
       <p className='textDay'>
       2. Переводы по СПБ (система быстрых платежей).
<br/><br/>
Юзер на сайте мерчанта указывает свой актуальный номер телефона и банк (при выводе). Система выбирает карту между всеми активными картами на которой подключено СБП.
<br/><br/>
Переводы осуществляются с помощью номера телефона.
        </p>
       <ButtonNP currentDay={2}/>
        </div>
        </>
    )
}

export default Day2;

