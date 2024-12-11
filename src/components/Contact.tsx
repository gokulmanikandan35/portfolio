
import { Mail, MapPin, Phone } from 'lucide-react';
import Section from './ui/Section';

export default function Contact() {
  return (
    <Section className="bg-white" id="contact">
      <div className="animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Let's discuss how we can work together to bring your ideas to life
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8 animate-fade-in stagger-delay-1">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-gray-600">your.email@example.com</p>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-gray-600">Your phone number</p>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-gray-600">Your location</p>
            </div>
          </div>
        </div>
        <form className="space-y-6 animate-fade-in stagger-delay-2" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}