import { ADD_COMMENT } from './actions.js';

const comments = (state = [], action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            },
            ...state];
        default:
            return state;
    }
};

export default comments;
