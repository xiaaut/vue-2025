<template>
    <div class="circle" :class="[circleClass, circleColor]" :style="circleStyle">Hi!</div>
</template>

<script>
export default{
    props:['circleClass','circleColor','circleStyle']
}
</script>