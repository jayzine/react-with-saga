import './App.css';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './containers/User';


function App() {
  return (
    <div className="App">
      <Typography>
        Redux saga app
      </Typography>
      <User />
      <Router>
        <Routes>
          <Route exact path="/" component={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
