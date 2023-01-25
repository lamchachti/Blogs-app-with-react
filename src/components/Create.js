import { useState } from "react";
import { useHistory } from "react-router-dom";
import { format } from 'date-fns'
 const Create = () => {
    const [title,setTitle]= useState('')
    const [body,setBody]= useState('')
    const [author,setAuthor]= useState('Ayoub001')
    const publishedAt=             format( new Date(), 'yyyy-MM-dd')
    const [isPending,setIsPending]= useState(false)
    const history = useHistory()
    /* Submit the form                                                               */

    const submitNewBlog= (e)=>{
        e.preventDefault()
        const blog={title,body,author,publishedAt}
        setIsPending(true)
        setTimeout(()=>{
                fetch( 'http://localhost:8000/blogs',{
                method:'POST',
                headers:{"content-type":"application/json"},
                body: JSON.stringify(blog)
            }).then( ()=>{
                setIsPending(false)
            })
            } 
        ,500)
        history.push('/')
    }   

    /* END                                                                            */
    return ( 
        <div className="create">  
            <h2>Add a new blog </h2>
            <form onSubmit={ submitNewBlog }>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value) }
                />
                <textarea
                    required
                    value={body}
                    onChange={ (e)=> setBody(e.target.value) }
                ></textarea>
                <label>Author</label>
                <select value={author}   onChange={ (e)=> setAuthor(e.target.value) } >
                    <option  value="Ayoub001">Ayoub001</option>
                    <option  value="Ayoub01">Ayoub01</option>
                    <option  value="Ayoub1">Ayoub1</option>
                </select>
                {!isPending && <button >Add blog</button> }
                {isPending && <button disabled >Creating...</button>}
                
            </form> 
        </div>
     );
}
 
export default Create;