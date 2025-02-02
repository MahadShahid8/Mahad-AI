import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Brain, Code, Award, Smartphone, BookOpen, MessageSquare, GamepadIcon, Bot } from 'lucide-react';
import snapAutismImg from '../public/logo-playstore.png'
import floorPlanImg from '../public/floor-lan.png'

function App() {
  const [activeTab, setActiveTab] = useState('all');

  const certificates = [
    {
      title: "Machine Learning Specialization",
      description: "Applied mathematics behind Machine Learning algorithms",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "TensorFlow Developer",
      description: "Technical skills in CNNs and RNNs via TensorFlow",
      icon: <Code className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 z-10 text-center"
        >
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Mahad Shahid
          </h1>
          <p className="text-2xl text-gray-300 mb-8">AI/ML Developer | Full Stack Developer</p>
          <div className="flex justify-center space-x-4 mb-8">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://github.com/MahadShahid8" 
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/mahad-shahid/" 
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="mailto:mahadshahid_1997@hotmail.com" 
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
          <motion.a 
  href="Mahad-AI.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg flex items-center mx-auto hover:from-blue-700 hover:to-purple-700"
>
  <Download className="w-5 h-5 mr-2" />
  Download Resume
</motion.a>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300">
            <p className="mb-6 text-lg leading-relaxed">
              A dedicated Full Stack AI/ML developer with a proven track record in advanced machine learning projects, 
              specializing in innovative generative AI solutions. Recent graduate from COMSATS Institute of Information & Technology, 
              Lahore, currently working as an AI Developer at Narsun Studios, implementing cutting-edge machine learning architectures 
              including U-Net and VAEs to enhance image generation capabilities.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-lg"
            >
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-400">Expert in advanced ML architectures including U-Net, GANs, and Stable Diffusion</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-lg"
            >
              <Code className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
              <p className="text-gray-400">MERN stack expertise with focus on AI integration</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-lg"
            >
              <Smartphone className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-400">React Native development with AI integration capabilities</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section className="py-20 bg-gray-800">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-gray-900 rounded-lg overflow-hidden"
      >
        <div className="p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <img 
                  src="/snapautism-1.png" 
                  alt="SnapAutism Platform Screenshot" 
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1">
                <img 
                  src="/snapautism-2.png" 
                  alt="SnapAutism Interface Screenshot" 
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">SnapAutism</h3>
                <a 
                  href="https://apps.apple.com/sa/app/snapautism/id6739850676?platform=iphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="/app-store-badge.png" 
                    alt="Get it on App Store" 
                    className="w-32 h-auto object-contain hover:scale-105 transition-transform"
                  />
                </a>
              </div>
              <p className="text-gray-300">
                A comprehensive mobile application for autism detection using AI algorithms. Features include:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>AI-powered autism detection using Logistic Regression</li>
                <li>Direct consultation with registered psychologists</li>
                <li>Interactive games using Google Mediapipe</li>
                <li>Community forums and live chat support</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-green-600 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-red-600 rounded-full text-sm">Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-gray-900 rounded-lg overflow-hidden"
      >
        <div className="p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <img 
                  src="/floorplan-1.png" 
                  alt="Floor Plan Generator Example 1" 
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1">
                <img 
                  src="/floorplan-2.png" 
                  alt="Floor Plan Generator Example 2" 
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">AI Floor Plan Generator</h3>
              </div>
              <p className="text-gray-300">
                Advanced AI-powered floor plan generation project for the Saudi government. Features include:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Fine-tuned Stable Diffusion model</li>
                <li>Advanced VAE implementation</li>
                <li>Web scraping for training data</li>
                <li>Text-to-image generation pipeline</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-green-600 rounded-full text-sm">Stable Diffusion</span>
                <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">PyTorch</span>
                <span className="px-3 py-1 bg-red-600 rounded-full text-sm">Deep Learning</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 gap-12">
            {/* TensorFlow Developer Certificate */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="text-blue-500 mb-4">
                      <Code className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">TensorFlow Developer</h3>
                    <p className="text-gray-400 mb-4">Technical skills in CNNs and RNNs via TensorFlow</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Deep Learning</span>
                      <span className="px-3 py-1 bg-green-600 rounded-full text-sm">CNNs</span>
                      <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">RNNs</span>
                      <span className="px-3 py-1 bg-red-600 rounded-full text-sm">Computer Vision</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <a href="https://coursera.org/verify/professional-cert/AW97R7RLEF5S" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="block hover:opacity-90 transition-opacity">
                      <img 
                        src="/tensorflow-cert.png" 
                        alt="TensorFlow Developer Certificate" 
                        className="w-full rounded-lg shadow-lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Machine Learning Specialization */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="text-blue-500 mb-4">
                      <Brain className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Machine Learning Specialization</h3>
                    <p className="text-gray-400 mb-4">Applied mathematics behind Machine Learning algorithms</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Supervised Learning</span>
                      <span className="px-3 py-1 bg-green-600 rounded-full text-sm">Unsupervised Learning</span>
                      <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Reinforcement Learning</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <a href="https://coursera.org/verify/specialization/8DEYMKTD44PM" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="block hover:opacity-90 transition-opacity">
                      <img 
                        src="/ml-cert.png" 
                        alt="Machine Learning Specialization Certificate" 
                        className="w-full rounded-lg shadow-lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-4"
            >
              <input 
                type="text" 
                placeholder="Name" 
                className="p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Message" 
                rows={4} 
                className="p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700"
              >
                Send Message
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Mahad Shahid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;