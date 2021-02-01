# Movie App 2021 

React JS Fundamentals Course (2021Updates!)

# 210201
react 요소 생성 자바스크립트와 만들어주고 HTML에 넣어준다.

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM 렌더링 root를 찾아서

?Fast) 소스코드에 처음부터 HTML코드 작성이 아닌 HTML에서 HTML을 추가/제거
빈 HTML 로드 > react가 HTML 입력(Component)

<App /> : Component (HTML return funtion HTML을 반환하는 함수)

리액트는 하나의 component만을 rendering함.

``` 
//props : property 사용
function Food(props){
  console.log(props);
  console.log(props.fav);
  return <h3>I like food</h3>
}

<Food fav="kimchi" something={true} papapa={["hello",1,2,3,4,false]}/>

//property 사용
function Food({fav}){
  console.log(fav);
  return <h3>I like food</h3>
}

<Food fav="kimchi" something={true} papapa={["hello",1,2,3,4,false]}/>

//react 시작
function Food({fav}){
  return <h3>I like {fav}</h3>
}

function App() {
  return (
    <div className="ark">
      <h1>
      Hello!!!
      </h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="roll" />
      <Food fav="shusi" />
    </div>
  );
}
```
            _    _   _
  __ _ _ __| | _| | | |_   _  ___  ___  _ __
 / _` | '__| |/ | |_| | | | |/ _ \/ _ \| '_ \
| (_| | |  |   <|  _  | |_| |  __| (_) | | | |
 \__,_|_|  |_|\_|_| |_|\__, |\___|\___/|_| |_|
                       |___/