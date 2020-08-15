import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ExploreClassScreen from './screens/ExploreClassScreen';
import CreateClassForm from './components/CreateClassForm';
import Navigation from './components/Navigation';
import { UserContext } from './context/UserContext';
import EditProfileScreen from './screens/EditProfileScreen';
import ClassDetailScreen from './screens/ClassDetailScreen';


function App() {
  let [logState, setLogState] = useContext(UserContext);
  return (
    <Router>
      <Navigation.Top>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/classrooms" component={ExploreClassScreen}/>
        <Route exact path="/class" component={ClassDetailScreen}/> 
        {logState && (
          <>
            <Route exact path="/createclass" component={CreateClassForm} />
            <Route exact path="/profile/edit" component={EditProfileScreen} />
          </>
        )}
      </Navigation.Top>
    </Router>
  );
}

export default App;
