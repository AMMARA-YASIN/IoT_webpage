import React from 'react';

function ResourcesComponent() {
  return (
    <div>
      <h1> Resources</h1>
      <ul>
        <li>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React Documentation
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Next.js Documentation
          </a>
        </li>
        {/* Add more resources as needed */}
      </ul>
    </div>
  );
}

export default ResourcesComponent;