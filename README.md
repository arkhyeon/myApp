# Movie App 2021 

React JS Fundamentals Course (2021Updates!)

# 210205

 - constructor > render(react) 순서 > componentDidMount 
conponent가 mount될 떄 component가 screen에 표시될 때 component가 website에 갈 때 
 > constructor 호출

 - mount
react에서 컴포넌트를 특정 영역에 끼워넣는 행위
ReactDOM.render 함수를 통해 DOM의 특정 영역에 component를 넣는 것

 - render > componentDidUpdate
컴포넌트가 Update(변화)할 떄

 - componentWillUnmount
컴포넌트가 DOM 상에서 제거될 떄
# 210204

 - react 화살표 함수(=>)
bind()함수는 전달된 인자를 this 로 보내는 바인딩 함수를 만듭니다. 
this 는 다른 언어와 달리 실행 문맥(context)에 따라 변합니다. 
React 에서 이벤트 핸들러 함수를 바인드할때 화살표 함수를 사용합니다.

```
  state = {
    count:0
  };
  add = () => {
    this.setState(current => ({count: current.count+ 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count-1}));
  };
  render(){
    return (
      <div>
        <h1>number : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
```

# 210203
오늘은 많은 이야기를 했다..

# 210202
```
const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating : 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating:4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating:4.7
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating:4.6
  }
];

function Food({name, img, rating}){
  return <div>
    <h3>I like {name}</h3>
    <h4>{rating}/5.0</h4>
    <img src={img} alt={name}/>
  </div>

}
//propTypes : 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기
Food.propTypes = {
  name : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  rating : PropTypes.number
}

function App() {
  return (
    <div className="ark">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} img={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}
```
propTypes를 사용하려면 npm i prop-types를 cmd에 사용하여 다운로드 받는다.
확인 : package.json / dependencies에서 확인

오류 > Failed to compile : npm install을 cmd에 사용 오류 해결

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
            _    _   _
  __ _ _ __| | _| | | |_   _  ___  ___  _ __
 / _` | '__| |/ | |_| | | | |/ _ \/ _ \| '_ \
| (_| | |  |   <|  _  | |_| |  __| (_) | | | |
 \__,_|_|  |_|\_|_| |_|\__, |\___|\___/|_| |_|
                       |___/
```