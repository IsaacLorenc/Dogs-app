import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

function App() {

  // The return statement is a JSX expression that describes what should be
  // rendered to the DOM. The BrowserRouter component is responsible for
  // managing the history stack and navigating between different routes.
  return (
    <Router>

      {/* The Nav component is rendered at the top of the application. */}
      <Nav dogs={dogs} />

      {/* The Switch component is used to render only one of its children
          routes that match the current URL. */}
      <Switch>

        {/* This is the route for the main list of dogs. When this route
            matches, the DogList component is rendered. */}
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>

        {/* This is the route for viewing details about a specific dog. The
            name of the dog is a parameter in the URL. When this route
            matches, the DogDetails component is rendered. */}
        <Route path="/dogs/:name">
          <DogDetails dogs={dogs} />
        </Route>

        {/* If none of the above routes match, this Redirect component is
            rendered. It redirects the user to the main list of dogs. */}
        <Redirect to="/dogs" />
      </Switch>
    </Router>
  );
}


export default App;
