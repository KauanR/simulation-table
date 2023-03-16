import { ArrowBack } from '@mui/icons-material';
import { Card, CardContent, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Inputs } from 'src/constants/types/inputs';
import './styles.scss';

type Props = {
    inputs: Inputs
    onClear: () => void
};

export const ResultHead = ({ inputs, onClear }: Props) => {

    const maxLength = Math.max(inputs.tecList.length, inputs.tsList.length);

    return (
        <div id='result-head'>
            <IconButton color='primary' onClick={onClear}>
                <ArrowBack/>
            </IconButton>
    
            <Card>
                <CardContent>
                    <Typography variant='h5' mb={2} color='primary' align='center'>
                        Valores de entrada
                    </Typography>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' colSpan={2} className='simulation-time'>
                                    <span className='title'>
                                        Tempo de Simulação:
                                    </span>
                                    <br />
                                    <span className='value'>
                                        { inputs.simulationTime } min.
                                    </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='center' width='150'>
                                    Tempo Entre Chegadas(TEC)
                                </TableCell>
                                <TableCell align='center' width='150'>
                                    Tempo de Serviço(TS)
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            { Array.from(Array(maxLength).keys()).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell align='center'>
                                        { inputs.tecList[index] || '-' }
                                    </TableCell>
                                    <TableCell align='center'>
                                        { inputs.tsList[index] || '-' }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};