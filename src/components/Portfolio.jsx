import React from "react";
import google from "../assets/portfolio/google.png";
import installNode from "../assets/portfolio/installNode.jpg";
import ecommerce from "../assets/portfolio/ecommerce.png";
import firebase_chatapp from "../assets/portfolio/firebase_chatapp.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: firebase_chatapp,
      demolink: "https://firebase-chat-application-nine.vercel.app/",
      githubsrc: "https://github.com/Manoj-Chowdhury/firebase-chat-application"
    },
    {
      id: 2,
      src: google,
      demolink: "https://personal-google-search-app-clone.netlify.app/",
      githubsrc: "https://github.com/Manoj-Chowdhury/google-search-clone"
    },
    {
      id: 3,
      src: ecommerce,
      demolink: "#",
      githubsrc: "https://github.com/Manoj-Chowdhury/strapi_ecommerce_app_frontend"
    },
    {
      id: 4,
      src: reactSmooth,
      demolink: "#",
      githubsrc: "#"
    },
    {
      id: 5,
      src: installNode,
      demolink: "#",
      githubsrc: "#"
    },
    {
      id: 6,
      src: reactWeather,
      demolink: "#",
      githubsrc: "#"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demolink, githubsrc }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-44"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demolink} target="_blank" rel="noreferrer">Demo</a>

                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={githubsrc} target="_blank" rel="noreferrer">code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
