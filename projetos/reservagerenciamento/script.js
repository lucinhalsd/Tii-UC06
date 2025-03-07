let reservas = []

// Adicionar Reserva
function adicionarReserva(nome, data) {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;

    if(nome === "" || data === "") {
        alert("Preencha todos os campos");
        return;
    }

    let novaReserva = {nome, data};

    reservas.push(novaReserva);

     document.getElementById("nome").value;
     document.getElementById("data").value;

     atualizarListaReaservas();
}

// Remover reserva
function removeReserva(index) {
    reservas.splice(index, 1);
    atualizarListaReservas();
}
function atualizarListaReserva() {
    let lista = document.getElementById("listareservas");
    lista,innerHTML = "";

    reservas.forEach((reserva, index) => {
       let li = document.createElement("li");
       li.innerHTML = `${reserva.nome}, ${reserva.data} <button onclick="removerReserva(${index})">X</button>`;
       lista.appendChild(li);
    }); 

     // for(let i = 0; i < reservas.length; i++) {
    //     let li = document.createElement("li");
    //     li.innerHTML = `${reservas[i].nome}, ${reservas[i].data} <button onclick="removerReserva(${i})">X</button>`;
    //     lista.appendChild(li);
    // }
}
    