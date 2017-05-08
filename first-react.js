var TweetBox = React.createClass({
  getInitialState: function() {
    return {
      text: "",
      photoAdded: false
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
  },
  togglePhoto: function(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  },
  remainingCharacters: function() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  },
  overFlowAlert: function(){
  if(this.remainingCharacters()<0){
  if(this.state.photoAdded){
  var before = this.state.text.substring(140 -23 - 10,140-23);
  var after = this.state.text.substring(140-23);
  }else {
        var beforeOverflowText = this.state.text.substring(140 - 10, 140);
        var overflowText = this.state.text.substring(140);
        }
  return(
  <div className="alert alert-warning">
  <strong>Ooops! Too Long:</strong>
  &nbsp;...{before}
  <strong className="bg-danger">{after}</strong>
  </div>
  );
  }else{
  return "";
  }
  },
  render: function() {
    return (
      <div className="well clearfix">
      {this.overFlowAlert()}
        <textarea className="form-control"
                  onChange={this.handleChange}></textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <button className="btn btn-primary pull-right"
          disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>
        <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
        </button>
      </div>
    );
  }
});

ReactDOM.render(
  <TweetBox />,
  document.getElementById("container")
);
