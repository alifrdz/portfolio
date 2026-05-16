"use client";

import { projectsData } from "../../projects"; 
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import React from "react"; // Tambahin ini

// Tambahkan 'async' atau gunakan React.use buat unwrap params
export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // Di Next.js 15, params adalah Promise, jadi harus di-use
    const { slug } = React.use(params);
    
    // Cari data project
    const project = projectsData.find((p) => p.slug === slug);

    // DEBUG: Cek di console log browser (F12) muncul gak datanya
    console.log("Slug yang dicari:", slug);
    console.log("Data ketemu:", project);

    if (!project || project.status === "draft") {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-32 pb-20 px-8">
            <div className="max-w-4xl mx-auto">
                {/* Tombol Back */}
                <Link href="/#projects" className="group flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-12">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-widest">Back to Projects</span>
                </Link>

                <header className="mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        {project.label}
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8"
                    >
                        {project.title}
                    </motion.h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        {project.description}
                    </p>
                </header>

                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 mb-20 shadow-2xl">
                    <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">The Challenge</h2>
                            <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                        </section>
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">The Solution</h2>
                            <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                        </section>
                    </div>

                    <aside className="space-y-12">
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Key Results</h2>
                            <div className="space-y-4">
                                {project.impact.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                        <span className="text-black font-bold text-sm leading-snug">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    );
}