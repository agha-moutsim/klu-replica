'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    
    containerRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, W / H, 0.1, 100);
    camera.position.z = 5;

    /* — Particle field — */
    const N = 2000;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);

    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      const t = Math.random();
      if (t < 0.5) {
        col[i * 3] = 0;
        col[i * 3 + 1] = 0.9;
        col[i * 3 + 2] = 0.63;
      } else if (t < 0.75) {
        col[i * 3] = 0;
        col[i * 3 + 1] = 0.47;
        col[i * 3 + 2] = 0.73;
      } else {
        col[i * 3] = 0.49;
        col[i * 3 + 1] = 0.23;
        col[i * 3 + 2] = 0.93;
      }
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    /* — Line network — */
    const linePos = [];
    const lineCol = [];
    const sub = 180;
    for (let i = 0; i < sub; i++) {
      for (let j = i + 1; j < sub; j++) {
        const ax = pos[i * 3], ay = pos[i * 3 + 1], az = pos[i * 3 + 2];
        const bx = pos[j * 3], by = pos[j * 3 + 1], bz = pos[j * 3 + 2];
        const d = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2);
        if (d < 2.5) {
          linePos.push(ax, ay, az, bx, by, bz);
          lineCol.push(0, 0.9, 0.63, 0, 0.9, 0.63);
        }
      }
    }
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
    lGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineCol, 3));
    const lMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.09,
    });
    const lines = new THREE.LineSegments(lGeo, lMat);
    scene.add(lines);

    /* — Glowing spheres — */
    const orbDefs = [
      { p: [-3.5, 2, -2], c: 0x00e5a0, s: 0.2 },
      { p: [3.5, -2, -1.5], c: 0x0077bb, s: 0.16 },
      { p: [-1.5, -3.5, -3], c: 0x7c3aed, s: 0.14 },
      { p: [3, 3.5, -2.5], c: 0x00e5a0, s: 0.11 },
    ];
    const orbs = orbDefs.map((d) => {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(d.s, 16, 16),
        new THREE.MeshBasicMaterial({ color: d.c, transparent: true, opacity: 0.45 })
      );
      m.position.set(d.p[0], d.p[1], d.p[2]);
      scene.add(m);
      return m;
    });

    /* — Ring — */
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.012, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0x00e5a0, transparent: true, opacity: 0.08 })
    );
    ring.rotation.x = Math.PI / 2.4;
    scene.add(ring);

    let mx = 0, my = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let t = 0;
    let animationFrameId: number;
    const tick = () => {
      animationFrameId = requestAnimationFrame(tick);
      t += 0.003;
      pts.rotation.y = t * 0.035 + mx * 0.04;
      pts.rotation.x = t * 0.018 + my * 0.025;
      lines.rotation.y = pts.rotation.y;
      lines.rotation.x = pts.rotation.x;
      ring.rotation.z = t * 0.015;
      ring.rotation.y = t * 0.008;
      orbs.forEach((o, i) => {
        o.position.y = orbDefs[i].p[1] + Math.sin(t + i * 1.3) * 0.3;
        o.material.opacity = 0.3 + Math.sin(t * 1.5 + i) * 0.15;
      });
      camera.position.x += (mx * 0.4 - camera.position.x) * 0.025;
      camera.position.y += (my * 0.3 - camera.position.y) * 0.025;
      renderer.render(scene, camera);
    };
    tick();

    const container = containerRef.current;
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-50 hidden md:block"
    />
  );
}
