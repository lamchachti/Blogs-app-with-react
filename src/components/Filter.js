import { useState } from "react";
const Filter = () => {
    const [filtredBy,setFiltredBy] = useState('All blogs')
    const [author,setAuthor] = useState('')

    const [publishedAt,setPublishedAt] = useState()
    const filterType= () => {
        
    }
    return ( 
        <div className="filter">
            { filtredBy === 'All blogs' && <h2>All blogs</h2> }
            { filtredBy !== 'All blogs' && <h2>Filtred By </h2> }
            
            <select value={filtredBy}   onChange={ (e)=> setFiltredBy(e.target.value) } >
                    <option  value="All blogs">All blogs</option>
                    <option  value="Bublished at">Bublished at</option>
                    <option  value="the most liked most liked">The top 10 most liked</option>
                    <option  value="Bublished by">Bublished by</option>
            </select>
            {filtredBy ==='Bublished at' && <input type="date" onChange={ (e)=>{ setPublishedAt(e.target.value)}} ></input>}
            {filtredBy ==='Bublished by' && <input type="text" onChange={ (e)=>{ setAuthor(e.target.value)}}></input>}
        </div>
     );
}
 
export default Filter;