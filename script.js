// Blog dinâmico
const blogPosts = [
  {
    title: "Dicas para escolher o local ideal",
    content: "Escolher o lugar certo faz toda a diferença. Pensa na estação, número de convidados e estilo do casamento."
  },
  {
    title: "Tendências de casamentos 2025",
    content: "Minimalismo, tons neutros, flores locais e eventos sustentáveis estão em alta!"
  },
  {
    title: "Checklist para noivos",
    content: "Planeamento, convites, fornecedores, cerimónia... não deixes nada para o último minuto!"
  }
];

const blogContainer = document.getElementById("blog-posts");

blogPosts.forEach(post => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h4>${post.title}</h4>
    <p>${post.content}</p>
  `;
  blogContainer.appendChild(article);
});

// Formulário de contacto
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Aqui podes depois ligar a um backend/API se quiseres enviar o email

  alert("Obrigado pela tua mensagem! Entraremos em contacto em breve.");
  this.reset();
});

const serviceDescriptions = {
  planeamento: "O planeamento completo inclui a organização desde o primeiro encontro, orçamento, seleção do local, até o dia do evento.",
  decoracao: "Oferecemos decoração personalizada, com estilos únicos, flores, iluminação e todos os detalhes que transformam o espaço.",
  fornecedores: "Gerimos todos os fornecedores para ti: catering, música, fotografia, garantindo qualidade e confiança."
};

const serviceItems = document.querySelectorAll(".service-item");

serviceItems.forEach(item => {
  item.style.cursor = "pointer";

  item.addEventListener("click", () => {
    // Verificar se já tem descrição aberta abaixo
    const nextElem = item.nextElementSibling;
    const key = item.getAttribute("data-info");

    if (nextElem && nextElem.classList.contains("service-desc")) {
      // Se descrição está aberta, fecha-a
      nextElem.remove();
    } else {
      // Fecha outras descrições abertas
      document.querySelectorAll(".service-desc").forEach(desc => desc.remove());

      // Cria nova descrição
      const descDiv = document.createElement("div");
      descDiv.classList.add("service-desc");
      descDiv.textContent = serviceDescriptions[key];

      // Insere logo depois do item clicado
      item.insertAdjacentElement("afterend", descDiv);
    }
  });
});

