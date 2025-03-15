/*
  1. Sync input value with vue data and show it on the label(v-model 2-ways binding)
  2. Implement reset(v-on and methods)
  3. Apply transform style to the cube(computed)
*/

// {
//   transform: `perspective(0px)rotateX(0deg)rotateY(0deg)rotateZ(0deg)`,
// }
const { createApp } = Vue

const appObj = {
    data () {
        return {
            perspective: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            message: 'Hello Vue!'
        }
    },
    methods: {
        reset () {
            this.perspective = 0
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        }
    },

    computed:{
        transformStyle() {
            return {
                transform: `perspective(${this.perspective}px)rotateX(${this.rotateX}deg)rotateY(${this.rotateY}deg)rotateZ(${this.rotateZ}deg)`
            }
        }
    }
}

createApp(appObj).mount('#app')