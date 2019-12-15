import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import TodosContainer from "./containers/TodosContainer";
import TodoDetailContainer from "./containers/TodoDetailContainer";
import NotFound from "./components/NotFound";
import AboutContainer from "./containers/AboutContainer";
import ContactusContainer from "./containers/ContactusContainer";

const App = () => (

  
  

  <BrowserRouter>
    <div>
      <nav>
        <ul>
        <li><NavLink exact to="/">
          Todo list
        </NavLink></li>
        <li><NavLink exact to="/about">
          About us
        </NavLink></li>
        <li><NavLink exact to="/contactus">
          Contact us
        </NavLink></li>
        </ul>
        
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={TodosContainer} />
          <Route exact path="/todos/:id" component={TodoDetailContainer} />
          <Route exact path="/about" component={AboutContainer} />
          <Route exact path="/contactus" component={ContactusContainer} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer></footer>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
