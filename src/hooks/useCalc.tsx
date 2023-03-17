import { Calc } from 'src/constants/types/calc/calc';
import { CalcIteration } from 'src/constants/types/calc/iteration';
import { CalcStats } from 'src/constants/types/calc/stats';
import { Inputs } from 'src/constants/types/inputs';

type Data = {
    simulationTime: number
    tecList: number[]
    tsList: number[]
}

export const useCalc = (inputs: Inputs): Calc => {
    const data: Data = {
        ...inputs,
        tecList: inputs.tecList.map(tec => parseInt(tec)),
        tsList: inputs.tsList.map(ts => parseInt(ts))
    };

    const iterations: CalcIteration[] = [];

    let index = 0;

    let clock = 0;
    let serviceEndTime = 0;

    while(++index && clock < data.simulationTime) {
        const tec = data.tecList[(Math.random() * data.tecList.length) | 0];
        const ts = data.tsList[(Math.random() * data.tsList.length) | 0];

        console.log(tec, ts);

        const item: CalcIteration = {
            id: index,
            timeSinceLastArrival: tec,
            arrivalTime: clock + tec,
            serviceTime: ts,
            serviceStartTime: 0,
            customerTimeInQueue: 0,
            serviceEndTime: 0,
            customerTimeInSystem: 0,
            operatorFreeTime: 0,
        };

        if(serviceEndTime < item.arrivalTime) {
            item.operatorFreeTime = item.arrivalTime - serviceEndTime;
        } else {
            item.operatorFreeTime = 0;
        }

        if(serviceEndTime >= item.arrivalTime) {
            item.customerTimeInQueue = serviceEndTime - item.arrivalTime;
        } else {
            item.customerTimeInQueue = 0;
        }

        item.serviceStartTime = item.arrivalTime + item.customerTimeInQueue;
        item.serviceEndTime = item.serviceStartTime + ts;
        item.customerTimeInSystem = (item.serviceEndTime - item.serviceStartTime) + item.customerTimeInQueue;

        serviceEndTime = item.serviceEndTime;

        clock += tec;

        iterations.push(item as CalcIteration);
    }

    const sums = iterations.reduce((acc, cur) => ({
        serviceTime: acc.serviceTime + cur.serviceTime,
        customerTimeInQueue: acc.customerTimeInQueue + cur.customerTimeInQueue,
        customerTimeInSystem: acc.customerTimeInSystem + cur.customerTimeInSystem,
        operatorFreeTime: acc.operatorFreeTime + cur.operatorFreeTime
    }), {
        serviceTime: 0,
        customerTimeInQueue: 0,
        customerTimeInSystem: 0,
        operatorFreeTime: 0
    });

    const itemsWhomSpentTimeInQueue: CalcIteration[] = iterations.filter(iteration => (
        iteration.customerTimeInQueue > 0
    ));

    const stats: CalcStats = {
        waitTimeAverage: sums.customerTimeInQueue / iterations.length,
        waitTimeProbability: (itemsWhomSpentTimeInQueue.length / iterations.length) * 100,
        freeOperatorProbability: (sums.operatorFreeTime / iterations[iterations.length - 1].serviceEndTime) * 100,
        serviceTimeAverage: sums.serviceTime / iterations.length,
        spentTimeAverage: sums.customerTimeInSystem / iterations.length
    };

    return {
        iterations,
        sums,
        stats
    };
};