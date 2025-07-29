import React, { useState, useEffect, useRef } from "react";
import StockTracker from "../assests/images/Projects/Stock tracker.jpg";
import ToDoList from "../assests/images/Projects/To-do list.jpg";
import BudgetApp from "../assests/images/Projects/Budget APP.jpg";
import Kesti from "../assests/images/Projects/Kesti landing page.jpg";
import HomeInspo from "../assests/images/Projects/Home inspo.jpg";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

const Projects = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Budget App",
      Feature_1: "React",
      Feature_2: "Context API",
      Feature_3: "Chart.JS",
      img: BudgetApp,
      gitHubLink: "https://github.com/Delz-create/Budget",
      deployLink: "https://budget-ten-flame.vercel.app/",
    },
    {
      id: 2,
      title: "Kesti",
      Feature_1: "State management",
      Feature_2: "Context API",
      Feature_3: "React Router",
      img: Kesti,
      gitHubLink: "https://github.com/Delz-create/Kestitradies-react.git",
      deployLink: "https://kestitradies-react.vercel.app/",
    },
    {
      id: 3,
      title: "To-do List",
      Feature_1: "React",
      Feature_2: "State management",
      img: ToDoList,
      gitHubLink: "https://github.com/Delz-create/To-do",
      deployLink: "https://to-do-seven-liard.vercel.app/",
    },
    {
      id: 4,
      title: "Stock Tracker",
      Feature_1: "React",
      Feature_2: "Fetch API",
      img: StockTracker,
      gitHubLink: "https://github.com/Delz-create/Stock-tracker",
      deployLink: "https://stock-tracker-gilt-eight.vercel.app/",
    },
    {
      id: 5,
      title: "Home inspo",
      Feature_1: "TS",
      Feature_2: "Fetch API",
      Feature_3: "Tailwind",
      img: HomeInspo,
      gitHubLink: "https://github.com/Delz-create/breezy-admin-blog.git",
      deployLink: "https://breezy-admin-blog.vercel.app/",
    },
  ];

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextProject();
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <section
      className="container project"
      ref={ref}>
      <div className="Projects-header">
        <h1>Projects</h1>
      </div>

      <div
        className="project-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}>
        <div
          className="left"
          onClick={prevProject}>
          <IoArrowBackCircle />
        </div>

        <div className="project-slider">
          <div
            className="project-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projects.map((project) => (
              <div
                className="projects"
                key={project.id}>
                <div className="title">
                  <h3>{project.title}</h3>
                </div>

                <div className="Features">
                  {project.Feature_1 && <p>{project.Feature_1}</p>}
                  {project.Feature_2 && <p>{project.Feature_2}</p>}
                  {project.Feature_3 && <p>{project.Feature_3}</p>}
                </div>

                <div className="projects-img">
                  <img
                    src={project.img}
                    alt={project.title}
                  />
                </div>

                <div className="btns">
                  <div className="Git-btn">
                    <button>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.gitHubLink}>
                        Github
                      </a>
                    </button>
                  </div>

                  <div className="Deploy-btn">
                    <button>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.deployLink}>
                        Demo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="right"
          onClick={nextProject}>
          <IoArrowForwardCircle />
        </div>
      </div>
    </section>
  );
});

export default Projects;
