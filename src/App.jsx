import './App.css'

import image0 from './assets/0.jpg'
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'

function App() {
  return (
    <>
      <div className="images">
        <Image imagePath={image0} />
        <Image imagePath={image1} />
        <Image imagePath={image2} />
        <Image imagePath={image3} />
      </div>
      <div className="texts">
        <Text locationName={"French Alps (Chamonix Mont Blanc)"}
              author={"Jan Kronies"}
              sourceUrl={"https://unsplash.com/photos/a-red-tree-in-front-of-a-mountain-range-eKKDL7lrYt0"}/>

        <Text locationName={"Sorapiss, Auronzo di Cadore, Italy"}
              author={"Luca Bravo"}
              sourceUrl={"https://unsplash.com/photos/worms-eye-view-of-mountain-during-daytime-ii5JY_46xH0"}/>

        <Text locationName={"Ober Gatlinburg, Gatlinburg, United States"}
              author={"Chad Madden"}
              sourceUrl={"https://unsplash.com/photos/aerial-photography-of-trees-and-road-cPa-7yByq3o"}/>

        <Text locationName={"Niederbauen-Chulm, Emmetten, Switzerland"}
              author={"Dino Reichmuth"}
              sourceUrl={"https://unsplash.com/photos/landscape-photography-of-black-and-white-mountain-kk3W5-0b6e0"}/>
      </div>
    </>
  )
}

function Image ({ imagePath }) {
  return (
    <div className="background-image" style={{ backgroundImage: 'url(' + imagePath + ')' }}>
    </div>
  )
}

function Text ({ locationName, author, sourceUrl }) {
  return (
    <div className="text">
      <h1>{locationName}</h1>
      <a href={sourceUrl} target="_blank">{author}</a>
    </div>
  )
}

export default App
