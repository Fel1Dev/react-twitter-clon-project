const Message = (props) => {
     return (
        <div style={{color: props.color}} className="Message">
            {props.message}
        </div>
     )
}

export default Message;