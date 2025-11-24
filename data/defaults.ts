import { SectionType } from '../types';

export const DEFAULT_CONTENT: Record<SectionType, any> = {
  [SectionType.HERO]: {
    bgImage: "https://rsplay.com.br/img/rose/rose18.jpg",
    logoImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J8HVr5xem6EjwGGpF9eIE9xRjTrlvn.png",
    titlePrefix: "Conexões com",
    titleHighlight: "Rose Mazuco",
    subtitle: "Projeto Especial 2026",
    tags: ["Fé", "Turismo", "Arte", "Propósito"]
  },
  [SectionType.ABOUT]: {
    mainImage: "https://rsplay.com.br/img/rose/rose1.jpg",
    bgImage: "https://rsplay.com.br/img/rose/rose10.jpg",
    subtitle: "Apresentadora",
    title: "Sobre",
    titleHighlight: "Rose Mazuco",
    paragraphs: [
      "Atriz, apresentadora e influenciadora digital, <strong class=\"text-white font-normal border-b border-rs-orange pb-1\">Rose Mazuco</strong> é reconhecida por seu carisma, credibilidade e elegância na comunicação. À frente do programa <span class=\"italic text-rs-orange font-medium\">“Conexões com Rose Mazuco”</span>, transmitido todas as quintas-feiras, às 21h, pelo canal 524 da Claro TV (RS Play).",
      "Rose conduz entrevistas com personalidades do cinema, turismo, empreendedorismo, moda e cultura, conectando histórias inspiradoras que emocionam e transformam.",
      "Com atuações em produções audiovisuais e coberturas em eventos nacionais e internacionais — como o <strong class=\"text-white\">Newport Beach Film Fest</strong>, <strong>Festival de Cinema de Gramado</strong>, <strong>Festuris</strong>, <strong>LABRFF em Los Angeles</strong> e o <strong>UFC Institute em Las Vegas</strong> — ela se destaca como uma comunicadora global."
    ]
  },
  [SectionType.DETAILS]: {
    bgImage: "https://rsplay.com.br/img/rose/rose11.jpg",
    mainImage: "https://rsplay.com.br/img/rose/rose6.jpg",
    title: "O Programa",
    titleHighlight: "Conexões",
    techSpecs: [
      { label: "Exibição", value: "RS Play / Claro TV Canal 524" },
      { label: "Apresentação", value: "Rose Mazuco" },
      { label: "Periodicidade", value: "Semanal, episódios inéditos" },
      { label: "Duração", value: "30 minutos" }
    ],
    audienceTitle: "Público-Alvo",
    audienceText: "Homens e mulheres interessados em viagens, cultura, fé, entretenimento e lifestyle, com alto poder de consumo.",
    socials: [
      { icon: "instagram", text: "@conexoes_programa_" },
      { icon: "instagram", text: "@rosemazuco" },
      { icon: "youtube", text: "Conexões com Rose Mazuco" },
      { icon: "tv", text: "RS Play On Demand" }
    ]
  },
  [SectionType.METRICS]: {
    bgImage: "https://rsplay.com.br/img/rose/rose2.jpg",
    title: "Métricas da",
    titleHighlight: "RS Play",
    subtitle: "Muito mais que um canal de televisão",
    youtubeStats: [
      { value: "55.2K", label: "Visualizações", sub: "+39.5 mil que o habitual" },
      { value: "724.4h", label: "Tempo de Exibição", sub: "+584,4 mil que o habitual" },
      { value: "+214", label: "Inscritos", sub: "Na média" }
    ],
    instagramStats: [
      { value: "85K", label: "Vizualização", sub: "por vídeo" },
      { value: "2.8K", label: "Curtidas", sub: "por vídeo" },
      { value: "15.37K", label: "Inscritos Reais", sub: "Até dia 13/08" },
      { value: "950", label: "Compartilhamentos", sub: "" }
    ],
    mainStatValue: "3.5 MILHÕES",
    mainStatLabel: "Visualizações em média / Audiência média mensal",
    mainStatSub1: "17h - 23h (Horários de Pico)",
    mainStatSub2: "Engajamento Elevado"
  },
  [SectionType.ISRAEL_PROJECT]: {
    mainImage: "https://rsplay.com.br/img/rose/rose20.jpg",
    tagline: "Projeto Especial",
    title: "Conexões na",
    titleHighlight: "Terra Santa",
    projectYear: "ISRAEL 2026",
    quote: "\"Um projeto que une fé, emoção e comunicação.\"",
    description: "Em parceria com a <strong class=\"text-white font-normal\">US Travel Turismo</strong>, Rose Mazuco lidera uma viagem especial à Terra Santa, com gravações exclusivas do Conexões nos principais marcos bíblicos de Israel.",
    highlights: [
      { icon: "video", text: "Episódios especiais gravados em Israel" },
      { icon: "cast", text: "Conteúdo para TV, Instagram, YouTube e RS Play" },
      { icon: "users", text: "Participação de convidados especiais" },
      { icon: "globe", text: "Oportunidades de patrocínio e exposição" }
    ]
  },
  [SectionType.SERVICES]: {
    bgImage: "https://rsplay.com.br/img/rose/rose16.jpg",
    title: "Cobertura de Eventos &",
    titleHighlight: "Apresentação",
    description: "Além das gravações do programa, Rose Mazuco realiza cobertura jornalística, apresentação de eventos e mediação de painéis. Com experiência em red carpets, feiras, lançamentos e festivais.",
    cards: [
      { icon: "mic-2", title: "Mestre de Cerimônias", description: "Apresentação profissional com presença de palco e carisma." },
      { icon: "video", title: "Coberturas ao Vivo", description: "Entrevistas e reportagens em feiras, festivais e red carpets." },
      { icon: "instagram", title: "Criação de Conteúdo", description: "Reels institucionais e divulgação digital estratégica." },
      { icon: "star", title: "Presença VIP", description: "Associação de imagem e prestígio para marcas." }
    ]
  },
  [SectionType.GALLERY]: {
    title: "Newport Beach",
    titleHighlight: "Film Fest",
    description: "Rose Mazuco marcou presença no prestigiado tapete vermelho da Califórnia, levando o nome do Brasil e da RS Play para o cenário mundial.",
    images: [
      "https://rsplay.com.br/img/rose/rose21.jpeg",
      "https://rsplay.com.br/img/rose/rose22.jpeg",
      "https://rsplay.com.br/img/rose/rose23.jpeg",
      "https://rsplay.com.br/img/rose/rose24.jpeg",
      "https://rsplay.com.br/img/rose/rose25.jpeg",
      "https://rsplay.com.br/img/rose/rose26.jpeg",
      "https://rsplay.com.br/img/rose/rose27.jpeg",
      "https://rsplay.com.br/img/rose/rose28.jpeg"
    ]
  },
  [SectionType.SPONSOR]: {
    mainImage: "https://rsplay.com.br/img/rose/rose8.jpg",
    secondaryImage: "https://rsplay.com.br/img/rose/rose3.jpg",
    title: "Por Que",
    titleHighlight: "Patrocinar?",
    reasons: [
      { number: "01", title: "Visibilidade Nacional", description: "Alcance multiplataforma via TV (Claro), streaming (RS Play) e redes sociais." },
      { number: "02", title: "Prestígio e Propósito", description: "Associação da sua marca a um conteúdo de alta qualidade estética e emocional." },
      { number: "03", title: "Público Qualificado", description: "Conexão direta com tomadores de decisão e consumidores de lifestyle." }
    ]
  },
  [SectionType.OPPORTUNITIES]: {
    title: "Oportunidades de",
    titleHighlight: "Parceria",
    tiers: [
      { 
        name: "Diamond", 
        icon: "gem", 
        subtitle: "Exclusividade Total",
        features: ["Logo e vinheta (Abertura/Enc.)", "Participação em episódio especial", "Entrevista exclusiva", "Divulgação multiplataforma"],
        colorClass: "white"
      },
      { 
        name: "Gold", 
        icon: "crown", 
        subtitle: "Alta Visibilidade",
        features: ["Logo (Abertura/Créditos)", "Menções nas redes sociais", "Marca em cards e Reels"],
        colorClass: "rose-gold"
      },
      { 
        name: "Silver", 
        icon: "star", 
        subtitle: "Branding Essencial",
        features: ["Logo em materiais", "Agradecimento nas redes", "Créditos do episódio"],
        colorClass: "stone-300"
      },
      { 
        name: "Apoio", 
        icon: "hand-heart", 
        subtitle: "Permuta & Serviços",
        features: ["Hospedagem e Transporte", "Beleza e Gastronomia", "Divulgação proporcional"],
        colorClass: "stone-500"
      }
    ]
  },
  [SectionType.CONTACT]: {
    bgImage: "https://rsplay.com.br/img/rose/rose14.jpg",
    logoImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J8HVr5xem6EjwGGpF9eIE9xRjTrlvn.png",
    email: "rosemazuco@hotmail.com",
    phone: "(51) 98136-2071",
    instagram: "@rosemazuco"
  }
};
