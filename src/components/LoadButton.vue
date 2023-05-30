<template>
  <v-btn
    class="ma-3"
    rounded="lg"
    color="deep-orange-darken-1"
    elevation="10"
    size="x-large"
    width="300px"
    @click="fetchImages"
    >Load More
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchImages"]),
  },
};
</script>
