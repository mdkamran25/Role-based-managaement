import { createSlice } from "@reduxjs/toolkit"
import htmlcss from "../../Image/html&css.png"
import javascript from "../../Image/javascript.png"
import github from "../../Image/github.jpg"
import react from "../../Image/react.svg"
import microsoft_azure from "../../Image/microsoft_azure.svg"
import aws from "../../Image/aws.svg"

const initialState = {
  topics: [
    {
      id: 1,
      topicName: "HTML & CSS",
      img: htmlcss,
      subTopics: {},
    },
    {
      id: 2,
      topicName: "Javascript",
      img: javascript,
      subTopics: "",
    },
    {
      id: 3,
      topicName: "Fundamental For Everyone",
      img: undefined,
      subTopics: "",
    },
    {
      id: 4,
      topicName: "Fundamentals of web programming",
      img: undefined,
      subTopics: "",
    },
    {
      id: 5,
      topicName: "React",
      img: react,
      subTopics: "",
    },
    {
      id: 6,
      topicName: "Typescript",
      img: undefined,
      subTopics: "",
    },
    {
      id: 6,
      topicName: "Amazon Web Service",
      img: aws,
      subTopics: "",
    },
    {
      id: 7,
      topicName: "Microsoft Azure",
      img: microsoft_azure,
      subTopics: "",
    },
    {
      id: 8,
      topicName: "Basics Of Git",
      img: github,
      subTopics: "",
    },
  ],
}

const topicsToLearnSlice = createSlice({
  name: "traineeLogin",
  initialState,
  reducers: {},
})

// export const {} = topicsToLearnSlice.actions;
export default topicsToLearnSlice.reducer
