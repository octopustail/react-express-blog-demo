import {combineReducers} from 'redux'
import {users} from './adminManageUser';
import {reducer as tags} from './adminManageTag';
import {reducer as newArticle} from './adminManageNewArticle';
import {articles} from './adminManageArticle'

const initialState = {
    url: '/'
};

export const actionType = {
    ADMIN_URL_LOCATION: 'ADMIN_URL_LOCATION'
};

export const actions = {
    change_location_admin: function (url) {
        return {
            type: actionType.ADMIN_URL_LOCATION,
            data: url
        }
    }
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.ADMIN_URL_LOCATION:
            return {
                ...state, url: action.data
            };
        default:
            return state
    }
}

const admin = combineReducers({
    adminGlobalReducer: reducer,
    users,
    tags,
    newArticle,
    articles


});

export default admin
