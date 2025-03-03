import React from "react";
import StockTracker from "../assests/images/Projects/Stock tracker.jpg";
import ToDoList from "../assests/images/Projects/To-do list.jpg";
import BudgetApp from "../assests/images/Projects/Budget APP.jpg";

const Projects = React.forwardRef((props, ref) => {
  return (
    <section
      className="container project "
      ref={ref}>
      <div className="Projects-header">
        <h1>Projects</h1>
      </div>

      <div className="project-grid">
        <div className="projects">
          <div className="title">
            <h3>Budget App</h3>
          </div>

          <div className="Features">
            <div className="Red">
              <p>React</p>
            </div>

            <div className="yellow">
              <p>Context API</p>
            </div>

            <div className="blue">
              <p>Chart.js</p>
            </div>
          </div>

          <div className="projects-img">
            <img
              src={BudgetApp}
              alt="img"
            />
          </div>

          <div className="btns">
            <div className="Git-btn">
              <button>
                <a href="https://github.com/Delz-create/Budget">Github</a>
              </button>
            </div>

            <div className="Deploy-btn">
              <button>
                <a href="https://budget-ten-flame.vercel.app/">Depoly</a>
              </button>
            </div>
          </div>
        </div>

        <div className="projects">
          <div className="title">
            <h3>To-do List</h3>
          </div>

          <div className="Features">
            <div className="Red">
              <p>React</p>
            </div>

            <div className="yellow">
              <p>State management</p>
            </div>
          </div>

          <div className="projects-img">
            <img
              src={ToDoList}
              alt="img"
              className="To-do"
            />
          </div>

          <div className="btns">
            <div className="Git-btn">
              <button>
                <a href="https://github.com/Delz-create/To-do">Github</a>
              </button>
            </div>

            <div className="Deploy-btn">
              <button>
                <a href="https://to-do-seven-liard.vercel.app/">Depoly</a>
              </button>
            </div>
          </div>
        </div>

        <div className="projects">
          <div className="title">
            <h3>Stock Tracker</h3>
          </div>

          <div className="Features">
            <div className="light-blue">
              <p>React</p>
            </div>

            <div className="grey">
              <p>Fetch API</p>
            </div>
          </div>

          <div className="projects-img">
            <img
              src={StockTracker}
              alt="img"
            />
          </div>

          <div className="btns">
            <div className="Git-btn">
              <button>
                <a href="https://github.com/Delz-create/Stock-tracker">
                  Github
                </a>
              </button>
            </div>

            <div className="Deploy-btn">
              <button>
                <a href="https://stock-tracker-gilt-eight.vercel.app/">
                  Depoly
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
