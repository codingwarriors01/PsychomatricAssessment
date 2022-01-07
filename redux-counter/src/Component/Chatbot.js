import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import axios from 'axios';
import Post from './Post'
import Link from './Link'
import '../App.css'


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#3736a4',
  headerFontColor: '#fff',
  headerFontSize: '25px',
  headerFontWeight: 'bold',
  botBubbleColor: '#3736a4',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const config = {
  width: '350px',
  height: '450px',
  hideUserAvatar: true,
  placeholder: 'Reply to Tia',
  headerTitle: 'Tia',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(true)

  const Aman = (email_fetch) => {
    const customer = { "email_fetch": email_fetch }
    axios.post('http://127.0.0.1:8000/generate_support', customer,
      {
        headers: {
          'Content-type': 'application/json'
        },
      })
    console.log("HEy  ", customer)

  }
  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hey there!',
              trigger: 'q-firstname',
            },

            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi, {previousValue}   I am  Tia the Bot 😊! How can i help you today ?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'I am test taker and need help', trigger: '4' },
                { value: 2, label: 'Using product and Need support ', trigger: '3' },
                { value: 3, label: 'Looking for opportunities', trigger: '5' },
                { value: 4, label: 'Know more about our services we provide', trigger: '6' },
              ],
            },
            {
              id: '4',
              message:
                'No worries we got you covered. What describes your issues?',
              trigger: 'test_taker',
            },
            {
              id: '3',
              message: 'No worries we are here to help 👍',
              trigger: 'need_support',
            },
            {
              id: '5',
              message:
                'No worries we are here to help 👍',
              trigger: 'oppurtunity',
            },
            {
              id: '6',
              component: <Link />,
              trigger: 'q-submit',
            },

            {
              id: 'test_taker',
              options: [
                { value: 7, label: 'Where can I find my test score?', trigger: 'customer_support' },
                { value: 8, label: 'I cannot start my test ', trigger: 'customer_support' },
                { value: 9, label: 'Finished my test what should I do next', trigger: 'test-finish' },
                { value: 10, label: 'My test got interrupted', trigger: 'customer_support' },
                { value: 11, label: 'I cannot find my test link', trigger: 'customer_support' },
              ],
            },
            {
              id: 'need_support',
              options: [
                { value: 12, label: 'I am client and need support ', trigger: 'client-support' },
                { value: 13, label: 'I am a test taker', trigger: 'customer_support' },

              ],
            },
            {
              id: 'client-support',
              options: [
                { value: 14, label: 'Issue with existing product ', trigger: 'customer_support' },
                { value: 15, label: 'Add functionality to your existing products', trigger: 'customer_support' },

              ],
            },
            {
              id: 'oppurtunity',
              options: [
                { value: 14, label: 'Assessor ', trigger: 'customer_support' },
                { value: 15, label: 'Developer', trigger: 'customer_support' },
                { value: 16, label: 'Career at Real CoderZ', trigger: 'customer_support' },
              ],

            },
            {
              id: 'test-finish',
              message: 'No issues now you can close all tabs!',
              trigger: 'ask-query',
            },
            {
              id: 'ask-query',
              message: 'Do you have any other queries',
              trigger: 'more-queries',
            },

            {
              id: 'more-queries',
              options: [
                { value: 'y', label: 'Yes', trigger: 'qtype' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },

            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              message:
                'What do you want to know more?',
              trigger: 'know_more',
            },
            {
              id: 'customer_support',
              message: 'Please enter your official Email ,so that Support desk can reach you. No spamming I promise 🔒',
              trigger: 'email_fetching',
            },
            {
              id: 'know_more',
              user: true,
              validator: (value) => {
                if (/^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'customer_support',
            },

            {
              id: 'email_fetching',
              user: true,
              validator: (value) => {
                if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                  Aman(value)
                  value = "email_fetch"

                  return true

                } else {
                  return 'Oops, please enter the ID associated with your company 😀'
                }

              },

              trigger: 'customer_notify',


            },
            {
              id: 'customer_notify',
              message: 'Our Customer Support will reach to you soon ! thanks for having us 😊 ',
              trigger: 'end-message',
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn chat" onClick={() => startChat()}>
            <i class="fas fa-times fa-2x"></i>
          </button>
        ) : (
          <button className="btn chat" onClick={() => hideChat()}>
            <i class="fas fa-comment fa-2x"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
