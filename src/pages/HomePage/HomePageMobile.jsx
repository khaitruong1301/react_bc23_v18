import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getFilmApiAction } from '../../redux/Reducers/phimReducer';
export default function HomePageMobile(props) {

    //useSelector
    const { arrFilm } = useSelector(reducer => reducer.phimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        //Dispatch action api 
        const actionThunk = getFilmApiAction();
        dispatch(actionThunk);
        //Call api

    }, [])
    console.log(arrFilm);

    const renderFilms = () => {
        return arrFilm.map((film, index) => {
            return <tr key={index}>
                <td style={{width:'20%'}}>
                    <img style={{width:'100%'}} height={120} src={film.hinhAnh} alt="..." />
                </td>
                <td>
                    <p height={{height:120}}>{film.moTa.length > 150 ? film.moTa.substr(0,100) +'...' : film.moTa}</p>
                </td>
                <td style={{width:'20%'}}>
                    <NavLink to={'/detail'} className="btn btn-success">Đặt vé</NavLink>
                </td>
            </tr>
        })
    }
    return (
        <div className='container'>
            <table className='table' border="0">
                <tbody>
                    {renderFilms()}
                </tbody>
            </table>
        </div>
    )
}
