import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const LogoMesh = () => {
  return (
    <mesh>
      <boxGeometry args={[0.8, 0.8, 0.2]} />
      <meshStandardMaterial
        color="hsl(45, 73%, 55%)"
        metalness={0.9}
        roughness={0.1}
        emissive="hsl(45, 73%, 20%)"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

export const Logo3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-8 h-8 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <pointLight position={[-2, -2, -2]} intensity={0.5} />
          <LogoMesh />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};