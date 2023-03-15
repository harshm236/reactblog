import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
// import axios from "axios";

function Format(props) {
  // console.log(props.data);
  const [data, setData] = useState();
  const navigate= useNavigate()
  function ClickHandler(){
    navigate({
      pathname:"/common"
      })
  }
  useEffect(() => {
    fetch("https://blogapi-zohy.onrender.com/api")
      .then(async (raw) => await raw.json())
      .then((data) =>
        setData(data.data.filter((item) => item.id === props.data))
      );
  }, [props.data]);
  console.log(data && data[0].id);
  // console.log(data.map((item)=>item.id));
  const image = data && data[0].img;
  const heading = data && data[0].id;
  const text = data && data[0].text;
  
  return (
    <div style={{ paddingTop: "150px", position: "relative", left: "50px" }}>
      <h2
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "32px",
          backgroundColor: "none",
          // backgroundImage: image
        }}
      >
        {heading}
      </h2>
      {/* <div id="test" style={{backgroundImage:`url(${image})`}}>hello</div> */}
      <div style={{ textAlign: "center" }}>
        <img onClick={ClickHandler} width={"1200px"} height="500px" src={image} alt="img" />
        {/* <div>hello</div> */}
      </div>
      {/* <div className="text">{text}</div> */}
      <div id="format">
         
          {/* {" "} */}
          <img onClick={ClickHandler} src={image} alt="img" />
         
        {/* <div style={{ border: "1px dotted black" }}>advertisement</div> */}
         
        <div onClick={ClickHandler} style={{ height:"200px", border: "1px dotted black",textAlign:"center",backgroundImage:`url(${image})`,backgroundSize:"cover" }}>advertisement</div>
         
        
          <img onClick={ClickHandler} src={image} alt="img" />
        
         
        <div onClick={ClickHandler} style={{ height:"100px",backgroundSize:"cover", border: "1px dotted black",textAlign:"center",backgroundImage:`url(${image})` }}>advertisement</div>
         
         
          <img onClick={ClickHandler} src={image} alt="img" />
         
         
        <div onClick={ClickHandler} style={{ height:"100px", border: "1px dotted black",textAlign:"right",backgroundImage:`url(${image})`,backgroundSize:"cover" }}>advertisement</div>
         
      </div>
      <div id="section2">
      <div onClick={ClickHandler} className="text">{text}</div>
      <div onClick={ClickHandler} className="text">{text}</div>
      <div onClick={ClickHandler} className="text">{text}</div>
      </div>
    </div>
    // <div>hello</div>
  );
}
export default Format;
