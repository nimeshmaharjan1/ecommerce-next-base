import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import Header from './header';
import { useAppSelector } from '@shared/hooks';
import { RootState } from '@store/index';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const { selectedTheme } = useAppSelector((state: RootState) => state.sharedStore);
  const darkTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: selectedTheme,
        },
      }),
    [selectedTheme]
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default MainLayout;
