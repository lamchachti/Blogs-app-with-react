import { useState,useEffect } from 'react'
const FetchData = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error,setError]=  useState(null)

    /* Use effect is a function to excute in any render */
    useEffect( ()=> {
        const abortCont= new AbortController()
         setTimeout(()=>{
            fetch(url,{ signal:abortCont.signal }).then(
            res=>{
                if(!res.ok){
                    throw Error("Cannot reach the server!")
                }
                return res.json()
            }
         ).then(data=>{
            setData(data);
            setIsPending(false)
            setError(null)
         }).catch( err=>{
            if(err.name=== 'AbortError'){
                console.log('Abort error')
            }else{
                setError(err.message)
                setIsPending(false)
            }
         })
         },500);
         /*return abortCont.abort() ;*/
    }, [url])

    return {data,isPending,error}; 
}
 
export default FetchData;