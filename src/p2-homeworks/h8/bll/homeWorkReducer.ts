import {UserType} from "../HW8";

export type homeWorkReducerType = sortACType | checkACType

export type sortACType = {
    type: 'sort',
    payload: 'up' | 'down'
}
// export type sortACType = ReturnType<typeof sortAC>
// export type sortDownACType = ReturnType<typeof sortDownAC>
export type checkACType = ReturnType<typeof checkAC>


export const homeWorkReducer = (state: Array<UserType>, action: homeWorkReducerType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a:UserType, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            return action.payload === "up" ? newState : newState.reverse()
        }
        // case 'sortDown': {
        //     return state.sort(function(a, b){
        //         let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        //         if (nameA < nameB) //sort string ascending
        //             return 1;
        //         if (nameA > nameB)
        //             return -1;
        //         return 0; //default return value (no sorting)
        //     });
        // }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default: return state
    }
}

export const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}

export const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}

export const checkAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}