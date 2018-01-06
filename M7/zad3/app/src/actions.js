export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = text => {
    return (
        {
            type: ADD_COMMENT,
            id: 1,
            text: text
        }
    );
};
