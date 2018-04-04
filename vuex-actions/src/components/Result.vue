<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
export default {
  //props: ['counter'],
  computed: {
    counter() {
      //return this.$store.state.counter * 2

      //using getters to get state
      return this.$store.getters.doubleCounter;
    }
  }
};
</script>