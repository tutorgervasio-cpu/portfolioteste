const projetos = [

{
titulo: "Sistema de Fiscalização Online",
descricao: "Sistema web desenvolvido para registrar fiscalizações em estabelecimentos de saúde. Permite cadastro de visitas, registro de irregularidades e geração de relatórios automáticos.",
tecnologias: "HTML, CSS, JavaScript",
link: "#"
},

{
titulo: "Dashboard Administrativo de Indicadores",
descricao: "Painel administrativo para visualização de indicadores institucionais. O sistema apresenta gráficos, filtros e estatísticas para facilitar a tomada de decisão.",
tecnologias: "JavaScript, Chart.js, CSS",
link: "#"
},

{
titulo: "Sistema de Gerenciamento de Documentos",
descricao: "Aplicação para envio e organização de documentos digitais. Permite upload de arquivos, categorização e consulta rápida dos documentos enviados.",
tecnologias: "HTML, JavaScript, APIs",
link: "#"
}

];


const container = document.getElementById("lista-projetos");


projetos.forEach(projeto => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h3>${projeto.titulo}</h3>
<p>${projeto.descricao}</p>
<p><strong>Tecnologias:</strong> ${projeto.tecnologias}</p>
<a href="${projeto.link}" target="_blank">Ver projeto</a>
`;

container.appendChild(card);

});
