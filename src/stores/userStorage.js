import { defineStore } from 'pinia'

export const userDetails = defineStore('user', {
  state: () => ({
    username: sessionStorage.getItem('savedUsername') || '',
    userType: sessionStorage.getItem('savedUserType') || '',
    feedback: JSON.parse(sessionStorage.getItem('savedFeedback')) || [],
    bestCurrentScore: sessionStorage.getItem('savedBestScore') || 0,
    preScore: sessionStorage.getItem('savedPreScore') || 0
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

    setScores(newScore) {
      console.log('newScore:', newScore)
      this.preScore = newScore
      sessionStorage.setItem('savedPreScore', preScore)
      console.log('preScore:', preScore)

      if (newScore > this.bestCurrentScore) {
        console.log('newScore då det är högre än tidigare resultat:', newScore)
        this.bestCurrentScore = newScore
        sessionStorage.setItem('savedBestScore', this.bestCurrentScore)
      }
    }
  }
})
