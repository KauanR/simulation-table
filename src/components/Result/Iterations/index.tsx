import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { CalcIteration } from 'src/constants/types/calc/iteration';
import './styles.scss';

type Props = {
    iterations: CalcIteration[]
}

export const ResultIterations = ({ iterations }: Props) => {

    const sums: Partial<CalcIteration> = iterations.reduce((acc, cur) => ({
        serviceTime: acc.serviceTime + cur.serviceTime,
        customerTimeInQueue: acc.customerTimeInQueue + cur.customerTimeInQueue,
        customerTimeInSystem: acc.customerTimeInSystem + cur.customerTimeInSystem,
        operatorFreeTime: acc.operatorFreeTime + cur.operatorFreeTime,
    }), {
        serviceTime: 0,
        customerTimeInQueue: 0,
        customerTimeInSystem: 0,
        operatorFreeTime: 0
    });

    return (
        <Card id='result-iterations'>
            <CardContent>
                <Typography variant='h5' mb={2} color='primary' align='center'>
                    Tabela de Simulação
                </Typography>

                <Table>
                    <colgroup>
                        <col style={{ width:'8%' }}/>
                        <col style={{ width:'12%' }}/>
                        <col style={{ width:'12%' }}/>
                        <col style={{ width:'12%' }}/>
                        <col style={{ width:'12%' }}/>
                        <col style={{ width:'12%' }}/>
                        <col style={{ width:'12%' }}/>
                        <col style={{ width:'12%' }}/>
                        <col style={{ width:'12%' }}/>
                    </colgroup>

                    <TableHead>
                        <TableRow>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Tempo desde a última chegada (TEC) (minutos)</TableCell>
                            <TableCell>Tempo de Chegada no Relógio da Simulação</TableCell>
                            <TableCell>Tempo de Serviço (TS) (minutos)</TableCell>
                            <TableCell>Tempo de Inicio de Serviço no Relógio da Simulação</TableCell>
                            <TableCell>Tempo do Cliente na Fila (minutos)</TableCell>
                            <TableCell>Tempo Final do Serviço No Relógio da Simulação</TableCell>
                            <TableCell>Tempo do Cliente no Sistema (minutos)</TableCell>
                            <TableCell>Tempo Livre do Operador (minutos)</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        { iterations.map(it => (
                            <TableRow key={it.id}>
                                <TableCell>{ it.id }</TableCell>
                                <TableCell>{ it.timeSinceLastArrival }</TableCell>
                                <TableCell>{ it.arrivalTime }</TableCell>
                                <TableCell>{ it.serviceTime }</TableCell>
                                <TableCell>{ it.serviceStartTime }</TableCell>
                                <TableCell>{ it.customerTimeInQueue }</TableCell>
                                <TableCell>{ it.serviceEndTime }</TableCell>
                                <TableCell>{ it.customerTimeInSystem }</TableCell>
                                <TableCell>{ it.operatorFreeTime }</TableCell>
                            </TableRow>
                        ))}
                        <TableRow className='sums'>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>{ sums.serviceTime }</TableCell>
                            <TableCell></TableCell>
                            <TableCell>{ sums.customerTimeInQueue }</TableCell>
                            <TableCell></TableCell>
                            <TableCell>{ sums.customerTimeInSystem }</TableCell>
                            <TableCell>{ sums.operatorFreeTime }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};