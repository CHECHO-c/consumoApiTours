const apiUrl = "https://proyectosadso.com/apiAngelStevan/";



async function obtenerClientes(){
    const response = await fetch(apiUrl+"cliente",{
        method:"GET",
        headers: {
            "Content-Type":"application/json",
        }
    })

    const data = await response.json();
    const clientes = data.data;

    return  clientes;
    
}


async function llenartabla(){
    const clientes = await obtenerClientes();
    
    const tabla = document.querySelector("#table-clientes");

    clientes.forEach(cliente=>{
        let tr = document.createElement("tr");

        let tdDoc = document.createElement("td");
        let tdNombre = document.createElement("td");
        let tdApellido = document.createElement("td");
        let tdTelefono = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdEditar = document.createElement("td");
        let tdEliminar = document.createElement("td")

        tdDoc.innerText =cliente.numero_documento;
        tdNombre.innerText =cliente.nombres
        tdApellido.innerText =cliente.apellidos
        tdTelefono.innerText =cliente.telefono
        tdEmail.innerText =cliente.email
        tdEditar.innerText = "Editar";
        tdEliminar.innerText = "Eliminar";

        tr.appendChild(tdDoc);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdTelefono);
        tr.appendChild(tdEmail);
        tr.appendChild(tdEditar);
        tr.appendChild(tdEliminar);

        tabla.appendChild(tr);  



    })

    
}

document.addEventListener("DOMContentLoaded",llenartabla)