<script>
export default {
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
</script>

<template>
  <label> <input type="checkbox" v-model="isPurple" /> Purple </label>

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
