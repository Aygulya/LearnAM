import React from 'react'
import "./Day.css"
import i1 from '../assets/day6/1.jpg'
import i2 from '../assets/day6/2.jpg'
import i3 from '../assets/day6/3.jpg'
import i4 from '../assets/day6/4.jpg'
import i5 from '../assets/day6/5.jpg'
import i6 from '../assets/day6/6.jpg'
import i7 from '../assets/day6/7.jpg'
import i8 from '../assets/day6/8.jpg'
import i9 from '../assets/day6/9.jpg'
import i10 from '../assets/day6/10.jpg'
import i11 from '../assets/day6/11.jpg'
import i12 from '../assets/day6/12.jpg'
import ButtonNP from '../buttonNP'
import Header from '../Header';
const Day6 = () =>{

    return(
        <>
                            <Header currentDay={6} /> 
        <div className= "allDay">
 <h3>ВЕРИФИКАЦИЯ </h3>
            <p className='textDay'>
            Чтобы зарегистрировать нового дропа, нам необходимо получить запрос от куратора или партнера в чате, убедиться в том, что если команда работает по депозиту - у нее есть свободный лот, проверить тикет, убедиться в том, что дроп написал в поддержку и после этого подтвердить регистрацию. Пройдемся по каждому шагу. 
<br/><br/>
1. Запрос в чате. 
<br/>
Мы можем принимать запросы на регистрацию нового дропа в чатах менеджмент, саппорт🟢, чатах партнеров. Запрос должен включать в себя: 
<br/>ФИО аккаунта
<br/>Номер карты 
<br/>телефон 
<br/>телеграм 
<br/>но для нас главное ФИО и номер карты, остальное необязательно требовать.  <br/><br/>
2. Проверка лота.
Если команда работает с депозитом, таблице «Депы за карты» мы должны перейти на лист «Свод» и в колонке H посмотреть, есть ли свободные лоты для регистрации. Если есть - переходим к следующему пункту, если нет - пишем комнанде, что свободных лотов нет, стоимость лота и актуальный кошелек для внесения. 

<br/><br/>
3. Проверка тикета 
<br/><br/>
Лайфхак: <br/>
Ответственный за верификации проверяет новых дропов раз в 1 час и заносит их в трелло, поэтому перед тем, как перейти к поиску тикета, рекомендуем проверить трелло - возможно, кто-то уже занес нового дропа туда. Для этого необходимо зайти в Трелло, в правом верхнем углу нажать на лупу и появившейся строке ввести номер карты из заявки. 
<br/>Если появится карточка, то внутри нее вы увидите ссылку на нужный вам тикет
</p>
<p className='textDay8'>
    <img src={i1}/>
</p>
<p className='textDay'>
Если в трелло нет нужной карты, значит, необходимо перейти в ДМ и искать по новым тикетам тот, который соответствует заявке.
</p>
<p className='textDay8'>
    <img src={i2}/>
</p>
<p className='textDay'>
В первую очередь, необходимо взять тикет в работу, для этого нужно нажать «В РАБОТУ» в правом верхнем углу. Если тикет уже в работе у вашего коллеги, то нужно нажать на кнопку «ДЕЙСТВИЯ» на том же месте, а затем - «в ожидание», после чего взять тикет в работу со своего аккаунта.
</p>
<p className='textDay8'>
    <img src={i3}/>
</p>
<p className='textDay'>
В тикете нам необходимо убедиться, что аккаунт зарегистрирован на того человека, который указан в паспорте, он регистрируется по своей воле и достиг 18 лет, а также что карта корректна.  Поэтому, мы проверяем следующие пункты: 
<br/>- промо тот же, что и промо чата, откуда вам прислали запрос на верификацию; 
<br/>⁃ имя в паспорте совпадает с именем в системе, допустимы - транслитерация, незначительная опечатка, уменьшительные имена; 
<br/>⁃ у россиян принимаем только полный разворот паспорта, у иностранцев достаточно страницы, на которой видны фотография и имя; 
<br/>⁃ на селфи похожий на себя в паспорте человек, оно выглядит актуальным, нет дополнительной обработки в фотошопе или фильтров; 
<br/>⁃ все перечисленные выше данные соответствуют друг другу;
</p>
<p className='textDay8'>
    <img src={i4}/>
</p>
<p className='textDay'>
- далее мы проверяем, корректно ли введен в систему номер карты; 
</p>
<p className='textDay8'>
    <img src={i5}/>
</p>
<p className='textDay'>
Лайфхак!<br/>
Чтобы убедиться, что номер карты корректен, рекомендуем скопировать номер карты, открыть фотографию карты и вставить номер в адресную строку, а затем разбить его по 4 цифры - так проверять легче и вы точно не ошибетесь.
</p>
<p className='textDay8'>
    <img src={i6}/>
</p>
<p className='textDay'>
Дропы могут регистрироваться через бот или приложение.<br/>
Если дроп зарегистрировался через приложение, то мы можем проверить заполнение через выпадающее окно и там отметить лайками все заполненные корректно поля или поставить дизлайк на тот пункт, который некорректен. После дизлайка тикет закроется, и нужно будет сообщить в чат команды, что именно было заполнено некорректно, чтобы они могли вернуться в приложение и откорректировать эти данные
</p>
<p className='textDay8'>
    <img src={i7}/>
    <img src={i8}/>
</p>
<p className='textDay'>
4. Если с тикетом все хорошо, или команда доотправила нужную нам информацию, то теперь необходимо убедиться, связался ли дроп с поддержкой. Для этого нужно открыть телеграм-аккаунт поддержки PaysPro_support и по поиску пробить номер карты. Если номер бьется, значит дроп написал, и можно его верифицировать. В чат проваливаться не нужно, читать сообщения не нужно. 
<br/>Если нет - пишем в чат команды, что ожидаем, когда сотрудник свяжется с поддержкой для верификации.
<br/><br/>
Рекомендуем в случае ожидания дополнительной информации или депозита добавлять  заметки на тикете.
</p>
<p className='textDay8'>
    <img src={i9}/>
</p>
<p className='textDay'>
5. Если в итоге все хорошо, то если дроп регистрировался через приложение  - ставим все лайки, если через бот - ставим «подтвержден». 
<br/><br/>

Ответственный за верификации на смене должен проверять тикеты раз в час и добавлять информацию в трелло, в колонку новый дроп. 
<br/><br/>
Карточка должна иметь следующее название - имя дропа, номер карты, промокод.
<br/><br/>
В описании карточки должна быть ссылка на тикет.  
</p>
<p className='textDay8'>
    <img src={i10}/>
</p>
<p className='textDay'>
    <h2 className='h'>ДРАФТ И ВЕРИФИКАЦИЯ КАРТ </h2>
    Дропы могут иметь на аккаунте 10 активных карт и 5 замороженных по блоку карт. Карты в систему они добавляют самостоятельно, но мы проверяем их и верифицируем вручную. 
<br/><br/>
Запрос <br/><br/>

Запросы на верификацию карт принимаются только в чатах менеджмента, саппорта с расширенными полномочиями и в чатах с партнерами. 
<br/><br/>
Запросы могут выглядеть так:    
</p>
<p className='textDay8'>
    <img src={i11}/>
</p>
<p className='textDay'>
Главное в запросе - номер карты, он должен быть полным, чтобы мы могли быстро обнаружить карту в системе. Для этого заходим в раздел «Bank Cards» в ДМ, ждем на фильтр, вводим номер карты в поле «Card Number» и ждем применить. Система находит нашу карту, заходим в нее.  
</p>
<p className='textDay8'>
    <img src={i12}/>
</p>
<p className='textDay'>
Новая карта находится в статусе «Черновик» или «Драфт», пока мы ее не проверим и не подтвердим - она не активна. Чтобы проверить карту, копируем ее номер, находим в расположенных слева от нее фотографиях нужную нам и проверяем ее номер.  
<br/><br/>
Далее проверяем, есть ли у команды лот для ее добавления, если лотов не хватает - сообщаем об этом команде, отправляем им стоимость лота и кошелек. Затем проверяем, не превышен ли на аккаунте лимит по добавленным картам. После этого, если все хорошо - можем верифицировать карту, для этого нажимаем «TO WORK», а затем «APPROVE».
<br/><br/>
Если команда депозитная - добавляем ее в таблицу по депозитам, в раздел «Активация карт». Кроме того, необходимо проверить по таблице Info на листе промо в каком режиме работает команда и отключить выводы, если она работает только на пополнения, так как новые карты автоматически работают в круг 
</p>
<ButtonNP currentDay={6}/>
        </div>
        </>
    )
}

export default Day6;
