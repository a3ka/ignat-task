import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    // const [totalUsers, setTotalUsers] = useState<number>(0) // need to fix

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value !== " ") {
            setName(e.currentTarget.value) // need to fix
            setError("")
        } else {
            setName('')
            setError('Enter a name')
        }
    }

    const addUser = () => {
        if (name !==''){
            alert(`Hello ${name} !`)
            addUserCallback(name)
            // setTotalUsers(users.length)
            setName('')
            setError('')
            // console.log('Name: ' + name)
            // console.log('Error: ' + error)
        } else {
            setError('Enter a name')
        }

    }

    const totalUsers = users.length - 1

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
