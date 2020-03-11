const handlers = {
    DEFAULT: state => state
}

export const firebasrReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}