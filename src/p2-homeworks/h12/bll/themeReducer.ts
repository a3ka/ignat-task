export type InitialStateType = {
    color: string
};

const initState: InitialStateType = {
    color: "white"
};


type ActionType = ChangeThemeType;
type ChangeThemeType = ReturnType<typeof changeThemeAC>


export const themeReducer = (state = initState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, color: action.payload.option};
        }
        default:
            return state;
    }
};

export const changeThemeAC = (option: string) => {
    return {
        type: "CHANGE-THEME",
        payload: {option},
    } as const
};


