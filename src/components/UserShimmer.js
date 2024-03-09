import React from 'react';

class UserShimmer extends React.Component {
    
    render() {
        return (<div className="userShimmer">
            <div className = "userShimmerImg"></div>
            <div className = "userShimmerTxt">
                <div className="userShimmerFirstTxt"></div>
                <div className="userShimmerSecondTxt"></div>
            </div>
        </div>)
    }
}

export default UserShimmer;