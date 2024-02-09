const perguntas = [
  {
    pergunta: "Qual é o nome do famoso calçadão à beira-mar no Rio de Janeiro?",
    respostas: [
      "Copacabana",
      "Ipanema",
      "Leblon"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do famoso festival de música que acontece anualmente no Rio de Janeiro?",
    respostas: [
      "Rock in Rio",
      "Carnaval",
      "Festival de Verão"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do famoso estádio de futebol localizado no Rio de Janeiro?",
    respostas: [
      "Maracanã",
      "Mineirão",
      "Arena Corinthians"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do famoso morro onde está localizada a estátua do Cristo Redentor?",
    respostas: [
      "Morro do Pão de Açúcar",
      "Morro da Urca",
      "Morro do Corcovado"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o estilo de música tradicional do Rio de Janeiro?",
    respostas: [
      "Forró",
      "Samba",
      "Bossa Nova"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da famosa celebração religiosa que acontece no Rio de Janeiro e atrai milhões de pessoas?",
    respostas: [
      "Festa de Iemanjá",
      "Festa de São João",
      "Festa de São Sebastião"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o apelido do Rio de Janeiro?",
    respostas: [
      "Cidade Maravilhosa",
      "Cidade dos Anjos",
      "Cidade do Samba"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do famoso bondinho que leva turistas ao topo de um morro no Rio de Janeiro?",
    respostas: [
      "Bondinho de Santa Teresa",
      "Bondinho do Pão de Açúcar",
      "Bondinho do Corcovado"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do famoso aqueduto que hoje serve como uma via de pedestres no Rio de Janeiro?",
    respostas: [
      "Arcos da Lapa",
      "Ponte Rio-Niterói",
      "Elevado do Joá"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do famoso bairro boêmio do Rio de Janeiro, conhecido por sua vida noturna agitada?",
    respostas: [
      "Copacabana",
      "Leblon",
      "Lapa"
    ],
    correta: 2
  }
];

  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h2').textContent = item.pergunta
  
  
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
         corretas.add(item)
        }  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas    
      }
  
      quizItem.querySelector('dl').appendChild(dt) 
    }
      
   quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
