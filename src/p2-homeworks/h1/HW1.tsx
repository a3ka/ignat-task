import React from 'react'
import Message from "./Message";
import "./Message.module.css";

const messageData = {
    avatar: 'https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2021/09/Webp.net-resizeimage-2-gID_7.png',
    name: 'Alex K',
    message: 'npm start нажал?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
