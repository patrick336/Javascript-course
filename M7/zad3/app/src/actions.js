const ADD_COMMENT = 'ADD_COMMENT';

const addComment = text => {
    return (
        {
            type: ADD_COMMENT,
            id: 5,
            text: text
        }
    );
}

export  ADD_COMMENT;
export  addComment;
