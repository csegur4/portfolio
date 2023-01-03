import './Profile.css'
import ImageProfile from './images/profile_cs.jpg'
import BgHeader from './images/header-bg.jpg'

function Profile () {
    return (
        <div className="card-started" id="home-card">
				<div className="profile">
					<div className="slide" style={{backgroundImage: `url(${BgHeader})`}}></div>
					<div className="image">
						<img src={ImageProfile} alt="Carlos Segura" />
					</div>
					<div className="title">Carlos Segura</div>
					<div className="subtitle">Web Developer</div>
				</div>

			</div>
    );
}


export default Profile;