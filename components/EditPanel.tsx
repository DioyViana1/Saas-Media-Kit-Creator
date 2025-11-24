
import React, { useState } from 'react';
import { SectionData, SectionType, ThemeConfig } from '../types';
import { X, Plus, Trash, Palette, FileText } from 'lucide-react';

interface EditPanelProps {
  section?: SectionData | null;
  theme: ThemeConfig;
  onUpdateSection: (content: any) => void;
  onUpdateTheme: (theme: ThemeConfig) => void;
  onClose: () => void;
}

const InputField = ({ label, value, onChange, type = "text" }: { label: string, value: string, onChange: (val: string) => void, type?: string }) => (
  <div className="mb-4">
    <label className="block text-xs font-bold uppercase text-stone-500 mb-1">{label}</label>
    {type === 'textarea' ? (
      <textarea 
        className="w-full bg-black/40 border border-white/10 rounded p-2 text-sm text-white focus:border-rs-purple outline-none h-24"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : (
      <input 
        type={type} 
        className="w-full bg-black/40 border border-white/10 rounded p-2 text-sm text-white focus:border-rs-purple outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    )}
  </div>
);

const ColorPicker = ({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) => (
    <div className="mb-4">
        <label className="block text-xs font-bold uppercase text-stone-500 mb-2">{label}</label>
        <div className="flex items-center gap-3">
            <input 
                type="color" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-10 h-10 rounded border border-white/20 bg-transparent cursor-pointer"
            />
            <input 
                type="text" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 bg-black/40 border border-white/10 rounded p-2 text-sm text-white font-mono uppercase"
            />
        </div>
    </div>
);

const ArrayField = ({ label, items, onChange }: { label: string, items: string[], onChange: (items: string[]) => void }) => (
    <div className="mb-6">
        <label className="block text-xs font-bold uppercase text-stone-500 mb-2">{label}</label>
        <div className="space-y-2">
            {items.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                    <input 
                        className="flex-1 bg-black/40 border border-white/10 rounded p-2 text-sm text-white focus:border-rs-purple outline-none"
                        value={item}
                        onChange={(e) => {
                            const newItems = [...items];
                            newItems[idx] = e.target.value;
                            onChange(newItems);
                        }}
                    />
                    <button onClick={() => onChange(items.filter((_, i) => i !== idx))} className="text-red-400 hover:text-red-300"><Trash size={16}/></button>
                </div>
            ))}
            <button onClick={() => onChange([...items, "Novo Item"])} className="flex items-center gap-1 text-xs text-rs-orange hover:text-white mt-1">
                <Plus size={14}/> Adicionar Item
            </button>
        </div>
    </div>
);

export const EditPanel: React.FC<EditPanelProps> = ({ section, theme, onUpdateSection, onUpdateTheme, onClose }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'theme'>(section ? 'content' : 'theme');

  const handleSectionChange = (key: string, value: any) => {
    if (section) {
        onUpdateSection({ ...section.content, [key]: value });
    }
  };

  const renderThemeFields = () => (
      <div className="space-y-6">
          <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-white font-serif mb-4 pb-2 border-b border-white/10">Cores Principais</h4>
              <ColorPicker label="Cor Primária (Laranja)" value={theme.primaryColor} onChange={(v) => onUpdateTheme({ ...theme, primaryColor: v })} />
              <ColorPicker label="Cor Secundária (Roxo)" value={theme.secondaryColor} onChange={(v) => onUpdateTheme({ ...theme, secondaryColor: v })} />
              <ColorPicker label="Cor de Destaque (Dourado)" value={theme.accentColor} onChange={(v) => onUpdateTheme({ ...theme, accentColor: v })} />
              <ColorPicker label="Cor de Fundo" value={theme.backgroundColor} onChange={(v) => onUpdateTheme({ ...theme, backgroundColor: v })} />
          </div>
      </div>
  );

  const renderSectionFields = () => {
    if (!section) return <p className="text-stone-500 text-center py-4">Selecione uma seção para editar</p>;

    switch(section.type) {
      case SectionType.HERO:
        return (
          <>
            <InputField label="URL Imagem Fundo" value={section.content.bgImage} onChange={(v) => handleSectionChange('bgImage', v)} />
            <InputField label="URL Logo" value={section.content.logoImage} onChange={(v) => handleSectionChange('logoImage', v)} />
            <InputField label="Título (Prefixo)" value={section.content.titlePrefix} onChange={(v) => handleSectionChange('titlePrefix', v)} />
            <InputField label="Título (Destaque)" value={section.content.titleHighlight} onChange={(v) => handleSectionChange('titleHighlight', v)} />
            <InputField label="Subtítulo" value={section.content.subtitle} onChange={(v) => handleSectionChange('subtitle', v)} />
            <ArrayField label="Tags (Rodapé)" items={section.content.tags} onChange={(v) => handleSectionChange('tags', v)} />
          </>
        );
      case SectionType.ABOUT:
        return (
          <>
            <InputField label="Título" value={section.content.title} onChange={(v) => handleSectionChange('title', v)} />
            <InputField label="Destaque Título" value={section.content.titleHighlight} onChange={(v) => handleSectionChange('titleHighlight', v)} />
            <InputField label="Subtítulo (Pequeno)" value={section.content.subtitle} onChange={(v) => handleSectionChange('subtitle', v)} />
            <InputField label="URL Imagem Principal" value={section.content.mainImage} onChange={(v) => handleSectionChange('mainImage', v)} />
            <ArrayField label="Parágrafos (HTML permitido)" items={section.content.paragraphs} onChange={(v) => handleSectionChange('paragraphs', v)} />
          </>
        );
      case SectionType.DETAILS:
        return (
           <>
            <InputField label="Título" value={section.content.title} onChange={(v) => handleSectionChange('title', v)} />
            <InputField label="Destaque Título" value={section.content.titleHighlight} onChange={(v) => handleSectionChange('titleHighlight', v)} />
            <InputField label="URL Imagem Principal" value={section.content.mainImage} onChange={(v) => handleSectionChange('mainImage', v)} />
            <div className="mb-6">
                <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Ficha Técnica</label>
                {section.content.techSpecs.map((spec: any, idx: number) => (
                    <div key={idx} className="flex gap-2 mb-2">
                        <input className="w-1/3 bg-black/40 border border-white/10 rounded p-2 text-xs text-white" value={spec.label} onChange={(e) => {
                             const newSpecs = [...section.content.techSpecs]; newSpecs[idx].label = e.target.value; handleSectionChange('techSpecs', newSpecs);
                        }} />
                        <input className="flex-1 bg-black/40 border border-white/10 rounded p-2 text-xs text-white" value={spec.value} onChange={(e) => {
                             const newSpecs = [...section.content.techSpecs]; newSpecs[idx].value = e.target.value; handleSectionChange('techSpecs', newSpecs);
                        }} />
                    </div>
                ))}
            </div>
            <InputField label="Título Público" value={section.content.audienceTitle} onChange={(v) => handleSectionChange('audienceTitle', v)} />
            <InputField label="Texto Público" value={section.content.audienceText} type="textarea" onChange={(v) => handleSectionChange('audienceText', v)} />
           </>
        );
      case SectionType.METRICS:
        return (
           <>
             <InputField label="Título" value={section.content.title} onChange={(v) => handleSectionChange('title', v)} />
             <InputField label="Destaque Título" value={section.content.titleHighlight} onChange={(v) => handleSectionChange('titleHighlight', v)} />
             <InputField label="Subtítulo" value={section.content.subtitle} onChange={(v) => handleSectionChange('subtitle', v)} />
             <div className="p-2 bg-white/5 rounded mb-4">
                <InputField label="Estatística Principal (Valor)" value={section.content.mainStatValue} onChange={(v) => handleSectionChange('mainStatValue', v)} />
                <InputField label="Estatística Principal (Label)" value={section.content.mainStatLabel} onChange={(v) => handleSectionChange('mainStatLabel', v)} />
             </div>
           </>
        );
      case SectionType.SERVICES:
        return (
            <>
             <InputField label="Título" value={section.content.title} onChange={(v) => handleSectionChange('title', v)} />
             <InputField label="Destaque Título" value={section.content.titleHighlight} onChange={(v) => handleSectionChange('titleHighlight', v)} />
             <InputField label="Descrição" value={section.content.description} type="textarea" onChange={(v) => handleSectionChange('description', v)} />
             <div className="space-y-4">
                 <label className="block text-xs font-bold uppercase text-stone-500">Cartões de Serviço</label>
                 {section.content.cards.map((card: any, idx: number) => (
                     <div key={idx} className="p-3 border border-white/10 rounded bg-white/5">
                         <input className="w-full bg-transparent border-b border-white/10 mb-2 text-sm p-1" value={card.title} onChange={(e) => {
                             const newCards = [...section.content.cards]; newCards[idx].title = e.target.value; handleSectionChange('cards', newCards);
                         }} />
                         <textarea className="w-full bg-transparent text-xs text-stone-400 p-1 h-16" value={card.description} onChange={(e) => {
                             const newCards = [...section.content.cards]; newCards[idx].description = e.target.value; handleSectionChange('cards', newCards);
                         }} />
                     </div>
                 ))}
             </div>
            </>
        );
      case SectionType.GALLERY:
        return (
            <>
             <InputField label="Título" value={section.content.title} onChange={(v) => handleSectionChange('title', v)} />
             <InputField label="Destaque Título" value={section.content.titleHighlight} onChange={(v) => handleSectionChange('titleHighlight', v)} />
             <ArrayField label="URLs das Imagens" items={section.content.images} onChange={(v) => handleSectionChange('images', v)} />
            </>
        );
       case SectionType.SPONSOR:
        return (
            <>
             <InputField label="Título" value={section.content.title} onChange={(v) => handleSectionChange('title', v)} />
             <InputField label="Destaque Título" value={section.content.titleHighlight} onChange={(v) => handleSectionChange('titleHighlight', v)} />
             <InputField label="URL Imagem 1" value={section.content.mainImage} onChange={(v) => handleSectionChange('mainImage', v)} />
             <div className="space-y-4">
                 <label className="block text-xs font-bold uppercase text-stone-500">Motivos</label>
                 {section.content.reasons.map((r: any, idx: number) => (
                     <div key={idx} className="p-3 border border-white/10 rounded bg-white/5">
                         <input className="w-full bg-transparent border-b border-white/10 mb-2 text-sm p-1" value={r.title} onChange={(e) => {
                             const newReasons = [...section.content.reasons]; newReasons[idx].title = e.target.value; handleSectionChange('reasons', newReasons);
                         }} />
                         <textarea className="w-full bg-transparent text-xs text-stone-400 p-1 h-16" value={r.description} onChange={(e) => {
                             const newReasons = [...section.content.reasons]; newReasons[idx].description = e.target.value; handleSectionChange('reasons', newReasons);
                         }} />
                     </div>
                 ))}
             </div>
            </>
        );
      case SectionType.OPPORTUNITIES:
         return (
            <>
             <InputField label="Título" value={section.content.title} onChange={(v) => handleSectionChange('title', v)} />
             <InputField label="Destaque Título" value={section.content.titleHighlight} onChange={(v) => handleSectionChange('titleHighlight', v)} />
             <div className="space-y-2">
                 <label className="block text-xs font-bold uppercase text-stone-500">Níveis de Parceria</label>
                 {section.content.tiers.map((tier: any, idx: number) => (
                     <div key={idx} className="flex items-center gap-2">
                         <span className="text-xs w-16">{tier.name}</span>
                         <input className="flex-1 bg-black/40 border border-white/10 rounded p-2 text-xs text-white" value={tier.subtitle} onChange={(e) => {
                             const newTiers = [...section.content.tiers]; newTiers[idx].subtitle = e.target.value; handleSectionChange('tiers', newTiers);
                         }} />
                     </div>
                 ))}
             </div>
            </>
         );
      case SectionType.CONTACT:
        return (
          <>
            <InputField label="URL Imagem Fundo" value={section.content.bgImage} onChange={(v) => handleSectionChange('bgImage', v)} />
            <InputField label="Email" value={section.content.email} onChange={(v) => handleSectionChange('email', v)} />
            <InputField label="Telefone" value={section.content.phone} onChange={(v) => handleSectionChange('phone', v)} />
            <InputField label="Instagram" value={section.content.instagram} onChange={(v) => handleSectionChange('instagram', v)} />
          </>
        );
      case SectionType.ISRAEL_PROJECT:
         return (
          <>
            <InputField label="Título" value={section.content.title} onChange={(v) => handleSectionChange('title', v)} />
            <InputField label="Destaque Título" value={section.content.titleHighlight} onChange={(v) => handleSectionChange('titleHighlight', v)} />
            <InputField label="Ano/Tagline" value={section.content.projectYear} onChange={(v) => handleSectionChange('projectYear', v)} />
            <InputField label="Frase de Efeito" value={section.content.quote} onChange={(v) => handleSectionChange('quote', v)} />
            <InputField label="Descrição" value={section.content.description} type="textarea" onChange={(v) => handleSectionChange('description', v)} />
            <InputField label="URL Imagem" value={section.content.mainImage} onChange={(v) => handleSectionChange('mainImage', v)} />
          </>
         );
      default:
        return <p className="text-stone-500 text-sm">Edição não disponível para este tipo.</p>;
    }
  };

  return (
    <div className="absolute top-0 right-0 h-full w-80 bg-[#111] border-l border-white/10 shadow-2xl z-50 flex flex-col">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <h3 className="font-serif text-white text-lg">Editar</h3>
        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full"><X size={20} className="text-stone-400" /></button>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-white/10">
          <button 
            onClick={() => setActiveTab('content')}
            className={`flex-1 py-3 text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2 ${activeTab === 'content' ? 'text-rs-orange border-b-2 border-rs-orange' : 'text-stone-500 hover:text-white'}`}
          >
              <FileText size={14} /> Conteúdo
          </button>
          <button 
            onClick={() => setActiveTab('theme')}
            className={`flex-1 py-3 text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2 ${activeTab === 'theme' ? 'text-rs-orange border-b-2 border-rs-orange' : 'text-stone-500 hover:text-white'}`}
          >
              <Palette size={14} /> Cores
          </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {activeTab === 'content' ? renderSectionFields() : renderThemeFields()}
      </div>
    </div>
  );
};
