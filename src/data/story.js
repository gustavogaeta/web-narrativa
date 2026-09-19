// ============================================================
// O MISTÉRIO DE 1973 — Estrutura de Dados da Narrativa
// ============================================================

export const CLUES = {
  fotografia: {
    id: 'fotografia',
    icon: '📷',
    name: 'Fotografia',
    description: 'Uma fotografia envelhecida de Helena em frente a um teatro. No verso: referência à música "Sangue Latino".',
    locked: true,
  },
  fita: {
    id: 'fita',
    icon: '🎙️',
    name: 'Fita Cassete',
    description: 'A gravação de voz de Helena. Ela fala sobre música, liberdade, medo e censura. Aviso final: "Não confie em quem aparece com todas as respostas."',
    locked: true,
  },
  bilhete: {
    id: 'bilhete',
    icon: '📝',
    name: 'Bilhete',
    description: '"Onde a música começou, existe outra resposta." — Helena',
    locked: true,
  },
  chave: {
    id: 'chave',
    icon: '🔑',
    name: 'Chave',
    description: 'Uma pequena chave metálica entregue pela funcionária do teatro. Helena a escondeu junto com o envelope.',
    locked: true,
  },
  envelope: {
    id: 'envelope',
    icon: '📬',
    name: 'Envelope',
    description: 'Contém a referência à música "Primavera nos Dentes" e a chave. Helena o escondeu no teatro.',
    locked: true,
  },
  arquivo: {
    id: 'arquivo',
    icon: '📁',
    name: 'Arquivo Secreto',
    description: 'Anotações de Helena relacionando músicas dos Secos & Molhados aos temas da investigação: identidade, poder, resistência, memória e silêncio.',
    locked: true,
  },
  referencias: {
    id: 'referencias',
    icon: '🎵',
    name: 'Referências Musicais',
    description: 'Helena usava as músicas dos Secos & Molhados como código:\n• Sangue Latino → identidade\n• O Patrão Nosso de Cada Dia → poder\n• Primavera nos Dentes → resistência\n• Rosa de Hiroshima → memória\n• Fala → não permanecer em silêncio',
    locked: true,
  },
};

export const STORY = {
  // ─────────────────────────────────────────────
  // ABERTURA
  // ─────────────────────────────────────────────
  home: {
    id: 'home',
    type: 'home',
  },

  // ─────────────────────────────────────────────
  // INTRODUÇÃO
  // ─────────────────────────────────────────────
  intro: {
    id: 'intro',
    type: 'scene',
    location: 'REDAÇÃO — SÃO PAULO',
    date: '1973',
    title: 'Uma caixa misteriosa',
    text: [
      'São Paulo, 1973. O Brasil vive tempos de censura e medo. Nas rádios, ainda se ouvem ecos de uma banda que está chamando a atenção do país inteiro: os Secos & Molhados — com músicas, poesias, maquiagem e um visual que parece vindo de outro mundo.',
      'Daniel tem 22 anos e trabalha em uma pequena redação no centro da cidade. Naquela tarde, alguém deixou uma caixa sobre a sua mesa. Sem nome. Sem explicação.',
      'Dentro dela: uma fotografia, uma fita cassete e algumas anotações.',
      'No dia seguinte, Daniel descobre que a pessoa que deixou a caixa desapareceu.',
      'Seu nome é Helena.',
    ],
    cluesUnlocked: [],
    choices: [
      { label: '📦 A CAIXA', sublabel: 'Investigar os objetos deixados por Helena', next: 'caixa' },
      { label: '🎭 O TEATRO', sublabel: 'Ir até o último lugar onde Helena foi vista', next: 'teatro' },
      { label: '🎙️ A FITA', sublabel: 'Ouvir a gravação deixada por Helena', next: 'fita' },
    ],
  },

  // ─────────────────────────────────────────────
  // CAMINHO 1 — A CAIXA
  // ─────────────────────────────────────────────
  caixa: {
    id: 'caixa',
    type: 'scene',
    location: 'REDAÇÃO — SÃO PAULO',
    date: '1973',
    title: 'O que está dentro da caixa',
    text: [
      'Daniel abre a caixa novamente.',
      'Uma fotografia: Helena, sorrindo, em frente a um teatro antigo. No verso, escrito com caneta, o título de uma música: "Sangue Latino".',
      'Ao lado da fotografia, um bilhete dobrado:',
      '"Onde a música começou, existe outra resposta."',
      'Daniel olha para a janela. A cidade segue seu ritmo, indiferente. Mas algo naquele bilhete não deixa ele parar de pensar.',
      'Ele pega o casaco. O endereço do teatro não é difícil de encontrar.',
      'Quando chega lá, a rua está quase vazia. A porta principal está fechada — mas uma entrada lateral está entreaberta.',
    ],
    cluesUnlocked: ['fotografia', 'bilhete'],
    musicRef: {
      title: 'Sangue Latino',
      theme: 'identidade',
      note: 'Helena usou esta música como primeira pista — uma questão de identidade, de origem, de quem se é quando o mundo quer que você seja outra coisa.',
      spotifyId: '2DREhftHdD8pRmNdSs6nyF',
      youtubeId: 'pHOwnIil_0o',
    },
    choices: [
      { label: '[ ENTRAR NO TEATRO ]', sublabel: 'Usar a entrada lateral entreaberta', next: 'teatro_interno' },
      { label: '[ PROCURAR OUTRA PISTA ]', sublabel: 'Examinar melhor os objetos da caixa antes de ir ao teatro', next: 'outra_pista' },
    ],
  },

  outra_pista: {
    id: 'outra_pista',
    type: 'scene',
    location: 'REDAÇÃO — SÃO PAULO',
    date: '1973',
    title: 'Mais fundo na caixa',
    text: [
      'Daniel decide examinar a caixa com mais cuidado antes de se mover.',
      'No fundo, quase invisível, existe um dobramento no papel que reveste o interior. Ele desliza os dedos e encontra um segundo bilhete, menor, escrito em letras apertadas:',
      '"A fita explica o que as palavras não puderam dizer. Mas cuidado com quem oferece ajuda."',
      'Daniel percebe que Helena foi meticulosa. Cada objeto, cada referência — tudo foi pensado.',
      'Ele guarda o segundo bilhete. Depois vai ao teatro.',
    ],
    cluesUnlocked: ['fotografia', 'bilhete'],
    choices: [
      { label: '[ IR AO TEATRO ]', sublabel: 'Seguir para o último lugar onde Helena foi vista', next: 'teatro' },
      { label: '[ OUVIR A FITA ]', sublabel: 'Colocar a fita cassete para tocar', next: 'fita' },
    ],
  },

  // ─────────────────────────────────────────────
  // CAMINHO 2 — O TEATRO
  // ─────────────────────────────────────────────
  teatro: {
    id: 'teatro',
    type: 'scene',
    location: 'TEATRO CENTRAL — SÃO PAULO',
    date: '1973',
    title: 'O último lugar visto',
    text: [
      'O teatro fica em um bairro antigo do centro. As paredes guardam décadas de apresentações — cartazes velhos, fotografias emolduradas, o cheiro de verniz e poeira.',
      'Daniel entra pela entrada principal. O lugar está praticamente vazio.',
      'Uma mulher mais velha varre o corredor. Ela para quando Daniel se apresenta e menciona o nome de Helena.',
      '"Ela esteve aqui, sim", diz a funcionária, com cautela. "Três dias atrás. Ficou conversando comigo por um tempo, olhando os cartazes antigos. Parecia preocupada."',
      'A mulher hesita. Depois caminha até um armário no fundo do corredor, abre uma gaveta e retira um envelope amarelado.',
      '"Ela deixou isso escondido aqui. Pediu que eu guardasse caso alguém de confiança viesse perguntar."',
      'Daniel abre o envelope com cuidado. Dentro: uma referência à música "Primavera nos Dentes" — e uma pequena chave metálica.',
      'Ele começa a entender. Helena estava usando as músicas como código.',
    ],
    cluesUnlocked: ['envelope', 'chave'],
    musicRef: {
      title: 'Primavera nos Dentes',
      theme: 'resistência',
      note: 'Para Helena, esta música representava a resistência — a ideia de que mesmo no inverno mais longo, algo sempre tenta crescer.',
      spotifyId: '3wRe1E7Lc4Ah05D45YRNrT',
      youtubeId: 'oIbled8a3lY',
    },
    choices: [
      { label: '[ USAR A CHAVE ]', sublabel: 'Descobrir o que a chave abre', next: 'usar_chave' },
      { label: '[ PROCURAR AUGUSTO ]', sublabel: 'Contactar o investigador que ofereceu ajuda', next: 'augusto_encontro' },
    ],
  },

  teatro_interno: {
    id: 'teatro_interno',
    type: 'scene',
    location: 'TEATRO CENTRAL — SÃO PAULO (INTERIOR)',
    date: '1973',
    title: 'Dentro do teatro',
    text: [
      'A entrada lateral leva a um corredor escuro. Daniel avança devagar, deixando a porta se fechar atrás de si.',
      'O teatro por dentro é maior do que parecia. O palco está vazio, iluminado apenas por uma luz de serviço.',
      'Ele encontra a mesma funcionária da limpeza. Depois de uma breve conversa, ela reconhece o nome de Helena e entrega a Daniel um envelope escondido atrás de um espelho no camarim.',
      '"Ela disse que alguém viria. Que era importante."',
      'Daniel abre o envelope. Dentro: a referência à música "Primavera nos Dentes" e uma pequena chave.',
    ],
    cluesUnlocked: ['envelope', 'chave'],
    musicRef: {
      title: 'Primavera nos Dentes',
      theme: 'resistência',
      note: 'Para Helena, esta música representava a resistência — a ideia de que mesmo no inverno mais longo, algo sempre tenta crescer.',
      spotifyId: '3wRe1E7Lc4Ah05D45YRNrT',
      youtubeId: 'oIbled8a3lY',
    },
    choices: [
      { label: '[ USAR A CHAVE ]', sublabel: 'Descobrir o que a chave abre', next: 'usar_chave' },
      { label: '[ PROCURAR AUGUSTO ]', sublabel: 'Contactar o investigador que se ofereceu para ajudar', next: 'augusto_encontro' },
    ],
  },

  usar_chave: {
    id: 'usar_chave',
    type: 'scene',
    location: 'TEATRO CENTRAL — SÃO PAULO',
    date: '1973',
    title: 'O que a chave abre',
    text: [
      'Daniel procura pelo teatro. Gavetas, armários, caixas de cena — nada.',
      'A funcionária observa de longe. Depois aponta discretamente para uma pequena sala no fundo, atrás do palco.',
      '"Tem um armário lá", ela diz. "Helena perguntou sobre ele também."',
      'A chave encaixa perfeitamente. Dentro do armário: um envelope grosso, cheio de papéis. As letras são de Helena — anotações, datas, nomes, referências musicais.',
      'É o arquivo. É tudo que ela reuniu antes de desaparecer.',
      'Daniel começa a ler quando ouve passos no corredor. Uma voz conhecida o chama pelo nome.',
      'Augusto.',
    ],
    cluesUnlocked: ['arquivo', 'referencias'],
    choices: [
      { label: '[ CONTINUAR ]', sublabel: 'Ver o que Augusto quer', next: 'arquivo_augusto' },
    ],
  },

  // ─────────────────────────────────────────────
  // CAMINHO 3 — A FITA
  // ─────────────────────────────────────────────
  fita: {
    id: 'fita',
    type: 'scene',
    location: 'REDAÇÃO — SÃO PAULO',
    date: '1973',
    title: 'A voz de Helena',
    text: [
      'Daniel encontra um velho gravador no fundo de uma gaveta da redação. Coloca a fita.',
      'A voz de Helena começa pausada, com ruído de fundo de uma rua movimentada:',
      '"Se você está ouvindo isso, então encontrou a caixa. Obrigada por não ter ignorado."',
      '"Eu passei meses coletando histórias. Histórias de artistas que foram calados, de apresentações que foram proibidas, de pessoas que preferiram o silêncio ao risco."',
      '"Encontrei referências aos Secos & Molhados em muitos desses casos. Não porque eles sejam os únicos — mas porque a música deles faz perguntas que o poder prefere que não sejam feitas."',
      '"O Patrão Nosso de Cada Dia. Pense no título. Pense em quem ele serve."',
      'Uma pausa longa. Depois:',
      '"Não confie em quem aparece com todas as respostas. Especialmente se aparecer rápido demais."',
      'A fita termina com o som de uma rua. Silêncio.',
      'Daniel olha para a janela. Pensa em Augusto — que apareceu no dia seguinte ao desaparecimento de Helena, já com um arquivo, já com teorias prontas.',
    ],
    cluesUnlocked: ['fita', 'referencias'],
    musicRef: {
      title: 'O Patrão Nosso de Cada Dia',
      theme: 'poder',
      note: 'Helena usou esta música para falar sobre poder — quem manda, quem obedece, e o que acontece com quem recusa obedecer.',
    },
    choices: [
      { label: '[ INVESTIGAR O ANTIGO TRABALHO DE HELENA ]', sublabel: 'Procurar mais informações sobre a pesquisa dela', next: 'trabalho_helena' },
      { label: '[ CONFRONTAR AUGUSTO ]', sublabel: 'Ir direto ao encontro do investigador', next: 'confronto_augusto' },
    ],
  },

  trabalho_helena: {
    id: 'trabalho_helena',
    type: 'scene',
    location: 'ESPAÇO CULTURAL — SÃO PAULO',
    date: '1973',
    title: 'O trabalho de Helena',
    text: [
      'Daniel vai até o espaço cultural onde Helena trabalhava. Uma colega dela o recebe com cautela.',
      '"Helena era muito dedicada. Mas nos últimos meses ficou mais reservada. Dizia que estava pesquisando algo delicado."',
      'A colega mostra o espaço de trabalho de Helena. Uma mesa organizada, cadernos empilhados. Tudo foi revistado, mas ela escondeu algo na lombada de um livro.',
      'Uma nota dobrada. Nela, um endereço — e um aviso: "Se eu desaparecer, vá ao teatro primeiro."',
      'Daniel percebe: Helena planejou cada passo da investigação para poder ser encontrada por alguém de confiança.',
    ],
    cluesUnlocked: ['arquivo'],
    choices: [
      { label: '[ IR AO TEATRO ]', sublabel: 'Seguir o conselho de Helena', next: 'teatro' },
      { label: '[ CONTINUAR ]', sublabel: 'Já sei o suficiente para confrontar Augusto', next: 'confronto_augusto' },
    ],
  },

  confronto_augusto: {
    id: 'confronto_augusto',
    type: 'scene',
    location: 'CAFÉ — SÃO PAULO',
    date: '1973',
    title: 'Frente a frente com Augusto',
    text: [
      'Augusto está sentado numa mesa do fundo, como sempre. Ele levanta os olhos quando Daniel se aproxima.',
      '"Você parece cansado", diz Augusto.',
      '"Estou", responde Daniel. "Mas não de investigar. De não entender por que você sabe tanto sobre a Helena sem nunca ter me dito como."',
      'Augusto sorri levemente. "Eu sou investigador. É o meu trabalho saber coisas."',
      '"Ela avisou sobre você", diz Daniel. "A fita. Ela disse para não confiar em quem aparece com todas as respostas."',
      'O silêncio entre eles dura tempo demais.',
      'Augusto finalmente responde: "Onde estão os documentos, Daniel?"',
      'É nesse momento que Daniel percebe: Augusto não veio para ajudar. Ele veio para recuperar o que Helena reuniu.',
    ],
    cluesUnlocked: ['arquivo', 'referencias'],
    choices: [
      { label: '[ CONTINUAR ]', sublabel: 'Chegar à decisão final', next: 'arquivo_augusto' },
    ],
  },

  augusto_encontro: {
    id: 'augusto_encontro',
    type: 'scene',
    location: 'CAFÉ — SÃO PAULO',
    date: '1973',
    title: 'O homem com respostas',
    text: [
      'Augusto é um homem de quarenta anos com olhos calmos demais para a situação.',
      'Ele diz que estava acompanhando o caso de Helena há algumas semanas. Que ela o contactou pedindo ajuda. Que ele sabe onde ela costumava guardar seus arquivos.',
      'Faz perguntas precisas demais. Sabe detalhes que Daniel ainda não contou a ninguém.',
      '"Como você sabe tudo isso?", pergunta Daniel.',
      '"Investiguei", responde Augusto, simplesmente.',
      'Mas há algo na voz dele — uma pausa mínima antes de cada resposta — que Daniel não consegue ignorar.',
    ],
    cluesUnlocked: [],
    choices: [
      { label: '[ CONFIAR PROVISORIAMENTE EM AUGUSTO ]', sublabel: 'Seguir com ele até o próximo passo', next: 'usar_chave' },
      { label: '[ MANTER A DISTÂNCIA ]', sublabel: 'Continuar sozinho e verificar a fita antes', next: 'fita' },
    ],
  },

  // ─────────────────────────────────────────────
  // ARQUIVO ESCONDIDO / DECISÃO FINAL
  // ─────────────────────────────────────────────
  arquivo_augusto: {
    id: 'arquivo_augusto',
    type: 'scene',
    location: 'TEATRO CENTRAL — SÃO PAULO',
    date: '1973',
    title: 'O arquivo e a hora da verdade',
    text: [
      'Daniel segura o envelope com as anotações de Helena.',
      'Em seus papéis, ela havia relacionado cada música dos Secos & Molhados a um tema da investigação:',
      '"Sangue Latino → identidade. Quem somos quando nos tiram a voz?"',
      '"O Patrão Nosso de Cada Dia → poder. A quem servimos sem perceber?"',
      '"Primavera nos Dentes → resistência. O que cresce onde não deveria?"',
      '"Rosa de Hiroshima → memória. O que não deve ser esquecido?"',
      '"Fala → silêncio. O ato de falar é o ato de resistir."',
      'Daniel percebe que Helena não estava apenas pesquisando a banda. Ela estava usando a arte como mapa — e o mapa levava a histórias que alguém queria manter escondidas.',
      'É nesse momento que Augusto entra.',
      '"Encontrou alguma coisa?", ele pergunta, com um sorriso cuidadoso.',
      '"Documentos", responde Daniel. "Tudo que Helena reuniu."',
      'Os olhos de Augusto mudam. Só por um segundo — mas Daniel viu.',
      '"Então me entregue os documentos. Vou garantir que cheguem às pessoas certas."',
      'Daniel olha para o envelope. Para Augusto. Para a porta.',
    ],
    cluesUnlocked: ['arquivo', 'referencias'],
    isFinalDecision: true,
    choices: [
      { label: '[ CONFIAR EM AUGUSTO ]', sublabel: 'Entregar os documentos para ele', next: 'final_armadilha', finalType: 'armadilha' },
      { label: '[ NÃO CONFIAR EM AUGUSTO ]', sublabel: 'Recusar e seguir o rastro de Helena', next: 'final_verdade', finalType: 'verdade' },
      { label: '[ CONTINUAR INVESTIGANDO SOZINHO ]', sublabel: 'Guardar os documentos e agir por conta própria', next: 'final_silencio', finalType: 'silencio' },
    ],
  },

  // ─────────────────────────────────────────────
  // FINAIS
  // ─────────────────────────────────────────────
  final_verdade: {
    id: 'final_verdade',
    type: 'ending',
    endingType: 'verdade',
    endingLabel: 'FINAL 1 — A VERDADE',
    title: 'A Verdade',
    text: [
      'Daniel recusa. Guarda o envelope dentro do casaco e sai do teatro pela mesma entrada lateral por onde entrou.',
      'Augusto não o segue — pelo menos, não imediatamente.',
      'Daniel passa as próximas horas seguindo a última pista de Helena: um endereço escondido nas dobras do envelope, escrito em tinta quase transparente.',
      'Uma pensão discreta num bairro quieto.',
      'Ele bate na porta do quarto. Um silêncio longo. Depois:',
      '"Quem é?"',
      'A voz é dela.',
      'Helena abre a porta. Está bem, mas com olheiras de quem não dorme há dias. Ela olha para Daniel e para o envelope com seus papéis.',
      '"Você encontrou", ela diz, em voz baixa.',
      '"Você planejou tudo isso", responde Daniel.',
      'Helena explica: percebeu que estava sendo observada. Decidiu desaparecer por um tempo para proteger as informações que havia reunido — e para colocá-las nas mãos de alguém que não soubesse demais antes de encontrá-las.',
      '"Augusto trabalha para as pessoas que eu estava investigando", ela confirma. "Ele aparece sempre que alguém chega perto demais."',
      'Daniel e Helena entregam os documentos para jornalistas em quem Helena confia — pessoas fora de São Paulo, fora do alcance de Augusto.',
      'A investigação não termina ali. Mas as informações de Helena deixam de estar apenas em suas mãos.',
      'A história não será esquecida.',
    ],
    epilogue: 'A verdade foi encontrada porque Daniel decidiu continuar procurando.',
    musicRef: {
      title: 'Fala',
      theme: 'silêncio',
      note: '"Fala" — o ato de falar é o ato de resistir.',
    },
  },

  final_armadilha: {
    id: 'final_armadilha',
    type: 'ending',
    endingType: 'armadilha',
    endingLabel: 'FINAL 2 — A ARMADILHA',
    title: 'A Armadilha',
    text: [
      'Daniel entrega o envelope.',
      'Augusto o pega com um cuidado que parece respeito mas se parece mais com alívio.',
      '"Você fez a coisa certa", ele diz.',
      'Nos dias seguintes, Daniel espera. Espera que a história de Helena apareça, que as informações sejam publicadas, que algo aconteça.',
      'Nada acontece.',
      'Daniel tenta contactar Augusto. O número está desconectado.',
      'Vai ao endereço que Augusto deixou. É uma sala comercial vazia.',
      'Os documentos de Helena desapareceram.',
      'Daniel fica parado no meio da rua com o barulho da cidade ao redor.',
      'Mas então lembra: antes de entregar o envelope, separou uma página. Uma única anotação de Helena — a que tinha o endereço da pensão.',
      'Ele guardou sem perceber a importância. Agora percebe.',
      'É o suficiente para começar de novo.',
    ],
    epilogue: 'Nem sempre quem oferece ajuda está procurando a mesma verdade que você.',
    musicRef: {
      title: 'Rosa de Hiroshima',
      theme: 'memória',
      note: '"Rosa de Hiroshima" — o que não deve ser esquecido persiste mesmo quando tentam apagar.',
    },
  },

  final_silencio: {
    id: 'final_silencio',
    type: 'ending',
    endingType: 'silencio',
    endingLabel: 'FINAL 3 — O SILÊNCIO',
    title: 'O Silêncio',
    text: [
      'Daniel não entrega os documentos. Não confia em Augusto. Mas também não segue a última pista de Helena.',
      'Ele decide agir sozinho, no seu próprio ritmo.',
      'Passa dias verificando endereços, confrontando informações, tentando montar o quadro completo.',
      'Quando finalmente chega ao endereço que acredita ser o último — uma pensão quieta num bairro do centro — o quarto está vazio.',
      'Helena não está lá.',
      'As pistas principais também sumiram. Alguém esteve ali antes dele.',
      'Daniel fica de pé no quarto vazio por um longo tempo.',
      'Na mesa, há apenas uma folha de papel, em branco, com uma caneta ao lado.',
      'Ele senta. E começa a escrever.',
      'Escreve tudo: a caixa, a fotografia, o teatro, a fita cassete, a voz de Helena, as músicas, Augusto, os documentos, o quarto vazio.',
      'Não encontrou todas as respostas. Mas decidiu não deixar a história de Helena desaparecer.',
      'A matéria é publicada. Sem todos os detalhes. Sem o paradeiro de Helena. Mas com o suficiente para que outras pessoas comecem a fazer as mesmas perguntas.',
    ],
    epilogue: 'Quando alguém decide contar uma história, ela deixa de estar completamente escondida.',
    musicRef: {
      title: 'O Vira',
      theme: 'expressão artística',
      note: 'Mesmo sem resposta final, a expressão é o que permanece.',
    },
  },

  // ─────────────────────────────────────────────
  // SOBRE E CRÉDITOS
  // ─────────────────────────────────────────────
  sobre: {
    id: 'sobre',
    type: 'about',
  },

  creditos: {
    id: 'creditos',
    type: 'credits',
    integrantes: ['[COLOCAR NOMES]'],
    turma: '[COLOCAR TURMA]',
    escola: 'SESI SENAI',
  },
};

// Ordem canônica de cenas para cálculo de progresso
export const SCENE_ORDER = [
  'intro',
  'caixa', 'outra_pista', 'teatro', 'teatro_interno',
  'fita', 'trabalho_helena', 'confronto_augusto', 'augusto_encontro', 'usar_chave',
  'arquivo_augusto',
  'final_verdade', 'final_armadilha', 'final_silencio',
];
