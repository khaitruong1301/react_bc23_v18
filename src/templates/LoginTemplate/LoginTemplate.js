import React from "react"
import { Route } from "react-router-dom"
import HeaderHome from "../../pages/_Components/HeaderHome"



export const LoginTemplate = (props) => { //props: {path:'/', component:HomePage}


    return <Route exact path={props.path} render={(propsRoute)=> {
        return <div>
            <HeaderHome />
            <props.component {...propsRoute} />
         
        </div>

    }} />
      
    
}