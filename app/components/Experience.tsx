export default function Experience() {
  const bulletPoints = [
    "Built and iterated on user-facing features using React.js, Next.js, and TypeScript, improving load times by up to 25% and increasing user engagement metrics.",
    "Developed 10+ reusable UI components, reducing frontend development time for new features by 30%.",
    "Integrated REST APIs and managed asynchronous data flows to ensure seamless user interactions.",
    "Participated in 15+ code reviews, incorporating feedback that improved code coverage and reduced bugs in production by 20%.",
    "Contributed to frontend architecture discussions and documentation, enhancing scalability for future feature additions."
  ];

  return (
    <div className="space-y-6 py-4">
      {/* Premium Subtitle Heading */}
      {/* FIXED: Changed text color to crisp white and border line to dark slate-800 */}
      <h2 className="text-2xl font-bold tracking-tight border-b border-slate-800 pb-2 text-white">
        Experience
      </h2>
      
      <div className="space-y-2">
        {/* Role & Timeline Grid Row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          {/* FIXED: Changed text color to light slate-200 */}
          <h3 className="font-bold text-lg text-slate-200">
            Development Intern
          </h3>
          {/* FIXED: Replaced light gray badge with a translucent dark slate pill */}
          <span className="text-sm font-mono text-slate-400 bg-slate-900/60 border border-slate-800/80 px-2.5 py-0.5 rounded-md self-start sm:self-auto">
            May 2024-Aug 2024 & Jan 2025 - Apr2025
          </span>
        </div>
        
        {/* Company Subtitle */}
        {/* FIXED: Swapped light indigo-600 to an ambient blue-400 */}
        <p className="text-sm text-blue-400 font-semibold tracking-wide">
          Human City — Toronto, ON
        </p>
        
        {/* Bullet Points with Enhanced Readability Contrast */}
        {/* FIXED: Changed body text to slate-400 and list markers to slate-700 */}
        <ul className="list-disc list-outside pl-5 pt-2 space-y-2.5 text-slate-400 text-sm leading-relaxed">
          {bulletPoints.map((point, index) => (
            <li key={index} className="marker:text-slate-700">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}