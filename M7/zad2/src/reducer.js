import { CommentReducer,
  newComment,
  removeComment,
  editComment,
  thumpUp,
  thumpDown 
} from './comments';

import { users } from './users';

//Stan początkowy aplikacji
const initialState = {
    comments: [],
    users: []
};

const app = (state = initialState, action) => {
	return {
    comments: CommentReducer(state.comments, action),
    users: users(state.users, action)
  };
}

const res1 = app(initialState, newComment('new comment'));
console.log(res1);

const res2 = app(res1, editComment(1, 'comment changed'));
console.log(res2);

const res3 = app(res2, newComment('text'));
console.log(res3);

const res4 = app(res3, removeComment(2));
console.log(res4);

const res5 = app(res4, newComment('text22222222'));
console.log(res5);

const res6 = app(res5, thumpUp(1));
console.log(res6);

const res7 = app(res6, thumpDown(3));
console.log(res7);
