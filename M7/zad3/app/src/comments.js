import { ADD_COMMENT, THUMB_UP_COMMENT } from './actions.js';

const comments = (state = [], action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            },
            ...state];
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
                return comment;
            });

        default:
            return state;
    }
};

export default comments;
