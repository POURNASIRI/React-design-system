export const Button = ({text, size, color,...props})=>{
    
    return(
        <button style={{
            fontSize: size === "small" ? "16px" : "32px",
            backgroundColor: color
        }}>
            {text}
        </button>
    )
}


export const RedButton = props =>{
    return(
        <Button {...props} color={"red"}/>
    )
}

export const GreenButton = props =>{
    return(
        <Button {...props} color={"green"}/>
    )
}