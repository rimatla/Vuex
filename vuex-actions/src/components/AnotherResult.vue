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
  // Vuex can import on computed getters in one batch
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script>