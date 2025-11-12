document.addEventListener('DOMContentLoaded', () => {
  // Rolagem suave para âncoras internas
  function smoothScrollHandler(e) {
    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    }
  }
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', smoothScrollHandler));

  // Checa imagens faltando e aplica fallback simples
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      img.src = 'https://via.placeholder.com/800x500?text=Imagem+Indispon%C3%ADvel';
    });
  });
});

// Dados dos projetos para o modal
const projectsData = {
  mario: {
    title: "Super Mario Website",
    description: "Site web completo inspirado no universo Super Mario Bros, desenvolvido para demonstrar habilidades em HTML, CSS e JavaScript. O projeto simula um negócio de encanamento com identidade visual baseada no famoso personagem da Nintendo.",
    image: "./logo.mario.png",
    features: [
      "Design responsivo e mobile-first",
      "Animações CSS personalizadas",
      "Interface interativa com JavaScript",
      "Layout moderno e profissional",
      "Otimizado para SEO"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubLink: "https://github.com/GabrielSantolaja/Mario",
    demoLink: "https://gabrielsantolaja.github.io/Mario/"
  },
  conversor: {
    title: "Conversor de Moedas",
    description: "Aplicação web em React que permite conversão de moedas em tempo real utilizando APIs de cotação. Interface limpa e intuitiva com dados atualizados automaticamente.",
    image: "https://tse2.mm.bing.net/th/id/OIP.y8Llcy1-JhK5PXWgRhDDkAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    features: [
      "Conversão em tempo real",
      "Suporte a múltiplas moedas",
      "Interface React moderna",
      "API de cotação atualizada",
      "Histórico de conversões"
    ],
    tech: ["React", "CSS3", "API REST", "JavaScript ES6"],
    githubLink: "https://github.com/GabrielSantolaja/Conversor-moeda",
    demoLink: "https://gabrielsantolaja.github.io/Conversor-moeda/"
  },
  weather: {
    title: "Previsão do Tempo Mundial",
    description: "Aplicação completa de previsão do tempo que permite consultar condições climáticas de qualquer cidade do mundo. Interface moderna com dados meteorológicos precisos e em tempo real.",
    image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Busca por qualquer cidade do mundo",
      "Dados meteorológicos em tempo real",
      "Previsão de 5 dias",
      "Interface responsiva",
      "Geolocalização automática"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Weather API", "Geolocation API"],
    githubLink: "https://github.com/GabrielSantolaja/Previsao-do-tempo-do-mundo",
    demoLink: "https://gabrielsantolaja.github.io/Previsao-do-tempo-do-mundo/"
  },
  apple: {
    title: "Projeto Apple",
    description: "Réplica moderna da interface da Apple, demonstrando domínio em design minimalista e tecnologias web. Projeto focado na experiência do usuário e performance.",
    image: "https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Design minimalista inspirado na Apple",
      "Animações suaves e modernas",
      "Performance otimizada",
      "Integração com Apple API",
      "Experiência premium do usuário"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Apple API", "SCSS"],
    githubLink: "https://github.com/GabrielSantolaja/Apple",
    demoLink: "https://gabrielsantolaja.github.io/Apple/"
  },
  nike: {
    title: "Projeto Nike",
    description: "Landing page moderna inspirada na identidade visual da Nike. Projeto que demonstra habilidades em design responsivo e animações interativas para uma marca esportiva.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Design esportivo e dinâmico",
      "Animações de alta performance",
      "Catálogo de produtos interativo",
      "Layout responsivo otimizado",
      "Experiência visual impactante"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP Animations"],
    githubLink: "https://github.com/GabrielSantolaja/projeto-nike",
    demoLink: "https://gabrielsantolaja.github.io/projeto-nike/"
  },
  treval: {
    title: "TrevalAgency",
    description: "Agência de viagens completa com design moderno e funcionalidades avançadas. Projeto fullstack que demonstra competências tanto em frontend quanto backend.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Sistema de reservas online",
      "Galeria de destinos interativa",
      "Integração com sistemas de pagamento",
      "Painel administrativo completo",
      "Backend robusto em C#"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "C#", ".NET", "SQL Server"],
    githubLink: "https://github.com/GabrielSantolaja/TrevalAgency",
    demoLink: "https://gabrielsantolaja.github.io/TrevalAgency/"
  },
  moda: {
    title: "GS-Moda-Masculina",
    description: "E-commerce completo especializado em moda masculina. Interface otimizada para conversões com catálogo de produtos, carrinho de compras e sistema de checkout.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/80/cc/ee/lanx-warehouse-shop.jpg?w=800&h=500&s=1",
    features: [
      "Catálogo de produtos organizado",
      "Sistema de busca e filtros",
      "Carrinho de compras funcional",
      "Interface otimizada para vendas",
      "Design responsivo e moderno"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "LocalStorage"],
    githubLink: "https://github.com/GabrielSantolaja/GS-Moda-Masculina",
    demoLink: "https://gabrielsantolaja.github.io/GS-Moda-Masculina/"
  },
  techstore: {
    title: "Tech-Store",
    description: "Loja virtual especializada em eletrônicos e tecnologia. Projeto que demonstra competências em e-commerce com foco na experiência do usuário e performance.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Catálogo de eletrônicos completo",
      "Sistema de avaliações",
      "Comparador de produtos",
      "Checkout simplificado",
      "Dashboard de vendas"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"],
    githubLink: "https://github.com/gabrielsantolaja/tech-store",
    demoLink: "https://gabrielsantolaja.github.io/tech-store/"
  },
  barbearia: {
    title: "Barbearia GS Moderna",
    description: "Painel administrativo completo para gestão de barbearias com design moderno e funcionalidades avançadas. Sistema profissional que inclui dashboard inteligente com métricas em tempo real, gestão de agenda, controle de clientes e relatórios detalhados para tomada de decisões estratégicas.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Dashboard com KPIs e gráficos em tempo real",
      "Sistema de agendamentos online",
      "Gestão completa de clientes",
      "Relatórios avançados com exportação CSV",
      "Interface responsiva e moderna",
      "Integração com Firebase Firestore"
    ],
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Firebase", "Chart.js"],
    githubLink: "https://github.com/GabrielSantolaja/barbearia-gs-moderna",
    demoLink: "https://gabrielsantolaja.github.io/barbearia-gs-moderna/"
  }
};

// Função para abrir o modal
function openModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const modalDemoLink = document.getElementById('modalDemoLink');

  // Preencher dados do modal
  modalTitle.textContent = project.title;
  modalImage.src = project.image;
  modalImage.alt = `Preview do ${project.title}`;
  modalDescription.textContent = project.description;

  // Limpar e preencher features
  modalFeatures.innerHTML = '';
  project.features.forEach(feature => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
    modalFeatures.appendChild(li);
  });

  // Limpar e preencher tech stack
  modalTechStack.innerHTML = '';
  project.tech.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'tech-badge';
    span.innerHTML = `<i class="fas fa-code"></i> ${tech}`;
    modalTechStack.appendChild(span);
  });

  // Atualizar links
  modalGithubLink.href = project.githubLink;
  modalDemoLink.href = project.demoLink;

  // Mostrar modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Fechar modal clicando fora dele
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeModal();
  }
}

// Fechar modal com a tecla Escape
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});