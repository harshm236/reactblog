import { useEffect, useState } from "react"



function Common(props){
    const [data,setData]=useState()
    useEffect(()=>{

        fetch("http://localhost:3030/api")
        .then((item)=>item.json())
        .then((obj)=>setData(obj))
    },[])
    const img=data && data.data.map((item)=>item.img)
    console.log(img)
    const common = document.getElementById("common")
    var i=0
    function Change(){
        if(i<img.length)
        i=i+1
        else{
            i=0
        }
        common.style.backgroundImage=`url(${img[i]})`
    }
    return(
        <>
        <div onClick={Change} id="common">CLICK ME</div>
        </>
    )
}
export default Common