import React from 'react';
import { SectionType, HeroContent, AboutContent, DetailsContent, MetricsContent, IsraelProjectContent, ServicesContent, GalleryContent, SponsorContent, OpportunitiesContent, ContactContent } from '../types';
import { 
  Instagram, Youtube, MonitorPlay, Mic2, Video, Star, Gem, Crown, HandHeart, 
  Share2, Tv, Globe, Cast, Users
} from 'lucide-react';

// Icons mapping helper
const IconMap: any = {
    'instagram': Instagram,
    'youtube': Youtube,
    'monitor-play': MonitorPlay,
    'mic-2': Mic2,
    'video': Video,
    'star': Star,
    'gem': Gem,
    'crown': Crown,
    'hand-heart': HandHeart,
    'share-2': Share2,
    'tv': Tv,
    'globe': Globe,
    'cast': Cast,
    'users': Users
};

const LucideIcon = ({ name, className }: { name: string, className?: string }) => {
    const Icon = IconMap[name] || Star;
    return <Icon className={className} />;
};

export const HeroSection: React.FC<{ content: HeroContent }> = ({ content }) => (
    <section className="relative flex flex-col items-center justify-center overflow-hidden border-b border-white/10 py-32 bg-[#050505]">
      <div className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 grayscale" style={{ backgroundImage: `url('${content.bgImage}')` }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black"></div>
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-[2px] h-32 bg-gradient-rs-vertical mb-10"></div>
        <p className="text-stone-300 uppercase tracking-[0.4em] text-xl mb-10 font-medium">Media Kit Oficial</p>
        <img src={content.logoImage} alt="Logo" className="w-80 md:w-[600px] mb-14 drop-shadow-2xl" />
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8 uppercase tracking-wide">
          {content.titlePrefix} <span className="text-gradient-rs">{content.titleHighlight}</span>
        </h1>
        <div className="flex items-center gap-6 mt-4 mb-12">
             <div className="h-[2px] w-20 bg-gradient-rs"></div>
             <p className="text-stone-200 font-light text-2xl md:text-3xl uppercase tracking-widest">{content.subtitle}</p>
             <div className="h-[2px] w-20 bg-gradient-rs"></div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-12 text-lg md:text-xl uppercase tracking-[0.2em] text-stone-400 font-semibold">
            {content.tags.map((tag, i) => (
                <React.Fragment key={i}>
                    <span>{tag}</span>
                    {i < content.tags.length - 1 && <span className="text-transparent bg-clip-text bg-gradient-rs text-2xl">•</span>}
                </React.Fragment>
            ))}
        </div>
      </div>
    </section>
);

export const AboutSection: React.FC<{ content: AboutContent }> = ({ content }) => (
    <section className="bg-[#0a0a0a] flex items-center py-32 relative border-b border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cover opacity-5 mix-blend-lighten" style={{ backgroundImage: `url('${content.bgImage}')` }}></div>
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-5/12 relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-transparent border-gradient-rs"></div>
                <img src={content.mainImage} alt="About" className="w-full h-[600px] object-cover object-top shadow-2xl grayscale-[10%]" />
            </div>
            <div className="w-full lg:w-7/12">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-16 bg-gradient-rs"></div>
                    <span className="text-stone-400 uppercase tracking-widest text-base font-bold">{content.subtitle}</span>
                </div>
                <h2 className="font-serif text-6xl md:text-8xl text-white mb-12 uppercase leading-none">{content.title} <br/><span className="text-gradient-rs">{content.titleHighlight}</span></h2>
                <div className="space-y-10 text-stone-300 font-sans font-light text-xl">
                    {content.paragraphs.map((p, i) => <div key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
                </div>
            </div>
        </div>
      </div>
    </section>
);

export const DetailsSection: React.FC<{ content: DetailsContent }> = ({ content }) => (
    <section className="bg-[#050505] py-32 border-b border-white/5 relative">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-cover bg-center opacity-10 grayscale" style={{ backgroundImage: `url('${content.bgImage}')` }}></div>
        <div className="container mx-auto px-8 md:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row gap-24">
                <div className="w-full lg:w-1/2">
                    <h2 className="font-serif text-6xl md:text-8xl text-white mb-16 uppercase leading-none">{content.title} <br/><span className="text-gradient-rs text-5xl md:text-7xl">{content.titleHighlight}</span></h2>
                    <div className="glass-card p-10 border-l-4 border-transparent shadow-2xl border-gradient-rs">
                           <h3 className="text-white text-xl uppercase tracking-widest font-bold mb-10 flex items-center gap-3"><div className="w-2 h-2 bg-rs-orange rounded-full"></div> Ficha Técnica</h3>
                           <ul className="space-y-8 text-stone-300 font-light text-xl">
                               {content.techSpecs.map((spec, i) => (
                                   <li key={i} className="flex flex-col md:flex-row md:items-center gap-4 border-b border-white/5 pb-4">
                                       <span className="text-stone-500 uppercase text-sm font-bold w-40">{spec.label}</span> 
                                       <span className="text-white">{spec.value}</span>
                                   </li>
                               ))}
                           </ul>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 relative">
                     <img src={content.mainImage} className="w-full h-full object-cover opacity-90" alt="Details" />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-12 z-20">
                         <p className="text-rs-orange uppercase tracking-widest text-sm font-bold mb-4">{content.audienceTitle}</p>
                         <p className="text-white font-serif text-3xl leading-snug mb-8">{content.audienceText}</p>
                     </div>
                </div>
            </div>
        </div>
    </section>
);

export const MetricsSection: React.FC<{ content: MetricsContent }> = ({ content }) => (
    <section className="bg-[#080808] py-32 border-b border-white/5">
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-6xl md:text-8xl text-white leading-none mb-6">{content.title} <span className="text-gradient-rs">{content.titleHighlight}</span></h2>
          <p className="text-stone-400 text-2xl font-light tracking-wider uppercase">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <Youtube className="w-8 h-8 text-[#FF0000]" />
              <h3 className="text-3xl font-bold text-white">YouTube</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
               {content.youtubeStats.map((s, i) => (
                   <div key={i}><p className="text-5xl font-bold text-gradient-rs mb-2">{s.value}</p><p>{s.label}</p></div>
               ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <Instagram className="w-8 h-8 text-[#E1306C]" />
              <h3 className="text-3xl font-bold text-white">Instagram</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
               {content.instagramStats.map((s, i) => (
                   <div key={i}><p className="text-5xl font-bold text-gradient-rs mb-2">{s.value}</p><p>{s.label}</p></div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
);

export const IsraelProjectSection: React.FC<{ content: IsraelProjectContent }> = ({ content }) => (
    <section className="bg-[#080808] py-32 border-b border-white/5">
        <div className="container mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-20 h-[2px] bg-gradient-rs"></div>
                        <span className="text-rs-orange text-lg font-bold uppercase tracking-[0.3em]">{content.tagline}</span>
                    </div>
                    <h2 className="font-serif text-6xl md:text-8xl text-white leading-none mb-10">{content.title} <br/><span className="text-gradient-gold">{content.titleHighlight}</span></h2>
                    <p className="text-stone-500 text-5xl mt-6 font-sans font-light tracking-wider mb-10">{content.projectYear}</p>
                    <div className="relative p-8 mb-12 bg-white/5 border-l-4 border-transparent border-gradient-rs">
                        <p className="text-white text-3xl italic font-serif leading-tight">{content.quote}</p>
                    </div>
                    <p className="text-stone-400 leading-relaxed mb-12 font-light text-2xl text-justify" dangerouslySetInnerHTML={{ __html: content.description }}></p>
                </div>
                <div className="relative h-[80vh]">
                     <img src={content.mainImage} className="w-full h-full object-cover shadow-2xl" alt="Israel" />
                </div>
            </div>
        </div>
    </section>
);

export const ServicesSection: React.FC<{ content: ServicesContent }> = ({ content }) => (
    <section className="bg-[#050505] py-32 border-b border-white/5 relative">
         <div className="absolute right-0 bottom-0 w-1/2 h-full bg-cover opacity-5 grayscale" style={{ backgroundImage: `url('${content.bgImage}')` }}></div>
         <div className="container mx-auto px-8 md:px-16 relative z-10">
             <div className="text-center max-w-4xl mx-auto mb-24">
                 <h2 className="font-serif text-6xl md:text-7xl text-white uppercase leading-tight mb-8">{content.title} <span className="text-gradient-rs">{content.titleHighlight}</span></h2>
                 <p className="text-stone-400 text-xl font-light">{content.description}</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {content.cards.map((s, i) => (
                    <div key={i} className="p-10 border border-white/10 bg-white/5 flex flex-col items-center text-center">
                        <LucideIcon name={s.icon} className="w-10 h-10 text-white mb-4" />
                        <h3 className="text-2xl font-serif text-white mb-4">{s.title}</h3>
                        <p className="text-stone-400 text-sm font-light">{s.description}</p>
                    </div>
                 ))}
             </div>
         </div>
    </section>
);

export const GallerySection: React.FC<{ content: GalleryContent }> = ({ content }) => (
    <section className="bg-[#050505] py-32 border-b border-white/5">
        <div className="container mx-auto px-8 md:px-16">
            <div className="text-center mb-16">
                <h2 className="font-serif text-5xl md:text-7xl text-white uppercase">{content.title} <br/> <span className="text-gradient-rs">{content.titleHighlight}</span></h2>
                <p className="text-stone-400 mt-6 text-xl">{content.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 auto-rows-[300px]">
                <div className="col-span-2 row-span-2 overflow-hidden rounded-xl border border-white/10">
                     <img src={content.images[0]} className="w-full h-full object-cover" alt="Gallery" />
                </div>
                {content.images.slice(1, 6).map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-xl border border-white/10">
                        <img src={img} className="w-full h-full object-cover" alt="Gallery" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const SponsorSection: React.FC<{ content: SponsorContent }> = ({ content }) => (
    <section className="bg-[#0a0a0a] py-32 border-b border-white/5">
        <div className="container mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative h-[600px]">
                    <img src={content.mainImage} className="absolute top-0 left-0 w-3/4 h-3/4 object-cover z-10 shadow-2xl border border-white/10" alt="Sponsor" />
                    <img src={content.secondaryImage} className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover z-0 grayscale opacity-60" alt="Sponsor" />
                </div>
                <div>
                    <h2 className="font-serif text-6xl md:text-7xl text-white mb-12 uppercase leading-none">{content.title} <br/><span className="text-gradient-rs">{content.titleHighlight}</span></h2>
                    <ul className="space-y-10">
                        {content.reasons.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-8">
                              <span className="font-serif text-6xl text-transparent bg-clip-text bg-gradient-rs font-bold -mt-2 opacity-50">{item.number}</span>
                              <div><h4 className="text-white text-2xl font-serif mb-2">{item.title}</h4><p className="text-stone-400 text-lg">{item.description}</p></div>
                          </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export const OpportunitiesSection: React.FC<{ content: OpportunitiesContent }> = ({ content }) => (
    <section className="bg-[#050505] py-32">
        <div className="container mx-auto px-8 md:px-16">
            <h2 className="font-serif text-6xl md:text-7xl text-white uppercase mb-20 text-center">{content.title} <span className="text-gradient-rs">{content.titleHighlight}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.tiers.map((tier, i) => (
                    <div key={i} className={`bg-gradient-to-b from-white/10 to-transparent p-10 border-t-4 ${tier.name === 'Gold' ? 'border-rs-gold' : 'border-white'}`}>
                        <LucideIcon name={tier.icon} className={`w-10 h-10 mb-6 ${tier.name === 'Gold' ? 'text-[#C5A059]' : 'text-white'}`} />
                        <h3 className={`text-3xl font-serif ${tier.name === 'Gold' ? 'text-[#C5A059]' : 'text-white'}`}>{tier.name}</h3>
                        <p className="text-xs text-stone-400 uppercase tracking-widest mt-2">{tier.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const ContactSection: React.FC<{ content: ContactContent }> = ({ content }) => (
    <section className="relative bg-black border-t border-white/10 py-32 overflow-hidden text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${content.bgImage}')` }}></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="w-64 mx-auto mb-12">
                <img src={content.logoImage} alt="Logo" className="w-full" />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-12 text-white font-serif text-2xl">
                <p>{content.email}</p>
                <p>{content.phone}</p>
                <p>{content.instagram}</p>
            </div>
        </div>
    </section>
);

export const RENDER_MAP: Record<SectionType, React.FC<any>> = {
  [SectionType.HERO]: HeroSection,
  [SectionType.ABOUT]: AboutSection,
  [SectionType.DETAILS]: DetailsSection,
  [SectionType.METRICS]: MetricsSection,
  [SectionType.ISRAEL_PROJECT]: IsraelProjectSection,
  [SectionType.SERVICES]: ServicesSection,
  [SectionType.GALLERY]: GallerySection,
  [SectionType.SPONSOR]: SponsorSection,
  [SectionType.OPPORTUNITIES]: OpportunitiesSection,
  [SectionType.CONTACT]: ContactSection,
};