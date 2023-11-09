import BlogList from './BlogList';
import blogArray from './blogData';

function BlogContent(){
    return(
        <div className="min-h-screen  mt-24">
             <div className="text-left pl-10 mb-8">
                <h1 className='inline text-howwedo mt-h1 mb-h1 ms-0 me-0 font-bold'>Blogs</h1>
                <p className='text-gray-500 text-lg'>some informative and inspiring articles by our amazing team!</p>
            </div>
            <div>
            <BlogList blogArray={blogArray} />
            </div>

        </div>
    )
}
export default BlogContent;