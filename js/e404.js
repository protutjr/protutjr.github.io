let currentIndex;

let frases = [
	{title: "Frase inspiradora", text: "Cada segundo é tempo para mudar tudo para sempre (Charles Chaplin)"},
	{title: "Frase inspiradora", text: "A persistência é o caminho do êxito (Charles Chaplin)"},
	{title: "Frase inspiradora", text: "A vida é maravilhosa se não se tem medo dela (Charles Chaplin)"},
	{title: "Frase inspiradora", text: "Pensamos demasiadamente e sentimos muito pouco. Necessitamos mais de humildade que de máquinas. Mais de bondade e ternura que de inteligência. Sem isso, a vida se tornará violenta e tudo se perderá (Charles Chaplin)"},
	{title: "Frase inspiradora", text: "Creio no riso e nas lágrimas como antídotos contra o ódio e o terror (Charles Chaplin)"},
	{title: "Frase inspiradora", text: "O assunto mais importante do mundo pode ser simplificado até ao ponto em que todos possam apreciá-lo e compreendê-lo. Isso é - ou deveria ser - a mais elevada forma de arte (Charles Chaplin)"},
	{title: "Frase inspiradora", text: "A vida é maravilhosa se não se tem medo dela (Charles Chaplin)"},
	{title: "Frase inspiradora", text: "O verdadeiro significado das coisas é encontrado ao se dizer as mesmas coisas com outras palavras (Charles Chaplin)"},
	{title: "Frase inspiradora", text: "O homem não morre quando deixa de viver, mas sim quando deixa de amar (Charles Chaplin)"},
	{title: "Frase inspiradora", text: "Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los (Walt Disney)"},
	{title: "Frase inspiradora", text: "Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa. Para mim, sucesso é paz anterior (Denzel Washington)"},
	{title: "Frase inspiradora", text: "O livro é um mestre que fala, mas que não responde (Platão)"},
	{title: "Frase inspiradora", text: "O que faz andar o barco não é a vela enfunada, mas o vento que não se vê... (Platão)"},
	{title: "Frase inspiradora", text: "Para falar ao vento bastam palavras, para falar ao coração são necessárias obras (Padre Antônio Vieira)"},
	{title: "Frase inspiradora", text: "A boa educação é moeda de ouro. Em toda a parte tem valor (Padre Antônio Vieira)"},
	{title: "Frase inspiradora", text: "O livro é um mudo que fala, um surdo que responde, um cego que guia, um morto que vive (Padre Antônio Vieira)"},
	{title: "Frase inspiradora", text: "Há homens que são como as velas; sacrificam-se, queimando-se para dar luz aos outros (Padre Antônio Vieira)"},
	{title: "Frase inspiradora", text: "Agora, portanto, permanecem estas três coisas: a fé, a esperança e o amor. A maior delas, porém, é o amor (Bíblia Sagrada - 1 Coríntios 13:13)"},
	{title: "Frase inspiradora", text: "Tudo o que quereis que os homens vos façam, fazei-o vós a eles [...] (Bíblia Sagrada - Mateus 7:12)"},
	{title: "Frase inspiradora", text: "Nenhuma miséria é mais genuína do que a falsa alegria (Bernardo de Claraval)"},
	{title: "Frase inspiradora", text: "A força não provém da capacidade física. Provém de uma vontade indomável (Mahatma Gandhi)"},
	{title: "Frase inspiradora", text: "Olho por olho, e o mundo acabará cego (Mahatma Gandhi)"},
	{title: "Frase inspiradora", text: "O medo tem alguma utilidade, mas a covardia não (Mahatma Gandhi)"},
	{title: "Frase inspiradora", text: "O amor é a força mais sutil do mundo (Mahatma Gandhi)"},
	{title: "Frase inspiradora", text: "Há pessoas que choram por saber que as rosas têm espinho. Há outras que sorriem por saber que os espinhos têm rosas! (Machado de Assis)"},
	{title: "Frase inspiradora", text: "Creia em si, mas não duvide sempre dos outros (Machado de Assis)"},
	{title: "Frase inspiradora", text: "Ao vencedor, as batatas (Machado de Assis - Memórias Póstumas de Brás Cubas)"},
	{title: "Frase inspiradora", text: "Nunca duvide que um pequeno grupo de pessoas conscientes e engajadas possa mudar o mundo. De fato, sempre foi assim que o mundo mudou (Margaret Mead)"},
	{title: "Frase inspiradora", text: "Eu não falhei. Eu encontrei 10.000 maneiras que não funcionam (Thomas Edison)"},
	{title: "Frase inspiradora", text: "Muitos de nós não estamos vivendo nossos sonhos porque estamos vivendo nossos medos (Les Brown)"},
	{title: "Frase inspiradora", text: "Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo (Martin Luther King - autoria controversa)"},
	{title: "Frase inspiradora", text: "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças (Leon C. Megginson)"},
	{title: "Frase inspiradora", text: "Não abandone suas três grandes e inabaláveis amigas: a intuição, a inocência e a fé (George Gurdjieff)"},	
	{title: "Frase inspiradora", text: "Não sou aquele que sabe, mas aquele que busca (Hermann Hesse)"},
	{title: "Frase inspiradora", text: "Não há nada mais bonito do que quando você prova a si mesmo o quão forte você é (autoria desconhecida)"},
	{title: "Frase inspiradora", text: "Só vive o propósito quem suporta o processo (autoria desconhecida)"},
	
	{title: "Você sabia?", text: "Uma lenda urbana diz que os alunos que entram para a Protut passam em Cálculo 1..."},
	{title: "Você sabia?", text: "Este site foi criado manualmente a partir de um template de HTML/CSS. E sim, deu bastante trabalho..."},
	{title: "Você sabia?", text: "Em 2022, a UTFPR de Ponta Grossa tinha mais 4 empresas juniores além da Protut. São elas: Petri (Eng. de Bioprocessos e Biotecnologia), Quanttum (Eng. Química), Solumax (Eng. de Produção) e Vulcano (Eng. Mecânica)"},
	{title: "Você sabia?", text: "Uma das corujas mais conhecidas no Brasil é a coruja-buraqueira. Diferentemente da maioria das outras corujas, esta coruja tem hábitos diurnos"},
	{title: "Você sabia?", text: 'A expressão "mãe coruja" surgiu por causa da fábula "A coruja e a águia", popularizada no Brasil por Monteiro Lobato'},
	
	{title: "Frase divertida", text: "Se você cair, eu estarei aqui - disse o chão"},
	{title: "Frase divertida", text: "Definição de urso polar: um urso retangular, depois da conversão de coordenadas"},
	{title: "Frase divertida", text: "O mundo se divide entre os que encontram e os que nem sabem onde puseram (Millôr Fernandes)"},
	{title: "Frase divertida", text: "O amor é um sonho… mas o casamento é o despertador"},
	{title: "Frase divertida", text: "O dinheiro não é tudo. Não se esqueça também do ouro, dos diamantes, da platina e das propriedades (Tom Jobim)"},
	{title: "Frase divertida", text: "O segredo é amar o próximo, porque o anterior não merecia!"},
	{title: "Frase divertida", text: "Há duas palavras que abrem muitas portas: Puxe e empurre"},
	{title: "Frase divertida", text: "O amor está mesmo cego, pois não me vê de jeito nenhum"},
	{title: "Frase divertida", text: "Os loucos veem gnomos, e os psicólogos tentam capturá-los"},
	{title: "Frase divertida", text: "Eu perderia peso, mas eu odeio perder"}
];


function showEasterEgg() {
	let containerDiv = document.getElementById("easter-egg");
	let titleDiv = document.getElementById("title");
	let textDiv = document.getElementById("text");
	
	if (containerDiv.style.display == "none")
		containerDiv.style.display = "block";
	
	selectedQuote = frases[randomIndex(frases.length)];
	titleDiv.innerHTML = selectedQuote.title;
	textDiv.innerHTML = selectedQuote.text;
}

function randomIndex(maxValue) {
	let newIndex;
	do
		newIndex = Math.floor(Math.random() * maxValue);
	while (newIndex == currentIndex);
	return newIndex;
}


