import React from 'react';
import { connect } from 'react-redux'
import Navbar from './Navbar';
import { logout, fetchLoggedUser } from "../../../redux/actions/user"


class NavbarContainer extends React.Component {

    constructor(props){
        super(props)

        this.handleClickLogout = this.handleClickLogout.bind(this)  
    }

    render() {
        return (
            <Navbar
                user={this.props.user}
                logOutLoggedUser={this.props.logout}
            />
        );
    }

    handleClickLogout(){
        console.log('ENTRE AL LOGUOT')
        localStorage.clear()
        this.props.logout()
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        user: state.user.user
    };
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchLoggedUser: () => dispatch(fetchLoggedUser()),
        logout: () => dispatch(logout())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer);
