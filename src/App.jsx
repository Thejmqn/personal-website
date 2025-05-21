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
          <div className="text-xl font-bold tracking-tight">Joe Moran Online</div>
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
          <p>© {new Date().getFullYear()} Joe Moran. No rights reserved.</p>
          <p className="text-sm mt-2">Please see top bar for other links.</p>
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Joseph (Joe) Moran Website</h1>
        <p className="text-xl text-gray-600">
          A deep dive into the world of Joe. This page is under construction currently.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Joe Moran - Online</h2>
        <p className="text-gray-600 mb-4">
          If you are reading this page, you probably already have a decent idea of who I am. Although if you don't,
          that is pretty cool. I am a Computer Science (yikes) major at the University of Virginia, Charolettsville. 
          I have some slightly unique hobbies, interests, and beliefs, so I will just be throwing whatever I think of onto here if you are interested.
        </p>
        <p className="text-gray-600 mb-4">
          I am making this page to create a more free form website where I can express my thoughts and also show off some
          past projects. I think most social media platforms are a bit too restrictive in terms of the customization they allow,
          so I just decided to quickly put together my own page instead. I'll still be posting links to this page on some social media though.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
            Serious Projects and Info
          </button>
          <button className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors duration-200">
            Biweekly notes on who knows what.
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FeatureCard 
          title="Skills" 
          description="None (To be written)"
          icon="⚡"
        />
        <FeatureCard 
          title="Experience" 
          description="None (To be written)"
          icon="🔧"
        />
        <FeatureCard 
          title="Philosophy" 
          description="When all you have is a hammer, everything looks like a nail."
          icon="💭"
        />
      </div>
      
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact</h3>
        <p className="text-gray-600 mb-4">
          Please see the contact page. More info is to be written soon.
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
        Coming soon, if I remember.
      </p>
    </div>
  );
};