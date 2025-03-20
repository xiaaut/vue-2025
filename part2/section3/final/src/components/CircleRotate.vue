<template>
    <label>
            Circle Rotate
            <input  type="number" :value="circleRotate"  @input="(event) => changeCircleRotate(event.target.value)"/>
        </label>
</template>

<script>
export default{
    props: ['changeCircleRotate','circleRotate'],
}
</script>