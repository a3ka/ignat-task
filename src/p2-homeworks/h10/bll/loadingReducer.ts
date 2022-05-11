const initState = {
    isLoading: false
}

export type LoadingReducerType = {
    isLoading: boolean
}

type loadingACType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: loadingACType): LoadingReducerType => {
    switch (action.type) {
        case "CHANGE-LOADING-STATUS": {
            if(state.isLoading) {
                return {isLoading:false}
            } else {
                return {isLoading:true}
            }
        }
        default: return state
    }
}

export const loadingAC = () => {
    return {
        type: "CHANGE-LOADING-STATUS",
    } as const
}