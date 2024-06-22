import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyHello from './chap03/MyHello';
import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';
import books from './chap03/books';
import ForList from './chap03/ForList';
import ForItem from './chap03/ForItem';
import ForNest from './chap03/ForNest';
import ForFilter from './chap03/ForFilter'; // Corrected typo here
import SelectStyle from './chap03/SelectStyle';
import StyledPanel from './chap03/StyledPanel';
import TitledPanel from './chap03/TitledPanel';
import ListTemplate from './chap03/ListTemplate';
import StateParent from './chap03/StateParent';
import EventMouse from './chap03/EventMouse';
import EvnetCompare from './chap03/EventCompare';
import EventObj from './chap03/EventObj';
import EventPoint from './chap03/EventPoint';
import EventKey from './chap03/EventKey';
import EventArgs from './chap03/EventArg';
import EventArgs2 from './chap03/EventArgs2';
import EventPropagation from './chap03/EventPropagation';
import EventOnce from './chap03/EventOnce';
import EventPassive from './chap03/EventPassive';
import StateForm from './chap04/StateForm';
import StateFormUC from './chap04/StateFormUC';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <p>現在時刻: {(new Date()).toLocaleString()}</p>
    <MyHello myName="鈴木" />
    <EventBasic type="time" />
    <StateBasic init={0} />
    <ForList src={books} />
    <ForNest src={books} />
    <p>3500円以下の価格のソート</p>
    <ForFilter src={books} />
    <SelectStyle mode="black" />
    <StyledPanel>
      <p key="title">メンバー募集中</p>
      <p key="body">ようこそwingsプロジェクトへ!!</p>
    </StyledPanel>
    <TitledPanel>
      <p key="title">メンバー募集中</p>
      <p key="body">ようこそwingsプロジェクトへ!!</p>
    </TitledPanel>
    <ListTemplate src={books}>
      {elem => (
      <>
      <dt>
      <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
             {elem.title} ({elem.price}円)
        </a>
      </dt>
      <dd>{elem.summary}</dd>
      </>
      )}
    </ListTemplate>
    <StateParent />
    <EventMouse
      alt="ロゴ画像"
      beforeSrc=""
      afterSrc="https://www.web-deli.com/image/home_chara.gif" />
      <EvnetCompare />
      <EventObj />
      <EventPoint />
      <EventKey />
      <EventArgs />
      <EventArgs2 />
      <EventPropagation />
      <EventOnce />
      <EventPassive />
      <StateForm />
      <StateForm />
  </>
);

reportWebVitals();
