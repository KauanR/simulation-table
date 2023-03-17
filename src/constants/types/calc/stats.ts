export type CalcStats = {
    /** Tempo Médio de Espera na Fila */
    waitTimeAverage?: number
    /** Problabilidade de um cliente esperar na fila */
    waitTimeProbability?: number
    /** Probabilidade do Operador Livre */
    freeOperatorProbability?: number
    /** Tempo Médio de Serviço */
    serviceTimeAverage?: number
    /** Tempo Médio Despendido no Sistema */
    spentTimeAverage?: number
}