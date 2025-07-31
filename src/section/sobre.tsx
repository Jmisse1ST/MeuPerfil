

const TechBadges = () => {
  const badges = [
    { icon: "devicon-typescript-plain", name: "Typescript", color: "bg-blue-600" },
    { icon: "devicon-nextjs-plain", name: "Next.js", color: "bg-black" },
    { icon: "devicon-react-plain", name: "React", color: "bg-blue-500" },
    { icon: "devicon-php-plain", name: "Laravel", color: "bg-purple-600" },
    { icon: "devicon-mysql-plain", name: "mySQL", color: "bg-blue-700" },
    { icon: "devicon-html5-plain", name: "HTML5", color: "bg-orange-500" },
    { icon: "devicon-css3-plain", name: "CSS3", color: "bg-blue-400" },
    { icon: "devicon-git-plain", name: "Git(Hub)", color: "bg-orange-600" },
    { icon: "devicon-git-plain", name: "Github Actions", color: "bg-gray-800" },
    { icon: "devicon-aws-plain", name: "Digital Ocean", color: "bg-blue-300" },
    { icon: "devicon-google-plain", name: "Firebase Auth", color: "bg-yellow-500" },
  ];

  return (
    <div className="featured_stackContainer">
      <ul className="badges_list flex flex-wrap gap-4 justify-center opacity-100">
        {badges.map((badge, index) => (
          <li 
            key={index}
            className={`badges_item flex items-center gap-2 px-4 py-2 rounded-full ${badge.color} text-white opacity-0 translate-y-5 transition-all duration-500 ease-out`}
            style={{ animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s` }}
          >
            <i className={`${badge.icon} text-xl`}></i>
            <span className="badges_title text-sm font-medium">{badge.name}</span>
          </li>
        ))}
      </ul>
      
      {/* Add this to your global CSS or Tailwind config for the animation */}
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TechBadges;