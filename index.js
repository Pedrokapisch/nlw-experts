const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "vr myVar;",
        "variable myVar;",
        "let myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado.",
        "Seleciona todos os elementos que correspondem a um seletor CSS especificado.",
        "Seleciona um elemento pelo seu id."
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "console.log()",
        "write()"
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve 'Hello World' em um alerta em JavaScript?",
      respostas: [
        "msgBox('Hello World');",
        "alertBox('Hello World');",
        "alert('Hello World');"
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é usado para atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":="
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Retorna o valor arredondado de um número com uma quantidade especificada de casas decimais.",
        "Retorna o valor arredondado para o inteiro mais próximo.",
        "Converte um número em uma string."
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses NÃO é um tipo de dado em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "Float"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()"
      ],
      correta: 0
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