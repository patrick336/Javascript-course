import React from 'react';

const Comment = ( {text, votes }) => <li> {text} <span>votes: { votes }</span></li>;

export default Comment;
