import React from 'react';
import '../App.css';
import watch from '../images/pic-3.jpg'
function About(){
    return (<div>
   
   <div className='container-about'>
  
   <h1 className='about-title'>
    About our watch :
   </h1>

     <p>
     The Apple Watch has undergone several iterations, and the Apple Watch Series 2 was a notable milestone in its evolution. Released in 2016, this second-generation smartwatch introduced significant enhancements, making it a sought-after device for tech enthusiasts. 

The Apple Watch Series 2 brought forth improvements in key areas, particularly fitness tracking and water resistance. It introduced built-in GPS functionality, allowing users to accurately track their outdoor activities, such as running and cycling, without the need for an iPhone. This upgrade enabled users to map their routes, monitor their pace, and receive precise distance measurements, enhancing their overall fitness experience. Moreover, the Series 2 also introduced water resistance, making it suitable for swimming and water-based workouts. With this feature, users could track their swim workouts, monitor their performance metrics, and even count their laps, offering a comprehensive fitness companion for aquatic activities. 

In addition to its fitness-focused features, the Apple Watch Series 2 retained the core functionalities of its predecessor, such as notifications, app integration, and Siri voice control. Its sleek design, wide range of customizable bands, and variety of watch faces allowed users to personalize their device to match their style and preferences. With its combination of advanced fitness tracking, water resistance, and seamless connectivity, the Apple Watch Series 2 solidified its position as a versatile and indispensable wearable device for those seeking a blend of fashion, fitness, and convenience.
     </p>
   </div>   
   
    <img src={watch} alt="apple" className='watch'></img>

   
    </div>);
}
export default About;