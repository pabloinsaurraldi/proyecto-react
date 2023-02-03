
const generacionDeOrden = ({
    nombre = '',
    email = '',
    telefono = '',
    cart = [],
    total = 0
}) => {

    return {
        cliente: {
            nombre: nombre,
            email: email,
            telefono: telefono,
        },
        items: cart,

        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generacionDeOrden