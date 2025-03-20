<template>
    <label>
            Circle Size
            <input  type="number" :value="circleSize"  @input="(event) => changeCircleSize(event.target.value)"/>
        </label>
</template>

<script>
export default{
    props: ['changeCircleSize','circleSize'],
}
</script>