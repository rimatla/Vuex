<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
// Vuex can import on computed getters in one batch
import { mapGetters } from "vuex";
export default {
  /*  
  computed: {
    counter() {
      //return this.$store.state.counter * 2;
      //using getters to get state
      return this.$store.getters.doubleCounter;
    },
    clicks() {
        return this.$store.getters.stringCounter;
    }
  
  }
*/

  // Vuex can import on computed getters in one batch

  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script>