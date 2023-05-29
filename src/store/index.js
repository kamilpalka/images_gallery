import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      images: [],
      page: 0,
      maxImages: 20,
    };
  },
  getters: {
    sortImages: (state) =>
      state.images.sort((a, b) => a.author.localeCompare(b.author)),
    paginatedImages: (state, getters) => {
      const start = (state.page - 1) * state.maxImages;
      const end = start + state.maxImages;
      console.log(getters.sortImages.slice(start, end));
      return getters.sortImages.slice(start, end);
    },
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
    incrementPage(state) {
      state.page++;
    },
  },
  actions: {
    async fetchImages(context) {
      const page = context.state.page;
      const url = `https://picsum.photos/v2/list?page=${page}&limit=100`;
      console.log(url);
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          context.commit("setImages", data);
          context.commit("incrementPage");
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    },
  },
});

export default store;
