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
    try {
        const res = await client.get(`/alumnos/${documento}`);
        if (res.status === 200) {
            return res.data;
        } else if(res.status === 404) {
            return []
        }

        return null;
    } catch (e) {
        console.log(e.message);
        throw new Error('Oops... ocurrió un error al buscar los alumnos, vuelva a intentar más tarde');
    }
};