"use client"; // Allows interactivity like click events!

export default function Projects() {
  const projects = [
    {
      title: "STEM Minds AI-Powered Crop Health Assistant",
      tag: "Capstone Project",
      tech: ["React", "Python", "TensorFlow", "PyTorch"],
      description: "Led development of a deep learning image classification model achieving 86% accuracy to classify crop health from images. Connected the asset seamlessly via a REST API to deliver sub-second inference runtimes.",
      actionUrl: "/reports/Stemminds report.docx", // Word Document Download
      isDownload: true
    },
    {
      title: "RentHub Rental Property Management App",
      tag: "Mobile Development",
      tech: ["React Native", "TypeScript", "Firebase"],
      description: "Developed a native mobile app enabling secure user authentication and real-time database browsing for 1000+ rental listings. Integrated mapping filters that decreased property search times by 40%.",
      actionUrl: "https://github.com/kolossi101/RentHub", // External GitHub Link
      isDownload: false
    },
    {
      title: "Car Price Prediction Regression Analysis",
      tag: "Machine Learning Pipeline",
      tech: ["Python", "Scikit-learn"],
      description: "Engineered robust ML regression pipelines on 8,128 samples, profiling Gradient Boosting and Random Forest models ($R^2=0.965$) to optimize execution latency and memory constraints for production.",
      actionUrl: "/reports/car-prediction-report.pdf", // PDF Download
      isDownload: true
    },
    {
      title: "Natural Language Processing AI Text Detector",
      tag: "NLP Research",
      tech: ["Python", "DistilBERT", "Hugging Face", "Scikit-learn"],
      description: "Developed and compared NLP models to differentiate machine-generated language from human writing. Evaluated a TF-IDF Logistic Regression baseline against a fine-tuned DistilBERT transformer pipeline, achieving an optimal classification accuracy of 98.5% with significantly minimized false-negative error rates.",
      actionUrl: "/reports/Report NLP.docx", // Newly added section matching your uploaded document!
      isDownload: true
    },
  ];

  return (
    <div className="space-y-6 py-4">
      {/* Header Layout */}
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold tracking-tight text-white">Projects</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
      </div>

      {/* Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative p-6 rounded-2xl border border-slate-900/80 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/90 hover:border-slate-800 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            /* Clicking anywhere on a link-card (RentHub) safely opens the external window link */
            onClick={() => !project.isDownload && window.open(project.actionUrl, "_blank", "noopener,noreferrer")}
          >
            <div>
              {/* Title & Button Alignment Row */}
              <div className="flex justify-between items-start gap-4 mb-2">
                <div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-blue-400 uppercase block mb-1">
                    {project.tag}
                  </span>
                  <h3 className="font-bold text-base text-slate-200 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* DYNAMIC ACTION BUTTON */}
                {project.actionUrl && (
                  <a
                    href={project.actionUrl}
                    download={project.isDownload}
                    target={project.isDownload ? undefined : "_blank"}
                    rel={project.isDownload ? undefined : "noopener noreferrer"}
                    onClick={(e) => e.stopPropagation()} // Prevents event bubbling/flickering clicks
                    className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-950/20 transition-all duration-200 shrink-0 z-20"
                    title={project.isDownload ? "Download Report" : "View Code Repository"}
                  >
                    {project.isDownload ? (
                      /* Down Arrow Icon for Downloads (STEM Minds, Car Price, & NLP Detector) */
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
                        <path d="M12 17V3"/>
                        <path d="m6 11 6 6 6-6"/>
                        <path d="M19 21H5"/>
                      </svg>
                    ) : (
                      /* GitHub Branding Icon specialized for RentHub */
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
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    )}
                  </a>
                )}
              </div>
              
              <p className="text-sm text-slate-400 group-hover:text-slate-300 leading-relaxed mb-4 transition-colors duration-300">
                {project.description}
              </p>
            </div>

            {/* Tech Badges Container */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="text-[11px] font-mono font-medium bg-slate-950/40 text-slate-400 px-2.5 py-0.5 rounded-md border border-slate-900 group-hover:bg-blue-950/40 group-hover:text-blue-300 group-hover:border-blue-900/50 transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}