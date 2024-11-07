import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '학습용 제목 영역';//코드 중간에 바뀌어도 바로 반영X
  let [글제목1, b1] = useState('가을엔 전어구이');//스테이트는 반영 바로 됨
  let [글제목, b] = useState(['겨울엔 귤','여름엔 수박']);//배열도 가능
  let [logo, setLogo] = useState('학습용 프론트');//근데 제목은 잘 안 바뀌니 굳이state 안해도 됨
  //b는 state 변경 도와주는 함수

 
  //let num = [1, 2];
  //let [a, c] = [1, 2];//디스트럭쳐링 문법
  //let a = num[0];  //let c = num[1];


  return (
    <div className="App">{/*return 안에는 병렬로 태그 2개 이상 기입 금지*/}
      {
        //html이 아니라 jsx임
        //원래 리액트에서는 React.createElement('div',null.'Hello World')를 씀

        //JSX 문법 요약 3가지
        //1. class 넣을 땐 className
        //2. 변수 넣을 땐 {변수명}
        //3. style 넣을 땐 style={{이름:'값'}}
      }            

      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '20px'} }>{logo}</h4>
        {/*html은 <h4 style={"color : red"}>지만 JSX는 위와 같음*/}
        {/*<h4 id={post}> 이렇게도 가능*/}
      </div>

      <div className="list">
        <h4>{글제목1}</h4>
        <p>11월 07일 발행</p>
      </div>
      
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>11월 06일 발행</p>
      </div>
      
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>11월 05일 발행</p>
      </div>

      <h4>{ post }</h4>{
        //중괄호로 변수를 넣는다. 데이터 바인딩
      }
    </div>
  );
}

export default App;
