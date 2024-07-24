## ---------- MATERIAL PARA ESTUDO ---------- ##

1. Oque é o atributo 'rel'?
 O atributo rel em uma âncora (<a>) diz ao navegador e a outros sistemas qual é a relação do link com a página atual. Ele é como uma etiqueta que dá mais informações sobre o link.

 TIPOS DE VALORES DO ATRIBUTO REL:
 - rel="nofollow": Diz aos mecanismos de busca para não seguirem este link. Útil se você não quer que o link ajude no ranking do site vinculado.

 - rel="noopener": Se o link abre em uma nova aba ou janela (target="_blank"), isso impede que a nova página mexa na página original. É uma medida de segurança.

 - rel="noreferrer": Similar ao noopener, mas também não envia informações sobre de onde veio o clique.

 - rel="external": Indica que o link leva para um site externo, fora do seu site.

 - rel="prev": Indica que o link aponta para a página anterior na sequência. 

 - rel="next": Indica que o link aponta para a próxima página na sequência.

 - rel="nofollow": O atributo rel="nofollow" é usado em links para dizer aos motores de busca (como Google) que eles não devem considerar o link como uma recomendação ou "voto" para o site para o qual o link aponta. Ajuda a evitar que links manipulados ou pagos influenciem os resultados de pesquisa, garantindo que os rankings nos motores de busca sejam baseados em mérito real e relevância, não em estratégias de manipulação.

-----------------------------------------------------------------------------------------------

2. para que serve o atributo 'rel="noopener noreferrer"'?
 'rel="noopener noreferrer"' é o valor do atributo rel que você pode adicionar a uma tag de âncora (<a>) em HTML. Esse valor combina duas palavras-chave, "noopener" e "noreferrer", que oferecem proteção de segurança e privacidade quando usadas com 'target="_blank"'.

-----------------------------------------------------------------------------------------------

3. Oque significa o atributo 'target="_blank"'? 
 O atributo target="_blank" faz com que o link seja aberto em uma nova aba ou janela do navegador. Isso é útil para indicar que o conteúdo é externo ou diferente o suficiente para justificar uma nova aba.