import {
  NEW_COMMENT,
  EDIT_COMMENT,
  REMOVE_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT 
} from './actions';

let idCounter = 0;

// Kreatory akcji
export const newComment = text => {
  idCounter = idCounter + 1;

  return {
    type: NEW_COMMENT,
    id: idCounter,
    text,
    rate: 0
  };
};

export const removeComment = id => {
  return {
    type: REMOVE_COMMENT,
    id
  };
};

export const editComment = (id, text) => {
  return {
    type: EDIT_COMMENT,
    id,
    text
  };
};

export const thumpUp = id => {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
};

export const thumpDown = id => {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
};

//Comment Reducer
export const CommentReducer = (comments = [], action) => {
  switch (action.type) {
    case NEW_COMMENT:
      return [ 
        ...comments,
        {
          id: action.id,
          text: action.text,
          rate: 0
        }];

    case REMOVE_COMMENT:
      return comments.filter(comment => comment.id !== action.id);
     
    case EDIT_COMMENT:
      return comments.map(item =>  
        {
          if(item.id === action.id ) {
            return Object.assign({}, item, {
              text: action.text
            });
          } 
          else {
            return item;
          }
        }
      );

    case THUMB_UP_COMMENT:

      return comments.map(item =>  
        {
          if(item.id === action.id ) {
            return Object.assign({}, item, {
              rate: item.rate + 1
            });
          } 
          else {
            return item;
          }
        }
      );

    case THUMB_DOWN_COMMENT:
      
      return comments.map(item =>  
        {
          if(item.id === action.id ) {
            return Object.assign({}, item, {
              rate: item.rate - 1
            });
          } 
          else {
            return item;
          }
        }
      );
      
    default:
      return comments;
  }
};

