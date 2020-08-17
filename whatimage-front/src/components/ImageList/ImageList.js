import React, { Component } from "react";
import axios from "axios";
import { Image } from "./Image";
import { Button, Spinner } from "react-bootstrap";

export default class ImageList extends Component {
  state = {
    images: [],
    visible: 2,
    isLoading: true,
    newLoaded: false,
    status: false,
  };

  componentDidMount() {
    setTimeout(this.getImages, 1500);
  }

  getImages = () => {
    axios
      .get("http://127.0.0.1:8000/api/images", {
        headers: {
          accept: "application/json",
        },
      })
      .then((resp) => {
        this.setState({
          images: resp.data,
          status: true,
        });
        console.log(resp);
      });
    this.setState({ isLoading: false });
  };

  handleVisible = () => {
    const visible = this.state.visible;
    const new_visible = visible + 2;
    this.setState({ newLoaded: true });
    setTimeout(() => {
      this.setState({ visible: new_visible, newLoaded: false });
    }, 300);
    // this.setState({ newLoaded: false });
  };

  render() {
    const images = this.state.images.slice(0, this.state.visible).map((img) => {
      return <Image key={img.id} pic={img.picture} name={img.classified} />;
    });

    return (
      // <div className="text-center">
      //   {this.state.isLoading && (
      //     <Spinner animation="border" role="status">
      //       <span className="sr-only">Loading...</span>
      //     </Spinner>
      //   )}
      //   <h1>Image List Here</h1>
      //   {images}

      //   {this.state.newLoaded && (
      //     <Spinner animation="border" role="status">
      //       <span className="sr-only">Loading...</span>
      //     </Spinner>
      //   )}
      //   <br></br>
      //   <Button variant="primary" size="md" onClick={this.handleVisible}>
      //     Load More
      //   </Button>
      // </div>
      <div className="text-center">
        <h1>Image List Here</h1>
        {this.state.images.length === 0 && this.state.status && (
          <h3>No images classified</h3>
        )}
        {this.state.isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <React.Fragment>
            {images}
            {this.state.newLoaded && (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
            <br></br>
            {this.state.images.length > this.state.visible &&
              this.state.images.length > 2 && (
                <Button
                  variant="primary"
                  size="md"
                  onClick={this.handleVisible}
                >
                  Load More
                </Button>
              )}

            {this.state.images.length <= this.state.visible &&
              this.state.images.length > 0 && <h3>No More Image to load</h3>}
          </React.Fragment>
        )}
      </div>
    );
  }
}
