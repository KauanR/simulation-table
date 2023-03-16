import { Inputs } from 'src/constants/types/inputs';
import { useCalc } from 'src/hooks/useCalc';
import { ResultHead } from './Head';
import { ResultIterations } from './Iterations';
import { ResultStats } from './Stats';
import './styles.scss';

type Props = {
    inputs: Inputs
    onClear: () => void
}

export const Result = ({ inputs, onClear }: Props) => {

    const calc = useCalc(inputs);

    return (
        <div id='result'>
            <ResultHead inputs={inputs} onClear={onClear} />

            <ResultIterations iterations={calc.iterations} />

            <ResultStats stats={calc.stats} />
        </div>
    );
};