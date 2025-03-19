<script>

import TogglePurple from './components/TogglePurple.vue';
export default {
    components: {
        TogglePurple
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
        }
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

<template>
  <TogglePurple :togglePurple="togglePurple"></TogglePurple>

        <select v-model="circleColor">
            <option value="">White</option>
            <option value="text-black">Black</option>
            <option value="text-orange">Orange</option>
        </select>

        <label>
            Circle Size
            <input type="number" v-model="circleSize" />
        </label>

        <label>
            Circle Rotate
            <input type="number" v-model="circleAngle" />
        </label>
        <div class="circle" :class="[circleClass, circleColor]" :style="circleStyle">Hi!</div>
</template>

<style scoped>


</style>
