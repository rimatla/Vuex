<template>
    <div>
        <button class="btn btn-danger" @click="increment(100)">Increment</button>
        <button class="btn btn-danger" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  //group w/ mapActions
  methods: {
    ...mapActions([
        'increment',
        'decrement'
    ])
  }
};
</script>