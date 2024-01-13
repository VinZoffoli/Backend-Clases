class TicketManager{
    #eventos = []
    #precioBaseDeGanancia = 0.15
    #id = 1

    obtenerEventos(){
        console.log(this.#eventos)
    }

    agregarEvento(
        nombre,
        Lugar,
        precio,
        capacidad = 50,
        fecha = new Date().toLocaleString()
        ){
            const nuevoEvento = {
                id: this.#id++,
                nombre,
                Lugar,
                precio: precio * (1 + this.#precioBaseDeGanancia),
                capacidad,
                fecha,
                participantes: []
            }

            this.#eventos.push(nuevoEvento);
    }

    agregarUsuario(idEvento, idUsuario){
        const evento = this.#eventos.find(event => event.id === idEvento)
        if(!evento) return console.log('No existe el evento')

        if(evento.participantes.includes(idUsuario)) return console.log('El usuario ya existe')

        evento.participantes.push(idUsuario)
        return console.log('Usuario Agregado')
    }
}

const ticketManager = new TicketManager
ticketManager.obtenerEventos();
ticketManager.agregarEvento('Coder evento', 'Pereira', 500)
ticketManager.agregarEvento('Un evento', 'Buenos Aires', 200, 4000)
ticketManager.agregarEvento('Otro evento', 'Lima', 2500)
ticketManager.obtenerEventos(3);
