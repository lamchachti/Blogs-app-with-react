 /* start Css dependency */ 

 /* End dependency */ 

/* Components Source */ 
import Navbar from './components/Navbar';
 
import Home from './components/Home'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDtails';
import AppFooter from './components/AppFooter';

/* End Components Source */ 
 
function App() {
 
  return (
    <Router>
       <div className="App">
        <Navbar/>
        <div className="content">
            <Switch>
              <Route  exact path={"/"}>
                <Home/>
              </Route>
              <Route path={"/create"}>
                <Create/>
              </Route>
              <Route path={"/blog/:id"}>
                <BlogDetails/>
              </Route>
            </Switch>
        </div>
        <AppFooter/> 
    </div>
    </Router>
  );
}

export default App;
