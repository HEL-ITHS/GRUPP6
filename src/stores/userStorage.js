import { defineStore } from 'pinia'

export const userDetails = defineStore('user', {
  state: () => ({
    username: sessionStorage.getItem('savedUsername') || '',
    userType: sessionStorage.getItem('savedUserType') || '',
    feedback: JSON.parse(sessionStorage.getItem('savedFeedback')) || [],
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
      sessionStorage.setItem('savedFeedback', JSON.stringify(this.feedback))
    },
    removeFeedback(index) {
      this.feedback.splice(index, 1)
      sessionStorage.setItem('savedFeedback', JSON.stringify(this.feedback))
    },

    setScores(score, quizId) {
      if (quizId in this.currentScores) {
        /* Uppdatera i Pinia */
        this.previousScores[quizId] = this.currentScores[quizId]
        this.currentScores[quizId] = score
        /* Uppdatera session storage */
        sessionStorage.setItem(
          'savedPreviousScores',
          JSON.stringify(this.previousScores)
        )
      } else {
        /* Uppdatera i Pinia */
        this.currentScores[quizId] = score
      }

      /* Enda gången vi inte ska uppdatera bestScore är när vi redan har ett bestScore sparat men nya resultatet slår inte det */
      if (!(quizId in this.bestScores && score < this.bestScores[quizId])) {
        /* Uppdatera i Pinia */
        this.bestScores[quizId] = score
        /* Uppdatera session storage */
        sessionStorage.setItem(
          'savedBestScores',
          JSON.stringify(this.bestScores)
        )
      }

      /* Uppdatera session storage */
      sessionStorage.setItem(
        'savedCurrentScores',
        JSON.stringify(this.currentScores)
      )
    }
  }
})
