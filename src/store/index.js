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
    incrementPage(state) {
      state.page++;
    },
  },
  actions: {
    async fetchImages(context) {
      const page = context.state.page;
      const limit = context.state.limit;
      const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          context.commit("setImages", data);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    },
  },
});

export default store;
