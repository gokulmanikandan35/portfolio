
import Section from './ui/Section';
import SkillCard from './ui/SkillCard';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Section className="bg-gray-50" id="skills">
      <div className="animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Skills & Expertise
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Leveraging modern web technologies to build exceptional user experiences
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className={`animate-fade-in stagger-delay-${index % 3 + 1}`}>
            <SkillCard
              icon={<skill.icon className="w-6 h-6" />}
              name={skill.name}
              description={skill.description}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}