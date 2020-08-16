import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import CreateClassForm from './components/CreateClassForm';
import Navigation from './components/Navigation';
import { UserContext } from './context/UserContext';

import ExploreClassScreen from './screens/ExploreClassScreen';
import EditProfileScreen from './screens/profile/EditProfileScreen';
import ViewProfileScreen from './screens/profile/ViewProfileScreen';
import ClassDetailScreen from './screens/ClassDetailScreen';
import MyClassScreen from './screens/MyClassScreen';
import JoinCommunityScreen from './screens/JoinCommunityScreen';
import PartnersScreen from './screens/PartnersScreen';

function App() {
  let [logState, setLogState] = useContext(UserContext);

  return (
    <Router>
      <Navigation.Top>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/classrooms" component={ExploreClassScreen} />
        <Route exact path="/classrooms/:id" component={ClassDetailScreen} />
        <Route exact path="/joincommunity" component={JoinCommunityScreen} />
        <Route exact path="/partners" component={PartnersScreen} />
        <Route exact path="/profile/:id" component={ViewProfileScreen} />
        {logState && (
          <>
            <Route
              exact
              path="/classrooms/create"
              component={CreateClassForm}
            />
            <Route exact path="/profile/edit" component={EditProfileScreen} />
            <Route exact path="/myclass" component={MyClassScreen} />
          </>
        )}
      </Navigation.Top>
    </Router>
  );
}

export default App;
