import { useState } from 'react';

// Main App Component
export default function PersonalWebsite() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  // Navigation items
  const navItems = ['Home', 'Notes', 'Projects', 'Hobbies', 'Contact'];
  
  // Content for each page
  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Notes':
        return <PlaceholderPage title="Notes" />;
      case 'Projects':
        return <PlaceholderPage title="Projects" />;
      case 'Hobbies':
        return <PlaceholderPage title="Hobbies" />;
      case 'Contact':
        return <PlaceholderPage title="Contact" />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Your Name</div>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`px-2 py-1 rounded transition-colors duration-200 ${
                  currentPage === item 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Page Content */}
      <div className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved. Or whatever.</p>
          <p className="text-sm mt-2">Made with equal parts coffee, sarcasm, and React.</p>
        </div>
      </footer>
    </div>
  );
}

// Home Page Component
const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello, I'm Your Name</h1>
        <p className="text-xl text-gray-600">
          Professional by day, actually still professional by night—just with better jokes.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to My Little Corner of the Internet</h2>
        <p className="text-gray-600 mb-4">
          I'm a [your profession] who believes that excellence and humor aren't mutually exclusive.
          If you're looking for someone who can deliver top-notch work while maintaining a healthy
          perspective on life, you've come to the right place.
        </p>
        <p className="text-gray-600 mb-4">
          While others might bore you with corporate jargon and buzzwords, I prefer clear communication
          with just enough wit to keep things interesting. Think of this site as my digital business card,
          but one that doesn't take itself too seriously.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
            Check Out My Work
          </button>
          <button className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors duration-200">
            Or Don't. I'm Not Your Boss.
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FeatureCard 
          title="Skills" 
          description="I'm pretty good at a lot of things. Exceptional at a few. Terrible at karaoke."
          icon="⚡"
        />
        <FeatureCard 
          title="Experience" 
          description="Years of solving problems that shouldn't have existed in the first place."
          icon="🔧"
        />
        <FeatureCard 
          title="Philosophy" 
          description="Work smart. Be kind. Don't take yourself too seriously."
          icon="💭"
        />
      </div>
      
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Ready to Connect?</h3>
        <p className="text-gray-600 mb-4">
          Feel free to explore the site or reach out directly. I typically respond within 24 hours,
          unless I'm camping or having an existential crisis.
        </p>
        <button className="bg-gray-800 hover:bg-black text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
          Say Hello
        </button>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Placeholder for other pages
const PlaceholderPage = ({ title }) => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title} Page</h1>
      <p className="text-xl text-gray-600">
        This page is coming soon. Or maybe it's not. The suspense is terrible, I hope it lasts.
      </p>
    </div>
  );
};