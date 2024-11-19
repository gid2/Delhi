import React, { FC, Suspense } from 'react';
import { CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { theme } from './providers/Theme/theme';
import AppRouter from 'app/providers/router/ui/AppRouter';

const App: FC = () => (
    <ThemeProvider theme={theme}>
        <Suspense fallback="">
            <CssBaseline />
            <Navbar />
            {/* <Toolbar /> /!* Оставляет пространство под Navbar *!/ */}
            <AppRouter />
        </Suspense>
    </ThemeProvider>
);

export default App;
