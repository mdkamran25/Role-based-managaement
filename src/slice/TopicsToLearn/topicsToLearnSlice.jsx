import { createSlice } from "@reduxjs/toolkit"
import htmlcss from "../../Image/html&css.png"
import javascript from "../../Image/javascript.png"
import github from "../../Image/github.jpg"
import react from "../../Image/react.svg"
import microsoft_azure from "../../Image/microsoft_azure.svg"
import aws from "../../Image/aws.svg"
// import { useDispatch } from "react-redux"
import { setNotificationForall } from "../trainee/traineeLoginSlice"
import { addNewModule } from "../notificationData/notificationDataSlice"

const initialState = {
  topics: [
    {
      id: 1,
      topicName: "HTML & CSS",
      img: htmlcss,
      description: "Description",
      subTopics: {},
    },
    {
      id: 2,
      topicName: "Javascript",
      img: javascript,
      description: "Description",
      subTopics: {},
    },
    {
      id: 3,
      topicName: "Fundamental For Everyone",
      img: undefined,
      description: "Description",
      subTopics: {},
    },
    {
      id: 4,
      topicName: "Fundamentals of web programming",
      img: undefined,
      description: "Description",
      subTopics: {},
    },
    {
      id: 5,
      topicName: "React",
      img: react,
      description: "Description",
      subTopics: {},
    },
    {
      id: 6,
      topicName: "Typescript",
      img: undefined,
      description: "Description",
      subTopics: {},
    },
    {
      id: 6,
      topicName: "Amazon Web Service",
      img: aws,
      description: "Description",
      subTopics: {},
    },
    {
      id: 7,
      topicName: "Microsoft Azure",
      img: microsoft_azure,
      description: "Description",
      subTopics: {},
    },
    {
      id: 8,
      topicName: "Basics Of Git",
      img: github,
      description: "Description",
      subTopics: {},
    },
  ],
}

const topicsToLearnSlice = createSlice({
  name: "traineeLogin",
  initialState,
  reducers: {
    addNewTopics: (state, action) => {
      const { topicName, img, description } = action.payload
      const id = state.topics.length + 1
      const subTopics = {}
      state.topics.push({
        id,
        topicName,
        img,
        description,
        subTopics,
      })
    },
  },
})

export const { addNewTopics } = topicsToLearnSlice.actions

export const addNewTopicWithNotification = (topicData) => (dispatch) => {
  const { topicName, id } = topicData
  dispatch(addNewTopics(topicData))
  dispatch(setNotificationForall())
  dispatch(addNewModule(topicName, id))
}

export default topicsToLearnSlice.reducer
