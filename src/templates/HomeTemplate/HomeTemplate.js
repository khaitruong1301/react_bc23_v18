import React from "react"
import { Route } from "react-router-dom"
import HeaderHome from "../../pages/_Components/HeaderHome"



export const HomeTemplate = (props) => { //props: {path:'/', component:HomePage}


    return <Route exact path={props.path} render={(propsRoute)=> {
        return <div>
            <HeaderHome />
            <props.component {...propsRoute} />
            <footer className="bg-dark text-white p-5 font-weight-bold text-center">Copy right @ cybersoft</footer>
        </div>

    }} />
      
    
}