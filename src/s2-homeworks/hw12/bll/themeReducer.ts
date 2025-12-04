const initState = {
    themeId: 1,
}
export type ThemeStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ChangeThemeActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }
         // дописать

        default:
            return state
    }
}
export type ChangeThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
