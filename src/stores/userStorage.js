import { defineStore } from 'pinia'

export const userDetails = defineStore('user', {
  state: () => ({
    username: sessionStorage.getItem('savedUsername') || '',
    userType: sessionStorage.getItem('savedUserType') || '',
    feedback: JSON.parse(sessionStorage.getItem('savedFeedback')) || [],
    bestScore: sessionStorage.getItem('savedBestCurrentScore') || 0
  }),

  actions: {
    setUsername(username) {
      this.username = username
      sessionStorage.setItem('savedUsername', username)
    },
    setUserType(userType) {
      this.userType = userType
      sessionStorage.setItem('savedUserType', userType)
    },

    setFeedback(newFeedback) {
      this.feedback.push(newFeedback)
      sessionStorage.setItem('savedFeedback', JSON.stringify(this.feedback))
    },
    removeFeedback(index) {
      this.feedback.splice(index, 1)
      sessionStorage.setItem('savedFeedback', JSON.stringify(this.feedback))
    },

    updateCurrentScore(score) {
      console.log('Vad får jag i variabeln score in i updateScore:', score)
      if (score > this.bestScore) {
        console.log('när score är högre än this.best:', score)
        this.bestScore = score
        sessionStorage.setItem('savedBestCurrentScore', score)
      } else {
        console.log(
          'score som inte var högre än tidigaree- ingen uppdate! Men värdet är:',
          score
        )
      }
    }
  }
})
