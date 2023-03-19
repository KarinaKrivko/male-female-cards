const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const user = action.payload;
            const users = [...state.users, user];
            return { ...state, users };
        default:
            return state;
    }
};

export default usersReducer;