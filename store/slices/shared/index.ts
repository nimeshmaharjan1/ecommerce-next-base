import { createSlice } from '@reduxjs/toolkit';

enum THEMES {
  dark = 'dark',
  light = 'light',
}

interface State {
  selectedTheme: THEMES;
}

const initialState = {
  selectedTheme: 'dark',
} as State;

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    toggleTheme: (state: State) => {
      state.selectedTheme === THEMES.dark ? (state.selectedTheme = THEMES.light) : (state.selectedTheme = THEMES.dark);
    },
  },
});

export const { toggleTheme } = sharedSlice.actions;

export default sharedSlice.reducer;
