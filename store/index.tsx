import { configureStore } from '@reduxjs/toolkit';

import SharedSlice from '@store/slices/shared/index';

export const store = configureStore({
  reducer: {
    sharedStore: SharedSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
