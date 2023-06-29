
import React from 'react';
import '../App.css'
import background from '../images/pic-3.jpg';
import { Link} from 'react-router-dom'


function Home(){

return(
    <div>
<div className='main-container'>
      <div className='top'>
         <div className='part-1'>
         <div className='title'>
            <h1>GET YOUR NEW APPLE WATCH</h1>
            <h2>With 50% Off</h2>
            <h2>Enjoy your day With <span className='apple'>Apple</span></h2>
        </div>
         </div>
        
        <div className='part-2'>
        <div className='image'>
           <img src={background} alt="watch"   />  
        </div>
        </div>
        
        </div>
        <div className='bottom'>
        <div className='text'>
           <p>The Apple Watch 8, the latest iteration of Apple's iconic smartwatch, pushes the boundaries of innovation even further. With its sleek design, advanced features, and seamless integration, it sets a new standard for wearable technology. From its vibrant display to its powerful performance, the Apple Watch 8 offers an unparalleled user experience. With upgraded health monitoring capabilities, extended battery life, and an expanded app ecosystem, it empowers users to lead a healthier and more connected life. Whether you're a fitness enthusiast, a tech aficionado, or a fashion-forward individual, the Apple Watch 8 is a must-have accessory that combines style and substance like never before.</p>
        </div>
        </div>
        </div>

      <div className='sections'>
      <div>
          <Link to="service">service </Link>
       </div>
       <div>
          <Link to="about">about </Link>
       </div>
       <div>
          <Link to="contact">contact </Link>
       </div>
     
      </div>
      </div>
);
}
      export default Home;