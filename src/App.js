import React from 'react';

function Food({name, picture}) {
  //console.log(props)
  return(
    <div>
      <h2>love {name}</h2>
      <img src={picture} />
    </div>
  )
}

const foodILike = [
  {
    name: 'apple',
    image: "https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572_1280.jpg"
  },
  {
    name: 'banana',
    image: "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg"
  },
  {
    name: 'lime',
    image:"https://cdn.pixabay.com/photo/2017/03/10/15/15/lime-2133091_1280.jpg",
  },
  {
    name: 'orange',
    image:"https://cdn.pixabay.com/photo/2016/10/07/14/11/tangerines-1721633_1280.jpg"
  }
]

function renderFood(){

}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
