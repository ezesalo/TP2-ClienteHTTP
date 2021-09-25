import { crearCliente } from '../src/ClienteRest.js'

async function main() {
  try {

    const cliente = crearCliente('http://localhost:3000/datos')

    await cliente.post({ nombre: 'mariano', edad: 15 })
    await cliente.post({ nombre: 'florencia', edad: 15 })

    const datos = await cliente.getAll()
    console.log(datos)

    const datos2 = await cliente.getByQuery({ nombre: 'mariano' })
    console.log(datos2)

    const datos3 = await cliente.getByQuery({ edad: 15 })
    console.log(datos3)

    await cliente.put({ nombre: 'floricienta', edad: 40 }, 2)
    const datos4 = await cliente.getAll()
    console.log(datos4)

    await cliente.deleteById(4)
    const datos5 = await cliente.getAll()
    console.log(datos5)

    await cliente.deleteById(100)
  } catch (error) {
    console.log(error.detalles)
  }
}

main()