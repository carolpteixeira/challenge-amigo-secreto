let listaAmigos = [];

function adicionarNomes() {
    let nomeAmigo = document.getElementById("nomeAmigo").value;

    if (nomeAmigo && !listaAmigos.includes(nomeAmigo)) {
        listaAmigos.push(nomeAmigo);
        atualizarLista();
        document.getElementById("nomeAmigo").value = "";
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        lista.innerHTML += "<li>" + listaAmigos[i] + "</li>";
    }
}
function sortearAmigo() {
    console.log("Amigos listados:", listaAmigos); //para ver a lista de amigos

    if (listaAmigos.length < 2) {
        alert("Adicione ao menos 2 nomes.");
        return;
    }

    let amigosSorteados = []; 
    let resultado = [];

    for (let amigo of listaAmigos) {
        let amigoSecreto;
        
        do {
            let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
            console.log(`Índice sorteado para ${amigo}:`, indiceAleatorio); // para ver o índice sorteado de cada amigo
            amigoSecreto = listaAmigos[indiceAleatorio];
        } while (amigoSecreto === amigo || amigosSorteados.includes(amigoSecreto));

        amigosSorteados.push(amigoSecreto);
        resultado.push(`${amigo} tirou ${amigoSecreto}`);
    }

    alert(resultado.join("\n"));
}