import React from 'react';
import { DetalhesPage } from "./pages/detalhes";
import {HomePage } from "./pages/home";
import {NotFoundPage} from "./pages/notFound";
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import {AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';

function App() {
  
  return (
    <BrowserRouter>
      <AppBar position="sticky" >
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            <Typography variant="h6">Home</Typography>
          </Button>
          <Button color="inherit" component={Link} to="/detalhes">
            <Typography variant="h6">Detalhes</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route key='/' component={HomePage} exact path="/"></Route>
          <Route key='/detalhes' component={DetalhesPage} path="/detalhes" ></Route>
          <Route key='N' component={NotFoundPage}></Route>
        </Switch>
        </Container>
    </BrowserRouter>
  )
}

export default App;
