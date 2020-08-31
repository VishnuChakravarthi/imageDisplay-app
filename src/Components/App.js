import React from "react";
import unsplash from "../Api/Unsplash.js";
import SearchBar from "../Components/SearchBar.js";
import ImageSet from "../Components/ImageSet.js";

class App extends React.Component {
  state = { images: [] };

  onFormSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    // console.log(this.state.images);
  };

  // this.setState({ images = response.})

  render() {
    return (
      <div className="">
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageSet images={this.state.images} />
      </div>
    );
  }
}

export default App;
