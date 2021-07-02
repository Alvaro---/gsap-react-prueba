import React, { useRef, useEffect } from 'react'
import { TweenMax, TimelineLite, Power3 } from 'gsap'
import './App.scss';


import arrow from './images/arrow-rigth.svg'

function App() {
  let app = useRef(null);
  let images = useRef(null);

  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 }) //delay opcionad


  useEffect(() => {
    //IMAGES VARS
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    //CONTENT VARS
    const headFirst = content.children[0].children[0];
    const headSecond = content.children[0].children[1];
    const headTirth = headSecond.nextSibling; //el siguiente elemento. 
    const contentP = content.children[1];
    const contentButon = content.children[2];

    console.log(headTirth)

    //REMOVE INIT FLASH
    TweenMax.to(app, 0, { css: { visibility: 'visible' } })
    //Target, direction, condiguration of the animation
    //      console.log(boyImage)

    //IMAGES ANIMATION
    tl.from(girlImage, 1.2, { y: 1200, ease: Power3.easeOut }, 'Start')
      .from(girlImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
      .from(boyImage, 1.2, { y: 1200, ease: Power3.easeOut }, .2)
      .from(boyImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)

    //tl o timeline dice cual va antes y cual luego. El ultimo valor de .2 dice la demora antes de ese efecto

    //CONTENT ANIMATION
    tl.staggerFrom([headFirst.children, headSecond.children, headTirth.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: 0.2
    }, .3, 'Start') //Start es para que inicie con la anterior Puede ser cualquier palabra, pero igual a la anterior. Solo demorara el delay
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      // objeto, tiempo en terminar la animacion, { posiciones inicio, efecto, delay del anterior}
      .from(contentButon, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)


  }, [tl]) //Cuando tl este listo


  return (
    <div className="hero" ref={el => app = el} >
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving ther border</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">SecondLine</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Comportamientos</div>
                </div>
              </h1>
              <p>Contenido de parrafo un poco largo Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in illum rerum asperiores inventore placeat officia, est accusamus dolores beatae eaque veritatis pariatur soluta! Placeat quos id consequatur. Officia, iste?</p>
              <div className="btn-row">
                <button className="explore">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-img-inner" ref={el => images = el}>
              <div className="hero-img girl">
                <img src="https://i2.wp.com/wipy.tv/wp-content/uploads/2019/01/Muri%C3%B3-el-perrito-m%C3%A1s-famosos-de-internet-2.jpg?w=1000&ssl=1" />
              </div>
              <div className="hero-img boy">
                <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
