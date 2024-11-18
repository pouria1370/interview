"use client";
import * as Three from "three";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
const Shapes = () => {
  return (
    <div className="md:col-start-2 p-2 row-span-1 -mt-9   aspect-square   md:mt-0 md:col-span-1 row-start-1 ">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};
function Geometries() {
  const geometries = [
    {
      position: [1, -0.75, 4],
      r: 0.4,
      geometry: new Three.CapsuleGeometry(0.5, 1.6, 2, 16),
    },
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new Three.IcosahedronGeometry(3),
    },
    {
      position: [-1.4, 2, -4],
      r: 0.6,
      geometry: new Three.DodecahedronGeometry(1.5),
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.3,
      geometry: new Three.TorusGeometry(0.6, 0.25, 16, 32),
    },
    {
      position: [1.6, 1.6, -4],
      r: 0.7,
      geometry: new Three.OctahedronGeometry(1.5),
    },
  ];
  const materials = [
    new Three.MeshNormalMaterial(),
    new Three.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new Three.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    new Three.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new Three.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
    new Three.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
  ];
  const soundEffects = [
    new Audio("@voices/click1.mp3"),
    new Audio("@voices/click3.mp3"),
    new Audio("@voices/click2.mp3"),
    new Audio("@voices/click4.ogg"),
  ];
  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      soundEffects={soundEffects}
      r={r}
      materials={materials}
    />
  ));
}

function Geometry({ r, position, geometry, materials, soundEffects }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);
  const startingMaterial = getRandomMaterial();
  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }
  function handleClick(e) {
    const mesh = e.object;
    gsap.utils.random(soundEffects).play();
    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
    mesh.material = getRandomMaterial();
  }
  function handlePointerOver() {
    document.body.style.cursor = "pointer";
  }
  function handlePointerOut() {
    document.body.style.cursor = "default";
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
        delay: 0.3,
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
}
export default Shapes;
