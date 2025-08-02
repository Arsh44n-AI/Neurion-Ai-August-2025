import React, { useState } from 'react';
import { Book, Code, Download, ExternalLink, ChevronRight } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const Documentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  const tabs = [
    { id: 'getting-started', label: 'GETTING_STARTED', icon: <Book className="w-4 h-4" /> },
    { id: 'api-reference', label: 'API_REFERENCE', icon: <Code className="w-4 h-4" /> },
    { id: 'integrations', label: 'INTEGRATIONS', icon: <ExternalLink className="w-4 h-4" /> },
    { id: 'downloads', label: 'DOWNLOADS', icon: <Download className="w-4 h-4" /> }
  ];

  const gettingStartedContent = [
    {
      title: "Quick Start Guide",
      description: "Get up and running with Neurion AI in under 30 minutes",
      steps: [
        "Initial consultation and requirements analysis",
        "Custom AI solution design and architecture",
        "Implementation and integration with existing systems",
        "Testing, optimization, and team training",
        "Go-live and ongoing support"
      ]
    },
    {
      title: "System Requirements",
      description: "Technical prerequisites for optimal performance",
      steps: [
        "Modern web browser (Chrome, Firefox, Safari, Edge)",
        "Stable internet connection (minimum 10 Mbps)",
        "CRM or business management system for integration",
        "Email marketing platform (optional)",
        "Social media accounts for automation (optional)"
      ]
    }
  ];

  const apiContent = [
    {
      endpoint: "POST /api/v1/leads",
      description: "Create and qualify new leads automatically",
      example: `{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "TechCorp",
  "source": "website"
}`
    },
    {
      endpoint: "GET /api/v1/analytics",
      description: "Retrieve performance metrics and insights",
      example: `{
  "conversion_rate": 0.23,
  "total_leads": 1250,
  "qualified_leads": 287,
  "roi": 3.2
}`
    }
  ];

  const integrations = [
    { name: "Salesforce", status: "Available", type: "CRM" },
    { name: "HubSpot", status: "Available", type: "CRM" },
    { name: "Mailchimp", status: "Available", type: "Email" },
    { name: "Slack", status: "Available", type: "Communication" },
    { name: "Zapier", status: "Available", type: "Automation" },
    { name: "Microsoft Teams", status: "Coming Soon", type: "Communication" }
  ];

  const downloads = [
    { name: "Implementation Guide", type: "PDF", size: "2.3 MB" },
    { name: "API Documentation", type: "PDF", size: "1.8 MB" },
    { name: "Best Practices Handbook", type: "PDF", size: "3.1 MB" },
    { name: "ROI Calculator", type: "Excel", size: "0.5 MB" }
  ];

  return (
    <section id="documentation" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-semibold text-sm tracking-wide uppercase mb-4 font-mono">
            <TypewriterText text=">>> DOCUMENTATION" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            <TypewriterText text="TECHNICAL RESOURCES" />
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
            <TypewriterText 
              text="Comprehensive documentation, API references, and integration guides to help you maximize your Neurion AI implementation."
              speed={40}
            />
          </p>
        </div>

        <div className="bg-black/70 backdrop-blur-sm rounded-2xl border border-cyan-400/30 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-cyan-400/30">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors font-mono ${
                    activeTab === tab.id
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-green-300 hover:text-cyan-400'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'getting-started' && (
              <div className="space-y-8">
                {gettingStartedContent.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-white mb-3 font-mono">
                      {section.title}
                    </h3>
                    <p className="text-green-300 mb-4 font-mono">
                      {section.description}
                    </p>
                    <ol className="space-y-2">
                      {section.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="bg-cyan-400/20 text-cyan-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0 font-mono border border-cyan-400/50">
                            {idx + 1}
                          </span>
                          <span className="text-green-300 font-mono">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'api-reference' && (
              <div className="space-y-6">
                <p className="text-green-300 mb-6 font-mono">
                  RESTful API endpoints for integrating Neurion AI with your existing systems.
                </p>
                {apiContent.map((api, index) => (
                  <div key={index} className="border border-cyan-400/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <code className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded font-mono text-sm border border-cyan-400/50">
                        {api.endpoint}
                      </code>
                    </div>
                    <p className="text-green-300 mb-3 font-mono">{api.description}</p>
                    <pre className="bg-black/50 p-3 rounded text-sm overflow-x-auto border border-cyan-400/30">
                      <code className="text-green-300 font-mono">{api.example}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'integrations' && (
              <div>
                <p className="text-green-300 mb-6 font-mono">
                  Seamlessly connect Neurion AI with your favorite business tools and platforms.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {integrations.map((integration, index) => (
                    <div key={index} className="border border-cyan-400/30 rounded-lg p-4 hover:border-cyan-400 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white font-mono">
                          {integration.name}
                        </h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium font-mono ${
                          integration.status === 'Available'
                            ? 'bg-green-400/20 text-green-400 border border-green-400/50'
                            : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/50'
                        }`}>
                          {integration.status}
                        </span>
                      </div>
                      <p className="text-sm text-cyan-300 font-mono">{integration.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'downloads' && (
              <div>
                <p className="text-green-300 mb-6 font-mono">
                  Download comprehensive guides, documentation, and tools to support your implementation.
                </p>
                <div className="space-y-3">
                  {downloads.map((download, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-cyan-400/30 rounded-lg hover:border-cyan-400 transition-colors">
                      <div className="flex items-center">
                        <Download className="w-5 h-5 text-cyan-400 mr-3" />
                        <div>
                          <h4 className="font-semibold text-white font-mono">
                            {download.name}
                          </h4>
                          <p className="text-sm text-green-300 font-mono">
                            {download.type} • {download.size}
                          </p>
                        </div>
                      </div>
                      <button className="text-cyan-400 hover:text-green-400 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};