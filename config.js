// ============================================
// CONFIGURAÇÃO COMPLETA DO SITE COM CARROSSEL
// Altere os valores abaixo para personalizar tudo
// ============================================

const siteConfig = {
    // ===== IDENTIFICAÇÃO =====
    siteName: "Top Service",
    logoUrl: "LOGO-4-TRA.png", // Substitua pela URL da sua logo real
    
    // ===== CONTATOS =====
    phone: "0800-718-8787",
    email: "atendimento@setechservice.com.br",
    whatsappNumber: "5541999850784", // Apenas números, com DDD
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento.",
    address: "Avenida São José, 617 - Cristo Rei - Curitiba, PR",
    
    // ===== MENU =====
    navItems: [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Serviços" },
        { href: "#contact", label: "Contato" }
    ],
    
    // ===== HERO SECTION =====
    heroBadge: "⚡ Assistência Técnica Especializada",
    heroTitle: "Seu equipamento em <span class='gradient-text'>boas mãos</span>, com atendimento rápido e profissional",
    heroSubtitle: "Mais de 10 anos restaurando a tranquilidade do seu lar. Consertamos TVs, ar-condicionado, eletrodomésticos e muito mais com garantia de qualidade.",
    
    heroStats: [
        { number: "10K+", label: "Clientes Atendidos" },
        { number: "98%", label: "Avaliações Positivas" },
        { number: "15K+", label: "Reparos Realizados" }
    ],
    
    // ===== CARROSSEL DE IMAGENS =====
    // Adicione ou remova imagens aqui para personalizar o carrossel
    carouselImages: [
 	{
            url: "tecnico-tv.png",
            alt: "Reparo de TV",
            title: "Reparo de TVs",
            description: "Atendemos todas as marcas e modelos com garantia de qualidade"
        },
        {
            url: "tecnico-maquina.png",
            alt: "Técnico consertando eletrônicos",
            title: "Tecnologia de Ponta",
            description: "Utilizamos equipamentos modernos para diagnóstico e reparo precisos"
        },
        {
            url: "tecnico-geladeira.png",
            alt: "Oficina de assistência técnica",
            title: "Equipe Especializada",
            description: "Profissionais qualificados e constantemente atualizados"
        },
        {
            url: "tecnico-ar.png",
            alt: "Manutenção de ar condicionado",
            title: "Ar Condicionado",
            description: "Manutenção preventiva e corretiva para seu conforto"
        },
    ],
    
    // ===== SERVIÇOS =====
    servicesTitle: "Nossos Serviços Especializados",
    servicesSubtitle: "Soluções completas para todos os seus equipamentos, com tecnologia de ponta e equipe qualificada",
    
    services: [
        {
            icon: "fas fa-tv",
            title: "Reparo de TVs",
            description: "Problemas com sua TV? Resolvemos rapidamente! Todas as marcas e modelos, com garantia de qualidade."
        },
        {
            icon: "fas fa-wind",
            title: "Ar Condicionado",
            description: "Seu conforto em boas mãos! Consertos eficientes e manutenção preventiva para todas as marcas."
        },
        {
            icon: "fas fa-tshirt",
            title: "Máquinas de Lavar",
            description: "Lava e seca, lavadoras e secadoras. Diagnóstico preciso e reparo com peças originais."
        },
        {
            icon: "fas fa-snowplow",
            title: "Refrigeradores",
            description: "Geladeiras, freezers e refrigeradores. Soluções rápidas para evitar perda de alimentos."
        },
        {
            icon: "fas fa-microphone-alt",
            title: "Áudio e Vídeo",
            description: "Home theaters, soundbars e equipamentos de áudio profissional com reparo especializado."
        },
        {
            icon: "fas fa-tools",
            title: "Manutenção Preventiva",
            description: "Evite surpresas! Prolongamos a vida útil dos seus aparelhos e evitamos gastos inesperados."
        }
    ],
    
    // ===== SOBRE =====
    aboutTitle: "Por que escolher a Top Service?",
    aboutText: "Com mais de uma década de experiência, nos tornamos referência em assistência técnica na região. Nossa missão é oferecer serviços de excelência com transparência, agilidade e preços justos.",
    
    features: [
        { icon: "fa-check-circle", text: "Equipe técnica altamente qualificada e certificada" },
        { icon: "fa-tachometer-alt", text: "Diagnóstico rápido e orçamento sem compromisso" },
        { icon: "fa-shield-alt", text: "Garantia de 90 dias em todos os serviços" },
        { icon: "fa-truck", text: "Atendimento em domicílio e em nossa loja" },
        { icon: "fa-hand-holding-usd", text: "Melhor custo-benefício do mercado" }
    ],
    
    // ===== DEPOIMENTOS =====
    testimonials: [
        {
            text: "Tive um atendimento impecável! Meu ar-condicionado estava com falhas constantes, e a Top Service não só consertou, mas também me orientou sobre a manutenção preventiva. Recomendo demais!",
            name: "Camila Souza",
            title: "Cliente há 2 anos"
        },
        {
            text: "Minha máquina de lavar estava parada há semanas. A Top Service conseguiu resolver o problema no mesmo dia! Super rápido, confiável e com preço justo. Valeu muito a pena.",
            name: "Roberto Almeida",
            title: "Cliente desde 2022"
        },
        {
            text: "Excelente serviço! Minha TV tinha um problema complicado e já estava quase desistindo, mas a equipe foi muito profissional e resolveu rapidamente. Agora funciona perfeitamente!",
            name: "Fernanda Lima",
            title: "Recomendou para a família"
        }
    ],
    
    // ===== CONTATO =====
    contactMethods: [
        { icon: "fas fa-phone-alt", title: "Telefone", value: "0800-718-8787", link: "tel:08007188787" },
        { icon: "fab fa-whatsapp", title: "WhatsApp", value: "(41) 99985-0784", link: "https://wa.me/5541999850784?text=Olá! Gostaria de um orçamento." },
        { icon: "fas fa-envelope", title: "E-mail", value: "atendimento@setechservice.com.br", link: "mailto:atendimento@setechservice.com.br" },
        { icon: "fas fa-map-marker-alt", title: "Endereço", value: "Avenida São José, 617 - Cristo Rei - Curitiba, PR", link: null }
    ],
    
    // ===== REDES SOCIAIS =====
    social: [
        { icon: "fa-instagram", url: "https://instagram.com/setech" },
        { icon: "fa-facebook", url: "https://facebook.com/setech" },
        { icon: "fa-whatsapp", url: "https://wa.me/5541999850784" }
    ],
    
    // ===== FOOTER =====
    footerAbout: "Assistência técnica especializada em TVs, ar-condicionado e eletrodomésticos. Qualidade e confiança desde 2014."
};
