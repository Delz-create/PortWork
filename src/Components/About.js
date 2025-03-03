import React from "react";
import AboutImg from "../assests/images/about-imgs/wave.png";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const About = React.forwardRef((props, ref) => {
  const skills = [
    {
      id: 1,
      icon: <FaHtml5 />,
      title: "HTML5",
    },
    {
      id: 2,
      icon: <FaCss3 />,
      title: "CSS3",
    },
    {
      id: 3,
      icon: <FaNodeJs />,
      title: "JavaScript",
    },
    {
      id: 4,
      icon: <FaReact />,
      title: "React.js",
    },
    {
      id: 5,
      icon: <RiNextjsFill />,
      title: "Next.js",
    },
    {
      id: 6,
      icon: <RiTailwindCssFill />,
      title: "Tailwind CSS",
    },
    {
      id: 7,
      icon: <FaBootstrap />,
      title: "BootStrap",
    },
    {
      id: 8,
      icon: <SiMui />,
      title: "MaterialUI",
    },
  ];

  return (
    <section
      className="about container"
      ref={ref}>
      <div className="About-header">
        <h1>About Me</h1>
      </div>

      <div className="About-body">
        <div className="main">
          <div className="About-imgs">
            <div className="about-img">
              <img
                src={AboutImg}
                alt="img"
              />
            </div>
          </div>

          <div className="About-content">
            <p>
              Front-end Web developer, with extensive knowlegde and 4 years of
              experience, working on several projects, delivering quality work.
            </p>
          </div>
        </div>

        <div className="About-skills">
          <div className="About-skills_header">
            <h1>Skills</h1>
          </div>

          <div className="skills">
            <ul>
              <div className="skill">
                {skills.map((skill) => (
                  <li key={skills.id}>
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="react-des">
                      <p>{skill.title}</p>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
