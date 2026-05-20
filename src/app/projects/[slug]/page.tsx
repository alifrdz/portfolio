"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects"; 
import { ArrowLeft, FileText, CheckCircle2, ArrowRight } from "lucide-react";

interface ProjectDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailsPage({ params }: ProjectDetailsProps) {
  const resolvedParams = use(params);
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project || project.status === "draft") {
    notFound();
  }

  const galleryImages = project.gallery && project.gallery.length > 0 ? project.gallery : [project.thumbnail];
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-black pt-12 pb-24 px-8 font-['Poppins'] antialiased">
      
      {/* SAKTI: Memaksa komponen Navbar global untuk display: none khusus di halaman ini */}
      <style dangerouslySetInnerHTML={{__html: `
        nav, [class*="Navbar"] { display: none !important; }
      `}} />

      <div className="max-w-7xl mx-auto">
        
        {/* BACK BUTTON */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-12 group font-bold text-xs uppercase tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Projects
        </Link>

        {/* HEADER SECTION */}
        <div className="border-b border-gray-100 pb-12 mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-gray-100 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
              {project.label}
            </span>
            <span className={`px-4 py-1.5 text-white text-[10px] font-black uppercase tracking-widest rounded-full ${
              project.projectType === "Final Project" ? "bg-[#3B82F6]" : "bg-gray-800"
            }`}>
              {project.projectType}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-tight max-w-4xl">
            {project.title}
          </h1>
          
          <p className="text-gray-500 mt-6 text-base md:text-lg max-w-3xl font-medium leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* CORE CONTENT & SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* KOLOM KIRI: Visual & Galeri */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              {/* Gambar Besar Utama */}
              <div className="relative aspect-[16/10] bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
                <Image 
                  src={activeImage} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Grid Thumbnail */}
              {galleryImages.length > 1 && (
                <div className="grid grid-cols-5 gap-3">
                  {galleryImages.slice(0, 5).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border-2 transition-all cursor-pointer ${
                        activeImage === img 
                          ? "border-[#3B82F6] scale-95 shadow-sm" 
                          : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* STRUKTUR NARASI CHALLENGE & SOLUTION */}
            <div className="bg-white border border-gray-50 rounded-[2rem] p-8 md:p-10 shadow-sm space-y-10">
              <div>
                <h3 className="text-xs font-black text-[#3B82F6] uppercase tracking-widest mb-4">
                  The Challenge
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                  {project.challenge}
                </p>
              </div>
              
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-xs font-black text-[#3B82F6] uppercase tracking-widest mb-4">
                  The Solution
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Sidebar Clean */}
          <div className="space-y-6 lg:sticky lg:top-12">
            
            {/* BOX PDF DOCUMENT */}
            {project.documentUrl && (
              <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm text-center">
                <p className="text-xs font-bold text-gray-400 mb-4 tracking-tight">Review my original live research work:</p>
                <a 
                  href={project.documentUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest border border-transparent hover:bg-[#3B82F6] transition-colors duration-300 shadow-md"
                >
                  <FileText size={15} />
                  View Full Documentation
                </a>
              </div>
            )}

            {/* BOX SKILLS & TOOLS COMPACT */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm space-y-8">
              
              {/* SUB-SECTION 1: Skills Applied */}
              <div>
                <h4 className="text-xs font-black text-[#3B82F6] uppercase tracking-widest mb-2 border-b border-gray-50 pb-3 flex items-center justify-between">
                  <span>Skills Applied</span>
                  <span className="text-[10px] text-gray-400">({project.impact.length})</span>
                </h4>
                <div className="space-y-4">
                  {project.impact.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-[#3B82F6] mt-0.5 flex-shrink-0" />
                      <span className="text-xs font-bold text-gray-700 leading-snug">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUB-SECTION 2: Tools Used (Isi Poin Skill Metodologi) */}
              <div>
                <h4 className="text-xs font-black text-[#3B82F6] uppercase tracking-widest mb-2 border-b border-gray-50 pb-3">
                  Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></span>
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* FIX MURNI SAKTI: Mengubah Tampilan Software Menjadi Barisan Kotak Ikon Gambar Tanpa Teks */}
              {project.software && project.software.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-black text-[#3B82F6] uppercase tracking-widest mb-2 border-b border-gray-50 pb-3">
                    Software & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.software.map((soft, idx) => (
                      <div 
                        key={idx} 
                        className="relative w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                        title={soft.name} // Nama software tetep muncul tipis pas kursor di-hover (bagus buat UX)
                      >
                        {soft.icon ? (
                          <div className="relative w-10 h-10">
                            <Image 
                              src={soft.icon} 
                              alt={soft.name} 
                              fill 
                              className="object-contain filter group-hover:scale-105 transition-transform duration-300" 
                            />
                          </div>
                        ) : (
                          <span className="text-[10px] font-bold text-gray-400 text-center px-1 line-clamp-2">{soft.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* BACK TO GALLERY LIST BUTTON */}
            <div>
              <Link href="/projects" className="block w-full">
                <div className="w-full py-4 flex items-center justify-center gap-2 border border-gray-200 text-gray-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-center cursor-pointer shadow-sm">
                  See All Portfolios
                  <ArrowRight size={12} />
                </div>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}