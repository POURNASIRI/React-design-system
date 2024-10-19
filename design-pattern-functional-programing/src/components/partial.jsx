import { Button } from "./composition"

export const PartialComponent = (Component,partialProps)=>{
    return props =>{
        return <Component {...partialProps} {...props} />
    }
}

export const RedButton = PartialComponent (Button, {color:"crimson",borderRadius:"14px"})
export const GreenButton = PartialComponent(Button, {color:"green",size:"small",borderRadius:"5px"})


//*partial pattern using hoc co create more reuse and clean component*// 