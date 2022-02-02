import React from "react"


const header = () => {
  return(
    <div style={{
        width: "100%",
        height:"70px",
        color:"white",
        display: "flex",
        justifyContent:"center",
       alignItems:"center",
        backgroundColor:"black",
        borderTop:"2px solid white"
        }}>
            <a href="#" style={{color:"white", margin:"30px", textDecoration:"none", fontWeight:"bold"}}>Home</a>
            <a href="#" style={{color:"white", margin:"30px", textDecoration:"none", fontWeight:"bold"}}>About</a>
            <a href="#" style={{color:"white", margin:"30px", textDecoration:"none", fontWeight:"bold"}}>Best Deals</a>
            <a href="#" style={{color:"white", margin:"30px", textDecoration:"none", fontWeight:"bold"}}>Tools</a>
            <a href="#" style={{color:"white", margin:"30px", textDecoration:"none", fontWeight:"bold"}}>Contact</a>


        </div>

)
}

export default header