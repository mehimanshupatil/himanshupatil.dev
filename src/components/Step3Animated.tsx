import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { AdditiveBlending, } from 'three'

interface GalaxyParams {
  count: number;
  size: number;
  radius: number;
  branches: number;
  spin: number;
  randomness: number;
  randomnessPower: number;
  stars: number;
  backgroundColor: string;
  starColor: string;
  insideColor: string;
  outsideColor: string;
}

const defaultParamsLight: GalaxyParams = {
  count: 70000,
  size: 0.01,
  radius: 5,
  branches: 8,
  spin: 1,
  randomness: 0.3,
  randomnessPower: 5,
  stars: 9000,
  backgroundColor: '#ffffff',
  starColor: '#000000',
  insideColor: '#222222',
  outsideColor: '#1b3984',
};

const defaultParamsDark: GalaxyParams = {
  count: 70000,
  size: 0.01,
  radius: 5,
  branches: 8,
  spin: 1,
  randomness: 0.3,
  randomnessPower: 5,
  stars: 9000,
  backgroundColor: '#000000',
  starColor: '#ffffff',
  insideColor: '#1b3984',
  outsideColor: '#ff6030'
};
export const Step3Animated: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [parameters] = useState<GalaxyParams>(defaultParamsLight);


  useEffect(() => {
    const parameters = theme === 'light' ? defaultParamsLight : defaultParamsDark;
    if (!canvasRef.current) return;

    const textureLoader = new THREE.TextureLoader();
    const shape = textureLoader.load('/1.png');

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(parameters.backgroundColor);
    let bgStars: THREE.Points, bgStarsGeometry: THREE.BufferGeometry, bgStarsMaterial: THREE.PointsMaterial;
    let points: THREE.Points, geometry: THREE.BufferGeometry, material: THREE.PointsMaterial;

    const generateBgStars = () => {
      if (bgStars) {
        bgStarsGeometry.dispose();
        bgStarsMaterial.dispose();
        scene.remove(bgStars);
      }

      bgStarsGeometry = new THREE.BufferGeometry();
      const bgStarsPositions = new Float32Array(parameters.stars * 3);
      for (let j = 0; j < parameters.stars; j++) {
        bgStarsPositions[j * 3 + 0] = (Math.random() - 0.5) * 20;
        bgStarsPositions[j * 3 + 1] = (Math.random() - 0.5) * 20;
        bgStarsPositions[j * 3 + 2] = (Math.random() - 0.5) * 20;
      }
      bgStarsGeometry.setAttribute('position', new THREE.BufferAttribute(bgStarsPositions, 3));

      bgStarsMaterial = new THREE.PointsMaterial({
        color: parameters.starColor,
        size: parameters.size,
        depthWrite: false,
        sizeAttenuation: true,
        blending: theme === 'light' ? THREE.NormalBlending : AdditiveBlending,
        transparent: true,
        alphaMap: shape,
      });

      bgStars = new THREE.Points(bgStarsGeometry, bgStarsMaterial);
      scene.add(bgStars);
    };

    const generateGalaxy = () => {
      if (points) {
        geometry.dispose();
        material.dispose();
        scene.remove(points);
      }

      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(parameters.count * 3);
      const colors = new Float32Array(parameters.count * 3);
      const colorInside = new THREE.Color(parameters.insideColor);
      const colorOutside = new THREE.Color(parameters.outsideColor);

      for (let i = 0; i < parameters.count; i++) {
        const x = Math.random() * parameters.radius;
        const branchAngle = (i % parameters.branches) / parameters.branches * 2 * Math.PI;
        const spinAngle = x * parameters.spin;

        const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
        const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
        const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);

        positions[i * 3] = Math.sin(branchAngle + spinAngle) * x + randomX;
        positions[i * 3 + 1] = randomY;
        positions[i * 3 + 2] = Math.cos(branchAngle + spinAngle) * x + randomZ;

        const mixedColor = colorInside.clone().lerp(colorOutside, x / parameters.radius);
        colors[i * 3 + 0] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        color: 'white',
        size: parameters.size,
        depthWrite: false,
        sizeAttenuation: true,
        blending: AdditiveBlending,
        vertexColors: true,
        transparent: true,
        alphaMap: shape,
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);
    };

    generateGalaxy();
    generateBgStars();

    /**
 * Sizes
 */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 3
    camera.position.y = 3
    camera.position.z = 3
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvasRef.current)
    controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
      * Animate
     */
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      if (points) points.rotation.y = elapsedTime * 0.3;
      if (bgStars) bgStars.rotation.y = -elapsedTime * 0.05;

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // opacity: 0.7
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