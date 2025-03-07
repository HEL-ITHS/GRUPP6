import { defineStore } from 'pinia'

export const userDetails = defineStore('user', {
  state: () => ({
    username: sessionStorage.getItem('savedUsername') || '',
    userType: sessionStorage.getItem('savedUserType') || '',
    feedback: JSON.parse(sessionStorage.getItem('savedFeedback')) || []
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
    }
  }
})
