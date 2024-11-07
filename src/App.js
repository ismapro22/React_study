import logo from './logo.svg';
import './App.css';

function App() {

  let post = '학습용 제목 영역';

  return (
    <div className="App">
      {
        //html이 아니라 jsx임
        //원래 리액트에서는 React.createElement('div',null.'Hello World')를 씀
      }                  
      <div className="black-nav">
        <h4>학습용</h4>
      </div>
      <h4>post</h4>
    </div>
  );
}

export default App;
