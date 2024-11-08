// /*eslint-disable */ <-워닝 제거하는 거

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() { //실은 유우명한 컴포넌트임

  let post = '학습용 제목 영역';//코드 중간에 바뀌어도 바로 반영X
  let [글제목1, b1] = useState('가을엔 전어구이');//스테이트는 반영 바로 됨
  let [글제목, b] = useState(['여름엔 수박','겨울엔 귤']);//배열도 가능
  let [logo, setLogo] = useState('학습용 프론트');//근데 제목은 잘 안 바뀌니 굳이state 안해도 됨
  //b는 state 변경 도와주는 함수

  let [likes, changeLike] = useState(0);

  //let num = [1, 2];
  //let [a, c] = [1, 2];//디스트럭쳐링 문법
  //let a = num[0];  //let c = num[1];

  function 함수(){
    console.log(1);
    //state는 등호로 변경하면 반영이 안 됨
  }

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

      <button onClick={()=>{
          let copy2 = [...글제목];
          copy2.sort();
          b(copy2);
        }}> 가나다순 정렬</button>

      <button onClick={()=>{
        let arr = [1,2,3];//array/object 담은 변수엔 위치만 저장됨
        

        //array/object 요약
        //state가 array/object면 독립적 카피본(shallow copy)을 만들어서 수정해야 함

        let copy = 글제목1;//[...글제목] <-array는 이렇게(화살표 바꿔달라는 뜻)
        //state 변경함수 특 기존이랑 신규state가 같으면 변경 안 해줌
        copy = '봄에는 유채꽃이지';
        b1(copy)}}> 하지만 봄에는? </button>

      <div className="list">
        <h4>{글제목1} <span onClick={()=>{changeLike(likes+1)}/**이 안에 함수채로 만들어도 됨 */}>❤</span> {likes} </h4>
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
        //중괄호{}로 변수를 넣는다. 데이터 바인딩
      }

      {/* <Modal></Modal> 이렇게 쓰거나 아래처럼 바로 닫아도 됨 */}
      <Modal/>
      

    </div>
  );
}

//아래같이 구현 가능하고 const 대신 let도 씀.
// const Modal = () => {
//   return (
//     <div>

//     </div>
//   )
// }

//컴포넌트가 좋은 경우
//1. 반복적인 html 축약할 때
//2. 큰 페이지들
//3. 자주 변경되는 UI들
//단점: state 가져다 쓸 때 문제가 생김.
//예) A 함수의 변수는 B 함수에서 맘대로 갖다 쓸 수 없음
function Modal(){
  return (
    //내가 축약할 html을 담기
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

export default App;
