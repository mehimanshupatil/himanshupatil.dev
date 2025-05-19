import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Step3Animated: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    cameraRef.current.position.setZ(30);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 15000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create a sphere of particles
      const radius = Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create particle material with custom shader
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mousePosition: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        uniform float time;
        uniform vec2 mousePosition;
        
        void main() {
          vec3 pos = position;
          
          // Add wave effect
          float wave = sin(time * 0.5 + pos.x * 0.02 + pos.y * 0.02) * 2.0;
          pos.z += wave;
          
          // Add mouse interaction
          float dist = length(pos.xy - mousePosition * 20.0);
          pos.z += smoothstep(10.0, 0.0, dist) * 5.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = 2.0 * (300.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          float alpha = 1.0 - smoothstep(0.45, 0.5, dist);
          gl_FragColor = vec4(0.23, 0.51, 0.96, alpha * 0.5);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    particlesRef.current = new THREE.Points(particlesGeometry, particlesMaterial);
    sceneRef.current.add(particlesRef.current);

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      if (particlesRef.current?.material.uniforms) {
        particlesRef.current.material.uniforms.mousePosition.value.set(mouseRef.current.x, mouseRef.current.y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      if (particlesRef.current?.material.uniforms) {
        particlesRef.current.material.uniforms.time.value = time;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005;
        particlesRef.current.rotation.x += 0.0002;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          opacity: 0.7
        }}
      />
      <main className="main with-styles with-animations">
        <div className="container">
          <section className="hero">
            <h1>Himanshu Patil</h1>
            <p className="role">Frontend Developer</p>
            <div className="links">
              <a href="mailto:dev@himanshupatil.dev" className="link">dev@himanshupatil.dev</a>
              <div className="social">
                <a href="https://github.com/mehimanshupatil" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/mehimanshupatil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/mehimanshupatil" target="_blank" rel="noopener noreferrer">X/Twitter</a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};