import React from "react";

const Message = props => {
    const name = props.message.name !== undefined ? props.message.name : ""
    const layout = name === "you" ? "d-flex flex-row-reverse" : "d-flex flex-row";
    const bodyMessage = name === "you" ? "send-msg" : "receive-msg";
    return (
        <div className={`${layout}`}>
            <div className={`${props.avatar ? "avatar" : name === "you" ? "" : "avatar-empty"}`} />
            <div className={`${bodyMessage}`}>{props.message.messages}</div>
        </div>

    )
};

export default Message;
