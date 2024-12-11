import  { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  name: string;
  description: string;
}

export default function SkillCard({ icon, name, description }: SkillCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mr-4 group-hover:bg-blue-100 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}