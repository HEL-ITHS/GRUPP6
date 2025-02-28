import { defineStore } from "pinia";

export const userDetails = defineStore('user', {
  state: () => ({
    username: sessionStorage.getItem('savedUsername') || "",
    usertype: ""
  }),

  actions: {
    setUsername(username) {
      this.username = username
      sessionStorage.setItem('savedUsername', username)
    },
    setUserType(userType){
      this.userType = userType
    }
  }
})