<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <h1 class="text-center text-h2">Images Gallery</h1>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="image in sortImages"
            :key="image.id"
          >
            <v-card
              class="rounded-b-xl rounded-t-lg"
              variant="outlined"
              elevation="8"
            >
              <v-img
                :src="image.download_url"
                :alt="image.author"
                height="200"
                aspect-ratio="16/9"
                cover
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="orange-darken-4"
                      indeterminate
                    ></v-progress-circular>
                  </div> </template
              ></v-img>
              <v-card-text class="text-center font-weight-bold">{{
                image.author
              }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" v-if="sortImages.length === 0">
            <p class="text-center text-h2">
              No images found. Please try again later
            </p>
          </v-col>
        </v-row>
        <v-row justify="center">
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
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    //paginatedImages() { return this.$store.getters.paginatedImages; },
    ...mapGetters(["sortImages"]),
  },
  methods: {
    // loadMore() { this.$store.dispatch("fetchImages"); },
    ...mapActions(["fetchImages"]),
  },
  mounted() {
    this.fetchImages();
  },
};
</script>

<style>
.v-main {
  background-color: #e0e0e0;
}

.v-card-text {
  color: #000000;
  background-color: #ffa726;
}
</style>
