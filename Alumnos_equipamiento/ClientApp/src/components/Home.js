import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

import { getAlumnos } from '../services/alumnoService';

const Home = ({ enqueueSnackbar }) => {
    const [documento, setDocumento] = useState('');
    const [alumnos, setAlumnos] = useState(null);

    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Grid item xs={12}>
                <h1>Consulta de alumnos</h1>
            </Grid>
            <Grid item xs={12}>
                <TextField value={documento} onChange={(event) => {
                    setDocumento(event.target.value);
                }} />
                <Button onClick={async () => {
                    try {
                        const data = await getAlumnos(documento);
                        setAlumnos(data);
                        console.log(data);
                    }
                    catch (e) {
                        enqueueSnackbar(e.message, {
                            variant: 'error',
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'center',
                            },
                            TransitionComponent: Slide,
                        });
                        setAlumnos(null);
                    }
                }}>
                    Buscar alumno
                </Button>
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Apellido</TableCell>
                                <TableCell>HWID</TableCell>
                                <TableCell>N&uacute;mero de serie</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {alumnos && alumnos.map((alumno) => (
                                <TableRow key={alumno.id}>
                                    <TableCell component="th" scope="row">
                                        {alumno.nombre}
                                    </TableCell>
                                    <TableCell align="right">{alumno.apellido}</TableCell>
                                    <TableCell align="right">{alumno.hwid}</TableCell>
                                    <TableCell align="right">{alumno.numero_serie}</TableCell>
                                </TableRow>
                            ))}
                            {(alumnos && alumnos.length === 0) && (
                                <TableRow key={alumno.id}>
                                    <TableCell colSpan={4} component="th" scope="row">
                                        No se encontraron resultados
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default withSnackbar(Home);
