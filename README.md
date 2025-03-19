Sorteio de Amigo Secreto

Este projeto é uma aplicação simples de sorteio de Amigo Secreto, desenvolvida em JavaScript, HTML e CSS. 
Ele permite que os usuários adicionem nomes a uma lista e realizem um sorteio aleatório entre os participantes.


Funcionalidades

Adicionar nomes à lista de participantes.
Exibir a lista de amigos adicionados.
Realizar o sorteio garantindo que ninguém tire a si mesmo.
Exibir os pares sorteados de forma aleatória.


Tecnologias Utilizadas

JavaScript: Manipulação da DOM, arrays e lógica do sorteio.
HTML: Estrutura da interface do usuário.
CSS: Estilização da página.



Métodos e Funcionalidades Implementadas:

adicionarNomes()
Obtém o nome digitado pelo usuário a partir do campo de entrada.
Adiciona o nome à lista somente se ainda não estiver presente.
Atualiza a exibição da lista na página.
Utiliza document.getElementById().value para capturar e limpar o campo de entrada.

atualizarLista()
Atualiza dinamicamente a lista de participantes na página.
Percorre o array listaAmigos e exibe cada nome como um <li> dentro de <ul>.

sortearAmigo()
Verifica se há ao menos dois participantes na lista.
Garante que ninguém tire a si mesmo e que não haja nomes repetidos no sorteio.
Usa um loop for...of para percorrer os participantes e um do...while para garantir um sorteio válido.
Exibe os resultados em um alert e imprime o índice aleatório no console para depuração.



Como Usar:

Clone o repositório
git clone https://github.com/carolpteixeira/challenge-amigo-secreto/

**Abra o arquivo **
index.html no navegador.
Adicione os nomes no campo de entrada e clique em "Adicionar".
Clique em "Sortear" para realizar o sorteio.



Exemplo de Uso

Amigos listados: ["Ana", "Bruno", "Carla", "Daniel"]
Índice sorteado para Ana: 2
Índice sorteado para Bruno: 0
Índice sorteado para Carla: 3
Índice sorteado para Daniel: 1



Melhorias Futuras

Adicionar um botão para remover nomes da lista.
Criar um histórico de sorteios.
Implementar uma interface mais interativa com CSS avançado.


💡 Contribuições são bem-vindas! Sinta-se à vontade para abrir um Pull Request. 😃
Criar um histórico de sorteios.

Implementar uma interface mais interativa com CSS avançado.

💡 Contribuições são bem-vindas! Sinta-se à vontade para abrir um Pull Request. 😃
