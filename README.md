# Meu_Portfolio

# DOCUMENTAÇÃO DO PROJETO — PORTFÓLIO RAFAEL MOTA GONÇALVES

# INTRODUÇÃO

# O presente documento apresenta a documentação técnica do site pessoal e portfólio profissional desenvolvido para Rafael Mota Gonçalves. O projeto foi desenvolvido utilizando as tecnologias HTML5, CSS3 e JavaScript, com o objetivo de apresentar informações pessoais, formação acadêmica, cursos, habilidades técnicas, projetos, conquistas e formas de contato.

# O site possui uma interface moderna, responsiva e com identidade visual baseada em tons escuros, roxo e magenta. A aplicação também conta com animações, barras de progresso para representar níveis de conhecimento, efeitos de aparição durante a rolagem da página e recursos voltados à acessibilidade.

# O projeto foi estruturado de maneira simples, separando o conteúdo, a estilização e a lógica de interação em arquivos diferentes. O HTML é responsável pela estrutura da página, o CSS controla a aparência visual e o JavaScript adiciona comportamentos e animações.

# OBJETIVO DO PROJETO

# O principal objetivo do projeto é funcionar como um portfólio pessoal e profissional, permitindo que visitantes conheçam o desenvolvedor, suas competências, formação, experiências, projetos e conquistas.

# O site também tem como finalidade facilitar o contato profissional por meio de links direcionados ao WhatsApp, GitHub e Instagram.

# Além da apresentação profissional, o projeto demonstra conhecimentos práticos em desenvolvimento web, organização de código, responsividade, acessibilidade, animações e utilização de recursos modernos disponíveis nos navegadores.

# ESTRUTURA DO PROJETO

# O projeto é composto principalmente por quatro arquivos.

# O primeiro arquivo é o index.html, responsável pela estrutura e pelo conteúdo da página.

# O segundo arquivo é o style.css, responsável pela aparência visual do site, incluindo cores, fontes, tamanhos, espaçamentos, posicionamento dos elementos, animações, efeitos e responsividade.

# O terceiro arquivo é o script.js, responsável pelas funcionalidades desenvolvidas em JavaScript, como o efeito de aparição dos elementos durante a rolagem e a animação das barras de progresso das habilidades.

# O quarto arquivo é a imagem profile.jpg, utilizada como foto de perfil no início do portfólio.

# HTML

# O HTML utiliza a estrutura padrão do HTML5. O documento começa com a declaração do tipo de documento e define o idioma como português brasileiro.

# No cabeçalho da página são configurados o conjunto de caracteres UTF-8, a adaptação para dispositivos móveis, o título do site e as folhas de estilo utilizadas.

# O projeto utiliza a biblioteca Font Awesome para disponibilizar ícones relacionados às diferentes seções. Também utiliza a fonte Poppins, obtida por meio do Google Fonts.

# A estrutura principal da página é dividida em um cabeçalho inicial, seções de conteúdo e um rodapé.

# SEÇÃO HERO

# A primeira parte do site é denominada Hero Section. Essa área funciona como a apresentação principal do portfólio.

# Ela apresenta a foto de Rafael Mota Gonçalves, seu nome, sua profissão como Desenvolvedor Web e dois botões de navegação.

# O primeiro botão possui o texto "Ver Projetos" e direciona o visitante para a seção de projetos e conquistas.

# O segundo botão possui o texto "Falar Comigo" e direciona o visitante para a área de contato localizada no rodapé.

# A foto de perfil é carregada a partir do arquivo profile.jpg e possui um texto alternativo para melhorar a acessibilidade.

# A área Hero utiliza um fundo escuro com um efeito de gradiente radial roxo, criando uma aparência tecnológica e moderna.

# A foto possui formato circular e uma borda com gradiente animado. Essa borda utiliza uma animação de rotação contínua criada com CSS.

# O nome do desenvolvedor também possui um efeito visual de gradiente no texto, utilizando tons claros e roxos.

# SEÇÃO SOBRE MIM

# A seção "Sobre Mim" apresenta uma descrição pessoal e profissional do desenvolvedor.

# O conteúdo informa que Rafael Mota Gonçalves possui interesse por tecnologia, ciência de dados e inovação. Também apresenta informações relacionadas à formação em Informática para Internet na Etec Professor Adolpho Arruda Mello, pertencente ao Centro Paula Souza.

# A seção é dividida visualmente em duas áreas. A primeira apresenta o texto de apresentação. A segunda apresenta informações relacionadas à formação e aos cursos.

# A organização dessas duas áreas é feita utilizando CSS Grid. Em telas grandes, as duas partes aparecem lado a lado. Em telas menores, elas são reorganizadas para aparecer uma abaixo da outra.

# FORMAÇÃO E CURSOS

# Dentro da seção "Sobre Mim" existe uma área específica chamada "Formação & Cursos".

# Essa área apresenta informações sobre a Etec Professor Adolpho Arruda Mello, o curso de Informática para Internet, os cursos realizados na AlfaBits, a participação na 20ª edição da Escola de Inovadores do Inova CPS e o ingresso previsto na Fatec Presidente Prudente.

# As informações são apresentadas em uma lista estilizada.

# Cada item da lista possui um marcador personalizado criado por CSS, utilizando um símbolo em formato de seta e a cor roxa utilizada na identidade visual do projeto.

# A caixa de formação também possui uma animação de interação. Quando o usuário posiciona o cursor sobre ela, a caixa se desloca levemente para cima e sua borda muda de cor.

# SEÇÃO DE HABILIDADES

# A seção "Habilidades Técnicas" apresenta as principais tecnologias e ferramentas informadas no portfólio.

# São apresentadas as seguintes habilidades: HTML5 e CSS3, JavaScript e Node.js, Python e Data Science, MySQL e Bancos de Dados, PHP, além de Git, GitHub e Copilot.

# Cada habilidade apresenta um nome, um ícone correspondente, um nível textual e uma barra de progresso.

# Os níveis apresentados são Avançado ou Intermediário, conforme definido no conteúdo do projeto.

# As barras de progresso são inicialmente carregadas com largura zero. O JavaScript identifica quando a barra aparece na tela e, então, aplica a largura correspondente ao valor definido no atributo data-width.

# Esse processo cria uma animação em que a barra cresce gradualmente até atingir o percentual definido.

# BARRAS DE PROGRESSO

# As barras de progresso representam visualmente os níveis definidos para cada habilidade.

# Para HTML5 e CSS3 foi definido o valor de 95 por cento.

# Para JavaScript e Node.js foi definido o valor de 90 por cento.

# Para Python e Data Science foi definido o valor de 75 por cento.

# Para MySQL e Bancos de Dados foi definido o valor de 85 por cento.

# Para PHP foi definido o valor de 65 por cento.

# Para Git, GitHub e Copilot foi definido o valor de 90 por cento.

# Esses valores são utilizados como representação visual no portfólio e devem ser entendidos como uma forma de apresentar o nível informado pelo autor, não como uma avaliação técnica independente.

# SEÇÃO DE PROJETOS E CONQUISTAS

# A seção "Projetos & Conquistas" apresenta quatro cards.

# O primeiro card apresenta as conquistas relacionadas às Olimpíadas de 2026, incluindo as informações sobre medalhas de ouro na Olimpíada Brasileira de Astronomia e Astronáutica e na Olimpíada Brasileira de Geografia.

# O segundo card apresenta o projeto de um Sistema de Almoxarifado. De acordo com o conteúdo do site, trata-se de um sistema desenvolvido para gestão de bibliotecas, com modelagem e desenvolvimento de funcionalidades relacionadas ao controle de almoxarifado.

# O terceiro card apresenta um Projeto de Acessibilidade Web, com foco em interface, experiência do usuário e diretrizes de acessibilidade.

# O quarto card apresenta projetos relacionados a Design e Identidade Visual, incluindo trabalhos visuais, catálogos em PDF e materiais relacionados a uma cooperativa de bibliotecas.

# Cada projeto ou conquista é apresentado dentro de um card com um ícone, título e descrição.

# Os cards possuem efeito visual quando o usuário passa o cursor sobre eles. Nesse momento, eles se deslocam levemente para cima, apresentam alteração na borda e recebem uma sombra colorida.

# RODAPÉ E CONTATO

# O rodapé funciona como a seção de contato do portfólio.

# Ele apresenta o título "Vamos trabalhar juntos?" e uma descrição convidando visitantes a entrarem em contato para projetos, desenvolvimento web ou networking.

# São disponibilizados três meios de contato.

# O primeiro é o WhatsApp, por meio de um botão verde que direciona para uma conversa através do serviço.

# O segundo é o GitHub, direcionando para o perfil informado no projeto.

# O terceiro é o Instagram, direcionando para o perfil informado no código.

# Cada botão possui um ícone do Font Awesome e uma cor específica relacionada ao serviço.

# O WhatsApp utiliza a cor verde característica da plataforma.

# O GitHub utiliza uma tonalidade escura.

# O Instagram utiliza um gradiente de cores.

# Ao passar o cursor sobre os botões, eles possuem um efeito de elevação e sombra.

# IDENTIDADE VISUAL

# A identidade visual do projeto utiliza principalmente uma combinação de preto, cinza escuro, branco, roxo, magenta e dourado.

# O fundo principal utiliza uma tonalidade muito escura.

# Os cards utilizam um tom de cinza escuro.

# A cor principal da interface é o roxo.

# O magenta é utilizado como cor complementar em gradientes.

# O dourado aparece principalmente nos ícones relacionados às conquistas.

# O texto principal utiliza uma cor clara, enquanto textos secundários utilizam tons de cinza.

# Essa combinação cria uma aparência moderna e relacionada ao universo de tecnologia e desenvolvimento de software.

# TIPOGRAFIA

# A fonte principal utilizada pelo site é a Poppins.

# A família Poppins é carregada através do Google Fonts e possui diferentes pesos disponíveis, incluindo pesos leves, regulares, médios, semibold e bold.

# A utilização de diferentes pesos permite criar uma hierarquia visual entre títulos, subtítulos, textos e informações secundárias.

# CSS

# O arquivo style.css é responsável por toda a aparência do site.

# O CSS começa definindo variáveis globais no elemento :root. Essas variáveis armazenam as cores, sombras, bordas e outras propriedades utilizadas em diferentes partes da página.

# Essa abordagem facilita a manutenção do projeto, pois uma alteração em uma variável pode modificar a aparência de diversos componentes simultaneamente.

# O CSS também possui uma seção de reset que remove margens e espaçamentos padrões dos elementos e utiliza box-sizing border-box para facilitar o controle das dimensões.

# RESPONSIVIDADE

# O site foi desenvolvido para funcionar em diferentes tamanhos de tela.

# Em telas grandes, os conteúdos são organizados em múltiplas colunas.

# Em tablets, algumas áreas passam a utilizar uma única coluna.

# Em smartphones, os elementos são reorganizados verticalmente.

# Os botões do Hero passam a ocupar uma disposição vertical em telas pequenas.

# As habilidades também são organizadas em uma única coluna.

# Os cards de projetos e conquistas também passam para uma única coluna.

# Os botões de contato são reorganizados verticalmente para facilitar a utilização em dispositivos móveis.

# O tamanho da foto de perfil também é reduzido em telas menores.

# ANIMAÇÕES CSS

# O projeto utiliza diversas animações desenvolvidas diretamente com CSS.

# A foto de perfil possui uma animação contínua de rotação no gradiente de sua borda.

# O título principal possui uma animação de entrada que faz o elemento surgir de cima para baixo.

# O subtítulo utiliza uma animação de aparecimento gradual.

# Os botões principais possuem uma animação de entrada que faz com que apareçam de baixo para cima.

# Os cards e elementos da página também possuem transições para criar efeitos suaves durante a interação do usuário.

# SCROLL REVEAL

# O JavaScript implementa um sistema chamado Scroll Reveal.

# Esse sistema permite que determinados elementos apareçam de forma animada quando entram na área visível da tela.

# Os elementos selecionados incluem containers, cards de projetos e cards de habilidades.

# Inicialmente, esses elementos possuem transparência e são deslocados verticalmente.

# Quando entram na área visível da página, o JavaScript adiciona uma classe chamada active.

# A classe active altera a opacidade e a posição do elemento, criando o efeito de aparecimento.

# INTERSECTION OBSERVER

# O projeto utiliza a API IntersectionObserver do navegador.

# Essa API permite verificar quando determinado elemento entra ou sai da área visível da tela sem a necessidade de executar verificações constantemente durante o evento de rolagem.

# No projeto, ela é utilizada tanto para o efeito Scroll Reveal quanto para as barras de progresso.

# Quando um elemento entra na área determinada pelo observador, o JavaScript executa a animação correspondente.

# Depois que o elemento é exibido, o observador deixa de monitorá-lo, evitando processamento desnecessário.

# JAVASCRIPT

# O arquivo script.js começa aguardando o carregamento completo do DOM.

# Depois disso, o código identifica se o usuário possui preferência por redução de movimento.

# Essa preferência é obtida através da configuração prefers-reduced-motion do navegador.

# Em seguida, o código seleciona os elementos que deverão receber o efeito de Scroll Reveal.

# Os elementos recebem automaticamente a classe reveal.

# Quando o usuário não possui preferência por redução de movimento e o navegador oferece suporte ao IntersectionObserver, o sistema de observação é ativado.

# Caso o navegador não ofereça suporte ao IntersectionObserver, os elementos são simplesmente exibidos sem a animação.

# ACESSIBILIDADE

# O projeto possui recursos destinados à acessibilidade.

# Um deles é o suporte à preferência de redução de movimento.

# Quando o usuário configura o sistema operacional ou navegador para reduzir animações, o site reduz ou desativa os efeitos de movimento.

# O projeto também possui estilos específicos para foco de elementos interativos. Isso melhora a navegação por teclado porque permite identificar visualmente qual elemento está selecionado.

# A imagem de perfil possui atributo alternativo.

# Também existe integração com o VLibras, recurso voltado à tradução de conteúdos digitais para Libras.

# VLibrAS

# O projeto utiliza o plugin do VLibras.

# O JavaScript verifica se o recurso foi carregado corretamente antes de inicializá-lo.

# Se o VLibras estiver disponível, um novo widget é criado utilizando o endereço do aplicativo.

# Caso o recurso não seja carregado, uma mensagem de aviso é enviada para o console do navegador.

# Essa verificação evita que um erro de carregamento do serviço externo interrompa o restante da execução do JavaScript.

# FOOTER

# O rodapé contém uma área de contato e uma área inferior com a informação de autoria.

# A mensagem final informa que o site foi criado em 2026 por Rafael Mota Gonçalves.

# O rodapé utiliza um gradiente vertical entre o fundo principal e a cor dos cards.

# Também existe uma linha divisória superior e outra linha separando a área de contatos da informação final.

# BIBLIOTECAS E SERVIÇOS EXTERNOS

# O projeto utiliza o Font Awesome para disponibilizar ícones.

# Também utiliza o Google Fonts para carregar a família tipográfica Poppins.

# Além disso, utiliza o serviço VLibras para fornecer o recurso de acessibilidade relacionado à tradução para Libras.

# Esses recursos são carregados externamente e, portanto, dependem de uma conexão com a internet para funcionar corretamente.

# FUNCIONAMENTO GERAL

# Quando o visitante acessa a página, o navegador carrega o arquivo HTML.

# O HTML carrega o arquivo CSS e os recursos externos, como a fonte Poppins e o Font Awesome.

# Depois que o documento é carregado, o JavaScript é executado.

# O JavaScript identifica os elementos que deverão receber animações.

# Quando o visitante rola a página, o IntersectionObserver identifica os elementos que entram na área visível.

# Os elementos aparecem gradualmente.

# Quando as barras de habilidades entram na área visível, o JavaScript identifica o percentual correspondente e altera sua largura.

# O CSS realiza a animação da largura da barra.

# No final da página, o visitante encontra os canais de contato.

# COMPATIBILIDADE

# O projeto foi desenvolvido utilizando recursos disponíveis em navegadores modernos.

# Entre os principais recursos utilizados estão CSS Grid, CSS Flexbox, Media Queries, CSS Variables, IntersectionObserver, matchMedia e requestAnimationFrame.

# Navegadores modernos oferecem suporte a esses recursos.

# Em navegadores que não oferecem suporte ao IntersectionObserver, o JavaScript possui uma alternativa que exibe os elementos normalmente, evitando que eles permaneçam invisíveis.

# ORGANIZAÇÃO DO CÓDIGO

# O CSS foi organizado em blocos separados por comentários.

# Esses blocos correspondem a áreas como variáveis, reset, HTML e body, acessibilidade, container, títulos, Hero, foto de perfil, botões, seção sobre, formação, habilidades, barras de progresso, projetos, rodapé e responsividade.

# Essa organização facilita a localização e manutenção das regras.

# O JavaScript também foi dividido em três partes principais: Scroll Reveal, barras de progresso e verificação das barras.

# EXECUÇÃO DO PROJETO

# Para executar o projeto, é necessário manter os arquivos na mesma pasta.

# O arquivo index.html deve estar acompanhado do arquivo style.css, do arquivo script.js e da imagem profile.jpg.

# O arquivo index.html pode ser aberto diretamente em um navegador.

# Também é possível utilizar um servidor local durante o desenvolvimento.

# Não existe, na versão apresentada, dependência de banco de dados ou servidor backend para o funcionamento básico do site.

# CONCLUSÃO

# O projeto consiste em um portfólio pessoal desenvolvido com HTML5, CSS3 e JavaScript, apresentando uma estrutura simples, organizada e adequada para uma página profissional.

# A aplicação possui uma identidade visual moderna, responsividade para diferentes dispositivos, animações de interface, barras de habilidades, seção de projetos e conquistas, informações acadêmicas e canais de contato.

# O uso de CSS Grid, Flexbox, Media Queries e variáveis CSS permite que o layout seja adaptado para diferentes tamanhos de tela.

# O JavaScript adiciona interatividade através do IntersectionObserver e das animações das barras de progresso.

# Também foram consideradas práticas de acessibilidade, incluindo suporte à preferência de redução de movimento, foco visível para navegação por teclado, texto alternativo na imagem e integração com VLibras.