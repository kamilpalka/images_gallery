import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      images: [],
      page: 1,
      maxImages: 20,
    };
  },
  getters: {
    sortImages: (state) =>
      state.images.sort((a, b) => a.author.localeCompare(b.author)),
    paginatedImages: (state, getters) => {
      const start = (state.page - 1) * state.maxImages;
      const end = start + state.maxImages;
      return getters.sortImages.slice(start, end);
    },
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
    setPage(state, page) {
      state.page = page;
    },
  },
  actions: {
    async fetchImages({ context }) {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        const images = await response.json();
        context.commit("setImages", images);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
