
import React from 'react';
import img1 from "../assets/day1/table/1.jpg";
import img2 from "../assets/day1/table/2.jpg";
import img3 from "../assets/day1/table/3.jpg";
import img4 from "../assets/day1/table/4.jpg";
import img5 from "../assets/day1/table/5.jpg";
import img6 from "../assets/day1/table/7.jpg";
import img7 from "../assets/day1/table/8.png";
import img8 from "../assets/day1/table/6.jpg";
import img9 from "../assets/day1/table/9.jpg";
import img10 from "../assets/day1/table/10.jpg";

const Table = () => {
  const rows = [
    { img: img1, text: 'News For Managers - информационный канал партнерского отдела' },
    { img: img2, text: 'Новости - информационный канал проекта' },
    { img: img3, text: 'ОФИС-ГРУЗИЯ-ИНФО - информационный канал офиса' },
    { img: img4, text: 'Quality - канал отдела контроля качества' },
    { img: img4, text: 'Quality chat - чат для обсуждения и отработки ошибок' },
    { img: img5, text: 'Account Managers - внутренний чат отдела по работе с партнерами' },
    { img: img6, text: 'Account Managers Support - чат с поддержкой' },
    { img: img7, text: 'Toss-a-Coin VAVADA (поиск депозитов) - чат поддержки и мерчанта («синяя»)' },
    { img: img9, text: 'ХОРОШЕЕ НАСТРОЕНИЕ!!! - информационный чат бухгалтерии' },
    { img: img10, text: 'PaysPro - информационный канал для агентов и команд' }
  ];

  return (
    <table style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      <thead>
        {/* <tr>
          <th>Image</th>
          <th>Description</th>
        </tr> */}
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td><img src={row.img} alt={`img-${index + 1}`} style={{ width: '100px', height: 'auto' }} /></td>
            <td>{row.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
