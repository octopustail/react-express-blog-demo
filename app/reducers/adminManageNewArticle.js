const initialState = {
    title: '',
    content: '',
    tags: [],
    id: ''

};

export const actionType = {
    UPDATING_TITLE: '',
    UPDATING_CONTENT: '',
    UPDATING_TAGS: '',
    SAVE_ARTICLE: '',
    SET_ARTICLE_ID: ''

};

export const actions = {
    updating_title: function (title) {
        return {
            type: actionType.UPDATING_TITLE,
            title
        }
    },
    updating_content: function (content) {
        return {
            type: actionType.UPDATING_CONTENT,
            content
        }
    },
    updating_tags: function (tags) {
        return {
            type: actionType.UPDATING_TAGS,
            tags
        }
    },
    save_article: function (data) {
        return {
            type: actionType.SAVE_ARTICLE,
            data
        }
    }
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.UPDATING_TITLE:
            return {
                ...state, title: action.title
            };
        case action.UPDATING_CONTENT:
            return {
                ...state, content: action.content
            };
        case action.UPDATING_TAGS:
            return {
                ...state, tags: action.tags
            };
        case action.SET_ARTICLE_ID:
            return {
                ...state, id: action.id
            };
        default:
            return state
    }
}