<template>
<q-page class="q-pa-md fit row justify-center bg-grey-8">
   <div class="col-8 bg-grey-1 q-px-xl shadow-9">
  <h5>ES6 Modules</h5>
  <a href="#Import"><q-btn class="q-mb-md q-mr-md" label="Import" /></a>
  <a href="#export"><q-btn class="q-mb-md" label="Export" /></a>
  <div class="text-body1">
    <p class="text-bold">Strict Mode</p>
    <p>Antes de qualquer coisa precisamos falar um pouco sobre o Strict Mode.<br>
    Sem ele não podemos falar absolutamente nada sobre módulos.</p>
    <p>O modo estrito é ativado por padrão quando trabalhamos com módulos<br>
       ES6, se você ainda não sabre o que é <i>strict mode</i>, vou dar uma introdução<br>
       básica.</p>

       <p>definição completa no <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">MDN</a></p>
    <p>O modo estrito constitui as seguintes mudanças:</p>
    <ul>
      <li>Variáveis não podem ficar sem declaração</li>
      <li>Parâmetros de funções devem ter nomes únicos(ou então são<br>considerados erros de sintaxe)</li>
      <li>"with" é proibido</li>
      <li>Tentar atribuir um valor para uma variavel "read-only" lança um erro</li>
      <li>Numeros octais (como 00840) são erros de sintaxe</li>
      <li>Tentativas de deletar (usando delete) propriedades não removíveis<br>lançam um erro</li>
      <li>"delete prop" é considerado um erro de sintaxe, ao invés de ser resolvido<br>automaticamente para "delete global[prop]"</li>
      <li>"eval" não inclui novas Variáveis no scopo</li>
      <li>"eval" e "arguments" não podem ser atribuídos ou sofrer "bind"</li>
      <li>"arguments" não observa "magicamente" mudanças nos Parâmetros do <br> método</li>
      <li>"arguments.callee" lançam um "TypeError", não mais suportado</li>
      <li>"arguments.caller" lançam um "TypeError", não mais suportado</li>
      <li>O contexto passado como "this" em invocações de métodos não é mais <br> forçado a se tornar um "object"</li>
      <li>Não é mais possível usar "fn.caller" ou "fn.arguments" para acessar a stack<br>do JavaScript</li>
      <li>Palavras reservadas (como, "protected", "static", "interface") não podem<br> sofrer "bind"</li>
    </ul>
    <p>Se você ainda não pegou a dica, você deveria usar o "use strict" em todos os lugares, mesmo que esteja se
    tornando padrão no ES6, ainda é uma boa prática utilizá-lo sempre.</p>
    <h5 id="export" >Export</h5>
    <p>No modele CommonJS podemos exportar valores atribuindo eles ao "module.exports"</p>
    <p class="bg-grey-4">
      module.export = 1<br>
      module.export = NaN<br>
      module.export = 'foo'<br>
      module.export = {foo: 'bar'}<br>
      module.export = [ 'foo', 'bar']<br>
      module.export = function foo (){}<br>
      module.export = () => {}<br>
      </p>
      <p>No ES6, os módulos são aquivos que dão "export" um API (basicamente<br> igual ao CommonJS).
      As declarações, variáveis, funções e qualquer coisa<br>daquele módulo exitem apenas nos escopos daquele
      módulo, o que <br> significa que qualquer variável declarada dentro de um módulo <b>não</b> está<br>
      disponivel para outros módulos (a não ser que eles sejam exportados<br> explicitamente como parte da API,
      e importados posteriomente no módulo que as usa).</p>
      <h5>Export padrão</h5>
      <p>Podemos simular o comportamento do CommonJS basicamente trocando o <br> <span class="bg-grey-4"><i>module.exports</i></span>
       por <span class="bg-grey-4"><i>export default </i></span>:</p>
       <p class="bg-grey-4">
      export default = 1<br>
      export default = NaN<br>
      export default = 'foo'<br>
      export default = {foo: 'bar'}<br>
      export default = [ 'foo', 'bar']<br>
      export default = function foo (){}<br>
      export default = () => {}<br>
      </p>
      <p>Ao contrário dos módulos no CommonsJS, declarações <span class="bg-grey-4"><i>export</i></span> só podem ser<br>
      colocadas no <i>top level</i> do código, e não em qualquer parte dele. Presumimos que essa limitação existe para tornar
      mais fácil a vida dos interpretadores<br> quando vão identificar os módulos,mas olhando bem, é uma limitação<br> bem válida,
      porque não há muitas boas razões para que possamos definr <i>exports</i> dinâmicos dentro das funções da noss API.</p>
      <p>Segundo William Grasel um dos modos de ampliar sua performance é utilizando módulos<br>
      isso porque os módulos são compilados de modo stático, e antes<br> do seu código sequer passar para o interpretador do browser
      (como o v8 <br> por exemplo). Desta forma é possível extrair somente as partes do código<br> que são realmente utilizadas na aplicação ao invés de importar o módulo<br>
      todo, e isso só seria pssível se os módulos fossem declarados no <i>top level,</i><br> porque qualquer coisa dentro de uma função se tornaria
      algo dinâmico, e <br> não estático</p>

      <h5>Exports Nomeados</h5>
      <p>No CommonsJS podemos simplesmente criar <i>bindings</i> de variáveis direto no <br>
      <span class="bg-grey-4"><i>module.export</i></span> que não teremos as propriedades sendo atualizadas em<br>
      tempo real: </p><br>
      <span class="bg-grey-4"><i>module.export.foo = 'bar'</i></span><br>
      <p>é importante ter em mente que estamos exportando <span class="bg-grey-4"><i>bindings,</i></span> não valores. </p>
      <h5>Bindings.Não valores</h5>
      <p>Um ponto importante de notar é que os módulos no ES6 não exportam<br> valores ou referências, mas sim os <i>bindings</i> das variáveis.Isso, em prática<br>
      significa que uma variável chamada <i class="bg-grey-4">foo</i>, que é exportada, vai ter um link à<br>
      variável <i class="bg-grey-4">foo</i> do módulo, e os valores atribuídos a elas serão sujeitos às<br>
      mudanças de valores feitas em <i class="bg-grey-4">foo</i></p>
      <p>Se você tem um módulo <i class="bg-grey-4"> ./a</i> como abaixo, o export de <i class="bg-grey-4">foo</i> vai ser ligado a <i class="bg-grey-4">bar</i> por 500ms e depois será alterado para
      <i class="bg-grey-4">baz</i> :</p>
      <ul class="bg-grey-4">
        <li>export var foo = 'bar'</li>
        <li>setTimeout(() => foo = 'baz', 500)</li>
      </ul>
      <h5>Melhores práticas com export</h5>
      <p>Melhores práticas com export</p>
      <p>Todas essas possibilidades de exportar um módulo vão introduzir um pouco de confisão na cabeça das pessoas.
        Na maioria dos casos é encorajado utilizar apenas um <i class="bg-grey-4">export default</i> (e fazer isso <b>só</b> no final do módulo)
      .Então você pode importar a API como o nome do próprio módulo.</p>
      <ul class="bg-grey-5">
        <li>var api = {</li>
        <li>foo: 'bar',</li>
        <li>baz: 'fooz'</li>
        <li>}</li>
        <li>export default api</li>
      </ul>
      <p>Os benefícios são:</p>
      <ul>
        <li>A interface que é exportada se torna bem <b>Óbvia,</b> ao invés de termos que ficar procurando aonde exportamos a interface dentro do módulo. </li>
        <li>Você <b>não cria a confusão</b> sobre onde suar um <i>export default</i> ou um export nomeado( ou uma lista de exports nomeados). tente se manter no <i>export default</i></li>
        <li><b>Consistência.</b> No CommonsJS é normal usar um único método em um módulo. Fazer isso com exports nomeados é impossível porque você vai estar expondo um objeto com um método dentro, a não ser que
        você uso o <i>as default</i> no <i>export</i> de lista. Já o <i>export default</i> é mais versátil porque você pode exportar só uma coisa</li>
        <li>Usar o <i>export default</i> torna o <i>import</i> mais <b>rápido</b></li>
      </ul>

      <h5 id="Import">Import</h5>
      <p>O <i>import</i> é a contraparte do <i>export</i>, ele pode ser usado para carregar um módulo a partir de outro.</p>
      <br>
      <p>Para contornar o que foi dito acima, é possível utilizar-se de recursos como transpilers (tipo o Babel), para escrever código ES6 enquanto as equipes de desenvolvimento dos browsers se preocupam em como fazer
        o carregamento de módulos funcionar </p>
      <p>Um exemplo legal é o <i>lodash.</i> A linha asseguir simplesmente carrega a biblioteca do lodash dentro do nosso módulo.No entanto, ele não cria nenhuma variável. Ele ira <b>executar</b> qualquer código
      no <i>top level</i> do lodash </p>
      <p class="bg-grey-4"> import 'lodash'</p>
      <h5>Importando padrões</h5>
      <p>No CommonJS temos uma importação utilizando o <i>require:</i> </p>
      <p class="bg-grey-4"> var _ = require('lodash')</p>
      <p>Para importar uim <i>export default</i> de outro módulo usando ES6 só precisamos escolher um nome. A sintaxe mudo um pouco porque você não está importando o objeto em si, mas um binding. E isso torna
      mais fácil para ferramentas de análise: </p>
      <p class="bg-grey-4">import _ from 'lodash'</p>
      <h5>Importando exports nomeados</h5>
      <p>A sintaxe é muito similar ao que usamos acima:</p>
      <p class="bg-grey-4">import {map, reduce} from 'lodash' </p>
      <p>Uma outra maneira que podemos também impotar os <i>export</i> nomeados, é dar um alias para cada um, ou então apenas para um deles: </p>
      <p class="bg-grey-4">import { cloneDeep as clone, map } from 'lodash' </p>
      <p>Você pode misturar os <i>named imports</i> com exports padrões sem usar as chaves ( mas ia você não vai poder dar um alias para eles):</p>
      <ul>
        <li>import { default, map } from 'lodash' </li>
        <li>import { default as _, map } from 'lodash' </li>
        <li>import _, { map } from 'lodash' </li>
      </ul>
      <h5>Importando tudo</h5>
      <p>Se você quiser importar um namespace completo de um módulo. Diferente dos imports nomeados ou padrões, ele importa <b>tudo</b></p>
      <p>Note que a sintaxe abaixo <i>precisa vir seguida de um alias</i> onde todos os <i>bindings</i> vão ser colocados. (Exports padrões vão ser colocados em <i>alias.default</i>):</p>
      <p class="bg-grey-4">import * as _ from 'lodash'</p>
      <p> o <i>binding</i> <i class="bg-grey-4"> _.default</i> terá o conteúdo do <i class="bg-grey-4"> _.default</i> do LoDash </p>
  </div>
  </div>

</q-page>
</template>

<script>
export default {

}
</script>
