document.addEventListener('DOMContentLoaded', () => {

       const allQuestions = {
       N1: [
    "Qual foi a primeira coisa que você pensou sobre mim quando nos conhecemos?",
    "Descreva um momento em que você se sentiu extremamente orgulhoso(a) de mim.",
    "Qual é a sua lembrança mais feliz da sua infância?",
    "Se você pudesse reviver um dia nosso, qual seria e por quê?",
    "O que eu faço que te faz sentir mais amado(a)?",
    "Qual é o seu maior medo em relação ao nosso futuro?",
    "Qual música te lembra de nós e por quê?",
    "Qual foi o momento em que você soube que estava se apaixonando por mim?",
    "Qual qualidade minha você mais admira?",
    "Qual é a coisa mais boba pela qual já brigamos e que hoje você acha engraçada?",
    "Descreva como você se sente quando estamos abraçados(as) em silêncio.",
    "Qual é um sonho que você ainda não me contou?",
    "O que em mim te faz sentir segurança?",
    "Qual foi o melhor conselho que eu já te dei?",
    "De 0 a 10, quão feliz você está na nossa relação hoje? O que falta para ser 10?",
    "Qual é a sua maior saudade de quando começamos a namorar?",
    "Existe algo que você gostaria que fizéssemos mais vezes juntos(as)?",
    "Como você descreveria nosso amor para um(a) estranho(a)?",
    "Qual foi um momento em que te decepcionei e como isso te fez sentir?",
    "Qual é a sua forma favorita de receber carinho?",
    "O que eu poderia fazer para te apoiar mais nos seus objetivos pessoais?",
    "Qual é o cheiro que mais te lembra de mim?",
    "Qual foi o elogio mais marcante que você já recebeu de mim?",
    "Se nossa história de amor fosse um filme, qual seria o título?",
    "O que você aprendeu sobre o amor comigo?",
    "Qual é um pequeno gesto meu que melhora o seu dia?",
    "Descreva um momento em que você me viu completamente vulnerável.",
    "Qual é a sua maior esperança para nós como um casal?",
    "Quando você sente mais conexão comigo?",
    "Qual foi a viagem ou passeio mais especial que fizemos?",
    "Existe algum hábito meu que você secretamente adora?",
    "Como eu mudei sua vida para melhor?",
    "Qual é a memória mais engraçada que você tem de nós?",
    "O que significa \"casa\" para você?",
    "Se você pudesse me dar um presente que não custasse dinheiro, o que seria?",
    "Qual é a coisa mais importante que eu preciso saber sobre você hoje?",
    "Qual foi o maior desafio que superamos juntos(as)?",
    "O que te faz sentir ciúmes?",
    "Como você descreveria a nossa energia quando estamos juntos(as)?",
    "Termine a frase: \"Eu sou muito grato(a) por ter você na minha vida porque...\""
],

N2: [
    "Qual é a sua fantasia sexual mais recorrente?",
    "Qual a parte do meu corpo que você mais gosta de beijar?",
    "Descreva a melhor noite de sexo que já tivemos na sua opinião.",
    "Existe algo que você sempre quis tentar na cama, mas nunca teve coragem de pedir?",
    "Qual é o seu maior \"turn on\" (o que mais te excita)?",
    "E qual é o seu maior \"turn off\" (o que mais te desanima)?",
    "Qual a sua posição sexual favorita e por quê?",
    "Você prefere sexo rápido e intenso ou lento e romântico?",
    "Qual a sua peça de roupa (íntima ou não) minha favorita?",
    "Onde é o lugar mais ousado que você já pensou em transar comigo?",
    "O que eu faço durante o sexo que te leva à loucura?",
    "Qual a sua opinião sobre usar brinquedos sexuais juntos(as)?",
    "Qual parte do seu próprio corpo você acha mais sexy?",
    "Que tipo de preliminares você mais gosta?",
    "Qual é a sua memória mais quente de nós?",
    "Você se sente confortável para me dizer \"não\" ou pedir para parar durante o sexo?",
    "Qual a sensação que você mais gosta de sentir durante o sexo?",
    "Existe um filme, série ou livro que já te deixou com vontade de transar comigo?",
    "Com que frequência você gostaria de transar?",
    "Qual a importância do orgasmo para você em uma relação sexual?",
    "Você gosta quando eu tomo a iniciativa?",
    "O que você acha de falar \"besteiras\" (dirty talk) durante o sexo?",
    "Qual o melhor local da casa para fazer sexo, fora do quarto?",
    "Qual a sua música ideal para uma playlist de sexo?",
    "Como você se sente sobre sexo oral? (Dar e receber).",
    "Qual é a sua maior curiosidade sobre a minha sexualidade?",
    "O que te faz sentir mais sexy e confiante?",
    "Você já fantasiou comigo antes de ficarmos juntos(as)?",
    "Qual a importância da conexão emocional para você durante o sexo?",
    "Qual a sua opinião sobre assistir pornografia juntos(as)?",
    "Se você pudesse planejar nossa noite perfeita de sexo, como seria?",
    "Qual o seu toque favorito que não é diretamente sexual?",
    "Que tipo de beijo mais te excita?",
    "Existe alguma palavra ou som que eu faço que te excita?",
    "Como você gosta de ser tocado(a) depois do sexo?",
    "Qual é a coisa mais aventureira que você estaria disposto(a) a fazer sexualmente?",
    "O que eu posso fazer para te deixar mais à vontade para explorar sua sexualidade?",
    "Descreva seu orgasmo perfeito.",
    "Qual o seu sabor favorito em mim?",
    "Se você pudesse fazer uma única pergunta sobre meus desejos sem filtros, qual seria?"
],
        N3: [
    "Me dê uma massagem de 1 minuto no pescoço.",
    "Tire uma peça de roupa minha, bem devagar.",
    "Me beije em um lugar que não seja a boca.",
    "Sussurre sua fantasia mais secreta no meu ouvido.",
    "Dance uma música sensual para mim por 30 segundos.",
    "Escolha uma parte do meu corpo e a elogie com detalhes.",
    "Faça sua melhor imitação de mim tendo um orgasmo.",
    "Me dê um selinho de 10 segundos.",
    "Tire uma peça de roupa sua.",
    "Me beije como se fosse a primeira vez.",
    "Vende meus olhos e me dê três beijos em lugares diferentes. Eu tenho que adivinhar onde.",
    "Deixe uma mordida leve no meu pescoço.",
    "Escreva seu nome nas minhas costas usando apenas o dedo.",
    "Me conte o que você quer fazer comigo depois que o jogo acabar, usando apenas gestos.",
    "Tire uma selfie sexy nossa agora.",
    "Me dê um beijo de língua apaixonado.",
    "Faça carinho no meu cabelo por 1 minuto.",
    "Deite no meu colo e me deixe fazer cafuné em você por 2 minutos.",
    "Faça 10 segundos de contato visual intenso comigo, sem desviar o olhar.",
    "Me dê um abraço por trás e fique assim até a próxima jogada.",
    "Troque uma peça de roupa comigo.",
    "Me sirva uma bebida da forma mais sedutora que conseguir.",
    "Passe um cubo de gelo (ou a ponta do dedo gelada) nas minhas costas.",
    "Beije a parte interna da minha coxa.",
    "Me conte um segredo que você nunca contou para ninguém.",
    "Fale por 2 minutos com um sotaque diferente.",
    "Recrie a pose da sua foto favorita minha.",
    "Desabotoe um botão da minha camisa (ou equivalente) usando apenas a boca.",
    "Me dê um \"cheiro\" no pescoço demorado.",
    "Descreva seu dia usando apenas 3 palavras e um beijo.",
    "Deixe eu te maquiar (ou fazer algo no seu cabelo).",
    "Me puxe pela cintura e me beije agora.",
    "Cante o refrão de uma música romântica olhando nos meus olhos.",
    "Faça cócegas em mim por 15 segundos.",
    "Beije a ponta do meu nariz.",
    "Tente me fazer rir da forma mais rápida que conseguir.",
    "Me mostre a última foto que você salvou no seu celular e explique o porquê.",
    "Coloque a nossa música para tocar e me chame para dançar.",
    "Beije cada um dos meus dedos da mão.",
    "Deite ao meu lado e apenas escute a minha respiração por 1 minuto."
],
        N4: [
    "\"Quem é mais provável de... iniciar o sexo?\" Ambos(as) apontam ao mesmo tempo.",
    "\"Quem é mais provável de... chorar em um filme?\"",
    "Descreva nosso relacionamento usando apenas o título de um filme.",
    "Se pudéssemos trocar de vida por um dia, qual seria a primeira coisa que você faria sendo eu?",
    "Vamos criar uma saudação secreta só nossa agora.",
    "\"Quem é mais provável de... se perder usando o GPS?\"",
    "Planeje nosso encontro dos sonhos em 1 minuto, com orçamento ilimitado.",
    "Diga 3 coisas que nós temos em comum que você mais ama.",
    "\"Quem é mais provável de... querer ter um animal de estimação exótico?\"",
    "Vamos tirar uma foto juntos(as) fazendo a careta mais feia que conseguirmos.",
    "Se fôssemos um sabor de sorvete, qual seríamos? (Pode ser uma mistura).",
    "\"Quem é mais provável de... sobreviver a um apocalipse zumbi?\"",
    "Me dê um apelido carinhoso novo que você nunca usou antes.",
    "Conte uma piada. Se eu não rir, você paga uma consequência (beber/tirar peça).",
    "\"Quem é mais provável de... gastar todo o dinheiro em uma viagem impulsiva?\"",
    "Defina a outra pessoa em uma única palavra.",
    "Se pudéssemos morar em qualquer lugar do mundo, onde seria? Temos que concordar em um lugar.",
    "\"Quem tem o pior hábito matinal?\"",
    "Desenhe um retrato meu em 30 segundos em um guardanapo ou papel.",
    "\"Quem é mais provável de... começar uma briga por um motivo bobo?\"",
    "Crie uma pequena história (3 frases) sobre como nos conheceríamos em uma vida passada.",
    "Qual superpoder nosso relacionamento teria?",
    "\"Quem é mais provável de... cantar alto e errado no carro?\"",
    "Joguem \"Pedra, Papel e Tesoura\". O(A) perdedor(a) tem que dar um elogio sincero para o(a) vencedor(a).",
    "Escolha um animal que me represente e explique o porquê.",
    "\"Quem é mais ciumento(a)?\"",
    "Se tivéssemos uma banda, qual seria o nome e que tipo de música tocaríamos?",
    "\"Quem é mais provável de... rir em um momento sério?\"",
    "Vamos fazer uma lista com 3 metas para o nosso próximo ano juntos(as).",
    "Qual personagem de ficção nós seríamos como casal?",
    "\"Quem cozinha melhor?\"",
    "Olhando para mim agora, o que você acha que estou pensando?",
    "\"Quem é mais provável de... esquecer o aniversário de namoro?\"",
    "Qual foi a maior aventura que já vivemos juntos(as)?",
    "Se a gente fizesse uma tatuagem de casal, qual seria o desenho?",
    "\"Quem é o(a) mais bagunceiro(a)?\"",
    "Descreva a outra pessoa para um(a) desenhista de retratos falados.",
    "\"Quem é mais provável de... adotar 10 gatos?\"",
    "Qual é o seu \"time\" favorito em nós? (Ex: quando cozinhamos juntos(as), quando viajamos, etc).",
    "Termine este jogo com um brinde. Digam em voz alta uma coisa que amam um no outro."
]
    };

    let availableQuestions = {};

    const screens = document.querySelectorAll('.screen');
    const startGameBtn = document.getElementById('start-game-btn');
    const showRulesBtn = document.getElementById('show-rules-btn');
    const backToStartBtn = document.getElementById('back-to-start-btn');
    const rollDiceBtn = document.getElementById('roll-dice-btn');
    const nextTurnBtn = document.getElementById('next-turn-btn');
    const endGameBtn = document.getElementById('end-game-btn');

    const diceContainer = document.getElementById('dice');
    const turnPrompt = document.getElementById('turn-prompt');
    const cardDisplay = document.getElementById('card-display');
    const cardCategoryElem = document.getElementById('card-category');
    const cardQuestionElem = document.getElementById('card-question');

    const showScreen = (screenId) => {
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    };

    const updateDiceFace = (number) => {
        diceContainer.innerHTML = ''; 
        diceContainer.className = 'dice'; 
        const faceClass = `face-${number}`;
        diceContainer.classList.add(faceClass);

        for (let i = 0; i < number; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            diceContainer.appendChild(dot);
        }
    };

    const startGame = () => {
        availableQuestions = JSON.parse(JSON.stringify(allQuestions));
        updateDiceFace(1); // Mostra a face inicial do dado
        turnPrompt.classList.remove('hidden');
        cardDisplay.classList.add('hidden');
        rollDiceBtn.disabled = false;
        showScreen('game-screen');
    };

    const drawCard = (rollType) => {
        const categories = rollType === 'odd' ? ['N1', 'N3'] : ['N2', 'N4'];
        
        let availableCategories = categories.filter(cat => availableQuestions[cat] && availableQuestions[cat].length > 0);

        if (availableCategories.length === 0) {
            cardCategoryElem.textContent = "FIM!";
            cardQuestionElem.textContent = "Vocês zeraram todas as cartas desta categoria! Que tal encerrar e começar um novo jogo?";
            nextTurnBtn.classList.add('hidden'); 
            return;
        }

        const chosenCategoryKey = availableCategories[Math.floor(Math.random() * availableCategories.length)];
        const questionsOfCategory = availableQuestions[chosenCategoryKey];
        const questionIndex = Math.floor(Math.random() * questionsOfCategory.length);
        const question = questionsOfCategory.splice(questionIndex, 1)[0];

        cardCategoryElem.textContent = chosenCategoryKey;
        cardQuestionElem.textContent = question;
    };
    

    const rollDice = () => {
        rollDiceBtn.disabled = true; 
        diceContainer.classList.add('rolling');


        setTimeout(() => {
            diceContainer.classList.remove('rolling');
            
            const rollResult = Math.floor(Math.random() * 6) + 1;
            updateDiceFace(rollResult);
            
            const rollType = (rollResult % 2 !== 0) ? 'odd' : 'even';


            setTimeout(() => {
                drawCard(rollType);
                turnPrompt.classList.add('hidden');
                cardDisplay.classList.remove('hidden');
            }, 500);

        }, 700);
    };


    const setupNextTurn = () => {
        turnPrompt.classList.remove('hidden');
        cardDisplay.classList.add('hidden');
        rollDiceBtn.disabled = false; 
        nextTurnBtn.classList.remove('hidden'); 
    };


    startGameBtn.addEventListener('click', startGame);
    showRulesBtn.addEventListener('click', () => showScreen('rules-screen'));
    backToStartBtn.addEventListener('click', () => showScreen('start-screen'));
    endGameBtn.addEventListener('click', () => showScreen('start-screen'));
    rollDiceBtn.addEventListener('click', rollDice);
    nextTurnBtn.addEventListener('click', setupNextTurn);

    updateDiceFace(1);
});