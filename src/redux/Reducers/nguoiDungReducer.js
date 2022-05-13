

import { createSlice } from '@reduxjs/toolkit'
import { ACCESSTOKEN, http, setCookie, USER_LOGIN } from '../../util/setting';

const initialState = {
    userLogin: {}
}

const nguoiDungReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        dangNhap: (state, action) => {
            console.log(action);
            state.userLogin = action.payload;
        }
    }
});

export const { dangNhap } = nguoiDungReducer.actions

export default nguoiDungReducer.reducer;
//------------------ action thunk ----------

//userLogin = {taiKhoan:'',matKhau:''}
export const dangNhapApiAction = (userLogin) => {

    return async dispatch => {

        try {
            let result = await http.post('/api/quanlynguoidung/dangnhap', userLogin);
            console.log('result',result);
            //Lưu lại token khi đăng  nhập thành công
            let usLoginResult = result.data.content;
            //Lưu thông tin user vào localstorage sau khi đăng nhập thành công
            localStorage.setItem(USER_LOGIN, JSON.stringify(usLoginResult) )
            //Lưu token của user vào localstorage khi đăng nhập thành công
            localStorage.setItem(ACCESSTOKEN,usLoginResult.accessToken);
            //Sau khi gán localstorage xong thì đưa dữ liệu lên redux
            // const action = {
            //     type:'userReducer/dangnhap',
            //     payload: usLoginResult
            // }
            const action = dangNhap(usLoginResult);
            dispatch(action);
            // setCookie
            setCookie(USER_LOGIN,JSON.stringify(usLoginResult), 30);

        } catch (err) {
            console.log(err.response?.data);
            //optional chaining
        }

    }
}