
import { Github, Linkedin, Mail } from 'lucide-react';
import Section from './ui/Section';
import SocialLink from './ui/SocialLink';

export default function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="text-center">
        <div className="animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Gokul Manikandan"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-500 hover:border-blue-400 transition-colors duration-300 shadow-xl"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 animate-fade-in stagger-delay-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Gokul Manikandan
        </h1>
        <p className="text-xl text-blue-300 mb-8 animate-fade-in stagger-delay-2">Frontend Developer</p>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in stagger-delay-3">
          Passionate React.js developer crafting beautiful and performant web applications.
          Specialized in creating responsive, user-friendly interfaces with modern web technologies.
        </p>
        <div className="flex justify-center space-x-6 animate-fade-in stagger-delay-3">
          <SocialLink
            href="https://github.com/yourusername"
            icon={Github}
            label="GitHub Profile"
          />
          <SocialLink
            href="https://linkedin.com/in/yourusername"
            icon={Linkedin}
            label="LinkedIn Profile"
          />
          <SocialLink
            href="mailto:your.email@example.com"
            icon={Mail}
            label="Email Contact"
          />
        </div>
      </div>
    </Section>
  );
}