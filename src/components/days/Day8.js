import React from 'react'
import i1 from '../assets/day8/i1.jpg'
import i2 from '../assets/day8/i2.jpg'
import i3 from '../assets/day8/i3.jpg'
import i4 from '../assets/day8/i4.jpg'
import i5 from '../assets/day8/i5.jpg'
import i6 from '../assets/day8/i6.jpg'
import i7 from '../assets/day8/i7.jpg'
import i8 from '../assets/day8/i8.jpg'
import i9 from '../assets/day8/i9.jpg'
import i10 from '../assets/day8/i10.jpg'
import i11 from '../assets/day8/i11.jpg'
import i12 from '../assets/day8/i12.jpg'
import i13 from '../assets/day8/i13.jpg'
import i14 from '../assets/day8/i14.jpg'
import i15 from '../assets/day8/i15.jpg'
import i16 from '../assets/day8/i16.jpg'
import i17 from '../assets/day8/i16.jpg'

import Header from '../Header';
import "./Day.css"
import ButtonNP from '../buttonNP'
const Day8 = () =>{

    return(
      <>
                            <Header currentDay={8} /> 
        <div className= "allDay">
<h1>ВЫВОД КРИПТОВАЛЮТОЙ</h1>
<p className='textDay'>
Команды чистят балансы криптой в случае, если работают только на пополнение или если выводят замороженные балансы, заявки принимаем в чате Crypto Pro
<br/><br/>
Для работы с криптой нам понадобится три ресурса
<br/><br/>
<a href='https://www.bybit.com/fiat/trade/otc?actionType=1&token=USDT&fiat=RUB&paymentMethod='  target="_blank" rel="noopener noreferrer">
Байбит
      </a> - биржа для проверки курса 
<br/><br/>


<a href='https://docs.google.com/spreadsheets/d/14rJCDrPzoHCvOJfiupBAq5KNuWcI4FnXtDzFCFaA8h8/edit?gid=1920523064#gid=1920523064'  target="_blank" rel="noopener noreferrer">
Teams Support PRO Crypto
      </a> - таблица для работы с криптой 
<br/><br/>


<a href='https://tronscan.org/#/'  target="_blank" rel="noopener noreferrer">
Тронскан
      </a> - сайт для проверки хэша <br/><br/><br/><br/>

      Заявка может выглядеть как список карт, одна карта, номер телефона аккаунта и сообщение вроде "хотим почиститься", "обнулиться" или даже эмодзи в виде летающих денег. 
      <br/><br/>
Важно уточнить, планируют ли они почистить весь аккаунт или определенные карты и согласовать  список карт к выводу.
</p>
<p className='textDay8'>
    <img src={i1}/>
</p>
<p className='textDay'>
После того, как список согласован,
заходим в тaблицу <a href='https://docs.google.com/spreadsheets/d/14rJCDrPzoHCvOJfiupBAq5KNuWcI4FnXtDzFCFaA8h8/edit?gid=1920523064#gid=1920523064'  target="_blank" rel="noopener noreferrer">
Teams Support PRO Crypto 2.0
      </a>  на лист ""Транзакции партнеров"" и ставим следующий по порядку номер транзакции, например "1234" (колонка 1).
</p>
<p className='textDay8'>
    <img src={i2}/>
</p>
<p className='textDay'>
После этого морозим все нужные нам для вывода карты с примечанием "крипта". На аккаунте оставляем заметку с уточнением номера транзакции "крипта 1234".
</p>
<p className='textDay8'>
    <img src={i3}/>
</p>
<p className='textDay'>
Затем переходим в лист "Общие выводы", листаем вниз до последнего вывода, отступаем 1 строчку и ставим в колонку 1 номер транзакции - проставляем его ниже столько раз, сколько карт у нас будет участвовать в выводе, если удалось прикинуть сразу. 
<br/><br/>
Либо можно использовать черновик для формирования столбца с картами и их балансами и оттуда переносить уже готовый список, после чего проставлять номер транзакции напротив всех внесенных карт. 
<br/><br/>
Далее указываем DropID для каждой карты и процент вознаграждения для каждого DropID.
</p>
<p className='textDay8'>
    <img src={i4}/>
</p>
<p className='textDay'>
После того, как все заполнено, переходим в лист ""Рабочий свод"" и ищем номер нашей транзакции. В столбце L напротив номера находится комментарий для согласования, который формируется автоматически на основе наших данных.

<br/><br/><br/>
Например, 
<br/><br/>
Вывод #3857 Итоговый баланс по предложенным картам: 88859,26. К выводу (с вычетом вознаграждения): 86271,11. Вознаграждение: 2588,13

<br/><br/>
Отправляем комментарий в группу для согласования с командой. Обязательно ответом на сообщение от куратора со списком карт или аккаунтов. 
<br/><br/>
Уточняем у куратора банк, биржу и курс (если ранее они не предоставили эту информацию в самом запросе).
</p>
<p className='textDay8'>
    <img src={i5}/>
</p>
<p className='textDay'>
Отдел криптоменеджеров каждые 3 часа определяет средний курс. В случае, если курс команды ниже или в пределах +0,3 от среднего курса криптоменеджеров, то расчитываем по нему. 
<br/><br/>

В случае, если выше чем на 0,3, то заходим на <a href='https://www.bybit.com/fiat/trade/otc?actionType=1&token=USDT&fiat=RUB&paymentMethod='  target="_blank" rel="noopener noreferrer">
Байбит
      </a> , в разделе "Купить криптовалюту выбираем торговлю 2р2, ставим режим покупки, выбираем USDT, валюту - рубль. Если сумма запроса свыше 500т.р., то логически разбиваем на суммы переводов и указываем ее в фильтре. Например, если запрос на 600к, то в фильтре указываем 300к и смотрим объявления у которых есть объем на 600к (сумма в фильтре - это сумма диапазона на одну сделку, но у одного продавца может быть достаточно юсдт, которые можно откупить за несколько сделок). Чтобы удостовериться, что то или иное объявление в стакане подойдет куратору - необходимо нажать на "купить" напротив объявления с достаточным объемом и числом сделок и прочитать подробные условия (не должно быть указано, что "принимает только от первых лиц", "перевод в Таджикистан или другую страну", "если в вашем часовом поясе уже другой день". Также обращаем внимание, на то, на какой банк принимает оплату продавец - в самом объявлении может быть указан один банк, а в описании другой, поэтому ориентируемся всегда на описание)
</p>
<p className='textDay8'>
    <img src={i6}/>
</p>
<p className='textDay'>
После согласования курса возвращаем на лист ""Транзакции партнеров"", указываем курс в соотвествующий столбец напротив номера нашей транзакции (C). 
<br/><br/>
Дожидаемся, пока в столбце с предварительной суммой в USDT отобразится значение и копируем автогенерируемое сообщение, в котором будет указана сумма к выводу в usdt и актуальный кошелек. 
<br/><br/>
Например 
<br/><br/>
Вывод #3373 Курс нам подходит. Итого вам нужно отправить: 468,3074 USDT по курсу 88,1 на кошелек TRC20: TDx1tY3cfJ1PbGVp4mp6nhpaUFtfSxWZRP. После совершения перевода ожидаем от вас хэш в текстовом формате.
<br/><br/>
<h2>
❗️Кошелек периодически меняется, необходимо внимательно следить за новостями. Также рекомендуем перепроверять данные таблицы, автоматика не особождает от ошибок! ❗️
</h2></p>
<p className='textDay8'>
    <img src={i7}/>
</p>
<p className='textDay'>
После того, как команда отправит хэш, нужно зайти на <a href='https://tronscan.org/#/'  target="_blank" rel="noopener noreferrer">
Тронскан
      </a> и проверить его. Проверяем, правильную сумму нам отправили, на тот ли кошелек, успешен ли статус перевода и как давно было поступление (должно быть свежее - обычно это до 30 минут). 
</p>
<p className='textDay8'>
    <img src={i8}/>
</p>
<p className='textDay'>
Если прислали больше - уточняем, с какой карты можем списать излишек. Если такой карты нет - уточняем, какая карта из запроса остается в работе и загоняем ее в минус. 
<br/><br/>
Если прислали меньше - вычитаем недостающую сумму в рублях: на листе ""Общие выводы"" указываем сумму разницы напротив любой из карт которая также остается в работе в столбец ""Удержали"", после чего сумма к списанию изменяется и мы делаем коррекцию на меньшую сумму. На карте должна остаться сумма разницы.
</p>
<p className='textDay8'>
    <img src={i9}/>
</p>
<p className='textDay'>
Заходим на лист "Транзакции партнеров" и заполняем оставшиеся столбцы - хэш в столбец H,  кошелек отправителя в стобец I, наш кошелек - J, полученную сумму в стобец G. 
<br/><br/>
ВСЕ ДАННЫЕ НЕОБХОДИМО КОПИРОВАТЬ НЕПОСРЕДСТВЕННО ИЗ ТРОНСКАНА!

<br/><br/>
Если прислали несколько хэшей - заносим каждый в отдельную строчку и прописываем один и тот же номер транзакции
</p>
<p className='textDay8'>
    <img src={i10}/>
</p>
<h2>СПИСАНИЕ</h2>
<p className='textDay'>

Переходим в лист "Общие выводы", возвращаемся к нашему списку карт для транзакции.
</p>
<p className='textDay8'>
    <img src={i11}/>
</p>
<p className='textDay'>
Открываем в DM раздел ордера и нажимаем "+" напротив заголовка раздела (слева вверху).
<br/><br/>
На этом этапе очень рекомендовано держать вкладку с таблицей и вкладку с админкой в разных частях экрана и последовательно заносить всю информацию в форму
<br/><br/>
1. Указываем карту, сумму списания, автосгенерируемый дескрипшн (обязательно проверить чтобы после вставки в нем были прописаны промо и хэш)
<br/>2. Нажимаем "Создать" - появляется список с ордерами. Нажимаем на только что созданный ордер с типом "Коррекция" и введенной ранее суммой, потом нажимаем на номер карты и проверяем чтобы на ней был ожидаемый баланс и закрываем вкладку. (Если ранее вы оставили открытыми вкладки с аккаунтами из запроса, то эту проверку можно делать просто обновив всю вкладку после проведения всех коррекций по аккаунту)
</p>
<p className='textDay8'>
    <img src={i12}/>
</p>
<p className='textDay'>
Если у команды процент вывода 0, то делаем только один ордер - вывод. 

<br/><br/>
3. Далее, если в таблице отображена сумма реворда, то делаем шаги из п.2, но берем сумму и дескрипшен уже из других колонок
</p>
<p className='textDay8'>
    <img src={i13}/>
</p>
<p className='textDay'>
4. После проведения коррекции по каждой карте - ставим галочку напротив этой карты в столбце "Списали"
</p>
<p className='textDay8'>
    <img src={i14}/>
</p>
<p className='textDay'>
После списания неоходимо проверить каждую карту, чтобы на ней не осталось 0.01р., если осталась - списываем с тем же комментарием, что и вывод. Если минус 0.01р., то можно проигнорировать
<br/><br/>
Если баланс списан некорректно - откатываем ордера, правила исправления указаны в методичке. 
<br/><br/>
Если все корректно, смотрим лист "Рабочий свод" - если вывод сделан корректно, ничего не горит красным, а в столбце ""Статус"" напротив вашего вывода стоит галочка.
</p>
<p className='textDay8'>
    <img src={i15}/>
</p>
<p className='textDay'>
Если вывод завершен корректно, то в последнем столбце листа ""Рабочий свод"" появляется финальное сообщение для куратора.
</p>
<p className='textDay8'>
    <img src={i16}/>
</p>
<p className='textDay'>
Копируем и отправляем его в соотвествующий чат, обязательно тегнув сообщение с расчетом или изначальный запрос
<br/><br/>
Например
<br/><br/>
Вывод #3373 завершен. Если карты нужно разморозить - сообщите об этом нам. Если по картам не планируется дальнейшая работа и вы бы хотели их удалить просим сообщить об этом в чат management.
</p>
<p className='textDay8'>
    <img src={i17}/>
</p>
<p className='textDay'>
Удаляем заметки о крипте на аккаунтах, карты размораживаем только по просьбе команды.
<br/><br/>
Как команды должны работать с криптой? 
<br/><br/><br/>
В каждом чате по крипте закреплены правила, которым команды должны следовать, чтобы вывод был сделан нами корректно. Если они не следуют этим рекомендациям - можно сделать им замечание.
<br/><br/>
"Коллеги, просим обратить внимание!<br/>
Основные правила и рекомендации совместной работы. <br/><br/>


Просим следовать простому и рабочему алгоритму действий и не менять его пункты: 
<br/>🟢Необходимо подготовить полный список акаунтов\карт для вывода через криптовалюту и предоставить его нам в формате:
«Полный номер карты или номер телефона если аккаунт будет чиститься полностью» 
<br/>🟢Просим вас сразу указывать следующую информацию: по какому курсу вы хотели бы закупаться, на какой бирже и с какого банка. Эта информация нам потребуется для согласования курса.
<br/>🟢Далее нам потребуется некоторое время для подсчета суммы балансов для вывода и вашего вознаграждения за него.
<br/>🟢Согласовав курс мы отправим вам наш кошелек и сумму USDT для перевода.
<br/>🟢После перевода средств вам необходимо нам предоставить хэш транзакции.
<br/>🟢Для списания балансов потребуется время, мы сразу сообщим вам о готовности после чистки.

<br/><br/><br/>
Основные рекомендации:
<br/><br/>
<br/>💸Каждая заявка на вывод должна быть окончательной. Просим заранее составить список аккаунтов и не менять его, то есть не дополнять или сокращать.
<br/>💸При каждом согласовании вывода необходимо указывать сразу подходящий курс, банк и биржу, напоминаем, что с гарантексом мы не работаем.
<br/>💸Согласовывать курс отдельно для каждого вывода, поскольку он очень быстро теряет свою актуальность.
<br/>💸Не закупать крипту до согласования курса!
<br/>💸Необходимо отправлять суммы одним хэшем. 
<br/>💸Также необходимо отправлять точную согласованную ранее нами сумму usdt 
<br/>💸Присылать заявки на изменение режимов карт необходимо после завершения вывода. 
<br/>💸Не присылать заявки более чем за сутки, поскольку видим по практике, что такие аккаунты в итоге включаются в работу или чистятся переносами.
<br/>💸Комиссия за перевод лежит на отправителе.
<br/><br/>
❗️Напоминаем, что с такими биржами как «Garantex»,  «Beribit» и """"ТГ Wallet"""" мы не принимаем платежи.❗️"
<br/><br/>Биржи, с которых мы принимаем крипту: 
Bybit<br/>
KuCoin<br/>
BitGet<br/>
MEXC<br/>
HTX<br/>
BingX<br/>
</p>
<p className='textDay'>

</p>














<ButtonNP currentDay={8}/>
        </div>
        </>
    )
}

export default Day8;
