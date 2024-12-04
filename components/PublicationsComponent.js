import React from 'react';
import { Nav } from './Navbar'; // Replace with the actual path to Nav.js

function PublicationsComponent() {
  const navigationData = {
    title: "SafeNet IoT", // Customize with your application title
    links: [
      { title: "People", link: "/people" },
      { title: "Research", link: "/research" },
      { title: "Publications", link: "/publications" },
      { title: "Events", link: "/events" },
      { title: "Lab", link: "/lab" },
      { title: "Resources", link: "/resources" },
      { title: "Contact", link: "/contact" }
    ],
  };
  return (
    <div>
      <Nav {...navigationData} />
      <div>
        <h1>Publications</h1>
        <p>I am a passionate web developer with a strong background in...</p>
      </div>
    </div>
  );
}

export default PublicationsComponent;