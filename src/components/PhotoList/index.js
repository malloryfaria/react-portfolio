import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'Password Generator',
      category: 'projects',
      description: 'This site is a strong password generator tool',
      url: 'https://malloryfaria.github.io/password-generator/',
      githubURL: 'https://github.com/malloryfaria/password-generator'
    },
    {
      name: 'Tech Blog',
      category: 'projects',
      description: 'A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. This app uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.',
      url: 'https://mallory-tech-blog.herokuapp.com/',
      githubURL: 'https://github.com/malloryfaria/tech-blog'
    },
    {
      name: 'Weather Dashboard',
      category: 'projects',
      description: 'A weather dashboard with a 5 day forecast that will run in the browser and feature dynamically updated HTML and CSS.',
      url: 'https://malloryfaria.github.io/weather-dashboard/ ',
      githubURL: 'https://github.com/malloryfaria/weather-dashboard'
    },
    {
      name: 'PokeParte',
      category: 'projects',
      description: 'PokéParté is a website that creates a roster of Pokémon based on your location and the current weather data. Pokémon have unique skills based on their “type” and have higher attacks in certain weather conditions. A Pokémon player would find it interesting and fun to see what kind of Pokémon they could catch near them if they existed in real life.',
      url: 'https://damn-ma-6.github.io/Poke-Parte/',
      githubURL: 'https://github.com/damn-ma-6/Poke-Parte'
    },
    {
      name: 'mnmlize',
      category: 'projects',
      description: 'Use this site to organize your life and live a minimalist lifestyle.',
      url: 'https://mnmlize.herokuapp.com/',
      githubURL: 'https://github.com/P-I-M/Personal-Inventory-Management-'
    },
    {
      name: 'PWA Budget Tracker',
      category: 'projects',
      description: "This is a budget tracker application that allows for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.",
      url: 'https://frozen-wildwood-23744.herokuapp.com/',
      githubURL: 'https://github.com/malloryfaria/pwa-budget-tracker'
    },
    {
      name: 'CurrenSeed',
      category: 'projects',
      description: "Currenseed is an online farmer’s market. There is no real world currency here. Products are paid for using “seeds” which can be purchased via credit card, earned by doing certain tasks such as logging in, and by interacting with the website (ie. Buying and making sales). Buyer’s can browse kiosks based on their location, to ensure that they are able to buy fresh produce and other items locally. Buy local, online.",
      url: 'https://currenseed.herokuapp.com/',
      githubURL: 'https://github.com/DJ-KARMA/currenseed'
    },
    {
      name: 'Resumé',
      category: 'resumé',
      description: 'Mallory is Certified Salesforce Administrator with a demonstrated history of working in the tech industry. Skilled in Customer Relationship Management, Microsoft Excel, Salesforce Administration, Technical Support and Customer Service. Strong in information technology, graduated with an A.E.C. in Building Services focused in Architecture Technology from Montreal Technical College. She is currently studying full-stack web development at UofT.',
      url: 'https://www.linkedin.com/in/malloryfaria/',
      download: 'https://github.com/malloryfaria/react-portfolio/public/CV-mallory.pdf'
    }
  ]);

  const [currentPhoto, setCurrentPhoto] = useState();
  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    
    <div>
      {isModalOpen && (
  <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
)}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
