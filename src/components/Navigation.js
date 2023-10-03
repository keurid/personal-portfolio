// Navigation.js
import React from 'react';

const Navigation = ({ currentSection, onNavigationClick }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            onClick={() => onNavigationClick(section)}
            className={currentSection === section ? 'active' : ''}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
