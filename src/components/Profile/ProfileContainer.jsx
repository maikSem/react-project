import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../../redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfileTC(userId);
    this.props.getUserStatusTC(userId)
  }

  render() {
    return (
      <Profile {...this.props}
               userProfile={this.props.userProfile}
               updateUserStatusTC={this.props.updateUserStatusTC}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC}),
  withRouter
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); // обертка над Profilecontainer для  редиректа в /login
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);  //обёртка над AuthRedirectComponent для получения данных из URL-адреса
//
// export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent);
