import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfileTC(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>;

    return (
      <Profile {...this.props} userProfile={this.props.userProfile}/>
    )
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent);
