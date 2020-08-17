import React from "react";
import Button from "react-bootstrap/Button";
import Classifier from "./components/Classifier/Classifier";
import ImageList from "./components/ImageList/ImageList";
import { Navigation } from "./components/Navigation/Navigation";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Classifier} />
          <Route exact path="/history" component={ImageList} />
          <Route exact path="*" component={Classifier} />
        </Switch>
        {/* <ImageList></ImageList> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
