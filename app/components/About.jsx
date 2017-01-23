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
      <h1 className="text-center">About</h1>
      <p>This is a weird weather app made with React.</p>
      <p>
        Here are some tools used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Weather API
        </li>
      </ul>
    </div>
  );
};

module.exports = About;