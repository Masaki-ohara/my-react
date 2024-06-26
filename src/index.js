/* eslint-disable react/jsx-no-undef */
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
import FormTextarea from './chap04/FormTextarea';
import FormSelect from './chap04/Form.select';
import FormList from './chap04/FormList';
import FormRadio from './chap04/FormRadio';
import FormCheck from './chap04/FormCheck';
import FormCheckMulti from './chap04/FormCheckMulti';
import FormFile from './chap04/Form.File';
import StateNest from './chap04/StateNest';
import StateNestImmer from './chap04/StateNestImmer';
import StateNestImmer2 from './chap04/StateNestImmer2';
import StateTodo from './chap04/StateTodo';
import FormBasic from './chap04/FormBasic';
import FormYup from './chap04/FormYup';
import FormJapan from './chap04/FormJapan';

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
      <StateFormUC />
      <FormTextarea />
      <FormSelect />
      <FormList />
      <FormRadio />
      <FormCheck />
      <FormCheckMulti />
      <FormFile />
      <StateNest />
      <StateNestImmer />
      <StateNestImmer2 />
      <StateTodo />
      <FormBasic />
      <FormYup />
      <FormJapan />
  </>
);

reportWebVitals();
