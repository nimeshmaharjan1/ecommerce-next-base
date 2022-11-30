import { IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { RootState } from '@store/index';
import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { toggleTheme } from '@store/slices/shared';

const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { selectedTheme } = useAppSelector((state: RootState) => state.sharedStore);
  return (
    <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => dispatch(toggleTheme())}>
      {selectedTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggler;
