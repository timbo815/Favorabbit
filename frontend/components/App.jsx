var React = require('react');

var App = React.createClass({
  render: function() {
    return(
      <div>App Goes Here
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
