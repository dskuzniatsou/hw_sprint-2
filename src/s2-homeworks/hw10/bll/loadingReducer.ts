const initState = {
    isLoading: false,
}
export type LoadingStateType = typeof initState
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}


export const loadingReducer = (state :LoadingStateType  = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading}
        // пишет студент  // need to fix

        default:
            return state
    }
}


export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
