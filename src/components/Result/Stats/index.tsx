import { Card, CardContent, Table, TableRow, TableCell, Typography, TableBody } from '@mui/material';
import { CalcStats } from 'src/constants/types/calc/stats';
import './styles.scss';

type Props = {
    stats: CalcStats
}

export const ResultStats = ({ stats }: Props) => {
    return (
        <Card id='result-stats'>
            <CardContent>
                <Typography variant='h5' mb={2} color='primary' align='center'>
                    Estatísticas
                </Typography>

                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className='label'>
                                Tempo Médio de Espera na Fila
                            </TableCell>
                            <TableCell className='value'>
                                { stats.waitTimeAverage?.toFixed(2) } minutos
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='label'>
                                Probabilidade de um cliente esperar na fila
                            </TableCell>
                            <TableCell className='value'>
                                { stats.waitTimeProbability?.toFixed(2) } %
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='label'>
                                Probabilidade do Operador Livre
                            </TableCell>
                            <TableCell className='value'>
                                { stats.freeOperatorProbability?.toFixed(2) } %
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='label'>
                                Tempo Médio de Serviço
                            </TableCell>
                            <TableCell className='value'>
                                { stats.serviceTimeAverage?.toFixed(2) } minutos
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='label'>
                                Tempo Médio Despendido no Sistema
                            </TableCell>
                            <TableCell className='value'>
                                { stats.spentTimeAverage?.toFixed(2) } minutos
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};