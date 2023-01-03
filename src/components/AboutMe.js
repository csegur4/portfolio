import './Profile.css'

function AboutMe() {
    return(
        <div className="card-inner" id="about-card">
				<div className="card-wrap">
					<div className="content about">
						<div className="title">About Me</div>			
								<div className="text-box">
									<p>
										Hello everyone 👋, my name is Carlos Segura.
										I'm a Web Developer 👨‍💻, I love 💚 to be able to serve people with my knowledge.
										I currently work as Front End providing efficient solutions to several clients.
										I have good communication skills, excellent teamwork .
										I'm a self-taught  and proactive person.
									</p>
								</div>
							<div className="clear"></div>
					</div>

					<div className="content fuct">
						<div className="title">Fun Fact</div>
						<div className="fuct-items">

							
							<div className="grid grid-cols-2 gap-4 border-line-v">
								<div className="fuct-item">
									<div className="icon"><span className="ion ion-earth"></span></div>
									<div className="name">+25 Places Visited</div>
								</div>
                                <div className="fuct-item">
									<div className="icon"><span className="ion ion-social-instagram-outline"></span></div>
									<div className="name">29 Amazing Reels</div>
								</div>
							</div>
							
							<div className="grid grid-cols-2 gap-4 border-line-v">
								<div className="fuct-item">
									<div className="icon"><span className="ion ion-android-restaurant"></span></div>
									<div className="name">+30 Recipes Completed </div>
								</div>
                                <div className="fuct-item">
									<div className="icon"><span className="ion ion-aperture"></span></div>
									<div className="name">3066 📸 in my 📲</div>
								</div>
							</div>
							<div className="clear"></div>
						</div>
					</div>
				</div>
			</div>
    );
}

export default AboutMe;