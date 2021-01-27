<template>
  <div>
    Today is Sunday.
  </div>
</template>

<script>
export default {
  setup() {
    const testFunction = () => {
      console.log("test es6语法");
    };
    return {
      testFunction,
    };
  },
};
</script>

<style>
div {
  color: yellowgreen;
}
</style>
