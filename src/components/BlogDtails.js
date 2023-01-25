import { useHistory, useParams } from "react-router-dom";
import FetchData from "./FetchData"; 
import Loader from './loader'
const BlogDetails = () => {
    const {id}= useParams()
    const {data:blog,isPending,error}= FetchData('http://localhost:8000/blogs/'+id)
    const history= useHistory()
    const deleteBlog= () =>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            {error && <div> { error } </div> }
            { isPending && <Loader></Loader>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                    <p>Written By <b>{blog.author}</b></p>
                    <div className="delete-btn-container">
                       <button onClick={deleteBlog}>Delete</button> 
                    </div>
                </article>
               
            )}
        </div>
     );
}

export default BlogDetails;