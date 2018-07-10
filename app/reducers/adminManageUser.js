const initialState = {
    list: [],
    pageNum: 1,
    total: 0
};

export const actionTypes = {
    GET_ALL_USER: 'GET_ALL_USER',
    RESOVLE_GET_ALL_USER: 'RESOVLE_GET_ALL_USER'
};

export const actions = {
    get_all_user: function (pageNum = 1) {
        return {
            type: actionTypes.GET_ALL_USER,
            pageNum: pageNum
        }
    }
}

export function users(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESOVLE_GET_ALL_USER:
            return {
                list: action.data.list,
                pageNum: action.data.pageNum,
                total: action.data.total
            };
        default:
            return state
    }
}