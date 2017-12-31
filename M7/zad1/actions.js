

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

const CommentReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_COMMENT:
      state.comments.push({
        id: action.id,
        text: action.text,
        rate: action.rate
      });
      return state;

    case REMOVE_COMMENT:
      state.comments = state.comments.filter(item => item.id !== action.id);
      return state;

    case EDIT_COMMENT:
      state.comments.map((item) => { 
        if (item.id === action.id) {
          return (item.text = action.text);
        }
      });
      return state;

    case THUMB_UP_COMMENT:
      state.comments.map(item => {
        if(action.id === item.id) {
           item.rate++;
        }
      });
      return state;
    case THUMB_DOWN_COMMENT:
      state.comments.map(item => {
        if(action.id === item.id) {
           item.rate--;
        }
      });
      return state;
    default:
      return state;
  }
};

const res1 = CommentReducer(state, newComment("TEST"));
const res2 = CommentReducer(state, removeComment(2));
const res3 = CommentReducer(state, editComment(1, "comment changed"));

const res5 = CommentReducer(state, thumpDown(1));
const res6 = CommentReducer(state, thumpDown(1));
const res7 = CommentReducer(state, thumpDown(1));

console.log(state);