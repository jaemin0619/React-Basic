import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
//JSX 문법에선 class 넣을땐 classname
//중괄호 사용시 변수 중괄호 넣으면 가능 = 데이터바인딩
//서버에서 데이터 가져와서 html 사이에 넣어달라할 때 사용
//return() 안에서는 병렬로 태그 2개 이상 기입 금지 
//Destructing 문법 
//let [a,b]={1,2}; -> a=1, b=2; 
//글제목 = 남자 코드 추천 b = 변경 함수 
// state는 갑자기 변경되면 state쓰던 html은 자동 재렌더링됨
// 변수는 변경하면 html을 변경해줘야함 -> 위 답변으로 문제 해결 
// 자주변경될거같은 html 부분은 state로 만들어놓기!

function App() {

  let post = '강남 우동 맛집';
  //let [글제목,b]=useState('여자 코트 추천');
  //let [a,c]=useState('강남 우동 맛집');
  //let [세번째,d]=useState('파이썬독학'); -> 내가 짠 코드
  let [글제목,글제목변경]=useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉,따봉변경]=useState(0);
function 정렬(){
  let newArray=[...글제목];
newArray=newArray.sort();
글제목변경(newArray);
}

  function 함수(){
    console.log(1);
  }
  return (
    <div className="App">
     <div className="black-nav"> 
     <h4 style={{color:'red',fontSize:'16px'}}>ReactBlog</h4>
     </div>
<button onClick={()=>{
  let arr=[1,2,3];
  let copy=[...글제목];
  copy[0]='여자코트 추천';
  글제목변경(copy);

}}>글수정</button>
      
      <button onClick={정렬}>가나다 순 정렬</button>
    
     <div className="list">
      <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
     </div>
     <div className="list">
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p>
     </div>
     <div className="list">
      <h4>{글제목[2]}</h4>
      <p>2월 17일 발행</p>
     </div>
<Modal></Modal>

    </div>
  );
}
function Modal(){
return (
  <div className="model">
    <h3>제목</h3>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
)
}

export default App;
