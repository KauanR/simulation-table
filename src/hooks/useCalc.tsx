import { Calc } from 'src/constants/types/calc/calc';
import { Inputs } from 'src/constants/types/inputs';

export const useCalc = (inputs: Inputs) => {
    const calc: Calc = {
        iterations: [
            {
                id: '1',
                timeSinceLastArrival: 1,
                arrivalTime: 2,
                serviceTime: 3,
                serviceStartTime: 4,
                customerTimeInQueue: 5,
                serviceEndTime: 6,
                customerTimeInSystem: 7,
                operatorFreeTime: 8
            },
            {
                id: '2',
                timeSinceLastArrival: 9,
                arrivalTime: 10,
                serviceTime: 11,
                serviceStartTime: 12,
                customerTimeInQueue: 13,
                serviceEndTime: 14,
                customerTimeInSystem: 15,
                operatorFreeTime: 16
            }
        ],
        stats: {
            waitTimeAverage: 10,
            waitTimeProbability: 10,
            freeOperatorProbability: 10,
            serviceTimeAverage: 10,
            spentTimeAverage: 10
        }
    };


    return calc;
};