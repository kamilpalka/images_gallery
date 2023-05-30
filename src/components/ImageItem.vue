<template>
  <v-img :src="src" :alt="alt" height="200" aspect-ratio="16/9" cover>
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular color="orange-darken-4" indeterminate>
        </v-progress-circular>
      </div>
    </template>
  </v-img>
</template>

<script>
export default {
  props: ["src", "alt"],
};
</script>
