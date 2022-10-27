
import {Component} from "react"

class Profile extends Component {
    state={
        time:0
    }
    componentDidMount() {
        setInterval(() => {
          this.setState((previousState) => ({
          time: previousState.time + 1,
          }));
        }, 1000);
      }
      
    render() {
        const {fullName, bio, imgSrc, profession} = this.props;
  return (
    <div className="container" >
        <div >
            <div className="picture" >
                <img className="myimg" src={imgSrc} />
            </div>

            <div className="profile">
                <h1 className="name">{fullName}</h1>
                <h1 className="myProfession">{profession}</h1>
                <p className="myBio">{bio}</p>
            </div>
        </div>
        <button className="clickMe"> Time : {this.state.time}</button>
    </div>
  )
    }
}

export default Profile;