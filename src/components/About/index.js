import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        I am a Certified Salesforce Administrator with a demonstrated history of working in the tech industry. 
        Skilled in Customer Relationship Management, Microsoft Excel, Salesforce Administration, Technical Support and Customer Service. 
        I graduated with an A.E.C. in Building Services focused in Architecture Technology from Montreal Technical College. 
        I'm currently studying coding at the University of Toronto's coding bootcamp.
        In my free time, I enjoy snuggling with my 2 long-haired chihuahuas Poquito and Havana. I also enjoy board games and pole fitness.
        </p>
      </div>
    </section>
  )
}

export default About