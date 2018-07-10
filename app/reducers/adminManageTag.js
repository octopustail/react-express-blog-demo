const initialState = ['首页'];

export const actionType = {
    GET_ALL_TAGS: 'GET_ALL_TAGS',
    SET_TAGS: 'RESPONSE_GET_ALL_TAGS',
    DELETE_TAGS: 'DELETE_TAGS',
    ADD_TAGS: 'ADD_TAGS'
};

export const actions = {
    get_all_tags: function () {
        return {
            type: actionType.GET_ALL_TAGS
        }
    },
    delete_tag: function (name) {
        return {
            type: actionType.DELETE_TAGS
            name
        }
    },
    add_tag: function (name) {
        return {
            type: actionType.ADD_TAGS,
            name
        }
    }

};

export  function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.SET_TAGS:
            return ['首页', ...action.data];
        default:
            return state
    }

}