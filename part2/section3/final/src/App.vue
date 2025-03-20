<template>
       <TogglePurple :togglePurple="togglePurple"></TogglePurple>

        <!-- <select v-model="circleColor">
            <option value="">White</option>
            <option value="text-black">Black</option>
            <option value="text-orange">Orange</option>
        </select> -->
        <CircleColor :changeCircleColor="changeCircleColor" :circleColor="circleColor"></CircleColor>

        <CircleSize :changeCircleSize="changeCircleSize" :circleSize="circleSize"></CircleSize>

        <CircleRotate :changeCircleRotate="changeCircleRotate":circleRotate="circleAngle"></CircleRotate>

        <!-- <div class="circle" :class="[circleClass, circleColor]" :style="circleStyle">Hi!</div> -->
        <Circle :circleClass="circleClass" :circleColor="circleColor" :circleStyle="circleStyle"></Circle>
</template>

<script>

import TogglePurple from './components/TogglePurple.vue';
import CircleSize from './components/CircleSize.vue';
import CircleRotate from './components/CircleRotate.vue';
import Circle from './components/Circle.vue';
import CircleColor from './components/CircleColor.vue';

export default {
    components: {
        TogglePurple,
        CircleSize,
        CircleRotate,
        Circle,
        CircleColor
    },
    data () {
        return {
            isPurple: false,
            circleColor:'',
            circleSize: 200,
            circleAngle: '',
        };
    },

    methods: {
        togglePurple() {
            this.isPurple = !this.isPurple;
        },

        changeCircleSize(value) {
            this.circleSize = value;
        },

        changeCircleRotate(value) {
            this.circleAngle = value;
        },

        changeCircleColor(value) {
            this.circleColor = value;
        },
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
</script>

<style scoped>


</style>
