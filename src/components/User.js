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
                        
                        <p className = "userAbout userMargin">A diligent and enthusiastic 2nd-year BTech student pursuing Computer Science and Engineering at Jadavpur University. With a passion for technology and a keen interest in programming, I am constantly exploring new concepts and technologies to expand my knowledge.

I believe in the importance of practical learning, which is why I actively participate in coding competitions and hackathons to enhance my problem-solving skills. My coursework has provided me with a strong foundation in computer science principles, and I am eager to apply this knowledge to real-world projects.

Outside of academics, I enjoy collaborating with peers on coding projects and engaging in discussions about the latest developments in the tech industry. I am committed to continuous learning and growth, and I am excited about the opportunities that lie ahead in my academic and professional journey.
                        </p>
                        <h3 className ="UserLocation userMargin">Location : {location}</h3>

                    </div>
                </div>)
    }
}

export default User;