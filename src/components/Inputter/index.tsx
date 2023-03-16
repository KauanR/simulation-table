import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Inputs } from 'src/constants/types/inputs';
import { MuiChipsInput } from 'mui-chips-input';
import * as Yup from 'yup';
import './styles.scss';

type Props = {
    onSubmit: (value: Inputs) => void
}

export const Inputter = ({ onSubmit }: Props) => {

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors: formErrors, isValid: formIsValid }
    } = useForm<Inputs>({
        resolver: yupResolver(Yup.object().shape({
            simulationTime: Yup.number().required('O Tempo de Simulação é obrigatório'),
            tecList: Yup.array().of(Yup.string()).min(1, 'É necessário ao menos 1 item'),
            tsList: Yup.array().of(Yup.string()).min(1, 'É necessário ao menos 1 item')
        })),
        reValidateMode: 'onChange',
        mode: 'onChange',
        defaultValues: {
            tecList: [],
            tsList: []
        }
    });

    const submitHandler = (val: Inputs) => {
        onSubmit(val);
        reset();
    };

    return (
        <Card className='inputter'>
            <CardContent>
                <div className='title'>
                    <Typography variant='h3'>
                        Teoria das filas
                    </Typography>
                    <Typography variant='subtitle1' color='text.secondary'>
                        Para começar, por favor insira os dados necessários logo abaixo.
                    </Typography>
                </div>

                <form id='inputter-form' onSubmit={handleSubmit(submitHandler)}>
                    <Controller
                        name='simulationTime'
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type='number'
                                label='Tempo de Simulação'
                                variant='outlined'
                                autoFocus
                                error={!!formErrors.simulationTime}
                                helperText={formErrors.simulationTime?.message}
                            />
                        )}
                    />

                    <Controller
                        name='tecList'
                        control={control}
                        render={({ field }) => (
                            <MuiChipsInput
                                {...field}
                                inputProps={{ type: 'number' }}
                                disableEdition
                                variant='outlined'
                                label='Tempo Entre Chegadas(TEC)'
                                placeholder='Digite e aperte ENTER para inserir'
                                error={!!formErrors.tecList}
                                helperText={formErrors.tecList?.message}
                            />
                        )}
                    />

                    <Controller
                        name='tsList'
                        control={control}
                        render={({ field }) => (
                            <MuiChipsInput
                                {...field}
                                inputProps={{ type: 'number' }}
                                disableEdition
                                variant='outlined'
                                label='Tempo de Serviço(TS)'
                                placeholder='Digite e aperte ENTER para inserir'
                                error={!!formErrors.tsList}
                                helperText={formErrors.tsList?.message}
                            />
                        )}
                    />
                </form>

                <Button
                    type='submit'
                    variant='contained'
                    size='large'
                    form='inputter-form'
                    disabled={!formIsValid}
                >
                    Simular
                </Button>
            </CardContent>
        </Card>
    );
};