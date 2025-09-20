/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/coding-pic.jpg";

const imageAltText = "Coding screen on a laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Blog Platform 📝",
    description:
      "Feature-rich full-stack blog app with login/signup, posts, editing, likes, comments, and user dashboards. Built with Flask, SQLAlchemy & CSS for smooth, responsive interactions.",
    url: "https://k7611.pythonanywhere.com/",
  },
  {
    title: "LoadPilot – Dispatcher Dashboard 🚛",
    description:
      "Powerful dispatcher system with driver/load management, login/signup, status filters, and live dashboard analytics. Built with Flask & SQLite for real-time logistics tracking.",
    url: "https://github.com/Kaur7611/loadpilot-dashboard",
  },
  {
    title: "Contact Book App 📇",
    description:
      "Secure, user-friendly contact manager with login/signup and full CRUD operations. Developed with Flask & SQLite with a clean, responsive interface.",
    url: "https://github.com/Kaur7611/contact-book",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
