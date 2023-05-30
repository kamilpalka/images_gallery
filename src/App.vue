<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <v-row justify="center">
            <v-col cols="12">
              <the-header></the-header>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="image in sortImages"
              :key="image.id"
            >
              <card-item :author="image.author">
                <image-item
                  :src="image.download_url"
                  :alt="image.author"
                ></image-item>
              </card-item>
            </v-col>
            <v-col cols="12" v-if="sortImages.length === 0">
              <the-error></the-error>
            </v-col>
            <load-button></load-button>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheHeader from "./components/TheHeader.vue";
import CardItem from "./components/CardItem.vue";
import ImageItem from "./components/ImageItem.vue";
import TheError from "./components/TheError.vue";
import LoadButton from "./components/LoadButton.vue";

export default {
  components: {
    TheHeader,
    CardItem,
    ImageItem,
    TheError,
    LoadButton,
  },
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
