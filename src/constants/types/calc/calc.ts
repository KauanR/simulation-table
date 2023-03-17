import { CalcIteration } from './iteration';
import { CalcStats } from './stats';

export type Calc = {
    iterations: CalcIteration[]
    sums: Partial<CalcIteration>
    stats: CalcStats
}