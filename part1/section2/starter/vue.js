const { createApp } = Vue

const appObj = {
    data () {
        return {
            inputText: ''
        }
    }
}

createApp(appObj).mount('#app')