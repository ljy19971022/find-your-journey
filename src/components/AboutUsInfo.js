import React from 'react';
import './AboutUsInfo.css';

const AboutUsInfo=()=> {
  return (
    <div class="row">
      <div class="about-section">
        <h2>About The Team</h2>
        <p>Meet the team behind the National Park Finder web application!</p>
      </div>
      <div class="column">
        <div class="card">
          <div class="container">
          <img class="biophotos" src="https://rotoscopers.com/wp-content/uploads/2013/10/jamsine-princess-disney.jpg" alt="Winnie"></img>
            <div class="names">Winnie Liu</div>
            <p class="title">Front-End Developer</p>
            <p>Drones and plants are my new found hobbies.</p>
            <div class="email"><p>liujyi@seas.upenn.edu</p></div>
           </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
          <div class="container">
          <img class="biophotos" src="https://static.wikia.nocookie.net/harleyquinntv/images/d/dc/Catwoman_HQ.png" alt="Ariel"></img>
          <div class="names">Tiffany Chen</div>
            <p class="title">Front-End Developer</p>
            <p>Radiologist by day, programmer by night. I'm a total night owl!</p>
            <div class="email"><p>qifanchn@seas.upenn.edu</p></div>
        </div>
      </div>
    </div>
    <div class="column">
        <div class="card">
          <div class="container">
          <img class="biophotos" src="https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg" alt="Ariel"></img>
          <div class="names">Ariel Zhao</div>
            <p class="title">Back-End Developer</p>
            <p>Avid photographer and traveler. Always looking for the next adventure.</p>
            <div class="email"><p>olympic@seas.upenn.edu</p></div>
        </div>
      </div>
    </div>
    <div class="column">
        <div class="card">
          <div class="container">
          <img class="biophotos" src="https://static.wikia.nocookie.net/shaniverse/images/7/7f/Grogu.jpg/" alt="Jennifer"></img>
          <div class="names">Jennifer Liang</div>
            <p class="title">Back-End Developer</p>
            <p>Trying to grow an urban jungle at home, but I'm always on the look out for my next hobby.</p>
            <div class="email"><p>jihongl@seas.upenn.edu</p></div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AboutUsInfo;