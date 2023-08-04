import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-12 md:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          Hi there! My name is Manoj Chowdhary. I'm aspiring to become a MERN stack developer.
          Experience in developing responsive web applications using react.js, redux, node.js, express.js, mongoDB, vanilla JavaScript, firebase, HTML, CSS, RESTful Api etc.
          <br />
          <br />
          I have worked on several projects which include e-commerce web application, chat application, google search application clone etc. with advanced features.
          <br />
          <br />
          I'm constantly striving to improve my skills and stay up to date with the latest industry trends, I'm always eager to take on new challenges and learn something new.
          <br />
          <br />
          I'm excited to explore new opportunities that will allow me to utilize my skills and contribute to meaningful projects.
        </p>

        {/* <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p> */}
      </div>
    </div>
  );
};

export default About;
