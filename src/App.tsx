import { Inputter } from './components/Inputter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import customTheme from './constants/theme';
import { useState } from 'react';
import { Inputs } from './constants/types/inputs';
import './App.scss';

function App() {

    const [inputs, setInputs] = useState<Inputs | null>(null);

    return (
        <ThemeProvider theme={customTheme}>
            { !inputs 
                ? <Inputter onSubmit={val => setInputs(val)}/>
                : <div></div>
            }
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
