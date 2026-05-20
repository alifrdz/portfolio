"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects"; 
import { ArrowLeft } from "lucide-react";

export default function AllProjectsPage() {
    const [activeTab, setActiveTab] = useState<"Digital Marketing" | "Supporting Skill">("Digital Marketing");

    const filteredProjects = projectsData.filter(
        (p) => p.category === activeTab && p.status === "published"
    );

    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-12 pb-24 px-8 font-['Poppins']">
            
            {/* TRIK JITU: Memaksa komponen Navbar untuk display: none khusus saat halaman ini terbuka */}
            <style dangerouslySetInnerHTML={{__html: `
                nav, [class*="Navbar"] { display: none !important; }
            `}} />

            <div className="max-w-7xl mx-auto">
                
                {/* Header & Back Button */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-6 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter">
                            All Projects
                        </h1>
                    </div>

                    {/* Tab Filter */}
                    <div className="flex items-center bg-gray-100 p-1.5 rounded-full w-fit">
                        {["Digital Marketing", "Supporting Skill"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                                    activeTab === tab 
                                    ? "bg-white text-black shadow-sm" 
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                                    <Image 
                                        src={project.thumbnail || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"} 
                                        alt={project.title} 
                                        fill 
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className={`px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest text-white shadow-md ${
                                            project.projectType === "Final Project" ? "bg-blue-600" : "bg-gray-800"
                                        }`}>
                                            {project.projectType}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h2 className="text-xl font-black text-black leading-tight mb-3 line-clamp-2">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 line-clamp-3 mb-8 flex-grow font-medium">
                                        {project.description}
                                    </p>
                                    
                                    <Link 
                                        href={`/projects/${project.slug}`} 
                                        className="mt-auto w-full py-3.5 bg-gray-50 text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-center inline-block"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-400 font-medium">No projects published in this category yet.</p>
                    </div>
                )}

            </div>
        </main>
    );
}