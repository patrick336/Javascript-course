import { ADD_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, REMOVE_COMMENT } from './actions.js';

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
            return state.map(comment => comment.id === action.id ? {...comment, votes: comment.votes + 1} : comment)

        case THUMB_DOWN_COMMENT:    
            return state.map(comment => comment.id === action.id ? {...comment, votes: comment.votes - 1} : comment)

        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        

        default:
            return state;
    }
};

export default comments;
