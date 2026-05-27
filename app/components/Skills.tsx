export default function Skills() {
  const skillCategories = [
    { 
      category: "Languages & Frameworks", 
      items: ["Python", "JavaScript", "TypeScript", "React.js", "Next.js", "React Native", "Node.js", "Express.js", "C++", "C#"] 
    },
    { 
      category: "Styling & Maps", 
      items: ["HTML5", "CSS", "Leaflet", "Mapbox", "Responsive Design", "UI/UX Principles"] 
    },
    { 
      category: "Databases", 
      items: ["Firestore", "PostgreSQL", "MySQL", "MongoDB"] 
    },
    { 
      category: "APIs & DevTools", 
      items: ["REST APIs", "JSON", "System Design", "Git", "GitHub", "GitHub Actions", "Docker", "Jira", "Agile"] 
    }
  ];

  return (
    <div className="space-y-6 py-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        {/* FIXED: Swapped heading to text-white and matching dark divider line */}
        <h2 className="text-2xl font-bold tracking-tight text-white">Skills</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
      </div>

      {/* Categories Clean 2-Column Grid Layout */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {skillCategories.map((group) => (
          <div 
            key={group.category} 
            /* 
              FIXED CONTAINER CLASSES:
              - Swapped indigo light card for a premium translucent dark container 
              - Uses slate-900/30 and a faint border line to stay layered over your glow background
            */
            className="p-5 rounded-2xl border border-slate-900/80 bg-slate-900/30 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              {/* Category Title Header */}
              {/* FIXED: Shifted text color from dark purple to a vibrant neon text-blue-400 */}
              <h3 className="text-xs font-bold text-blue-400 font-mono uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              
              {/* High-Visibility Badges Container */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span 
                    key={skill} 
                    /* 
                      FIXED BADGE CLASSES:
                      - Remade base styling into a rich dark mode pill (bg-slate-950/60 text-slate-300 border-slate-800)
                      - Swapped light purple hover styles for a solid matching blue accent (hover:bg-blue-600 hover:text-white hover:border-blue-500)
                      - Cleaned up shadow profile parameters
                    */
                    className="text-sm px-3 py-1.5 rounded-xl bg-slate-950/60 text-slate-300 border border-slate-800/80 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 cursor-default font-medium shadow-md shadow-black/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}