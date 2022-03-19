import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: ()=> void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const [errorInputClass, errorText] = error === '' ?  [s.nonError, s.sdf]  :  [s.error, s.errorText]// need to fix with (?:)

    return (
        <div>
            <div>
                <input value={name} onChange={setNameCallback} className={errorInputClass}/>
                <button onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>

            <div>
                <span className={errorText}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
