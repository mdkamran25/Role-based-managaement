/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addChat } from "../../slice/trainee/traineeLoginSlice"
import "./chat.css"

const Chat = (props) => {
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  const trainee = useSelector((state) => state.traineeLoginReducer.login)

  console.log(trainee, "trainee")

  const chat = trainee.find((trainee) => trainee.email === props.email)

  console.log(props.email, "chat")

  const [messages, setMessages] = useState("")

  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()

    dispatch(
      addChat({
        traineeEmail: props.email,
        message: messages,
        senderEmail: loggedUser.email,
      })
    )

    setMessages("")
    console.log("kamran")
  }
  const close = () => {
    props.setShowChat(!props.showChat)
  }
  return (
    <>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          {loggedUser.role === "Trainee"
            ? "Chat With Mentor"
            : "Chat with " + chat.name}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={close}
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="chat-window">
          <div className="chat-body d-flex flex-column">
            {chat.chat &&
              chat.chat.map((message) => (
                <div
                  key={message.id}
                  className={`message ${
                    message.senderEmail !== loggedUser.email
                      ? "sender-message"
                      : "receiver-message"
                  }`}
                >
                  <p>
                    {message.message}
                    <span className="message-timestamp">
                      {message.timestamp}
                    </span>
                  </p>
                </div>
              ))}
          </div>
          <div className="chat-footer">
            <form className="w-100" onSubmit={(e) => onSubmit(e)}>
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message"
                  value={messages}
                  onChange={(e) => setMessages(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
