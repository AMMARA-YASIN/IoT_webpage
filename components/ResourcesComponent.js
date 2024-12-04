import React from 'react';

function ResourcesComponent() {
  return (
    <div className="bg-secondary py-5 px-5">
      <h1 className="text-primary fw-bold display-3">Resources</h1>
      <p className="text-black">INSERT DESCRIPTION for resources section here.</p>

      <div className="row">
        <div className="col-sm-6">
          <h2 className="text-primary fw-bold">Teaching Resources</h2>
          <ul>
            <li>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-black">
                React Documentation
              </a>
            </li>
            <li>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-black">
                Next.js Documentation
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h2 className="text-primary fw-bold">Learning Resources</h2>
          <ul>
            <li>
              <a href="https://freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-black">
                freeCodeCamp
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="text-black">
                Coursera
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResourcesComponent;