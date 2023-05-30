<template>
  <v-card class="rounded-b-xl rounded-t-lg" variant="outlined" elevation="8">
    <slot></slot>
    <v-card-text class="text-center font-weight-bold">
      {{ author }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["author"],
};
</script>
