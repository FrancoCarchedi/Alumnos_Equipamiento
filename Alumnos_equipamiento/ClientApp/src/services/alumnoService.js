import axios from 'axios';

const newClient = () => {
    return axios.create({
        baseURL: '/api',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}

export const getAlumnos = async (documento) => {
    const client = newClient();
    return await client.get(`/alumnos/${documento}`)
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                return null;
            }
        }).catch(e => {
            console.log(e.message);
            throw new Error('Ocurrió un error al buscar los alumnos');
        });
};