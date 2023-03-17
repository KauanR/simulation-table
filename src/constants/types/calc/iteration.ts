export type CalcIteration = {
    id: number
    /** Tempo desde a última chegada (TEC) */
    timeSinceLastArrival: number
    /** Tempo de Chegada no Relógio da Simulaçlão */
    arrivalTime: number
    /** Tempo de Serviço (TS) */
    serviceTime: number
    /** Tempo de Inicio de Serviço no Relógio da Simulação */
    serviceStartTime: number
    /** Tempo do Cliente na Fila */
    customerTimeInQueue: number
    /** Tempo Final do Serviço No Relógio da Simulação */
    serviceEndTime: number
    /** Tempo do Cliente no Sistema  */
    customerTimeInSystem: number
    /** Tempo Livre do Operador  */
    operatorFreeTime: number
};