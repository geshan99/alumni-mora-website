// components/ThreeAnimation.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const SpinningCube = () => {
	const cubeRef = useRef();

	useFrame(() => {
		cubeRef.current.rotation.x += 0.01;
		cubeRef.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={cubeRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="blue" />
		</mesh>
	);
};

const ThreeAnimation = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />
			<SpinningCube />
		</Canvas>
	);
};

export default ThreeAnimation;
