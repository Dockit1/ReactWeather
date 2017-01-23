const React = require('react');

// const About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

const About = function (props) {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to About</p>
    </div>
  );
};

module.exports = About;