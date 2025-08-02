import React, { useState } from 'react';
import { Shield, Zap, Database, Network, Brain, Cpu, Lock, Globe } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { NeonBackground } from './NeonBackground';

export const AdvancedProtocols: React.FC = () => {
  const [activeTab, setActiveTab] = useState('security');

  const tabs = [
    { id: 'security', label: 'SECURITY_PROTOCOLS', icon: <Shield className="w-4 h-4" /> },
    { id: 'performance', label: 'PERFORMANCE_OPTIMIZATION', icon: <Zap className="w-4 h-4" /> },
    { id: 'integration', label: 'SYSTEM_INTEGRATION', icon: <Network className="w-4 h-4" /> },
    { id: 'analytics', label: 'ADVANCED_ANALYTICS', icon: <Database className="w-4 h-4" /> }
  ];

  const securityProtocols = [
    {
      title: "End-to-End Encryption",
      description: "Military-grade encryption for all data transmissions",
      features: [
        "AES-256 encryption standard",
        "Zero-knowledge architecture",
        "Encrypted data storage",
        "Secure API communications",
        "Real-time threat detection"
      ]
    },
    {
      title: "Access Control Matrix",
      description: "Multi-layered authentication and authorization systems",
      features: [
        "Multi-factor authentication",
        "Role-based access control",
        "Session management",
        "Audit trail logging",
        "Intrusion detection"
      ]
    }
  ];

  const performanceFeatures = [
    {
      endpoint: "Real-time Processing",
      description: "Sub-millisecond response times for critical operations",
      metrics: `{
  "response_time": "< 50ms",
  "throughput": "10,000+ req/sec",
  "uptime": "99.99%",
  "latency": "< 10ms"
}`
    },
    {
      endpoint: "Auto-scaling Infrastructure",
      description: "Dynamic resource allocation based on demand",
      metrics: `{
  "scaling_speed": "< 30 seconds",
  "efficiency": "95%+",
  "cost_optimization": "40% reduction",
  "load_balancing": "intelligent"
}`
    }
  ];

  const integrations = [
    { name: "Enterprise CRM Systems", status: "Active", type: "Business Intelligence", icon: <Database className="w-5 h-5" /> },
    { name: "Cloud Infrastructure", status: "Active", type: "Scalability", icon: <Globe className="w-5 h-5" /> },
    { name: "AI/ML Frameworks", status: "Active", type: "Intelligence", icon: <Brain className="w-5 h-5" /> },
    { name: "Security Protocols", status: "Active", type: "Protection", icon: <Lock className="w-5 h-5" /> },
    { name: "Real-time Analytics", status: "Active", type: "Insights", icon: <Zap className="w-5 h-5" /> },
    { name: "Quantum Computing", status: "Beta", type: "Future Tech", icon: <Cpu className="w-5 h-5" /> }
  ];

  const analyticsTools = [
    { name: "Predictive Intelligence Suite", type: "AI Analytics", size: "Real-time", icon: <Brain className="w-5 h-5" /> },
    { name: "Performance Monitoring", type: "System Health", size: "24/7", icon: <Zap className="w-5 h-5" /> },
    { name: "Security Analytics", type: "Threat Detection", size: "Continuous", icon: <Shield className="w-5 h-5" /> },
    { name: "Business Intelligence", type: "Strategic Insights", size: "Dynamic", icon: <Database className="w-5 h-5" /> }
  ];

  return (
    <section id="advanced-protocols" className="py-20 relative overflow-hidden">
      <NeonBackground variant="protocols" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-semibold text-sm tracking-wide uppercase mb-4 font-mono">
            <TypewriterText text=">>> ADVANCED PROTOCOLS" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>
            <TypewriterText text="ENTERPRISE-GRADE SYSTEMS" />
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7)' }}>
            <TypewriterText 
              text="Advanced security, performance optimization, and integration protocols for mission-critical operations."
              speed={40}
            />
          </p>
        </div>

        <div className="bg-black/80 backdrop-blur-sm rounded-2xl border border-cyan-400/40 overflow-hidden shadow-xl shadow-cyan-400/20">
          {/* Tab Navigation */}
          <div className="border-b border-cyan-400/40">
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
                  style={{ textShadow: activeTab === tab.id ? '0 0 15px rgba(0, 255, 255, 0.7)' : '0 0 8px rgba(0, 200, 50, 0.5)' }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'security' && (
              <div className="space-y-8">
                {securityProtocols.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-white mb-3 font-mono" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.4)' }}>
                      {section.title}
                    </h3>
                    <p className="text-green-300 mb-4 font-mono" style={{ textShadow: '0 0 8px rgba(0, 200, 50, 0.5)' }}>
                      {section.description}
                    </p>
                    <ol className="space-y-2">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="bg-cyan-400/20 text-cyan-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0 font-mono border border-cyan-400/60">
                            {idx + 1}
                          </span>
                          <span className="text-green-300 font-mono" style={{ textShadow: '0 0 5px rgba(0, 200, 50, 0.4)' }}>{feature}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="space-y-6">
                <p className="text-green-300 mb-6 font-mono" style={{ textShadow: '0 0 8px rgba(0, 200, 50, 0.5)' }}>
                  High-performance computing protocols for maximum efficiency and scalability.
                </p>
                {performanceFeatures.map((feature, index) => (
                  <div key={index} className="border border-cyan-400/40 rounded-lg p-4 hover:border-cyan-400/60 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <code className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded font-mono text-sm border border-cyan-400/60">
                        {feature.endpoint}
                      </code>
                    </div>
                    <p className="text-green-300 mb-3 font-mono" style={{ textShadow: '0 0 5px rgba(0, 200, 50, 0.4)' }}>{feature.description}</p>
                    <pre className="bg-black/60 p-3 rounded text-sm overflow-x-auto border border-cyan-400/40">
                      <code className="text-green-300 font-mono">{feature.metrics}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'integration' && (
              <div>
                <p className="text-green-300 mb-6 font-mono" style={{ textShadow: '0 0 8px rgba(0, 200, 50, 0.5)' }}>
                  Seamless integration protocols for enterprise systems and emerging technologies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {integrations.map((integration, index) => (
                    <div key={index} className="border border-cyan-400/40 rounded-lg p-4 hover:border-cyan-400 transition-colors hover:shadow-lg hover:shadow-cyan-400/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="text-cyan-400">
                            {integration.icon}
                          </div>
                          <h4 className="font-semibold text-white font-mono" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.4)' }}>
                            {integration.name}
                          </h4>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium font-mono ${
                          integration.status === 'Active'
                            ? 'bg-green-400/20 text-green-400 border border-green-400/60'
                            : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/60'
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

            {activeTab === 'analytics' && (
              <div>
                <p className="text-green-300 mb-6 font-mono" style={{ textShadow: '0 0 8px rgba(0, 200, 50, 0.5)' }}>
                  Advanced analytics and intelligence systems for comprehensive business insights.
                </p>
                <div className="space-y-3">
                  {analyticsTools.map((tool, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-cyan-400/40 rounded-lg hover:border-cyan-400 transition-colors hover:shadow-lg hover:shadow-cyan-400/20">
                      <div className="flex items-center">
                        <div className="text-cyan-400 mr-3">
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-mono" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.4)' }}>
                            {tool.name}
                          </h4>
                          <p className="text-sm text-green-300 font-mono">
                            {tool.type} • {tool.size}
                          </p>
                        </div>
                      </div>
                      <button className="text-cyan-400 hover:text-green-400 transition-colors">
                        <Zap className="w-5 h-5" />
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