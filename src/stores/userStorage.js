import { defineStore } from 'pinia'

export const userDetails = defineStore('user', {
  state: () => ({
    username: sessionStorage.getItem('savedUsername') || '',
    userType: sessionStorage.getItem('savedUserType') || '',
    feedback: JSON.parse(localStorage.getItem('savedFeedback')) || [],
    previousScores:
      JSON.parse(sessionStorage.getItem('savedPreviousScores')) || {},
    currentScores:
      JSON.parse(sessionStorage.getItem('savedCurrentScores')) || {},
    bestScores: JSON.parse(sessionStorage.getItem('savedBestScores')) || {}
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
      localStorage.setItem('savedFeedback', JSON.stringify(this.feedback))
    },
    removeFeedback(index) {
      this.feedback.splice(index, 1)
      localStorage.setItem('savedFeedback', JSON.stringify(this.feedback))
    },

    setScores(score, quizId) {
      if (quizId in this.currentScores) {
        this.previousScores[quizId] = this.currentScores[quizId]
        sessionStorage.setItem(
          'savedPreviousScores',
          JSON.stringify(this.previousScores)
        )
      }

      if (!(quizId in this.bestScores && score < this.bestScores[quizId])) {
        this.bestScores[quizId] = score
        sessionStorage.setItem(
          'savedBestScores',
          JSON.stringify(this.bestScores)
        )
      }

      this.currentScores[quizId] = score
      sessionStorage.setItem(
        'savedCurrentScores',
        JSON.stringify(this.currentScores)
      )
    }
  }
})
