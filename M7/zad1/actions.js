const NEW_COMMENT = "NEW_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";
const THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";

//const boundNewComment = text => dispatch(newComment(text));
//const boundRemoveComment = id => dispatch(removeComment(id));
//const boundEditComment = (id, text) => dispatch(editComment(id, text));
//const boundThumpUp = id => dispatch(thumpUp(id));
//const boundThumpDown = id => dispatch(thumpDown(id));

let idCounter = 2;

const newComment = text => {
  idCounter = idCounter + 1;

  return {
    type: NEW_COMMENT,
    id: idCounter,
    text,
    rate: 0
  };
};
const removeComment = id => {
  return {
    type: REMOVE_COMMENT,
    id
  };
};
const editComment = (id, text) => {
  return {
    type: EDIT_COMMENT,
    id,
    text
  };
};
const thumpUp = id => {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
};
const thumpDown = id => {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
};

//Zakladam, ze istnieje juz jakis stan aplikacji.
let state = {
  comments: [
    {
      id: 1,
      text: "React sucks",
      rate: -1000
    },
    {
      id: 2,
      text: "Shut up!",
      rate: 2000
    }
  ],
  users: ["John", "Seb"]
};

const CommentReducer = (comments = [], action) => {
  switch (action.type) {

    case NEW_COMMENT:

      return [].concat(state.comments, [{ 
        id: action.id,
        text: action.text,
        rate: action.rate
      }]);
    
    case REMOVE_COMMENT:
      return comments.filter(item => item.id !== action.id);

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

const res1 = CommentReducer(state.comments, newComment("TEST"));
console.log(res1);

const res2 = CommentReducer(res1, removeComment(2));
console.log(res2);

const res3 = CommentReducer(res2, editComment(1, "comment changed"));
console.log(res3);

const res4 = CommentReducer(res3, thumpUp(1));
console.log(res4);

const res5 = CommentReducer(res4, thumpDown(1));
console.log(res5);

const res6 = CommentReducer(res5, thumpDown(1));
console.log(res6);

const res7 = CommentReducer(res6, 'jakies nieznany typ akcji');
console.log(res7);

console.log(state);// stan nie został zmutowany - OK



