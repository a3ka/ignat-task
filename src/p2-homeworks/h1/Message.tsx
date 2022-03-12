import React from 'react'
import styles from "./Message.module.css"

type MessagePropsType={
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.wrapper}>
            <div>
                <img className={styles.avatar} src={props.avatar} />
            </div>
            <div className={styles.message}>
                <div className={styles.nameStyle}>
                    {props.name}
                </div>
                <div className={styles.message__secondLine}>
                    <div className={styles.messageStyle}>
                        {props.message}
                    </div>
                    <div></div>
                    <div className={styles.timeStyle}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
