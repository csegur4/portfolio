import './Profile.css'
import Card from './Card';
import projects from './projects';


function Works() {
    return(
        <>
        <div className="card-inner" id="works-card">
				<div className="card-wrap">
					<div className="content works">
                        <div className="title"><span className="first-word">Recent</span> Works</div>
						<div className="grid md:grid-cols-2 md:gap-6">
                            {
                                projects.map(p =>{
                                    return <Card key={p.id} url={p.url} title={p.title} desc={p.desc} />
                                })
                            }
							<div className="clear"></div>
						</div>

					</div>

				</div>
			</div>
        </>
    );
}

export default Works;
