import {UserType} from "../HW8";

export type homeWorkReducerType = sortUpACType | sortDownACType | checkACType

export type sortUpACType = ReturnType<typeof sortUpAC>
export type sortDownACType = ReturnType<typeof sortDownAC>
export type checkACType = ReturnType<typeof checkAC>


export const homeWorkReducer = (state: Array<UserType>, action: homeWorkReducerType): Array<UserType> => {
    switch (action.type) {
        case 'sortUp': {
            return state.sort(function(a, b){
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0; //default return value (no sorting)
            });
        }
        case 'sortDown': {
            return state.sort(function(a, b){
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB) //sort string ascending
                    return 1;
                if (nameA > nameB)
                    return -1;
                return 0; //default return value (no sorting)
            });
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default: return state
    }
}

export const sortUpAC = () => {
    return {
        type: 'sortUp',
        payload: 'up'
    } as const
}

export const sortDownAC = () => {
    return {
        type: 'sortDown',
        payload: 'down'
    } as const
}

export const checkAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}