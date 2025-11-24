
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { getProjects, createNewProject, deleteProject } from '../services/storage';
import { Plus, Trash2, Edit, FileText, LayoutTemplate } from 'lucide-react';

interface DashboardProps {
  onSelectProject: (project: Project) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onSelectProject }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    const newProject = createNewProject(newProjectName);
    onSelectProject(newProject);
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Tem certeza que deseja excluir este projeto?')) {
        deleteProject(id);
        setProjects(getProjects());
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex items-center justify-between border-b border-white/10 pb-8">
            <div>
                <h1 className="text-4xl font-serif mb-2">Meus Projetos</h1>
                <p className="text-stone-400">Gerencie seus media kits</p>
            </div>
            <button 
                onClick={() => setIsCreating(true)}
                className="bg-gradient-rs px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
                <Plus size={20} /> Novo Projeto
            </button>
        </header>

        {isCreating && (
             <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                 <div className="bg-[#111] p-8 rounded-2xl border border-white/10 w-full max-w-md">
                     <h3 className="text-2xl font-serif mb-6">Novo Media Kit</h3>
                     <form onSubmit={handleCreate}>
                         <input 
                            autoFocus
                            type="text" 
                            placeholder="Nome do Projeto (ex: Media Kit 2025)" 
                            className="w-full bg-black/50 border border-white/20 p-4 rounded-lg text-white mb-6 focus:border-rs-purple outline-none"
                            value={newProjectName}
                            onChange={(e) => setNewProjectName(e.target.value)}
                         />
                         <div className="flex gap-4">
                             <button 
                                type="button" 
                                onClick={() => setIsCreating(false)}
                                className="flex-1 py-3 text-stone-400 hover:text-white transition-colors"
                             >
                                Cancelar
                             </button>
                             <button 
                                type="submit"
                                className="flex-1 bg-gradient-rs py-3 rounded-lg font-bold"
                             >
                                Criar
                             </button>
                         </div>
                     </form>
                 </div>
             </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.length === 0 && (
                <div className="col-span-full py-20 text-center text-stone-500 border border-dashed border-white/10 rounded-2xl bg-white/5">
                    <LayoutTemplate size={48} className="mx-auto mb-4 opacity-50"/>
                    <p className="text-xl">Nenhum projeto encontrado</p>
                    <p className="text-sm">Crie um novo projeto para começar</p>
                </div>
            )}

            {projects.map(project => (
                <div 
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-rs-purple transition-all duration-300 cursor-pointer hover:-translate-y-1 relative"
                >
                    <div className="h-40 bg-gradient-to-br from-stone-900 to-black relative flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://rsplay.com.br/img/rose/rose18.jpg')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                        <FileText size={40} className="relative z-10 text-white/20 group-hover:text-white/80 transition-colors" />
                    </div>
                    <div className="p-6">
                        <h3 className="font-serif text-xl mb-2 text-white group-hover:text-rs-orange transition-colors">{project.name}</h3>
                        <p className="text-xs text-stone-500 uppercase tracking-wider mb-6">
                            Atualizado em {new Date(project.lastModified).toLocaleDateString()}
                        </p>
                        
                        <div className="flex items-center justify-between border-t border-white/5 pt-4">
                            <span className="text-xs text-stone-400 flex items-center gap-2">
                                <LayoutTemplate size={14} /> {project.sections.length} seções
                            </span>
                            <button 
                                onClick={(e) => handleDelete(project.id, e)}
                                className="p-2 text-stone-600 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
