import React , {useState,useEffect} from 'react'
import { Route } from "react-router-dom"
import HeaderHome from "../../pages/_Components/HeaderHome"



export const HomeTemplate = (props) => { //props: {path:'/', component:HomePage,combonentMobile:HomePageMobile}

    const [screen,setScreen] = useState({
        width: window.innerWidth,
        height:window.innerHeight
    });

    useEffect(() => {
        //Mỗi lần load dữ liệu component lên hoặc resize sẽ xét lại kích thước cho biến screen
        window.onload = () => {
            setScreen({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        window.onresize = () => {
            setScreen({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        return () => {
            window.removeEventListener('onload');
            window.removeEventListener('onresize');
        }
    },[])
    console.log('screen',screen);

    let Component = props.component;
    if(props.componentMobile) {
        //Xét điều kiện để gán lại component mobile
        if(screen.width <= 765) {
            Component = props.componentMobile;
        }
    }


    return <Route exact path={props.path} render={(propsRoute)=> {
        return <div>
            <HeaderHome />
            <Component {...propsRoute} />
            <footer className="bg-dark text-white p-5 font-weight-bold text-center">Copy right @ cybersoft</footer>
        </div>

    }} />
      
    
}