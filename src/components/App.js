import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './ui/Header';
import theme from './ui/Theme';
import Test from './test';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/contact' component={() => <div>Contact</div>} />
          <Route exact path='/about' component={() => <h1>About</h1>} />
          <Route exact path='/revolution' component={() => <h1>Rev</h1>} />
          <Route exact path='/websites' component={() => <h1>Web</h1>} />
          <Route exact path='/mobileapps' component={() => <h1>Apps</h1>} />
          <Route
            exact
            path='/customsoftware'
            component={() => <h1>Software</h1>}
          />
          <Route exact path='/services' component={() => <h1>Services</h1>} />
          <Route exact path='/' component={Test} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
