
import React, { useState, useEffect } from 'react';
import { SectionData, SectionType, Project, ThemeConfig } from './types';
import { RENDER_MAP } from './components/SectionComponents';
import { generateHtml, generateThemeStyles } from './services/generator';
import { DEFAULT_CONTENT } from './data/defaults';
import { DEFAULT_THEME, saveProject } from './services/storage';
import { EditPanel } from './components/EditPanel';
import { Dashboard } from './components/Dashboard';
import { Plus, Download, Trash2, GripVertical, Code, Edit3, ArrowLeft, Palette } from 'lucide-react';

const App: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  
  // Editor State
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);

  // Auto-save effect
  useEffect(() => {
    if (currentProject) {
        saveProject(currentProject);
    }
  }, [currentProject]);

  const addSection = (type: SectionType) => {
    if (!currentProject) return;
    const newSection: SectionData = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: JSON.parse(JSON.stringify(DEFAULT_CONTENT[type]))
    };
    const updatedProject = {
        ...currentProject,
        sections: [...currentProject.sections, newSection],
        lastModified: Date.now()
    };
    setCurrentProject(updatedProject);
    setEditingSectionId(newSection.id);
  };

  const removeSection = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentProject) return;
    const updatedProject = {
        ...currentProject,
        sections: currentProject.sections.filter(s => s.id !== id),
        lastModified: Date.now()
    };
    setCurrentProject(updatedProject);
    if (editingSectionId === id) setEditingSectionId(null);
  };

  const updateSectionContent = (id: string, newContent: any) => {
    if (!currentProject) return;
    const updatedProject = {
        ...currentProject,
        sections: currentProject.sections.map(s => s.id === id ? { ...s, content: newContent } : s),
        lastModified: Date.now()
    };
    setCurrentProject(updatedProject);
  };

  const updateTheme = (newTheme: ThemeConfig) => {
    if (!currentProject) return;
    setCurrentProject({
        ...currentProject,
        theme: newTheme,
        lastModified: Date.now()
    });
  };

  const handleDownload = () => {
    if (!currentProject) return;
    const html = generateHtml(currentProject.sections, currentProject.theme);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentProject.name.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // If no project selected, show Dashboard
  if (!currentProject) {
      return <Dashboard onSelectProject={setCurrentProject} />;
  }

  const activeSection = currentProject.sections.find(s => s.id === editingSectionId);

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-rs-orange selection:text-white">
      
      {/* Inject Dynamic Theme Styles */}
      <div dangerouslySetInnerHTML={{ __html: generateThemeStyles(currentProject.theme) }} />

      {/* Sidebar Controls */}
      <div className={`${isPanelOpen ? 'w-80' : 'w-20'} flex-shrink-0 border-r border-white/10 bg-[#0a0a0a] transition-all duration-300 flex flex-col z-40 relative`}>
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <button onClick={() => setCurrentProject(null)} className="p-2 hover:bg-white/5 rounded-full text-stone-400 hover:text-white" title="Voltar ao Dashboard">
                <ArrowLeft size={20} />
            </button>
            {isPanelOpen && <h1 className="font-serif text-lg truncate px-2 font-bold">{currentProject.name}</h1>}
            <button onClick={() => setIsPanelOpen(!isPanelOpen)} className="p-2 hover:bg-white/5 rounded-full">
                <GripVertical className="text-stone-400" />
            </button>
        </div>

        {/* Global Design Button */}
        <div className="p-4 border-b border-white/10">
            <button 
                onClick={() => { setEditingSectionId(null); setIsPanelOpen(true); }}
                className={`w-full flex items-center ${isPanelOpen ? 'justify-start' : 'justify-center'} gap-3 p-3 rounded-lg border border-white/5 bg-gradient-rs/10 hover:bg-gradient-rs/20 transition-all group`}
            >
                <Palette size={18} className="text-rs-orange" />
                {isPanelOpen && <span className="text-sm font-medium text-stone-200">Editar Design Global</span>}
            </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {isPanelOpen ? (
             Object.values(SectionType).map((type) => (
                <button
                  key={type}
                  onClick={() => addSection(type)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-rs-purple transition-all group text-left"
                >
                  <Plus size={16} className="text-rs-orange group-hover:text-rs-purple" />
                  <span className="text-sm font-medium text-stone-300 group-hover:text-white capitalize">
                    {type.replace('_', ' ').toLowerCase()}
                  </span>
                </button>
             ))
          ) : (
             <div className="flex flex-col gap-4 items-center">
                 <button className="p-3 bg-gradient-rs rounded-full text-white shadow-lg"><Plus /></button>
             </div>
          )}
        </div>

        <div className="p-4 border-t border-white/10">
            <button 
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 p-4 bg-gradient-rs rounded-xl font-bold text-white shadow-lg hover:shadow-rs-purple/20 transition-all hover:scale-[1.02]"
            >
                {isPanelOpen ? (
                    <>
                        <Download size={20} />
                        <span>Gerar HTML</span>
                    </>
                ) : (
                    <Download size={20} />
                )}
            </button>
        </div>
        
        {/* Render Edit Panel Overlay if panel is open and (section selected OR no section selected for global editing) */}
        {isPanelOpen && (
            <EditPanel 
                section={activeSection} 
                theme={currentProject.theme}
                onUpdateSection={(content) => activeSection && updateSectionContent(activeSection.id, content)} 
                onUpdateTheme={updateTheme}
                onClose={() => {
                    if (activeSection) setEditingSectionId(null);
                    else setIsPanelOpen(false); // If global editing, close panel
                }}
            />
        )}
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 overflow-y-auto relative bg-black scroll-smooth">
        {currentProject.sections.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-500">
                <Code size={64} className="mb-4 opacity-20" />
                <p>Adicione seções para começar</p>
            </div>
        ) : (
            <div className="flex flex-col">
              {currentProject.sections.map((section, index) => {
                const Component = RENDER_MAP[section.type];
                return (
                  <div 
                    key={section.id} 
                    className={`relative group border-b border-dashed border-white/10 cursor-pointer ${editingSectionId === section.id ? 'ring-2 ring-rs-purple z-10' : ''}`}
                    onClick={() => {
                        setEditingSectionId(section.id);
                        if (!isPanelOpen) setIsPanelOpen(true);
                    }}
                  >
                    <div className="absolute right-4 top-4 z-50 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                         <span className="bg-black/80 text-xs text-white px-2 py-1 rounded border border-white/10 flex items-center">
                            {index + 1}. {section.type}
                         </span>
                         <button 
                            onClick={(e) => { e.stopPropagation(); setEditingSectionId(section.id); setIsPanelOpen(true); }}
                            className="bg-blue-500/20 text-blue-400 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                         >
                            <Edit3 size={16} />
                         </button>
                         <button 
                            onClick={(e) => removeSection(section.id, e)}
                            className="bg-red-500/20 text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                         >
                            <Trash2 size={16} />
                         </button>
                    </div>
                    {/* Render the section component with its specific content */}
                    <Component content={section.content} />
                  </div>
                );
              })}
            </div>
        )}
      </div>
    </div>
  );
};

export default App;
