<template>
  <q-page class="q-pa-md fit row justify-center bg-grey-8">
    <div class="col-12 bg-grey-1 justify-center q-px-xl shadow-9">
      <h5>JavaScript</h5>
      <p>> Quando Usar <i>let</i> e <i>const</i></p>
      <p><b>Const:</b> utileze quando você precisar declarar constantes, ou seja, você não quer que haja uma nova atribuição de valor para uma variável durante a execução do bloco.</p>
      <p><b>let:</b> utileze quando você precisar fazer reatribuições, ou seja, sua variavel precisará assumuir diferentes valores durante a execução do bloco.</p>
      <p>> Qual a diferença de uma <i>function</i> para uma <i>arrow function?</i></p>
      <p class="text-bold">Contexto</p>
      <p>Arrow functions possuem <i>this léxico</i> enquanto o modelo normal possui <i>this dinâmico</i> . Isso significa que <i>arrow functions</i> herdam o contexto local de onde foi declarado, enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado no momento da chamada (se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente como o contexto global, que no caso dos navegadores é<i> window</i> )</p>
      <p class="bg-grey-4">var normal = function() {<br>
      return this === obj<br>
      }<br>
      <br>
      var arrow = ( ) => {<br>
      return this === window<br>
      }<br>
      <br>
      var obj = { normal: normal, arrow: arrow }<br>
      <br>
      obj.normal( ) // true<br>
      obj.arrow( ) // true<br>
      <br>
      normal( ) // false</p>
      <p class="text-bold"> Constructor</p>
      <p><i>Arrow functions</i> não podem ser <i>constructors,</i> então não é possível usar o operador <i>new</i> com a mesma </p>
      <p class="bg-grey-4">
        var Normal = function() { }<br>
        var Arrow = () => { }<br>
        <br>
        new Normal() // Normal { }<br>
        new Arrow() // Arrow is not a constructora
      </p>
      <p class="text-bold"> Arguments</p>
      <p><i>Arrow functions</i> não possui o objeto array-like <i>arguments</i></p>
      <p class="bg-grey-4">
        var noop = () => {<br>
        return arguments<br>
        }<br>
        <br>
        noop() // ReferenceError: aguments is not defined
      </p>
      <p class="text-bold"> Nome de função</p>
      <p>Expressões de função podem ser nomeadas explicitamente, isso é útil em alguns cenários que envolvem recursão e para em casos
        de exceção fica mais fácil de rastrear o código, visto que o nome da função é usado na pilha de exceção mostrada ao desenvolvedor.
        Só que <i>Arrows functions</i> não podem ser nomeadas explicitamente, elas acabam herdando o nome da variável onde foi criada
        </p>
      <p class="bg-grey-4">
        var fn = function nome( ) { }<br>
        fn.name // nome<br>
        <br>
        var fn = ( ) => { }<br>
        fn.name // fn<br>
      </P>
      <p class="text-bold"> Retorno</p>
      <p>Expressões de função que precisam declarar explicitamente qual será o retorno da função, enquanto <i>Arrow functions</i> permitem escrever em um modelo encurtado onde a última expressão analisada será o retorno da função quando é omitido as chaves { } </p>
      <p class="bg-grey-4">
        var fn = function() {return 1;} // retorna 1<br>
        <br>
        var fn = () => 1 // retorna 1<br>
        var fn = () => (1,2,3) // retorna 3, a última expressão avaliada<br>
        <br>
        var fn = () => { 1 } // retorna undefined<br>
        var fn = () => { return 1 } // retorna 1
      </p>
      <h5>Spread operator</h5>
      <p>Se possuímos um Array e queremos criar outro array fazendo que o que já temos faça parte dele podemos usar o Spread (...)</p>
      <p>Exemplo</p>
       <p class="bg-grey-4">
         let carros = ['gol', 'uno']<br>
         let motos = ['titãn', 'bis']<br>
         let veiculos = [...motos, ...carros] // ['titãn', 'bis', 'gol', 'uno']
       </p>
       <h5>Destruction</h5>
       <p>Imagine a seguinte situação onde temos um usuário salvo no armazenamento local</p>
       <p class="bg-grey-4">
         currentUser = {<br>
          "id": 24, <br>
          "username": "John Doe", <br>
          "website": " http://mywebsite.com ", <br>
          "description": "Sou um ator", <br>
          "email": " exemplo @ example.com ", <br>
          " gender ":" M ", <br>
          " phone_number ":" +12345678 ", <br>
          " username ":" johndoe ", <br>
          " birth_date ":" 1991-02-23 ", <br>
          " Seguidores ": 46263, <br>
          " comentários ": 9 <br>
        }<br>
       </p>
       <p>e queremos somente o id e o nome desse usuário, nese caso usamos o Destruction</p>
       <p class="bg-grey-4">
         let {id, username} = this.currentUser
       </p>
       <p>assim criamos duas variáves id e username e atribuimos valores do objeto a eles</p>
       <p class="bg-grey-4">
         console.log (id) // 24<br>
         console.log (username) // johndoe
       </p>
       <h5>Map, forEach, filter, find</h5>
       <p>https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c</p>
       <p class="text-bold"><i>forEach</i></p>
       <p>o forEach nada mais é que uma forma diferente de fazer um for(loop) com uma pequena diferênca</p>
       <p></p>
        <a href="https://jsbin.com/gogukej/edit?js,console">Exemplo</a>
       <p>Com .forEach()você simplesmente passa uma função que é executada em cada elemento do array.</p>
       <p class="text-bold">Quando usar o forEach?</p>
       <p>.forEach()é ótimo, você precisa executar uma função para cada elemento individual em um array. A boa prática é que você deve usar .forEach()quando não puder usar outros métodos de array para atingir seu objetivo.</p>
       <p class="text-bold">map() — filter() — reduce()</p>
       <p>vamos usar um array de objetos contendo nome, idade e tipo de dois animais</p>
       <p>e vamos fazer três testes</p>
       <ul>
         <li>Seleciona apenas os cachorros</li>
         <li>Retornar idade ral de cada cachorro</li>
         <li>simar a idade de todos os cachorros juntos</li>
       </ul>
       <p>Selecionar apenas cahcorros, vamos usar o filter()</p>
       <p>Como o próprio nome diz, ele filtra os dados de um array por um determinado valor. Veja abaixo como podemos utilizar ele para retornar os animais que estão com o tipo dog no nosso array.</p>
       <a href="https://jsbin.com/xoqijur/edit?js,console">Exemplo</a>
       <p>Retornar a idade real de cada cachorro utilizando o map()</p>
       <a href="https://jsbin.com/xaquzaj/edit?js,console">Exemplo</a>
       <p>o map é util pois você pode encadear outros métodos de array</p>
       <p>Somar a idade de todos os cachorros usando o reduce()</p>
       <p>o reduce() trabalha como o map(), ele percorre o array invocando uma função de retorno para cada elemento. O valor retornado é um valor acumulado passado de callback para callback. Depois de todos os
         elementos teram sido avaliados, ele retorna o valor acumulado ou concatenado.
       </p>
         <a href="https://jsbin.com/lozosaj/edit?js,console">Exemplo</a>
    </div>
  </q-page>
</template>

<script>
export default {

}
</script>
