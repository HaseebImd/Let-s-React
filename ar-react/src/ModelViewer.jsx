import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

function ModelViewer({ modelPath, texturePath, onClose }) {
    const { scene } = useGLTF(modelPath);

    useEffect(() => {
        if (texturePath) {
            const loader = new TextureLoader();
            loader.load(
                texturePath,
                (texture) => {
                    scene.traverse((child) => {
                        if (child.isMesh) {
                            child.material.map = texture;
                            child.material.needsUpdate = true;
                        }
                    });
                },
                undefined,
                (error) => {
                    console.error('Error loading texture:', error);
                }
            );
        }
    }, [texturePath, scene]);

    return (
        <div>
            <button onClick={onClose}>Close</button>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <primitive object={scene} />
            </Canvas>
        </div>
    );
}

export default ModelViewer;