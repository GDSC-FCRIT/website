import CommunityGuide from './CommunityGuide';
function Features(){
    return(
        <div className="bg-grey backdrop-blur-10 w-full min-h-80">
            <div className='flex justify-around flex-wrap p-features'>
                <div className='block w-features'>
                <img src="/features/people.png" alt="Logo" style={{ width:'70px', display: 'block', margin: '0 auto 10px'}} className='overflow-clip' />
                    <h1 className='block text-faq mt-h1 mb-h1 ms-0 me-0 font-bold'>Connect</h1>
                    <p className='block mt-p mb-p ms-0 me-0'>Meet students interested in developer technologies in college and make valuable connections. All are welcome!</p>
                </div>
                <div className='block w-features'>
                <img src="/features/ruler.png" alt="Logo" style={{ width:'70px', display: 'block', margin: '0 auto 10px'}} className='overflow-clip' />
                    <h1 className='block text-faq mt-h1 mb-h1 ms-0 me-0 font-bold'>Learn</h1>
                    <p className='block mt-p mb-p ms-0 me-0'>Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person.</p>
                </div>
                <div className='block w-features'>
                <img src="/features/arrowUp.png" alt="Logo" style={{ width:'70px', display: 'block', margin: '0 auto 10px'}} className='overflow-clip' />
                    <h1 className='block text-faq mt-h1 mb-h1 ms-0 me-0 font-bold'>Grow</h1>
                    <p className='block mt-p mb-p ms-0 me-0'>Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn.</p>
                </div>
            </div>
            <CommunityGuide></CommunityGuide>
        </div>
    )
}
export default Features;