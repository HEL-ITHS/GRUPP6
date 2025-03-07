<script>
  import { userDetails } from '../stores/userStorage'
  export default {
    data() {
      return {
        newMessage: '',
        messages: [],
        feedback: ''
      }
    },
    methods: {
      submitFeedback() {
        if (this.feedback.trim() !== '') {
          const feedback = userDetails()
          feedback.setFeedback(this.feedback)
          alert('tack! vi har tagit emot din kommentar')

          this.feedback = ''
        } else {
          alert('Var vänlig och skriv din åsikt eller förbättringsförslag.')
        }
      },
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.messages.push({
            user: this.setUsernameFromLogIn,
            text: this.newMessage
          })
          this.newMessage = ''
          setTimeout(() => {
            this.messages.push({
              user: 'Grammify',
              text: 'Hej, Tack för ditt medelande! Vi återkommer strax.'
            })
          }, 1000)
        }
      }
    },
    computed: {
      setUsernameFromLogIn() {
        const userstore = userDetails()
        return userstore.username
      }
    }
  }
</script>

<template>
  <div id="feedback_section">
    <h3>Din åsikt är viktig för oss!</h3>
    <textarea
      v-model="feedback"
      placeholder="Skriv din åsikt eller förbättringsförslag här..."
      rows="5"
      cols="40"
    />
    <button @click="submitFeedback">Skicka Åsikt</button>
  </div>

  <div id="chat_container">
    <div id="chat">
      <img src="/assets/chatIcon.png" alt="Chat Icon" class="chat_icon" />
      <h2>Har du frågor eller funderingar över något?</h2>
      <div class="chat_messages">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="chat_message"
          :class="{
            userMessage: msg.user === setUsernameFromLogIn,
            systemMessage: msg.user !== setUsernameFromLogIn
          }"
        >
          <strong>{{ msg.user }}:</strong> {{ msg.text }}
        </div>
      </div>
      <div class="chat_input">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="Skriv ett meddelande..."
        />
        <button @click="sendMessage">Skicka</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #chat_container {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    padding: 20px;
  }
  #chat {
    min-width: 50vw;
  }

  .chat_icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #007bff;
  }

  h2 {
    text-align: center;
    margin-top: 10px;
    color: #007bff;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .chat_messages {
    flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
    background-color: #f9f9f9;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  .chat_message {
    padding: 8px 12px;
    margin-bottom: 8px;
    border-radius: 8px;
    word-wrap: break-word;
    font-size: 14px;
    transition: all 0.3s ease;
  }

  .userMessage {
    background: #cce5ff;
    text-align: right;
    color: #0056b3;
  }

  .systemMessage {
    background: #6eee86;
    text-align: left;
    color: #4a4a4a;
  }

  .chat_input {
    display: flex;
    margin-top: 10px;
    align-items: center;
    border-top: 1px solid #e1e1e1;
    padding-top: 10px;
  }

  .chat_input input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #007bff;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .chat_input input:focus {
    border-color: #0056b3;
  }

  .chat_input button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-left: 8px;
    border-radius: 5px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
  }

  .chat_input button:hover {
    background-color: #0056b3;
    transform: scale(1.1);
  }

  .chat_input button:active {
    transform: scale(0.95);
  }

  .chat_messages .chat-message:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  #feedback_section {
    margin-top: 20px;
    width: 100%;
    padding: 15px;
    background-color: #f1f1f1;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  #feedback_section h3 {
    color: #333;
    font-size: 18px;
    text-align: center;
  }

  #feedback_section textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #007bff;
    resize: none;
  }

  #feedback_section button {
    display: block;
    margin: 10px auto;
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  #feedback_section button:hover {
    background-color: #0056b3;
  }
</style>
