import axios from 'axios'

function crearCliente(url) {
    return {
        getAll: async () => await sendRequest({ url }),
        getById: async (id) => await sendRequest({ url: `${url}/${id}` }),
        getByQuery: async (params) => await sendRequest({ url, params }),
        post: async (data) => await sendRequest({ url, method: 'post', data }),
        put: async (data, id) => await sendRequest({ url: `${url}/${id}`, method: 'put', data }),
        deleteById: async (id) => await sendRequest({ url: `${url}/${id}`, method: 'delete' }),
    }
}

async function sendRequest(req) {
    try {
        const { data } = await axios(req)
        return data
    } catch (error) {
        const nuevoError = new Error()
        nuevoError.detalles = {}
        if (error.response) {
            nuevoError.detalles.data = error.response.data
            nuevoError.detalles.status = error.response.status
            nuevoError.detalles.tipo = 'error del servidor'
            throw nuevoError
        } else {
            nuevoError.detalles.tipo = 'error de axios'
            nuevoError.detalles.message = error.message
            throw nuevoError
        }
    }
}


export { crearCliente }
