import { Inputter } from './components/Inputter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import customTheme from './constants/theme';
import { useState } from 'react';
import { Inputs } from './constants/types/inputs';
import { Result } from './components/Result';
import './App.scss';

function App() {

    const [inputs, setInputs] = useState<Inputs | null>(null);

    return (
        <ThemeProvider theme={customTheme}>
            { !inputs 
                ? <Inputter onSubmit={val => setInputs(val)} />
                : <Result inputs={inputs} onClear={() => setInputs(null)} />
            }
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
