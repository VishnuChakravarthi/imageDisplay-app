import React from "react";

class SearchBar extends React.Component {
  state = { text: "cars" };

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  componentDidMount() {
    return this.props.onSubmit(this.state.text);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui container search_bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>
              <h1 className="ui header">Type in and press enter to search</h1>
            </label>
            <input
              onChange={this.onInputChange}
              value={this.state.text}
              type="text"
              placeholder="Search..."
            />
          </div>
        </form>
        {/* <input
          onChange={this.onInputChange}
          type="text"
          placeholder="Search..."
        />
        <button onClick={this.onFormSubmit} className="ui icon button">
          <i className="search icon"></i>
        </button> */}
      </div>
    );
  }
}

export default SearchBar;
