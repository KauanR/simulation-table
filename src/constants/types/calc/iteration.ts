export type CalcIteration = {
    id: string
    timeSinceLastArrival: number
    arrivalTime: number
    serviceTime: number
    serviceStartTime: number
    customerTimeInQueue: number
    serviceEndTime: number
    customerTimeInSystem: number
    operatorFreeTime: number
};