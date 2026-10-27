export type Flashcard = {
  id: number;
  theme: string;
  question: string;
  answer: string;
  hint: string;
};

export type QuizQuestion = {
  id: number;
  theme: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type QaItem = {
  id: number;
  theme: string;
  question: string;
  answer: string;
};

export type GlossaryItem = {
  term: string;
  meaning: string;
  example: string;
};

export type FieldQuestion = {
  id: number;
  section: string;
  type: "Escala 1 a 5" | "Múltipla escolha" | "Aberta" | "Sim / Não";
  question: string;
  options?: string[];
};

export const THEME = {
  title: "EstudaTCC",
  subtitle: "Terceirização das vistorias de identificação veicular em Minas Gerais",
  focus: "Impactos para o cidadão e para a administração pública",
  place: "Estudo de campo: ECV de Boa Esperança (MG)",
};

export const flashcards: Flashcard[] = [
  {
    id: 1,
    theme: "Conceitos",
    question: "O que é uma vistoria de identificação veicular?",
    answer:
      "É a conferência da identidade do veículo: chassi, motor, placas, etiquetas e documentos, para verificar se o veículo corresponde ao que está registrado e se não há indícios de adulteração, furto ou irregularidade.",
    hint: "Pense em identidade, não só em estado de conservação.",
  },
  {
    id: 2,
    theme: "Conceitos",
    question: "O que é uma ECV?",
    answer:
      "Empresa Credenciada de Vistoria. É uma empresa privada autorizada e fiscalizada pelo poder público para realizar vistorias de identificação veicular, seguindo regras, padrões técnicos e procedimentos definidos pelo órgão competente.",
    hint: "A sigla já entrega: Empresa Credenciada de Vistoria.",
  },
  {
    id: 3,
    theme: "Conceitos",
    question: "O que significa terceirizar um serviço público nesse caso?",
    answer:
      "Significa transferir a execução do serviço para um particular credenciado, enquanto o Estado mantém a regulação, o credenciamento, a fiscalização e a responsabilidade final sobre o serviço. Terceirizar a execução não é o mesmo que abrir mão do controle.",
    hint: "Execução muda de mãos. Regulação e fiscalização continuam públicas.",
  },
  {
    id: 4,
    theme: "Modelo",
    question: "Qual é a diferença central entre o modelo antigo e o modelo terceirizado?",
    answer:
      "No modelo direto, o próprio poder público executa a vistoria com sua estrutura e servidores. No modelo terceirizado, empresas credenciadas executam o serviço, e o poder público passa a atuar mais como regulador e fiscalizador da qualidade, do prazo e da segurança do procedimento.",
    hint: "Compare quem faz com quem controla.",
  },
  {
    id: 5,
    theme: "Modelo",
    question: "Por que um governo pode optar pela terceirização?",
    answer:
      "Entre os argumentos mais comuns estão ampliar a oferta e a capilaridade do atendimento, reduzir filas e tempo de espera, ganhar agilidade operacional e concentrar a estrutura pública em regulação e fiscalização. No TCC, esses argumentos devem ser testados com dados, não apenas repetidos.",
    hint: "Eficiência e cobertura são os argumentos clássicos.",
  },
  {
    id: 6,
    theme: "Modelo",
    question: "Quais são os principais riscos da terceirização?",
    answer:
      "Perda de controle sobre a qualidade, variação no atendimento entre empresas, foco excessivo no lucro, fiscalização insuficiente, custo percebido pelo cidadão e risco de fraude ou de vistoria superficial. Por isso, credenciamento, auditoria e transparência são pontos-chave da análise.",
    hint: "Todo ganho de agilidade precisa de um contrapeso de controle.",
  },
  {
    id: 7,
    theme: "Cidadão",
    question: "Quais impactos o cidadão sente primeiro na prática?",
    answer:
      "Tempo de espera, facilidade de agendamento, distância até o local, clareza das informações, custo, cordialidade, confiança no laudo e sensação de segurança de que a vistoria foi feita com rigor. Esses são ótimos eixos para o seu questionário.",
    hint: "Comece pela experiência de quem vai ao local.",
  },
  {
    id: 8,
    theme: "Cidadão",
    question: "Terceirizar significa, automaticamente, que o serviço ficou melhor ou pior?",
    answer:
      "Não. O resultado depende de como o modelo foi desenhado e fiscalizado na prática: regras claras, capacitação, equipamentos, auditoria, canais de reclamação e consequências para falhas. É exatamente isso que a pesquisa de campo ajuda a verificar.",
    hint: "A resposta do TCC deve ser evidenciada, não ideológica.",
  },
  {
    id: 9,
    theme: "Administração",
    question: "O que muda para a administração pública com a terceirização?",
    answer:
      "Ela deixa de executar cada vistoria e passa a gerir um sistema: credenciar empresas, definir padrões, auditar laudos, acompanhar indicadores, aplicar sanções e responder por eventuais falhas do modelo. A carga de trabalho muda de natureza, não desaparece.",
    hint: "De executora para gestora do sistema.",
  },
  {
    id: 10,
    theme: "Administração",
    question: "Quais indicadores a administração deveria acompanhar?",
    answer:
      "Tempo médio de atendimento, taxa de reprovação, retrabalho, reclamações, tempo de agendamento, cobertura territorial, conformidade em auditorias e custo total do modelo. Indicadores transformam opinião em avaliação.",
    hint: "Se não mede, não consegue comparar modelos.",
  },
  {
    id: 11,
    theme: "Pesquisa",
    question: "Qual é o problema de pesquisa do seu TCC, em uma frase?",
    answer:
      "Investigar quais são os impactos da terceirização das vistorias de identificação veicular em Minas Gerais para o cidadão e para a administração pública, a partir da experiência observada em uma ECV de Boa Esperança.",
    hint: "Problema = o que você quer entender, não a sua opinião prévia.",
  },
  {
    id: 12,
    theme: "Pesquisa",
    question: "Por que comparar o modelo antigo com o novo é tão importante?",
    answer:
      "Porque só a comparação permite dizer se houve melhora, piora ou apenas mudança de formato. Sem um ponto de referência, qualquer avaliação fica solta. No questionário, perguntas comparativas ajudam quem já usou os dois modelos a relatar a diferença percebida.",
    hint: "Comparar é o que dá força ao seu argumento.",
  },
  {
    id: 13,
    theme: "Pesquisa",
    question: "O que é uma pesquisa de campo com questionário?",
    answer:
      "É a coleta direta de informações com as pessoas envolvidas no serviço, por meio de perguntas padronizadas. Ela permite medir percepções, como satisfação, tempo e confiança, e cruzar esses dados com a análise teórica e documental do TCC.",
    hint: "Campo = ir onde o serviço acontece.",
  },
  {
    id: 14,
    theme: "Pesquisa",
    question: "Qual é a diferença entre percepção e qualidade medida?",
    answer:
      "Percepção é o que o usuário sente e relata, como satisfação e confiança. Qualidade medida usa registros objetivos, como tempo, erros e auditorias. Um bom TCC usa as duas: a percepção explica a experiência, e os dados objetivos testam se ela se sustenta.",
    hint: "Satisfação alta não prova, sozinha, rigor técnico.",
  },
  {
    id: 15,
    theme: "Pesquisa",
    question: "O que cuidar na ética da pesquisa de campo?",
    answer:
      "Participação voluntária, anonimato, explicação clara do objetivo, consentimento, sigilo das respostas e uso dos dados apenas para fins acadêmicos. Nenhum participante deve ser identificado no trabalho.",
    hint: "Anonimato protege o participante e a pesquisa.",
  },
  {
    id: 16,
    theme: "Conceitos",
    question: "O que é credenciamento?",
    answer:
      "É o processo pelo qual o poder público autoriza uma empresa a prestar o serviço, após verificar requisitos técnicos, estruturais, documentais e de idoneidade. O credenciamento pode ser suspenso ou cancelado se as regras não forem cumpridas.",
    hint: "Autorizar, verificar e poder desautorizar.",
  },
  {
    id: 17,
    theme: "Administração",
    question: "O que é fiscalização nesse contexto?",
    answer:
      "É o acompanhamento contínuo do serviço terceirizado: auditorias, visitas, análise de laudos, apuração de denúncias e aplicação de penalidades. Sem fiscalização efetiva, a terceirização vira apenas repasse de responsabilidade.",
    hint: "Fiscalizar é o trabalho que continua depois de contratar.",
  },
  {
    id: 18,
    theme: "Cidadão",
    question: "Por que a confiança no laudo importa tanto?",
    answer:
      "Porque o laudo de vistoria sustenta decisões importantes, como transferência, regularização e segurança jurídica da compra de um veículo. Se o cidadão desconfia do laudo, todo o sistema perde legitimidade, mesmo que o atendimento seja rápido.",
    hint: "Rapidez sem confiança não é qualidade.",
  },

  {
    id: 19,
    theme: "Modelo",
    question: "Qual lei autorizou o credenciamento das ECVs em Minas Gerais?",
    answer:
      "A Lei Estadual nº 24.470/2023 autorizou a CET-MG a credenciar pessoas jurídicas de direito público ou privado para a vistoria de identificação veicular, com cobrança de preço público pelo serviço.",
    hint: "24.470 é a lei do credenciamento.",
  },
  {
    id: 20,
    theme: "Modelo",
    question: "Como o modelo foi regulamentado depois da lei?",
    answer:
      "Pelo Decreto Estadual nº 48.703/2023 e pelas Portarias CET-MG nº 1.290/2023 e nº 1.291/2023, que fixaram o rito do credenciamento, a vigência de 3 anos renováveis e o início das operações com fase de operação assistida.",
    hint: "Lei autoriza, decreto regulamenta, portaria detalha.",
  },
  {
    id: 21,
    theme: "Administração",
    question: "Quem passou a gerir o trânsito estadual em Minas Gerais?",
    answer:
      "A Coordenadoria Estadual de Gestão de Trânsito (CET-MG), vinculada à Seplag-MG. A Emenda à Constituição Estadual nº 113/2023 e a Lei nº 24.313/2023 transferiram as competências operacionais da Polícia Civil para a Seplag/CET-MG.",
    hint: "Da Polícia Civil para a Seplag, via CET-MG.",
  },
  {
    id: 22,
    theme: "Administração",
    question: "Qual é a formação exigida para ser vistoriador?",
    answer:
      "Ensino médio completo e curso presencial de capacitação de no mínimo 40 horas-aula, sendo ao menos 16 horas de atividades práticas, com prova teórica de 25 questões e acerto mínimo de 80%, além de prova prática em automóvel e motocicleta. Há ainda atualização anual presencial de no mínimo 20 horas. Base: Portaria DETRAN-MG nº 1.603/2022.",
    hint: "40 horas, 16 práticas, 80% na teórica.",
  },
  {
    id: 23,
    theme: "Cidadão",
    question: "O que uma ECV precisa ter de infraestrutura?",
    answer:
      "Instalações permanentes em alvenaria, recepção climatizada, sanitários adaptados conforme a ABNT NBR 9050:2020 e área coberta para vistoria com no mínimo 39 m², além de equipamentos como macaco hidráulico, rampas, paquímetro e profundímetro digitais e câmera endoscópica.",
    hint: "39 m² cobertos é o número-chave.",
  },
  {
    id: 24,
    theme: "Administração",
    question: "Como o Estado fiscaliza as ECVs?",
    answer:
      "Pela Seção de Auditoria e Fiscalização (SAF) e pela Divisão de Registro de Veículos (DRV), com livre acesso a instalações, livros e laudos, inspeções amostrais sem aviso prévio e vistorias simuladas. Os laudos usam certificados digitais e-CPF A3 do vistoriador e e-CNPJ da ECV, com transmissão para a base da Prodemge e da CET-MG.",
    hint: "Auditoria + certificado digital + base central.",
  },
  {
    id: 25,
    theme: "Administração",
    question: "O que o STF decidiu sobre delegar poder de polícia a particulares?",
    answer:
      "No Tema 532 (RE 633.782), o STF considerou constitucional delegar atos materiais, executórios e preparatórios, como a vistoria, a particulares. A normatização, a fiscalização coercitiva, a sanção e a decisão final de registro e licenciamento permanecem com o poder público.",
    hint: "Preparatório pode delegar; decisão final, não.",
  },
  {
    id: 26,
    theme: "Administração",
    question: "Qual é o principal alerta de sustentabilidade do modelo em Minas Gerais?",
    answer:
      "Segundo dados apresentados em audiência pública na ALMG em abril de 2025, cerca de 93% das ECVs operavam com prejuízo, por saturação de mercado, concorrência remanescente do Estado e margem comprimida frente a custos fixos. Isso motivou a suspensão temporária de novos credenciamentos por 6 meses.",
    hint: "Capilaridade alta não garante lucro da ECV.",
  },
  {
    id: 27,
    theme: "Administração",
    question: "O que a Nova Gestão Pública tem a ver com esse TCC?",
    answer:
      "Ela é o referencial que defende gestão por resultados, foco no cidadão-usuário e parcerias com o setor privado, com o Estado mais como regulador e fiscalizador do que como executor direto. O princípio da eficiência, no art. 37 da Constituição, incluído pela EC nº 19/1998, é o pano de fundo dessa discussão.",
    hint: "Resultado e cidadão no centro, sem abrir mão do controle.",
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    theme: "Conceitos",
    question: "O que a vistoria de identificação veicular verifica, principalmente?",
    options: [
      "Apenas a pintura e os pneus do veículo",
      "A identidade do veículo: chassi, motor, placas e documentos",
      "Somente a emissão de poluentes",
      "Apenas a habilitação do condutor",
    ],
    correctIndex: 1,
    explanation:
      "O foco é a identidade do veículo e a correspondência com o registro, incluindo sinais de adulteração ou irregularidade.",
  },
  {
    id: 2,
    theme: "Modelo",
    question: "Na terceirização, qual papel permanece com o poder público?",
    options: [
      "Nenhum papel, o serviço deixa de ser público",
      "Apenas a cobrança da taxa",
      "Regulação, credenciamento e fiscalização",
      "Apenas a propaganda do serviço",
    ],
    correctIndex: 2,
    explanation:
      "A execução muda, mas o Estado continua responsável por definir regras, credenciar, fiscalizar e responder pelo modelo.",
  },
  {
    id: 3,
    theme: "Cidadão",
    question: "Qual destes é um impacto direto percebido pelo cidadão?",
    options: [
      "A cor do uniforme do vistoriador",
      "Tempo de espera e facilidade de agendamento",
      "O número de funcionários da ECV",
      "A marca do equipamento de informática",
    ],
    correctIndex: 1,
    explanation:
      "Tempo, agendamento, acesso, custo e clareza das informações são os impactos mais imediatos na experiência do cidadão.",
  },
  {
    id: 4,
    theme: "Administração",
    question: "Qual indicador ajuda a comparar o modelo antigo com o novo?",
    options: [
      "Apenas a opinião de um único usuário",
      "Tempo médio de atendimento e taxa de reclamações",
      "A quantidade de carros na rua",
      "O preço dos combustíveis",
    ],
    correctIndex: 1,
    explanation:
      "Indicadores comparáveis, como tempo, reclamações e conformidade em auditorias, permitem uma avaliação mais sólida.",
  },
  {
    id: 5,
    theme: "Pesquisa",
    question: "Por que o questionário deve ter perguntas sobre o modelo antigo e o novo?",
    options: [
      "Para deixar o questionário mais longo",
      "Para permitir comparação da percepção antes e depois",
      "Porque toda pesquisa precisa de perguntas repetidas",
      "Para confundir o respondente",
    ],
    correctIndex: 1,
    explanation:
      "A comparação é o coração do seu tema: sem ela, não dá para avaliar se a mudança trouxe melhora ou não.",
  },
  {
    id: 6,
    theme: "Modelo",
    question: "Qual é um risco clássico da terceirização mal fiscalizada?",
    options: [
      "Aumento automático da qualidade",
      "Variação da qualidade entre empresas e vistoria superficial",
      "Fim de todas as filas para sempre",
      "Redução automática de todos os custos",
    ],
    correctIndex: 1,
    explanation:
      "Sem auditoria e padrões, empresas diferentes podem entregar níveis diferentes de rigor, o que compromete a confiança no laudo.",
  },
  {
    id: 7,
    theme: "Pesquisa",
    question: "O que garante, na prática, a ética da pesquisa de campo?",
    options: [
      "Publicar o nome de todos os entrevistados",
      "Participação voluntária, anonimato e sigilo das respostas",
      "Pagar para obter respostas positivas",
      "Entrevistar apenas quem concorda com o pesquisador",
    ],
    correctIndex: 1,
    explanation:
      "Voluntariedade, anonimato e uso acadêmico dos dados protegem o participante e a credibilidade da pesquisa.",
  },
  {
    id: 8,
    theme: "Conceitos",
    question: "O que é uma ECV?",
    options: [
      "Um órgão federal de trânsito",
      "Empresa Credenciada de Vistoria",
      "Um tipo de documento do veículo",
      "Um exame de direção",
    ],
    correctIndex: 1,
    explanation:
      "ECV é a empresa privada credenciada para realizar vistorias de identificação veicular.",
  },
  {
    id: 9,
    theme: "Administração",
    question: "Com a terceirização, o trabalho da administração pública:",
    options: [
      "Desaparece completamente",
      "Muda de execução direta para gestão, auditoria e controle",
      "Passa a ser feito apenas por estagiários",
      "Fica restrito à emissão de multas",
    ],
    correctIndex: 1,
    explanation:
      "A administração passa a gerir o sistema: credenciar, auditar, acompanhar indicadores e aplicar sanções quando necessário.",
  },
  {
    id: 10,
    theme: "Cidadão",
    question: "Um atendimento rápido, mas com laudo pouco confiável, é um bom resultado?",
    options: [
      "Sim, rapidez é o único critério",
      "Não, porque a confiança no laudo sustenta a segurança jurídica",
      "Sim, desde que o preço seja baixo",
      "Não importa, o cidadão não percebe",
    ],
    correctIndex: 1,
    explanation:
      "Rapidez sem rigor e sem confiança não é qualidade: o laudo precisa ser tecnicamente confiável.",
  },
  {
    id: 11,
    theme: "Pesquisa",
    question: "Qual é a principal vantagem de coletar dados em uma ECV real?",
    options: [
      "Evitar qualquer leitura teórica",
      "Observar a experiência real de quem usa o serviço",
      "Garantir que todos vão elogiar o serviço",
      "Substituir a análise dos resultados",
    ],
    correctIndex: 1,
    explanation:
      "O campo traz a experiência concreta do usuário, que depois é analisada à luz da teoria e dos dados disponíveis.",
  },
  {
    id: 12,
    theme: "Modelo",
    question: "Qual frase resume melhor uma boa conclusão para esse TCC?",
    options: [
      "A terceirização é sempre boa ou sempre ruim",
      "Os impactos dependem do desenho, da fiscalização e da experiência local observada",
      "Nenhum dado é necessário para concluir",
      "O modelo antigo era perfeito em tudo",
    ],
    correctIndex: 1,
    explanation:
      "Uma conclusão acadêmica forte é matizada: ela apresenta evidências, limites e o que os dados locais realmente mostraram.",
  },

  {
    id: 13,
    theme: "Modelo",
    question: "Qual norma autorizou o credenciamento das ECVs em Minas Gerais?",
    options: [
      "Lei nº 24.313/2023",
      "Lei nº 24.470/2023",
      "Decreto nº 48.703/2023",
      "Portaria DETRAN nº 1.603/2022",
    ],
    correctIndex: 1,
    explanation:
      "A Lei nº 24.470/2023 autorizou o credenciamento. O Decreto nº 48.703/2023 regulamentou, e a Lei nº 24.313/2023 tratou da estrutura do Executivo.",
  },
  {
    id: 14,
    theme: "Administração",
    question: "Quem gere hoje as vistorias credenciadas em Minas Gerais?",
    options: [
      "A Polícia Civil, diretamente",
      "A CET-MG, vinculada à Seplag-MG",
      "A Assembleia Legislativa",
      "A Prodemge, sozinha",
    ],
    correctIndex: 1,
    explanation:
      "A gestão é da CET-MG/Seplag-MG. A Prodemge mantém a base de dados e a integração dos sistemas, sem ser a gestora do credenciamento.",
  },
  {
    id: 15,
    theme: "Administração",
    question: "Qual é a carga mínima do curso de formação do vistoriador?",
    options: [
      "20 horas, todas teóricas",
      "40 horas, sendo ao menos 16 horas práticas",
      "80 horas, todas práticas",
      "120 horas, sem prova",
    ],
    correctIndex: 1,
    explanation:
      "São no mínimo 40 horas-aula, com ao menos 16 horas práticas, prova teórica com 80% de acerto mínimo e prova prática.",
  },
  {
    id: 16,
    theme: "Administração",
    question: "Pelo Tema 532 do STF, o que pode ser delegado a particulares na vistoria?",
    options: [
      "A decisão final de registro e a sanção",
      "A normatização do serviço",
      "Atos materiais e preparatórios, como a inspeção técnica",
      "A fiscalização coercitiva",
    ],
    correctIndex: 2,
    explanation:
      "Atos materiais e preparatórios podem ser delegados. Normatização, fiscalização coercitiva, sanção e decisão final ficam com o poder público.",
  },
  {
    id: 17,
    theme: "Administração",
    question: "Segundo o TCC, qual dado resume a crise de sustentabilidade das ECVs?",
    options: [
      "93% das ECVs operavam com prejuízo, em dados de audiência na ALMG em 2025",
      "93% das ECVs fecharam em 2024",
      "93% dos municípios ficaram sem vistoria",
      "93% dos laudos foram reprovados",
    ],
    correctIndex: 0,
    explanation:
      "O dado do TCC é sobre prejuízo financeiro das empresas, ligado à saturação e à margem comprimida, não sobre fechamento, cobertura ou reprovação.",
  },
  {
    id: 18,
    theme: "Cidadão",
    question: "Qual é a área coberta mínima exigida para a vistoria prática na ECV?",
    options: ["9 m²", "20 m²", "39 m²", "100 m²"],
    correctIndex: 2,
    explanation:
      "A exigência apresentada no TCC é de área coberta mínima de 39 m², em instalações permanentes em alvenaria.",
  },
];

export const qaItems: QaItem[] = [
  {
    id: 1,
    theme: "Defesa",
    question: "Qual é o tema do TCC, em uma frase?",
    answer:
      "Analisar os impactos da terceirização das vistorias de identificação veicular em Minas Gerais para o cidadão e para a administração pública, com pesquisa de campo em uma ECV de Boa Esperança (MG).",
  },
  {
    id: 2,
    theme: "Defesa",
    question: "Qual é o problema de pesquisa?",
    answer:
      "A mudança do modelo de execução das vistorias trouxe, na prática, mais agilidade e qualidade para o cidadão e mais eficiência para a administração, ou apenas transferiu a execução sem resolver os gargalos do modelo anterior? A pesquisa busca responder isso com dados de campo.",
  },
  {
    id: 3,
    theme: "Defesa",
    question: "Qual é o objetivo geral?",
    answer:
      "Avaliar os impactos da terceirização das vistorias de identificação veicular em Minas Gerais, comparando a percepção dos usuários e os aspectos de gestão do modelo, a partir do caso observado em Boa Esperança.",
  },
  {
    id: 4,
    theme: "Defesa",
    question: "Por que escolher Boa Esperança (MG)?",
    answer:
      "Porque é um caso concreto e acessível para a pesquisa de campo, que permite observar de perto a rotina de uma ECV, o atendimento ao cidadão e a percepção de quem já viveu os dois modelos. O trabalho deve deixar claro que se trata de um estudo de caso, com limites de generalização.",
  },
  {
    id: 5,
    theme: "Metodologia",
    question: "Como a pesquisa de campo será feita?",
    answer:
      "Por meio de questionário fechado e anônimo aplicado a usuários da ECV, com 18 perguntas sobre contexto, modelo atual e comparação antigo x novo. Quem nunca fez vistoria no modelo antigo responde 14; quem já fez, responde as 18. As respostas são voluntárias e tratadas apenas para fins acadêmicos, sem nome, CPF, placa ou contato.",
  },
  {
    id: 6,
    theme: "Metodologia",
    question: "Quantas perguntas o questionário deve ter?",
    answer:
      "A ideia inicial é de 10 a 20 perguntas, todas sobre o serviço. Esse tamanho equilibra profundidade e taxa de resposta: questionários muito longos cansam o participante e reduzem a qualidade das respostas.",
  },
  {
    id: 7,
    theme: "Análise",
    question: "Como analisar os resultados do questionário?",
    answer:
      "Organize por blocos: contexto, modelo atual e comparação antigo x novo. Use contagens e percentuais por pergunta, gráficos simples por bloco, e compare quem viveu os dois modelos com quem só conhece o atual, sem expor cruzamentos com pouquíssimas respostas. Registre também o que o campo não mede: fiscalização do Estado e lucro das ECVs.",
  },
  {
    id: 8,
    theme: "Análise",
    question: "O que fazer se os resultados forem contraditórios?",
    answer:
      "Apresente a contradição como achado, não como erro. Por exemplo: atendimento mais rápido, mas confiança menor. Discuta o que pode explicar isso, como fiscalização, comunicação, preço ou experiência anterior, e proponha melhorias a partir disso.",
  },
  {
    id: 9,
    theme: "Conclusão",
    question: "Como escrever uma conclusão forte?",
    answer:
      "Retome o problema, responda com base nos dados coletados, reconheça os limites do estudo de caso, aponte contribuições para o cidadão e para a gestão pública e sugira melhorias e pesquisas futuras. Evite generalizar para todo o estado o que foi observado em um único local.",
  },
  {
    id: 10,
    theme: "Defesa",
    question: "Qual é a principal contribuição do trabalho?",
    answer:
      "Dar voz a quem usa o serviço e organizar, em um estudo de caso, evidências sobre o que realmente mudou com a terceirização: onde houve ganho, onde persistiram problemas e o que pode ser aprimorado na regulação e na fiscalização.",
  },

  {
    id: 11,
    theme: "Defesa",
    question: "Se a banca disser que terceirizar é privatizar, como responder?",
    answer:
      "Distinguindo execução de decisão: a ECV executa a inspeção técnica, mas a normatização, a fiscalização coercitiva, a sanção e a decisão final de registro continuam com o poder público, conforme o Tema 532 do STF. Terceirizar a execução, com credenciamento e auditoria, não é o mesmo que transferir o poder decisório.",
  },
  {
    id: 12,
    theme: "Defesa",
    question: "Como tratar o dado de 93% das ECVs com prejuízo sem culpar o cidadão?",
    answer:
      "Como um problema de desenho e equilíbrio do mercado, não de culpa do usuário: saturação de credenciamentos, custos fixos exigidos e margem comprimida. O TCC pode discutir capilaridade para o cidadão e sustentabilidade para as empresas como dois objetivos que precisam ser equilibrados pela regulação.",
  },
  {
    id: 13,
    theme: "Metodologia",
    question: "O que muda na seção 3 do TCC se o campo for incluído?",
    answer:
      "Ela deixa de ser estritamente documental e passa a descrever também o levantamento: público, local, período, instrumento de 18 perguntas fechadas e anônimas, forma de análise descritiva e limites, como ser uma única ECV em Boa Esperança, sem representar todo o estado.",
  },
  {
    id: 14,
    theme: "Defesa",
    question: "Por que Boa Esperança não representa todo o estado?",
    answer:
      "Porque é um estudo de caso: mostra em profundidade a experiência local, mas uma única ECV, em um único município e período, não permite generalizar percentuais para os 853 municípios mineiros. O valor está na comparação local e nos mecanismos, não na extrapolação automática.",
  },
];

export const glossary: GlossaryItem[] = [
  {
    term: "ECV",
    meaning:
      "Empresa Credenciada de Vistoria: empresa privada autorizada a realizar vistorias de identificação veicular.",
    example: "A ECV de Boa Esperança é o local da sua pesquisa de campo.",
  },
  {
    term: "Vistoria de identificação",
    meaning:
      "Conferência da identidade do veículo por meio de chassi, motor, placas, etiquetas e documentos.",
    example: "Ela é exigida em situações como transferência e regularização.",
  },
  {
    term: "Terceirização",
    meaning:
      "Transferência da execução de um serviço para um particular, mantendo regulação e fiscalização públicas.",
    example: "O Estado credencia e fiscaliza; a empresa executa a vistoria.",
  },
  {
    term: "Credenciamento",
    meaning:
      "Autorização formal para prestar o serviço, após verificação de requisitos técnicos e documentais.",
    example: "Sem credenciamento válido, a empresa não pode vistoriar.",
  },
  {
    term: "Fiscalização",
    meaning: "Acompanhamento contínuo por auditorias, análise de laudos, denúncias e sanções.",
    example: "Auditorias periódicas ajudam a manter o padrão entre ECVs.",
  },
  {
    term: "Laudo de vistoria",
    meaning: "Documento que registra o resultado da vistoria e sustenta decisões sobre o veículo.",
    example: "Um laudo confiável dá segurança jurídica à transferência.",
  },
  {
    term: "Eficiência",
    meaning:
      "Relação entre recursos usados e resultados alcançados, como tempo, custo e qualidade.",
    example: "Menos espera, com o mesmo rigor, é um ganho de eficiência.",
  },
  {
    term: "Satisfação do usuário",
    meaning:
      "Percepção do cidadão sobre o atendimento recebido, medida por pesquisas e reclamações.",
    example: "Satisfação alta não substitui, sozinha, a auditoria técnica.",
  },
  {
    term: "Estudo de caso",
    meaning:
      "Investigação aprofundada de um caso específico, com resultados ricos, mas com limites de generalização.",
    example: "Boa Esperança é o caso; Minas Gerais é o contexto.",
  },
  {
    term: "Questionário",
    meaning:
      "Instrumento padronizado de coleta, com perguntas fechadas e abertas aplicadas aos participantes.",
    example: "Seu questionário terá de 10 a 20 perguntas sobre o serviço.",
  },

  {
    term: "CET-MG",
    meaning:
      "Coordenadoria Estadual de Gestão de Trânsito, vinculada à Seplag-MG, que regulamenta, credencia, fiscaliza e homologa laudos.",
    example: "A CET-MG é a gestora do sistema de ECVs em Minas Gerais.",
  },
  {
    term: "Seplag-MG",
    meaning:
      "Secretaria de Estado de Planejamento e Gestão de Minas Gerais, à qual a CET-MG está vinculada.",
    example: "A transferência do trânsito da Polícia Civil foi para a Seplag.",
  },
  {
    term: "Ciretran",
    meaning:
      "Circunscrição Regional de Trânsito, unidade da Polícia Civil onde, no modelo antigo, as vistorias eram executadas.",
    example: "No modelo antigo, o cidadão ia ao Ciretran da comarca.",
  },
  {
    term: "DAE",
    meaning:
      "Documento de Arrecadação Estadual, usado para pagar a parcela estadual da cobrança da vistoria.",
    example: "No exemplo do TCC, 26 UFEMG vão ao Estado via DAE.",
  },
  {
    term: "UFEMG",
    meaning:
      "Unidade Fiscal do Estado de Minas Gerais, usada para expressar taxas e preços públicos, com valor em reais atualizado periodicamente.",
    example: "A cobrança total do exemplo é de 49 UFEMG, repartida entre Estado e ECV.",
  },
  {
    term: "ETIV",
    meaning:
      "Empresa de Tecnologia de Vistoria, homologada para fornecer o software de vistoria, integrar dados e transmitir imagens.",
    example:
      "A parcela tecnológica de 2,5 UFEMG é paga pela ECV à ETIV e está contida no preço bruto da ECV.",
  },
  {
    term: "Prodemge",
    meaning:
      "Companhia de Tecnologia da Informação de Minas Gerais, responsável pela base central de veículos e pela integração dos sistemas do Estado.",
    example: "Fotos e dados da vistoria são transmitidos para a base mantida com a Prodemge.",
  },
];

export const comparisonRows: { aspect: string; oldModel: string; newModel: string }[] = [
  {
    aspect: "Quem executa",
    oldModel: "Polícia Civil de Minas Gerais (PCMG), nas Ciretrans.",
    newModel: "Empresas Credenciadas de Vistoria (ECVs), sob gestão da CET-MG/Seplag-MG.",
  },
  {
    aspect: "Papel do Estado",
    oldModel: "Executor direto de cada vistoria.",
    newModel:
      "Regulador e fiscalizador do sistema: credenciamento, auditoria e homologação de laudos.",
  },
  {
    aspect: "Cobertura geográfica",
    oldModel: "Concentrada em sedes de comarcas e Ciretrans.",
    newModel:
      "1.662 ECVs e 6,8 mil vistoriadores, com cobertura de 98,6% dos 853 municípios mineiros e mais de 3,2 milhões de laudos, segundo o TCC.",
  },
  {
    aspect: "Prazo para conseguir atendimento",
    oldModel: "De 15 a 60 dias nas maiores delegacias.",
    newModel: "Atendimento imediato ou agendado no mesmo dia, segundo o TCC.",
  },
  {
    aspect: "Tempo e espera no local",
    oldModel: "Gargalo de horas em filas presenciais, em pátios abertos.",
    newModel: "Tempo médio de execução de 15 a 20 minutos, com atendimento agendado.",
  },
  {
    aspect: "Custo ao cidadão",
    oldModel: "49 UFEMG em DAE único (R$ 246,81 no exemplo de 2023).",
    newModel:
      "49 UFEMG repartidos: 26 UFEMG de DAE ao Estado + 23 UFEMG à ECV (R$ 150,54 + R$ 133,17 = R$ 283,71 no exemplo de 2026, acompanhando a UFEMG).",
  },
  {
    aspect: "Infraestrutura de atendimento",
    oldModel: "Pátios abertos de delegacias, com exposição a sol e chuva.",
    newModel:
      "Sedes cobertas, recepção climatizada e acessibilidade, conforme as exigências de credenciamento.",
  },
  {
    aspect: "Transparência e controle",
    oldModel: "Rotina interna de cada unidade pública.",
    newModel:
      "Laudo digital com registro fotográfico auditável, distribuição randômica do atendimento e fiscalização da CET-MG.",
  },
  {
    aspect: "Risco principal",
    oldModel: "Fila, espera e cobertura limitada.",
    newModel:
      "Variação de qualidade e sustentabilidade econômica das ECVs, se o controle e o equilíbrio do mercado falharem.",
  },
];

export const fieldQuestions: FieldQuestion[] = [
  {
    id: 1,
    section: "Contexto",
    type: "Múltipla escolha",
    question: "Qual foi o motivo da sua vistoria hoje?",
    options: [
      "Transferência de propriedade",
      "Alteração de dados",
      "Mudança de município",
      "Regularização",
      "Outro",
    ],
  },
  {
    id: 2,
    section: "Contexto",
    type: "Múltipla escolha",
    question: "Você mora em Boa Esperança ou em outro município da região?",
    options: ["Boa Esperança", "Outro município da região"],
  },
  {
    id: 3,
    section: "Contexto",
    type: "Múltipla escolha",
    question:
      "Você já fez vistoria no modelo antigo, na Polícia Civil/Ciretran, antes da terceirização?",
    options: ["Sim", "Não"],
  },
  {
    id: 4,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question: "Como foi conseguir atendimento na ECV?",
    options: [
      "Imediato, sem agendamento",
      "No mesmo dia",
      "Em 1 a 3 dias",
      "Em 4 a 7 dias",
      "Em mais de 7 dias",
    ],
  },
  {
    id: 5,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question: "Quanto tempo você ficou na ECV, da chegada ao fim da vistoria?",
    options: ["Até 15 minutos", "De 16 a 30 minutos", "De 31 a 60 minutos", "Mais de 60 minutos"],
  },
  {
    id: 6,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question: "Como avalia a facilidade para agendar e obter informações?",
    options: ["Muito fácil", "Fácil", "Regular", "Difícil", "Muito difícil"],
  },
  {
    id: 7,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question:
      "Como avalia a clareza das informações antes da vistoria, sobre documentos, etapas e valores?",
    options: ["Muito clara", "Clara", "Regular", "Pouco clara", "Nada clara"],
  },
  {
    id: 8,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question:
      "Você sabia ou entendeu que o valor pago é dividido entre o DAE ao Estado e o valor da ECV?",
    options: ["Sim", "Parcialmente", "Não"],
  },
  {
    id: 9,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question:
      "Como avalia o conforto e a acessibilidade da ECV, como área coberta, recepção e sanitário adaptado?",
    options: ["Muito bom", "Bom", "Regular", "Ruim", "Muito ruim"],
  },
  {
    id: 10,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question: "Como avalia o atendimento e a capacidade técnica do vistoriador?",
    options: ["Muito bom", "Bom", "Regular", "Ruim", "Muito ruim"],
  },
  {
    id: 11,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question:
      "Como avalia a transparência do laudo, como fotos, registros e explicação do resultado?",
    options: ["Muito bom", "Bom", "Regular", "Ruim", "Muito ruim"],
  },
  {
    id: 12,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question: "Você percebeu algum favorecimento ou direcionamento no seu atendimento?",
    options: ["Não", "Sim", "Não sei"],
  },
  {
    id: 13,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question: "Como avalia o valor total pago em relação ao serviço recebido?",
    options: ["Justo", "Alto, mas aceitável", "Muito alto", "Não sei avaliar"],
  },
  {
    id: 14,
    section: "Modelo atual",
    type: "Múltipla escolha",
    question: "Qual é a sua satisfação geral com o modelo atual, na ECV?",
    options: [
      "Muito satisfeito",
      "Satisfeito",
      "Nem satisfeito, nem insatisfeito",
      "Insatisfeito",
      "Muito insatisfeito",
    ],
  },
  {
    id: 15,
    section: "Comparação antigo x novo",
    type: "Múltipla escolha",
    question:
      "Só para quem respondeu Sim na pergunta 3. Comparando com o modelo antigo, o prazo para conseguir a vistoria:",
    options: ["Melhorou muito", "Melhorou", "Ficou igual", "Piorou", "Piorou muito"],
  },
  {
    id: 16,
    section: "Comparação antigo x novo",
    type: "Múltipla escolha",
    question:
      "Só para quem respondeu Sim na pergunta 3. Comparando com o modelo antigo, a espera e o conforto no local:",
    options: ["Melhorou muito", "Melhorou", "Ficou igual", "Piorou", "Piorou muito"],
  },
  {
    id: 17,
    section: "Comparação antigo x novo",
    type: "Múltipla escolha",
    question:
      "Só para quem respondeu Sim na pergunta 3. Comparando com o modelo antigo, a transparência e a confiança no laudo:",
    options: ["Melhorou muito", "Melhorou", "Ficou igual", "Piorou", "Piorou muito"],
  },
  {
    id: 18,
    section: "Comparação antigo x novo",
    type: "Múltipla escolha",
    question: "No geral, qual modelo você prefere?",
    options: ["O atual, na ECV", "O antigo, na Polícia Civil/Ciretran", "Tanto faz", "Não sei"],
  },
];

export const checklist = [
  { id: 1, chapter: "Introdução", task: "Apresentar o tema, o problema e a justificativa" },
  { id: 2, chapter: "Introdução", task: "Definir objetivo geral e objetivos específicos" },
  {
    id: 3,
    chapter: "Referencial teórico",
    task: "Conceituar terceirização, ECV e vistoria de identificação",
  },
  {
    id: 4,
    chapter: "Referencial teórico",
    task: "Discutir eficiência, controle e qualidade no serviço público",
  },
  { id: 5, chapter: "Metodologia", task: "Definir tipo de pesquisa, local e participantes" },
  { id: 6, chapter: "Metodologia", task: "Finalizar o questionário de 10 a 20 perguntas" },
  { id: 7, chapter: "Metodologia", task: "Descrever ética: anonimato, voluntariedade e sigilo" },
  { id: 8, chapter: "Campo", task: "Aplicar o questionário na ECV de Boa Esperança (MG)" },
  { id: 9, chapter: "Resultados", task: "Organizar gráficos por bloco do questionário" },
  { id: 10, chapter: "Resultados", task: "Comparar percepções do modelo antigo e do novo" },
  { id: 11, chapter: "Conclusão", task: "Responder ao problema com base nos dados" },
  { id: 12, chapter: "Conclusão", task: "Apontar limites, contribuições e pesquisas futuras" },
  { id: 13, chapter: "Finalização", task: "Revisar normas, referências e formatação" },
  { id: 14, chapter: "Finalização", task: "Ensaio da apresentação / defesa" },
];

export const studyPlan = [
  {
    day: "Dia 1",
    focus: "Conceitos",
    task: "Estude os flashcards de Conceitos e faça o glossário completo.",
  },
  {
    day: "Dia 2",
    focus: "Modelo",
    task: "Compare o modelo antigo e o novo e resuma os prós e contras.",
  },
  {
    day: "Dia 3",
    focus: "Cidadão",
    task: "Liste 5 impactos para o cidadão e relacione com perguntas do questionário.",
  },
  {
    day: "Dia 4",
    focus: "Administração",
    task: "Estude fiscalização, indicadores e papel do Estado no novo modelo.",
  },
  {
    day: "Dia 5",
    focus: "Pesquisa",
    task: "Revise metodologia, ética e análise dos dados de campo.",
  },
  {
    day: "Dia 6",
    focus: "Simulado",
    task: "Faça o quiz completo sem consultar as respostas e revise os erros.",
  },
  {
    day: "Dia 7",
    focus: "Defesa",
    task: "Responda em voz alta às perguntas da aba Perguntas e Respostas.",
  },
];

export type KeyNumber = {
  label: string;
  value: string;
  note: string;
};

export const keyNumbers: KeyNumber[] = [
  {
    label: "Empresas credenciadas",
    value: "1.662 ECVs",
    note: "Número apresentado no TCC, após 16 meses de implementação.",
  },
  {
    label: "Vistoriadores capacitados",
    value: "6,8 mil",
    note: "Profissionais certificados para executar as vistorias.",
  },
  {
    label: "Cobertura municipal",
    value: "98,6%",
    note: "Dos 853 municípios mineiros, segundo o TCC.",
  },
  {
    label: "Laudos emitidos",
    value: "Mais de 3,2 milhões",
    note: "Laudos acumulados no período apresentado no TCC.",
  },
  {
    label: "Custo total do exemplo",
    value: "49 UFEMG",
    note: "No exemplo de transferência: 26 UFEMG de DAE + 23 UFEMG à ECV.",
  },
  {
    label: "Agendamento antigo x novo",
    value: "15 a 60 dias x mesmo dia",
    note: "Prazo nas maiores delegacias no modelo antigo, contra atendimento imediato ou no mesmo dia no modelo credenciado.",
  },
  {
    label: "Execução da vistoria",
    value: "15 a 20 minutos",
    note: "Tempo médio de execução no modelo credenciado, segundo o TCC.",
  },
  {
    label: "Sustentabilidade das ECVs",
    value: "93% com prejuízo",
    note: "Dado de audiência pública na ALMG em abril de 2025, citado no TCC.",
  },
];

export type LegalMilestone = {
  norm: string;
  date: string;
  what: string;
};

export const legalMilestones: LegalMilestone[] = [
  {
    norm: "Portaria DETRAN-MG nº 1.603/2022",
    date: "2022",
    what: "Regulamento da formação de vistoriadores: curso presencial, prova teórica e prática e atualização anual.",
  },
  {
    norm: "Emenda à Constituição Estadual nº 113/2023 e Lei nº 24.313/2023",
    date: "2023",
    what: "Reorganização do Executivo e transferência das competências de trânsito da Polícia Civil para a Seplag/CET-MG.",
  },
  {
    norm: "Lei Estadual nº 24.470/2023",
    date: "Setembro de 2023",
    what: "Autorizou a CET-MG a credenciar pessoas jurídicas para a vistoria de identificação veicular, com preço público.",
  },
  {
    norm: "Decreto Estadual nº 48.703/2023",
    date: "Outubro de 2023",
    what: "Regulamentou o credenciamento, com preços em UFEMG: 23 unidades para vistoria interna e 27 para vistoria móvel.",
  },
  {
    norm: "Portarias CET-MG nº 1.290/2023 e nº 1.291/2023",
    date: "Outubro de 2023",
    what: "Detalharam o rito do credenciamento, a vigência de 3 anos renováveis e a operação assistida.",
  },
  {
    norm: "Audiência pública na ALMG",
    date: "Abril de 2025",
    what: "Setor apresentou crise de sustentabilidade, com cerca de 93% das ECVs com prejuízo, e foi aprovada suspensão temporária de novos credenciamentos por 6 meses.",
  },
  {
    norm: "Portarias DETRAN nº 0285/2026 e nº 0368/2026",
    date: "Março de 2026",
    what: "A Portaria nº 0368/2026 revogou a nº 0285/2026 para estudos regulatórios mais aprofundados. Segundo o TCC, a revogação não instituiu novo preço nem revisão tarifária.",
  },
];

export type ControlItem = {
  mechanism: string;
  how: string;
};

export const controlItems: ControlItem[] = [
  {
    mechanism: "Credenciamento com requisitos",
    how: "Idoneidade, regularidade fiscal e trabalhista, infraestrutura e ausência de conflito com despachante, leilão, oficina ou comércio de veículos.",
  },
  {
    mechanism: "Distribuição randômica",
    how: "O sistema distribui vistorias entre as ECVs do mesmo município, para evitar direcionamento por despachantes ou clientes.",
  },
  {
    mechanism: "Laudo digital auditável",
    how: "Fotos panorâmicas, chassi, motor, placas com QR Code e velocímetro, com validação automática junto às bases do Sistema Nacional de Trânsito.",
  },
  {
    mechanism: "Certificados digitais",
    how: "e-CPF A3 para cada vistoriador e e-CNPJ para cada ECV, garantindo autoria, autenticidade e não repúdio dos laudos.",
  },
  {
    mechanism: "Auditoria e fiscalização",
    how: "SAF e DRV, com acesso a instalações, livros e laudos, inspeções amostrais sem aviso e vistorias simuladas.",
  },
  {
    mechanism: "Regime disciplinar",
    how: "Advertência por escrito, suspensão de 30 a 90 dias, suspensão cautelar e descredenciamento definitivo, com impedimento de novo registro por 24 meses nos casos mais graves.",
  },
];

export type AnalysisStep = {
  step: string;
  guidance: string;
};

export const analysisSteps: AnalysisStep[] = [
  {
    step: "1. Contar por pergunta",
    guidance:
      "Para cada uma das 18 perguntas, conte quantas respostas cada opção recebeu e registre também quantas pessoas responderam 14 e quantas responderam 18 perguntas.",
  },
  {
    step: "2. Transformar em percentuais por bloco",
    guidance:
      "Agrupe em contexto, modelo atual e comparação antigo x novo. Use percentuais e um gráfico simples por bloco, sem expor cruzamentos com pouquíssimas respostas.",
  },
  {
    step: "3. Comparar os dois grupos",
    guidance:
      "Compare a satisfação e a percepção de quem viveu os dois modelos com a de quem só conhece o modelo atual, sempre como percepção, não como prova de qualidade técnica.",
  },
  {
    step: "4. Cruzar com os números do TCC",
    guidance:
      "Confronte a percepção de prazo, espera e custo com os números do TCC, como 15 a 60 dias no modelo antigo, 15 a 20 minutos de execução e 49 UFEMG repartidos, sem forçar causalidade.",
  },
  {
    step: "5. Registrar limites",
    guidance:
      "Deixe claro: uma única ECV, em Boa Esperança, em um período definido, com amostra por adesão voluntária. Isso não representa todo o estado nem mede fiscalização ou lucro das empresas.",
  },
  {
    step: "6. Transformar em recomendações",
    guidance:
      "Feche cada bloco com uma recomendação prática: acesso, clareza de valores, conforto, transparência do laudo e fiscalização, sempre vinculada a uma pergunta do questionário.",
  },
];
