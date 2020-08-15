import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import CreateClassForm from './components/CreateClassForm';
import Navigation from './components/Navigation';
import { UserContext } from './context/UserContext';

import ExploreClassScreen from './screens/ExploreClassScreen';
import EditProfileScreen from './screens/profile/EditProfileScreen';
import ViewProfileScreen from './screens/profile/ViewProfileScreen';


function App() {
  let [logState, setLogState] = useContext(UserContext);
  return (
    <Router>
      <Navigation.Top>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/classrooms" component={ExploreClassScreen}/>
        {logState && (
          <>
            <Route exact path="/createclass" component={CreateClassForm} />
            <Route exact path="/profile" component={ViewProfileScreen} />
            <Route exact path="/profile/edit" component={EditProfileScreen} />
          </>
        )}
      </Navigation.Top>
    </Router>
  );
}

export default App;
