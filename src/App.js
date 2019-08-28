import React from 'react';
import { DetalhesPage } from "./pages/detalhes";
import {HomePage } from "./pages/home";
import {NotFoundPage} from "./pages/notFound";
import {BrowserRouter,Route,Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={HomePage} exact path="/"></Route>
      <Route component={DetalhesPage} path="/detalhes" ></Route>
      <Route component={NotFoundPage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
