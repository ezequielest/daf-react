import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useFBX,
} from "@react-three/drei";
import {
  Suspense,
  useRef,
} from "react";
import * as THREE from "three";

import "./TresDDisplayFBX.scss";

interface IModel {
  url: string;

  // Posición del modelo/pivot en la escena
  position?: [number, number, number];

  // Rotación inicial del modelo
  rotation?: [number, number, number];

  // Escala
  scale?: number | [number, number, number];

  // Punto de pivote manual dentro del modelo
  pivot?: [number, number, number];

  // Velocidad de rotación
  rotationSpeed?: number;
}

function Model({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  pivot = [0, 0, 0],
  rotationSpeed = 0.005,
}: IModel) {
  const scene = useFBX(url);

  const pivotRef = useRef<THREE.Group>(null);

  const box = new THREE.Box3().setFromObject(scene);
  const center = new THREE.Vector3();

  box.getCenter(center);

  console.log("CENTRO DEL MODELO:", center);

  useFrame(() => {
    if (!pivotRef.current) return;

    pivotRef.current.rotation.y += rotationSpeed;
  });

  return (
    <group ref={pivotRef} position={position}>
      <group
        position={[
          pivot[0],
          pivot[1],
          pivot[2],
        ]}
      >
        <primitive
          object={scene}
          rotation={rotation}
          scale={scale}
        />
      </group>
    </group>
  );
}

interface TresDViewer {
  url: string;
  heightContainer?: string;

  modelPosition?: [number, number, number];
  modelRotation?: [number, number, number];
  modelScale?: number | [number, number, number];

  modelPivot?: [number, number, number];

  rotationSpeed?: number;
}

function TresDDisplayFBX({
  url,
  heightContainer = "100vh",

  modelPosition = [0, 0, 0],
  modelRotation = [0, Math.PI / 2, 0],
  modelScale = 1,
  modelPivot = [0, 0, 0],

  rotationSpeed = 0.005,
}: TresDViewer) {
  return (
    <div className="tres-d-display">
      <Canvas
        camera={{
          position: [140, 100, 800],
          fov: 30,
          near: 0.1,
          far: 2000,
        }}
        gl={{
          antialias: true,
          logarithmicDepthBuffer: true,
        }}
        style={{
          width: "100%",
          height: heightContainer,
        }}
      >
        <ambientLight intensity={0.3} />

        <directionalLight
          position={[-2, 5, 2]}
          intensity={1}
        />

        <Suspense fallback={null}>
          <Model
            url={url}
            position={modelPosition}
            rotation={modelRotation}
            scale={modelScale}
            pivot={modelPivot}
            rotationSpeed={rotationSpeed}
          />

          <Environment preset="sunset" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enableDamping
          dampingFactor={0.05}
          target={modelPosition}
        />
      </Canvas>
    </div>
  );
}

export default TresDDisplayFBX;