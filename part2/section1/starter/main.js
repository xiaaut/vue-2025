/*
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/
const { createApp } = Vue;

const app = {
    data () {
        return {
            isPurple: false,
            circleColor:'',
            circleSize: 200,
            circleAngle: '',
        };
    },

    computed : {
        circleClass() {
            return this.isPurple ? 'purple' : '';
        },
        circleStyle() {
            return {
                width: this.circleSize + 'px',
                height: this.circleSize + 'px',
                lineHeight: `${this.circleSize}px`,
                transform: `rotate(${this.circleAngle}deg)`,
            }
        }
    }
};

createApp(app).mount("#app");
