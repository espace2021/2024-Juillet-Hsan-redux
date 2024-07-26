import { createSlice } from '@reduxjs/toolkit';
import { api } from './rtkQueryArticle';

export const articleSlice = createSlice({
  name: 'article',
  initialState: {
    articles: [],
    article: {},
    isLoading: false,
    success: null,
    error: null,
    page: 1,
    limit: 10,
    tot: 0,
    searchTerm: ''
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.getItems.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(api.endpoints.getItems.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.articles = action.payload.products;
        state.tot = action.payload.totalPages;
       console.log(action.payload.totalPages)
      })
      .addMatcher(api.endpoints.getItems.matchRejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error;
      });
  },
});

export const { setPage, setLimit, setSearchTerm } = articleSlice.actions;

export default articleSlice.reducer;
