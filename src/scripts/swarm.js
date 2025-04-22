import * as THREE from 'three';

let scene, camera, renderer, orb, clock;

function init() {
  const container = document.getElementById('interactive-orb');
  if (!container) return;

  // Scene and Camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
  camera.position.z = 2.5;

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  // Clock for animation
  clock = new THREE.Clock();

  // Shader Material
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float u_time;
    varying vec2 vUv;

    void main() {
      vec2 p = vUv - 0.5;
      float len = length(p);
      float glow = 0.1 / len - 0.1;
      float pulse = sin(u_time * 2.0) * 0.5 + 0.5;
      gl_FragColor = vec4(vec3(glow * pulse), 1.0);
    }
  `;

  const material = new THREE.ShaderMaterial({
    uniforms: {
      u_time: { value: 0.0 },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
  });

  // Sphere Geometry
  const geometry = new THREE.SphereGeometry(1, 64, 64);
  orb = new THREE.Mesh(geometry, material);
  scene.add(orb);

  // Animation Loop
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Update the time uniform for the shader
  const elapsedTime = clock.getElapsedTime();
  orb.material.uniforms.u_time.value = elapsedTime;

  // Rotate the orb for a dynamic effect
  orb.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Initialize the animation when the DOM is ready
document.addEventListener('DOMContentLoaded', init);
