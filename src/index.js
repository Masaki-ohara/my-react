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
import LazyBasic from './chap05/LazyBasic';
import LazyMulti from './chap05/LazyMulti'
import SuspenseSimple from './chap05/SuspenseSimple';
import SuspenseResult from './chap05/SuspenseResult';
import ProfilerBasic from './chap05/ProfilerBasic';
import StyleBasic from './chap05/StyleBasic';
import StyledCss from './chap05/StyledCss';
import StyledDynamic from './chap05/StyledDynamic';
import StyledComp from './chap05/StyledComp';
import { MyButton, MyStyledButton } from './chap05/StyledComp2';
import StyledCommon from './chap05/StyledCommon';
import StyledProps from './chap05/StyyledProps';
import EmotionJsx from './chap05/Emotionjsx';
import EmotionComp from './chap05/EmotionComp';
import PortalBasic from './chap05/PortalBasic';
import ErrorRoot from './chap05/ErrorRoot';
import ErrorRetryRoot from './chap05/ErrorRetryRoot';
import ErrorEventRoot from './chap05/ErrorEventRoot';
import MaterialBasic from './chap06/MaterialBasic';
import MaterialDrawer from './chap06/MaterialDrawer';
import MaterialGrid from './chap06/MaterialGrid';
import { CssBaseline, ScopedCssBaseline, ThemeProvider } from '@mui/material';
import theme from './chap06/theme';
import MaterialMode from './chap06/MaterialMode';
import FormMui from './chap06/FormMui';
import StateEffect from './chap07/StateEffect';
import HookTimer from './chap07/HookTimer';
import HookRefNg from './chap07/HookRefNg';
import HookRef from './chap07/HookRef';
import HookRefForward from './chap07/HookRefForward';
import HookCallbackRef from './chap07/HookCallbackRef';
import HookReducer from './chap07/HookReducer';
import HookReducerUp from './chap07/HookReducerUp';
import HookReducerInit from './chap07/HookReducerInit';
import HookContext from './chap07/HookContext';
import MyThemeProvider from './chap07/ MyThemeProvider';
import HookThemeButton from './chap07/HookThemeButton';

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
      <LazyBasic />
      <LazyMulti />
      <SuspenseSimple />
      <SuspenseResult />
      <ProfilerBasic />
      <StyleBasic />
      <h3>Styled JSXの部品化</h3>
      <StyledCss />
      <StyledDynamic theme={{
        radius: true,
        color: 'royalblue'
      }} />
      <StyledComp />
      <MyButton>ボタン</MyButton>
      <MyStyledButton>ボタン</MyStyledButton>
      <StyledCommon />
      <StyledProps />
      <EmotionJsx />
      <EmotionComp />
      <div id="dialog"></div>
      <PortalBasic />
      <ErrorRoot />
      <ErrorRetryRoot />
      <ErrorEventRoot />
      <br />
      <MaterialBasic />
      <br />
      <MaterialDrawer />
      <MaterialGrid  />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MaterialBasic />
      </ThemeProvider>
      <br />
      <MaterialMode />
      <FormMui />
      <StateEffect init={0}/>
      <HookTimer init={10}/>
      <HookRefNg />
      <HookRef />
      <HookRefForward />
      <HookCallbackRef />
      <HookReducer init={0} />
      <HookReducerUp init={0} />
      <HookReducerInit init={0} />
      <HookContext />
      <MyThemeProvider>
        <HookThemeButton />
      </MyThemeProvider>
  </>
);

reportWebVitals();
