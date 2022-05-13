import axios from "axios";

export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMyIsIkhldEhhblN0cmluZyI6IjIwLzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NjIyNDAwMDAwMCIsIm5iZiI6MTYzODExODgwMCwiZXhwIjoxNjY2MzcxNjAwfQ.hoaq9WsA187Q0NvdBYPZsn8c2CRg_ZE4mQO5_lUyAL4';
export const DOMAIN = 'https://movienew.cybersoft.edu.vn';
export const USER_LOGIN = 'userLogin';
export const ACCESSTOKEN = 'accessToken';

//setup axios interceptor
export const http = axios.create({
    baseURL:DOMAIN, //Domain khi request api sẽ được ghép vào với link 
    timeout:30000 //Thời gian tối đa chờ response trả về
});

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers, //Lấy lại tất cả các giá trị header qua thuộc tính headers
        'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN),
        'TokenCybersoft': TOKEN_CYBERSOFT
    }
    return config
}, errors => {
    return Promise.reject({errors});
})


//------- config cookie -----------
export function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}