/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addChat } from "../../slice/trainee/traineeLoginSlice"
import "./chat.css"

const Chat = (props) => {
  const bottomRef = useRef()
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  const trainee = useSelector((state) => state.traineeLoginReducer.login)

  const chat = trainee.find((trainee) => trainee.email === props.email)

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
  console.log(chat)
  useEffect(() => {
    const chatBody = bottomRef.current

    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight
    }
  }, [])

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
          {loggedUser.role === "Mentor" &&
          (loggedUser.FirstTraineeEmail === chat.email ||
            loggedUser.SecondTraineeEmail === chat.email) ? (
            <>
              {" "}
              <div className="chat-body d-flex flex-column" ref={bottomRef}>
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
                      <p className="position-relative">
                        {message.message}
                        <span className="message-timestamp">
                          {message.time}
                        </span>
                      </p>
                    </div>
                  ))}
                {/* <div ref={bottomRef} /> */}
              </div>
              <div className="chat-footer">
                <form className="w-100 p-0" onSubmit={(e) => onSubmit(e)}>
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
              </div>{" "}
            </>
          ) : (
            <div className="fw-bold h-100 mt-5">
              Only mentor can send message to their respected trainee
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Chat
