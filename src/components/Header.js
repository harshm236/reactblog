import { Link } from "react-router-dom"
export function Header(){
    
    return(
        <>
        <div id="header1">
        <div id="header"> 
        <h1 id="the">The</h1>
        <h1 id="siren">SIREN</h1>
        </div>
        <div id="topics">
            <Link id="linkcss" to={"/bollywood"}>Bollywood</Link>
            <Link id="linkcss" to={"/hollywood"}>Hollywood</Link>
            <Link id="linkcss" to={"/technology"}>Technology</Link>
            <Link id="linkcss" to={"/fitness"}>Fitness</Link>
            <Link id="linkcss" to={"/food"}>Food</Link>
            
        </div>
        </div>
        </>
    )
}