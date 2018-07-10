import {combineReducers} from 'redux'
import {reducer as front} from "./frontReducer";
import admin from './admin'

const initialState = {
    //这三个状态是做什么的？？？
    isFetching: true,
    msg: {
        type: 1,
        content: ''
    },
    userInfo: {}
};

export const actionType = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END',
    USER_LOGIN: 'USER_LOGIN',
    USER_REGISTER: 'USER_REGISTER',
    RESPONSE_USER_INFO: 'RESPONSE_USER_INFO',
    SET_MESSAGE: 'SET_MESSAGE',
    USER_AUTH: 'USER_AUTH'
};

export const actions = {
    //用作用户登陆的action，留意之后如何和后台进行交互？？？
    get_login: function (username, password) {
        return {
            type: actionType.USER_LOGIN,
            username,
            password
        }
    },
    get_register: function (data) {
        return {
            //data是什么？
            type: actionType.USER_REGISTER,
            data
        }
    },
    clear_msg: function () {
        return {
            //msg是什么？？？？
            type: actionType.SET_MESSAGE,
            msgType: 1,
            content: ''
        }
    },
    user_auth: function () {
        return {
            //这个action又是做什么的????
            type: actionType.USER_AUTH
        }
    }

};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.FETCH_START:
            return {
                ...state, isFetching: true
            };
        case actionType.FETCH_END:
            return{
                ...state,isFetching:false
            };
        case actionType.SET_MESSAGE:
            return {
                ...state,
                isFetching:false,
                msg:{
                    type:action.msgType,
                    content:action.content
                }
            };
        case actionType.RESPONSE_USER_INFO:
            return {
                ...state,
                userInfo:action.data
            };
        default:
            return state

    }
}

export default combineReducers({
    front,
    globalState: reducer,
    admin
})