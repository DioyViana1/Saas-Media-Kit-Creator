
import { SectionData, SectionType, ThemeConfig, HeroContent, AboutContent, DetailsContent, MetricsContent, IsraelProjectContent, ServicesContent, GalleryContent, SponsorContent, OpportunitiesContent, ContactContent } from '../types';

export const generateThemeStyles = (theme: ThemeConfig): string => {
    return `
    <style>
        :root {
            --color-primary: ${theme.primaryColor};
            --color-secondary: ${theme.secondaryColor};
            --color-accent: ${theme.accentColor};
            --color-bg: ${theme.backgroundColor};
        }
        
        body { background-color: var(--color-bg) !important; }

        /* Override Tailwind Utilities for Custom Theme */
        .text-rs-orange { color: var(--color-primary) !important; }
        .bg-rs-orange { background-color: var(--color-primary) !important; }
        .border-rs-orange { border-color: var(--color-primary) !important; }
        .hover\\:text-rs-orange:hover { color: var(--color-primary) !important; }
        .hover\\:border-rs-orange:hover { border-color: var(--color-primary) !important; }

        .text-rs-purple { color: var(--color-secondary) !important; }
        .bg-rs-purple { background-color: var(--color-secondary) !important; }
        .border-rs-purple { border-color: var(--color-secondary) !important; }
        .hover\\:text-rs-purple:hover { color: var(--color-secondary) !important; }
        .hover\\:border-rs-purple:hover { border-color: var(--color-secondary) !important; }

        .text-rs-gold { color: var(--color-accent) !important; }
        .border-rs-gold { border-color: var(--color-accent) !important; }

        /* Gradients */
        .bg-gradient-rs, .hover\\:bg-gradient-rs:hover { 
            background: linear-gradient(to right, var(--color-secondary), var(--color-primary)) !important; 
        }
        .bg-gradient-rs-vertical { 
            background: linear-gradient(to bottom, var(--color-secondary), var(--color-primary)) !important; 
        }
        .text-gradient-rs, .text-transparent {
             background: linear-gradient(to right, var(--color-secondary), var(--color-primary));
            -webkit-background-clip: text;
            background-clip: text;
             /* We need to force color transparent for clip to work, but !important on text color overrides it. 
                This handles the conflict for specific gradient text classes */
             color: transparent !important;
        }

        .border-gradient-rs {
            border-image: linear-gradient(to right, var(--color-secondary), var(--color-primary)) 1 !important;
        }

        /* Gold Gradient */
        .text-gradient-gold {
            background: linear-gradient(to right, var(--color-accent), #FCF6BA, var(--color-accent), #AA771C);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent !important;
        }
    </style>
    `;
};

const HEAD_CONTENT = `
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Media Kit</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              serif: ['"Playfair Display"', 'serif'],
              sans: ['"Montserrat"', 'sans-serif'],
            },
            colors: {
              rose: {
                gold: '#C5A059',
                light: '#E6C985',
                dark: '#8A6D3B',
              },
              rs: {
                purple: '#BF03C3', 
                orange: '#FD8812',
              }
            }
          }
        }
      }
    </script>
    <style>
      body {
        background-color: #050505;
        color: #E7E5E4;
        overflow-x: hidden;
      }
      
      .slide-in {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1.2s ease-out;
      }
      .slide-in.visible {
        opacity: 1;
        transform: translateY(0);
      }

      section {
        scroll-snap-align: start;
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
    </style>
`;

const FOOTER_SCRIPTS = `
    <script>
        lucide.createIcons();
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.slide-in').forEach(el => {
            observer.observe(el);
        });
    </script>
`;

// Generators for each section type
const generators = {
  [SectionType.HERO]: (c: HeroContent) => `
    <section class="min-h-screen relative flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
      <div class="absolute inset-0 bg-[url('${c.bgImage}')] bg-cover bg-center opacity-20 scale-105 grayscale"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black"></div>
      <div class="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
        <div class="w-[2px] h-32 bg-gradient-rs-vertical mb-10 slide-in"></div>
        <p class="text-stone-300 uppercase tracking-[0.4em] text-xl mb-10 slide-in font-medium">Media Kit Oficial</p>
        <img src="${c.logoImage}" alt="Logo" class="w-80 md:w-[600px] mb-14 drop-shadow-2xl slide-in" style="transition-delay: 100ms;">
        <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8 slide-in uppercase tracking-wide" style="transition-delay: 200ms;">
          ${c.titlePrefix} <span class="text-gradient-rs">${c.titleHighlight}</span>
        </h1>
        <div class="flex items-center gap-6 mt-4 mb-12 slide-in" style="transition-delay: 300ms;">
             <div class="h-[2px] w-20 bg-gradient-rs"></div>
             <p class="text-stone-200 font-light text-2xl md:text-3xl uppercase tracking-widest">${c.subtitle}</p>
             <div class="h-[2px] w-20 bg-gradient-rs"></div>
        </div>
        <div class="mt-12 flex flex-wrap justify-center gap-12 text-lg md:text-xl uppercase tracking-[0.2em] text-stone-400 slide-in font-semibold" style="transition-delay: 400ms;">
            ${c.tags.map((tag, i) => `
                <span>${tag}</span>${i < c.tags.length - 1 ? '<span class="text-transparent bg-clip-text bg-gradient-rs text-2xl">•</span>' : ''}
            `).join('')}
        </div>
      </div>
    </section>`,

  [SectionType.ABOUT]: (c: AboutContent) => `
    <section class="min-h-screen bg-transparent flex items-center py-32 relative border-b border-white/5">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-[url('${c.bgImage}')] bg-cover opacity-5 mix-blend-lighten"></div>
      <div class="container mx-auto px-8 md:px-16 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-24">
            <div class="w-full lg:w-5/12 relative slide-in">
                <div class="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-transparent border-gradient-rs"></div>
                <img src="${c.mainImage}" alt="Portrait" class="w-full h-[75vh] object-cover object-top shadow-[0_30px_60px_rgba(0,0,0,0.8)] grayscale-[10%] hover:grayscale-0 transition-all duration-700">
                <div class="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-transparent" style="border-image: linear-gradient(to top, var(--color-secondary), var(--color-primary)) 1;"></div>
            </div>
            <div class="w-full lg:w-7/12 slide-in" style="transition-delay: 200ms;">
                <div class="flex items-center gap-4 mb-8">
                    <div class="h-1 w-16 bg-gradient-rs"></div>
                    <span class="text-stone-400 uppercase tracking-widest text-base font-bold">${c.subtitle}</span>
                </div>
                <h2 class="font-serif text-6xl md:text-8xl text-white mb-12 uppercase leading-none">${c.title} <br/><span class="text-gradient-rs">${c.titleHighlight}</span></h2>
                <div class="space-y-10 text-stone-300 font-sans font-light text-xl md:text-2xl leading-relaxed text-justify lg:text-left">
                    ${c.paragraphs.map(p => `<p>${p}</p>`).join('')}
                </div>
            </div>
        </div>
      </div>
    </section>`,

  [SectionType.DETAILS]: (c: DetailsContent) => `
    <section class="min-h-screen bg-transparent flex flex-col justify-center py-32 border-b border-white/5 relative overflow-hidden">
        <div class="absolute left-0 top-0 w-1/2 h-full bg-[url('${c.bgImage}')] bg-cover bg-center opacity-10 grayscale mask-image-gradient-to-r"></div>
        <div class="container mx-auto px-8 md:px-16 relative z-10">
            <div class="flex flex-col lg:flex-row gap-24 items-start">
                <div class="w-full lg:w-1/2 slide-in">
                    <h2 class="font-serif text-6xl md:text-8xl text-white mb-16 uppercase leading-none">${c.title} <br/><span class="text-gradient-rs text-5xl md:text-7xl">${c.titleHighlight}</span></h2>
                    <div class="glass-card p-10 border-l-4 border-transparent shadow-2xl relative overflow-hidden border-gradient-rs">
                           <div class="absolute top-0 right-0 w-64 h-64 bg-rs-purple/10 blur-3xl -z-10 rounded-full"></div>
                           <h3 class="text-white text-xl uppercase tracking-widest font-bold mb-10 flex items-center gap-3"><div class="w-2 h-2 bg-rs-orange rounded-full"></div> Ficha Técnica</h3>
                           <ul class="space-y-8 text-stone-300 font-light text-xl">
                               ${c.techSpecs.map(spec => `
                               <li class="flex flex-col md:flex-row md:items-center gap-4 border-b border-white/5 pb-4">
                                   <span class="text-stone-500 uppercase text-sm font-bold w-40">${spec.label}</span> 
                                   <span class="text-white">${spec.value}</span>
                               </li>`).join('')}
                           </ul>
                    </div>
                    <div>
                        <h3 class="text-rs-orange text-xl uppercase tracking-widest font-bold mb-8 flex items-center gap-4">
                            <i data-lucide="share-2" class="w-6 h-6"></i> Plataformas Digitais
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-300 font-light text-lg">
                            ${c.socials.map(social => `
                            <div class="flex items-center gap-4 p-6 border border-white/10 bg-black/40 hover:bg-white/5 hover:border-rs-purple transition-all duration-300 group cursor-default">
                                <div class="p-3 bg-white/5 rounded-full group-hover:bg-gradient-rs transition-all shadow-lg">
                                    <i data-lucide="${social.icon}" class="w-5 h-5 text-white"></i>
                                </div>
                                <span class="group-hover:text-white transition-colors">${social.text}</span>
                            </div>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 relative slide-in" style="transition-delay: 200ms;">
                    <div class="relative w-full aspect-[4/5] bg-stone-900 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 group">
                         <div class="absolute inset-0 bg-gradient-rs opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                         <img src="${c.mainImage}" class="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000">
                         <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-12 z-20">
                             <p class="text-rs-orange uppercase tracking-widest text-sm font-bold mb-4">${c.audienceTitle}</p>
                             <p class="text-white font-serif text-3xl leading-snug mb-8">${c.audienceText}</p>
                             <div class="flex items-center gap-6">
                                 <div class="flex items-center bg-white shadow-lg transform group-hover:translate-x-2 transition-transform">
                                    <div class="bg-white text-black font-bold text-xl px-5 py-3 tracking-tighter">RS</div>
                                    <div class="bg-gradient-rs text-white font-bold text-xl px-5 py-3 tracking-tighter">PLAY</div>
                                </div>
                                <div class="h-[1px] flex-grow bg-white/20"></div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,

  [SectionType.METRICS]: (c: MetricsContent) => `
    <section class="min-h-screen bg-transparent flex flex-col justify-center py-32 border-b border-white/5 relative">
      <div class="absolute inset-0 bg-[url('${c.bgImage}')] bg-cover bg-fixed opacity-[0.03] grayscale"></div>
      <div class="container mx-auto px-8 md:px-16 relative z-10">
        <div class="text-center mb-16 slide-in">
          <h2 class="font-serif text-6xl md:text-8xl text-white leading-none mb-6">${c.title} <span class="text-gradient-rs">${c.titleHighlight}</span></h2>
          <p class="text-stone-400 text-2xl font-light tracking-wider uppercase">${c.subtitle}</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 slide-in" style="transition-delay: 100ms;">
          <div class="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-4 bg-[#FF0000]/10 rounded-full"><i data-lucide="youtube" class="w-8 h-8 text-[#FF0000]"></i></div>
              <h3 class="text-3xl font-bold text-white">YouTube <span class="text-stone-500 text-sm font-normal block mt-1">Últimos 28 dias</span></h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
               ${c.youtubeStats.map(s => `
               <div>
                 <p class="text-5xl font-bold text-gradient-rs mb-2">${s.value}</p>
                 <p class="text-white font-medium text-lg">${s.label}</p>
                 <p class="text-stone-500 text-sm">${s.sub}</p>
               </div>`).join('')}
            </div>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-4 bg-[#E1306C]/10 rounded-full"><i data-lucide="instagram" class="w-8 h-8 text-[#E1306C]"></i></div>
              <h3 class="text-3xl font-bold text-white">Instagram <span class="text-stone-500 text-sm font-normal block mt-1">Últimos 28 dias</span></h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
               ${c.instagramStats.map(s => `
               <div>
                 <p class="text-5xl font-bold text-gradient-rs mb-2">${s.value}</p>
                 <p class="text-white font-medium text-lg">${s.label}</p>
                 <p class="text-stone-500 text-sm">${s.sub}</p>
               </div>`).join('')}
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-r from-rs-purple/20 to-rs-orange/20 border border-white/10 rounded-2xl p-12 text-center slide-in relative overflow-hidden" style="transition-delay: 200ms;">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-rs"></div>
          <div class="flex flex-col items-center justify-center mb-10">
            <div class="flex items-center gap-3 text-stone-300 mb-4">
               <i data-lucide="monitor-play" class="w-6 h-6"></i>
               <span class="uppercase tracking-widest font-bold">Multiplataforma</span>
            </div>
             <h3 class="text-7xl md:text-9xl font-bold text-white mb-4 drop-shadow-lg">${c.mainStatValue}</h3>
             <p class="text-2xl text-stone-200 font-light">${c.mainStatLabel}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-10">
            <div>
               <p class="text-4xl font-bold text-white mb-2">${c.mainStatSub1}</p>
               <p class="text-rs-orange uppercase tracking-widest text-sm font-bold mb-2">Horários de Pico</p>
               <p class="text-stone-400">Com forte retenção de público</p>
            </div>
            <div>
               <p class="text-4xl font-bold text-white mb-2">${c.mainStatSub2}</p>
               <p class="text-rs-orange uppercase tracking-widest text-sm font-bold mb-2">Engajamento</p>
               <p class="text-stone-400 max-w-md mx-auto">Múltiplos acessos por usuário e fidelização de séries, programas locais e coberturas especiais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`,

  [SectionType.ISRAEL_PROJECT]: (c: IsraelProjectContent) => `
    <section class="min-h-screen bg-transparent relative flex items-center py-32 overflow-hidden border-b border-white/5">
        <div class="container mx-auto px-8 md:px-16 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div class="slide-in order-2 lg:order-1">
                    <div class="flex items-center gap-4 mb-10">
                        <div class="w-20 h-[2px] bg-gradient-rs"></div>
                        <span class="text-rs-orange text-lg font-bold uppercase tracking-[0.3em]">${c.tagline}</span>
                    </div>
                    <h2 class="font-serif text-6xl md:text-8xl text-white leading-none mb-10">
                        ${c.title} <br/>
                        <span class="text-gradient-gold">${c.titleHighlight}</span> 
                        <span class="block text-stone-500 text-5xl mt-6 font-sans font-light tracking-wider">${c.projectYear}</span>
                    </h2>
                    <div class="relative p-8 mb-12 bg-white/5 border-l-4 border-transparent border-gradient-rs">
                        <p class="text-white text-3xl italic font-serif leading-tight">
                            ${c.quote}
                        </p>
                    </div>
                    <p class="text-stone-400 leading-relaxed mb-12 font-light text-2xl text-justify">
                        ${c.description}
                    </p>
                    <ul class="grid grid-cols-1 gap-6 text-stone-300 text-xl font-light">
                        ${c.highlights.map(h => `
                        <li class="flex items-center gap-6 p-4 border border-white/5 bg-black/20 hover:bg-white/5 transition-colors rounded-r-xl border-l-4 border-l-rs-purple">
                            <div class="p-2 bg-gradient-rs rounded-full shadow-lg">
                                <i data-lucide="${h.icon}" class="w-5 h-5 text-white"></i>
                            </div>
                            ${h.text}
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="relative h-[80vh] w-full slide-in order-1 lg:order-2" style="transition-delay: 200ms;">
                     <div class="absolute inset-0 bg-gradient-rs opacity-20 transform translate-x-6 translate-y-6"></div>
                     <img src="${c.mainImage}" class="relative w-full h-full object-cover shadow-2xl filter brightness-110 contrast-105">
                     <div class="absolute bottom-12 -left-12 bg-black p-10 shadow-2xl border-l-4 border-transparent border-gradient-rs">
                         <p class="text-5xl text-white font-serif mb-2">2026</p>
                         <p class="text-sm text-rs-orange uppercase tracking-widest font-bold">Terra Santa</p>
                     </div>
                </div>
            </div>
        </div>
    </section>`,

  [SectionType.SERVICES]: (c: ServicesContent) => `
    <section class="min-h-screen bg-transparent flex items-center py-32 relative overflow-hidden border-b border-white/5">
         <div class="absolute right-0 bottom-0 w-1/2 h-full bg-[url('${c.bgImage}')] bg-cover opacity-5 grayscale"></div>
         <div class="container mx-auto px-8 md:px-16 relative z-10">
             <div class="text-center max-w-4xl mx-auto mb-24 slide-in">
                 <span class="text-rs-purple font-bold uppercase tracking-[0.3em] mb-6 block">Serviços</span>
                 <h2 class="font-serif text-6xl md:text-7xl text-white uppercase leading-tight mb-8">${c.title} <br/> <span class="text-gradient-rs">${c.titleHighlight}</span></h2>
                 <p class="text-stone-400 text-xl font-light leading-relaxed">
                    ${c.description}
                 </p>
             </div>
             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 ${c.cards.map((card, idx) => `
                 <div class="group p-10 border border-white/10 bg-white/5 hover:bg-black hover:border-transparent transition-all duration-500 relative overflow-hidden slide-in flex flex-col items-center text-center" style="transition-delay: ${idx * 100}ms;">
                     <div class="absolute inset-0 bg-gradient-to-br from-rs-purple/20 to-rs-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div class="relative z-10">
                         <div class="w-20 h-20 mb-8 flex items-center justify-center bg-black/50 border border-white/10 rounded-full group-hover:border-rs-orange transition-colors shadow-lg mx-auto">
                             <i data-lucide="${card.icon}" class="w-10 h-10 text-white group-hover:text-rs-orange transition-colors"></i>
                         </div>
                         <h3 class="text-2xl font-serif text-white mb-4 group-hover:translate-y-[-5px] transition-transform">${card.title}</h3>
                         <p class="text-stone-400 text-lg font-light leading-relaxed">${card.description}</p>
                     </div>
                 </div>`).join('')}
             </div>
         </div>
    </section>`,

  [SectionType.GALLERY]: (c: GalleryContent) => `
    <section class="min-h-screen bg-transparent py-32 relative border-b border-white/5">
        <div class="container mx-auto px-8 md:px-16">
            <div class="text-center mb-16 slide-in">
                 <div class="flex items-center justify-center gap-4 mb-6"><div class="w-12 h-[2px] bg-gradient-rs"></div><span class="text-rs-orange font-bold uppercase tracking-[0.3em]">Destaque Internacional</span><div class="w-12 h-[2px] bg-gradient-rs"></div></div>
                <h2 class="font-serif text-5xl md:text-7xl text-white uppercase leading-tight">${c.title} <br/> <span class="text-gradient-rs">${c.titleHighlight}</span></h2>
                <p class="text-stone-400 mt-6 text-xl max-w-2xl mx-auto">${c.description}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                <div class="lg:col-span-2 row-span-2 relative group overflow-hidden rounded-xl border border-white/10 slide-in">
                     <img src="${c.images[0]}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                     <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                         <p class="text-white font-serif text-2xl">Red Carpet Coverage</p>
                     </div>
                </div>
                ${c.images.slice(1).map((img, i) => `
                <div class="relative group overflow-hidden rounded-xl border border-white/10 slide-in delay-${(i+1)*100}">
                    <img src="${img}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                </div>`).join('')}
            </div>
        </div>
    </section>`,

  [SectionType.SPONSOR]: (c: SponsorContent) => `
    <section class="min-h-screen bg-transparent flex items-center py-32 relative border-b border-white/5">
        <div class="container mx-auto px-8 md:px-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div class="relative h-[70vh] slide-in">
                    <div class="absolute -top-4 -left-4 w-1/2 h-1/2 border-t-4 border-l-4 border-rs-purple opacity-50"></div>
                    <img src="${c.mainImage}" class="absolute top-0 left-0 w-3/4 h-3/4 object-cover z-10 shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-700">
                    <img src="${c.secondaryImage}" class="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover z-0 grayscale opacity-60 hover:opacity-100 transition-opacity duration-700">
                    <div class="absolute bottom-[10%] left-[10%] bg-gradient-rs w-48 h-3 z-20 shadow-[0_0_20px_rgba(191,3,195,0.5)]"></div>
                </div>
                <div class="slide-in" style="transition-delay: 200ms;">
                    <h2 class="font-serif text-6xl md:text-7xl text-white mb-12 uppercase leading-none">${c.title} <br/><span class="text-gradient-rs">${c.titleHighlight}</span></h2>
                    <ul class="space-y-10">
                        ${c.reasons.map(r => `
                        <li class="flex items-start gap-8 group">
                            <span class="font-serif text-6xl text-transparent bg-clip-text bg-gradient-rs font-bold -mt-2 opacity-50 group-hover:opacity-100 transition-opacity">${r.number}</span>
                            <div><h4 class="text-white text-2xl font-serif mb-2 group-hover:text-rs-orange transition-colors">${r.title}</h4><p class="text-stone-400 text-lg leading-relaxed">${r.description}</p></div>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    </section>`,

  [SectionType.OPPORTUNITIES]: (c: OpportunitiesContent) => `
    <section class="min-h-screen bg-transparent py-32 relative">
        <div class="container mx-auto px-8 md:px-16">
            <div class="text-center mb-20 slide-in">
                <h2 class="font-serif text-6xl md:text-7xl text-white uppercase mb-4">${c.title} <span class="text-gradient-rs">${c.titleHighlight}</span></h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${c.tiers.map((tier, i) => {
                    let borderClass = 'border-t-4 border-white';
                    let textClass = 'text-white';
                    if (tier.name === 'Gold') { borderClass = 'border-t-4 border-rs-gold'; textClass = 'text-rs-gold'; }
                    if (tier.name === 'Silver') { borderClass = 'border-t-4 border-stone-400'; textClass = 'text-stone-300'; }
                    if (tier.name === 'Apoio') { borderClass = 'border-t-4 border-white/20'; textClass = 'text-white/80'; }

                    return `
                <div class="bg-gradient-to-b from-white/10 to-transparent p-10 ${borderClass} hover:border-rs-purple transition-all duration-300 slide-in transform hover:-translate-y-2" style="transition-delay: ${i*100}ms;">
                    <div class="mb-6"><i data-lucide="${tier.icon}" class="w-10 h-10 ${textClass}"></i></div>
                    <h3 class="text-3xl font-serif ${textClass} mb-2">${tier.name}</h3>
                    <p class="text-xs text-stone-400 uppercase tracking-widest mb-8 font-bold">${tier.subtitle}</p>
                    <ul class="text-stone-400 space-y-4 text-lg font-light">
                        ${tier.features.map(f => `<li class="flex items-start gap-3"><span class="text-rs-purple mt-1">◆</span> ${f}</li>`).join('')}
                    </ul>
                </div>`;
                }).join('')}
            </div>
        </div>
    </section>`,

  [SectionType.CONTACT]: (c: ContactContent) => `
    <section class="relative bg-black border-t border-white/10 py-32 overflow-hidden">
        <div class="absolute inset-0 bg-[url('${c.bgImage}')] bg-cover bg-center opacity-30"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div class="container mx-auto px-6 relative z-10 text-center">
            <img src="${c.logoImage}" alt="Logo" class="w-64 md:w-96 mx-auto mb-12 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
            <div class="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-16">
                <div class="text-left group"><p class="text-xs text-rs-orange uppercase tracking-[0.2em] mb-2 font-bold group-hover:text-rs-purple transition-colors">Email</p><a href="mailto:${c.email}" class="text-2xl text-white font-serif hover:text-rs-orange transition-colors border-b border-transparent hover:border-rs-orange">${c.email}</a></div>
                <div class="text-left group"><p class="text-xs text-rs-orange uppercase tracking-[0.2em] mb-2 font-bold group-hover:text-rs-purple transition-colors">WhatsApp</p><p class="text-2xl text-white font-serif">${c.phone}</p></div>
                <div class="text-left group"><p class="text-xs text-rs-orange uppercase tracking-[0.2em] mb-2 font-bold group-hover:text-rs-purple transition-colors">Instagram</p><p class="text-2xl text-white font-serif">${c.instagram}</p></div>
            </div>
            <div class="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all cursor-pointer group hover:border-rs-purple shadow-2xl">
                <span class="text-stone-400 uppercase tracking-widest text-sm group-hover:text-white transition-colors">Disponível em</span>
                <div class="flex items-center transform group-hover:scale-105 transition-transform">
                    <div class="bg-white text-black font-bold text-lg px-3 py-1 tracking-tighter">RS</div>
                    <div class="bg-gradient-rs text-white font-bold text-lg px-3 py-1 tracking-tighter">PLAY</div>
                </div>
            </div>
            <p class="mt-12 text-stone-600 text-sm uppercase tracking-widest">© 2025 Rose Mazuco. Todos os direitos reservados.</p>
        </div>
    </section>`
};

export const generateHtml = (sections: SectionData[], theme: ThemeConfig): string => {
  const bodyContent = sections.map(section => {
    const generator = generators[section.type];
    if (generator) {
        return generator(section.content);
    }
    return '';
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
${HEAD_CONTENT}
${generateThemeStyles(theme)}
</head>
<body class="antialiased selection:bg-rs-orange selection:text-white">
${bodyContent}
${FOOTER_SCRIPTS}
</body>
</html>`;
};
