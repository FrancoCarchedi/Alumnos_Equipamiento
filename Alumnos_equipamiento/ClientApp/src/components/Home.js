import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getAlumnos } from '../services/alumnoService';

const Home = () => {
    const [documento, setDocumento] = useState('');
    const [alumnos, setAlumnos] = useState(null);

    return (
        <Grid container>
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
                        console.log(e.message)
                    }
                }}>
                    Buscar alumno
                </Button>
            </Grid>
            <Grid item xs={12}>

            </Grid>
        </Grid>
    );
}

export default Home
