

import BlogList from './BlogList'
import FetchData from './FetchData';
import Loader from './loader'
import { useState } from "react";
import { format } from 'date-fns'
import BlogListFiltred from './BlogListFiltred';
const Home = () => {
    const {data:blogs,isPending,error}= FetchData('http://localhost:8000/blogs')
    /*  Depends the filter bar */
    const [filtredBy,setFiltredBy] = useState('All blogs')
    const [isFiltred,setIsFiltred] = useState(false)
    const [filtredBlogs,setFilredBlogs] =  useState([])
    const [isFiltring,setIsFeltring]    = useState(false)
    const [ author , setAuthor ] = useState('Ayoub01')
    const [ date , setDate] = useState(format( new Date(), 'yyyy-MM-dd'))
    /********************************** */
    function makeFilter(filter){
        console.log(filter)
        setIsFeltring(true)
        setIsFiltred(true)
         switch(filter){
            case 'All blogs'   : setIsFiltred(false) ;break;
            case 'Bublished by' :
                filterByAuthor(author)
            break;
            case 'Bublished at': filterByDate(date)
         }
        setIsFeltring(false)
    }

    function filterByAuthor(preferedAuhtor){
        setFilredBlogs(blogs.filter( (blog) => blog.author === preferedAuhtor ))
    }
    function filterByDate(preferedDate){
        setFilredBlogs(blogs.filter( (blog) => blog.publishedAt === preferedDate ))
    }
    /*********END***********************/
   
    return ( 
            <div className="home" >
                <div className="filter">
                { filtredBy === 'All blogs' && <h2>All blogs</h2> }
                { filtredBy !== 'All blogs' && <h2>Filtred By </h2> }
                
                <select value={filtredBy}   onChange={ (e)=> {
                        setFiltredBy(e.target.value);
                        makeFilter(e.target.value);
                } } >
                        <option  value="All blogs">All blogs</option>
                        <option  value="Bublished at">Bublished at</option>
                        <option  value="the most liked most liked">The top 10 most liked</option>
                        <option  value="Bublished by">Bublished by</option>
                </select>
                {filtredBy ==='Bublished at' && <input type="date"  onChange={
                                                                   (e)=>{
                                                                            setDate(e.target.value);
                                                                            filterByDate(e.target.value)
                                                                        }
                                                                } 
                                                ></input>}
                {filtredBy ==='Bublished by' && <select 
                                                        value={author} 
                                                        onChange={
                                                                   (e)=>{
                                                                            setAuthor(e.target.value);
                                                                            filterByAuthor(e.target.value)
                                                                        }
                                                                }
                                                >
                                                    <option  value="Ayoub001">Ayoub001</option>
                                                    <option  value="Ayoub01">Ayoub01</option>
                                                    <option  value="Ayoub1">Ayoub1</option>
                                                </select>
                }
                </div>
            {error && <div> { error } </div> }
            { (isPending || isFiltring ) && <Loader></Loader>}
            { (blogs && !isFiltred)  && <BlogList blogs={blogs}     />}
            { (blogs && isFiltred) && <BlogListFiltred blogs={filtredBlogs} ></BlogListFiltred> }
          
        </div>
     );
 }
export default Home;