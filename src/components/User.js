import React from 'react';
import UserShimmer from './UserShimmer';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : null
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sourav-n06");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        });
    }
    render() {
        if (!this.state.userInfo ) return <UserShimmer/>
        const { name, avatar_url, location, html_url} =this.state.userInfo;
        return (<div className="UserOuter">
                    <div className = "UserLeft">
                            <img className = "UserImg" src = {avatar_url}/>
                    </div>
                    <div className = "UserRight">
                        <h2 className= "userName userMargin">{name}</h2>
                        
                        <p className = "userAbout userMargin">Creator is a BTech student from the 2026 batch of Computer Science and Engineering at Jadavpur University. They are likely passionate about technology, eager to learn, and engaged in their studies. Jadavpur University is known for its strong academic programs, especially in engineering and technology, so it's a great place for someone interested in pursuing a career in the field. Creator's involvement in the CSE program suggests they have a keen interest in computer science and are dedicated to their education. It's an exciting time to be studying in the field of technology, with so many advancements and opportunities available. User's participation in the CSE program at Jadavpur University will likely provide them with a solid foundation for their future career endeavors.

                        Creator's decision to pursue a degree in Computer Science and Engineering at Jadavpur University reflects their passion for technology and their ambition to build a successful career in the tech industry. With the right combination of academic excellence, practical experience, and networking, User is well-positioned to achieve their goals and make a positive impact in the field of computer science.
                        </p>
                        <h3 className ="UserLocation userMargin">Location : {location}</h3>

                    </div>
                </div>)
    }
}

export default User;