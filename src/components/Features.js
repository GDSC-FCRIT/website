import '../style/features.css'
import CommunityGuide from './CommunityGuide';
function Features(){
    return(
        <div className="featuresMainContainer">
            <div className='features'>
                <div>
                <img src="/features/people.png" alt="Logo" style={{ width:'70px' }} />
                    <h1>Connect</h1>
                    <p>Meet students interested in developer technologies in college and make valuable connections. All are welcome!</p>
                </div>
                <div>
                <img src="/features/ruler.png" alt="Logo" style={{ width:'70px' }} />
                    <h1>Learn</h1>
                    <p>Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person.</p>
                </div>
                <div>
                <img src="/features/arrowUp.png" alt="Logo" style={{ width:'70px' }} />
                    <h1>Grow</h1>
                    <p>Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn.</p>
                </div>
            </div>
            <CommunityGuide></CommunityGuide>
        </div>
    )
}
export default Features;