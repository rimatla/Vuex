<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
export default {
  methods: {
    increment() {
      /* 
       //Vue
       this.$emit('updated', 1);
       */

      /*
       //Vuex
       this.$store.state.counter++;
      */

      //using mutation
      this.$store.commit('increment');
    },
    decrement() {
       /* 
       //Vue
       this.$emit('updated', -1);
       */

       /*
       //Vuex
       this.$store.state.counter--;
      */

      //using mutation
      this.$store.commit('decrement');
    }
  }
};
</script>