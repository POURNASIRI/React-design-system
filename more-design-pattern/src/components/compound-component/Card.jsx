// * card component using compound design pattern



//* Crad Header Component*
const Header = ({children})=>{
    return(
        <div style={{borderBottom:"1px solid black",
            padding:".5rem",
            marginBottom:".5rem"
        }}>
            {children}
        </div>
    )
}

//* Card Body Component*    
const Body = ({children})=>{
    return(
        <div style={{padding:".5rem"}}>{children}</div>
    )
}

//* Card Footer Component*
const Footer = ({children})=>{
    return(
        <div style={{borderTop:"1px solid black",
            padding:".5rem",
            marginTop:".5rem"
        }}>
            {children}
        </div>
    )
}



//* Card Component*
export const Card = ({children})=>{
    return(
        <div style={{border:"1px solid black",width:"300px",textAlign:"center"}}>
        {children}
        </div>
    )
}

Card.Header = Header; 
Card.Body = Body;
Card.Footer = Footer;  