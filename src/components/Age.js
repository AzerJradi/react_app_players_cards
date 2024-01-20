// Import the React library
import React from 'react';

// Import the styles for the Age component from StylePlayer.css
import './StylePlayer.css';

// Age component: Displays the age received as a prop
function Age(props) {
  return (
    <div>
      <h4>{props.age}</h4> {/* Display the age value passed as a prop */}
    </div>
  );
}

// Export the Age component as the default export
export default Age;
