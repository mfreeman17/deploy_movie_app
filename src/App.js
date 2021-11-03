import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Movie from './Movie.js'
import Home from './Home.js'
import { Route, Switch } from 'react-router-dom';


import './App.css';

class App extends React.Component {





  render (){
    return (


            <div>

                <Switch>
                 <Route path="/" component={Home} exact/>,
                 <Route path = "/movie/:id" component = {Movie} />

               </Switch>
            </div>

    );
  }
}

export default App;
