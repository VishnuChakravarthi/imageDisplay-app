import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };
    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.ImageRef.current.clientHeight;
    const span = Math.ceil(height / 10 + 1);
    this.setState({ span });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img
          ref={this.ImageRef}
          src={this.props.image.urls.regular}
          alt={this.props.image.description}
        />
      </div>
    );
  }
}

export default ImageCard;
