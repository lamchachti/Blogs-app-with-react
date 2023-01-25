import { Link } from "react-router-dom";
const BlogListFiltred = (props) => {
    const blogs=props.blogs
    if(blogs.length>0){
        return ( 
            <div className="blog-list">
               {
                    blogs.map((blog)=>(
                     <div className="blog-preview" key={blog.id}>
                         
                         <Link to={"/blog/"+blog.id} style={{
                                textDecoration:'none'
                            }}>
                            <h2>{blog.title}</h2>
                            <div className="pub-info">
                                <p>Written By {blog.author} </p>
                                <p>{blog.publishedAt}</p>
                            </div>
                         </Link>
                      
                     </div>
                     ))
               }
            </div>
          );
    }
    else{
        return ( <div className="empty-content"> <h3>No blog yet!</h3> </div>)
    }
}
 
export default BlogListFiltred;