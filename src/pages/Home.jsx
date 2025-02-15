// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const AnimatedSphere = () => {
  const meshRef = useRef();

  useEffect(() => {
    if (!meshRef.current) return;
    
    const animate = () => {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial 
        color="#6b46c1" 
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
};

const Feature = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="text-purple-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
        <div ref={containerRef} className="text-center text-white z-10 transition-transform duration-300">
          <h1 className="text-6xl font-bold mb-6">Welcome to AtherAI</h1>
          <p className="text-xl mb-8">Transform your learning experience with AI-powered visualization</p>
          <button
            onClick={() => navigate('/learn')}
            className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Let's Get Started
          </button>
        </div>
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              title="AI-Powered Learning"
              description="Generate comprehensive video explanations from text input"
              icon="🧠"
            />
            <Feature
              title="Smart Note Analysis"
              description="Convert your notes into structured knowledge maps"
              icon="📝"
            />
            <Feature
              title="Visual Mind Mapping"
              description="Create interactive mind maps for better understanding"
              icon="🎯"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;