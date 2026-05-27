import Image from 'next/image';

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-8">
      {/* Left Column: Text Content & Action Row */}
      <div className="md:col-span-2 space-y-6 order-2 md:order-1">
        {/* Modern Blue/Glass Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Active & Available for Roles
        </div>

        {/* Clean, High-Contrast White Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white title">
          Apeksha Nanda
        </h1>
        
        {/* High-Contrast Dark-Mode Typography */}
        <p className="text-lg text-slate-400 leading-relaxed font-normal">
          Detail-oriented <span className="text-white font-semibold underline decoration-blue-500/50 decoration-2 underline-offset-4">Software Engineer</span> with approximately one year of hands-on experience building user-facing web and mobile applications using <span className="font-medium text-white">React, JavaScript, and TypeScript</span>. I specialize in developing clean frontend architectures, fluid interfaces, and handling async workflows within collaborative Agile teams.
        </p>

        {/* Premium Dark-Mode Action Links Group */}
        <div className="flex flex-wrap gap-4 pt-2 text-sm font-mono">
          
          {/* PRIMARY CALL TO ACTION: RESUME DOWNLOAD LINK */}
          <a 
            href="/FullStackDeveloper.pdf" 
            download="Apeksha_Nanda_Resume.pdf"
            className="px-5 py-2.5 rounded-xl border border-blue-500/30 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 shadow-md shadow-black/20"
            title="Download PDF Resume"
          >
            {/* Minimalist Inline SVG Download Arrow Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>

          {/* Contact & Social Links */}
          <a 
            href="mailto:apekshananda51@gmail.com" 
            className="px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/60 text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center gap-1.5 shadow-md shadow-black/20"
          >
            Email Me <span>✉️</span>
          </a>
          <a 
            href="https://github.com/apekshananda" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/60 text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md shadow-black/20"
          >
            GitHub ↗
          </a>
          <a 
            href="https://www.linkedin.com/in/apeksha-nanda-197977214/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/60 text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md shadow-black/20"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Right Column: Bounded Container Profile Picture */}
      <div className="md:col-span-1 flex justify-center md:justify-end order-1 md:order-2">
        <div className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
          {/* Subtle blue background ambient lighting bloom around your picture */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative w-full h-full overflow-hidden rounded-2xl border border-slate-800 shadow-2xl bg-slate-950">
            <Image 
              src="/profile.jpg" 
              alt="Apeksha Nanda" 
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}