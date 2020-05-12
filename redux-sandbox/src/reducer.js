const reducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD":
            return state + payload;

        case "INC":
            return state + 1;

        case "DEC":
            return state - 1;

        default:
            return 0;
    }
};

export default reducer;