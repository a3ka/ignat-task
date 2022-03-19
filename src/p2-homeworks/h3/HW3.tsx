import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import { v1 } from 'uuid';


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([{ _id: '', name: ''}]) // need to fix any

    const addUserCallback = (_name: string) => { // need to fix any
        let user = { id: v1(), name: _name};
        let newUsers = [user, ...users];
        setUsers(newUsers);
        console.log(users)
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
