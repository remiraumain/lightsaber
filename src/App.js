import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import Lightsaber from "./Lightsaber";

function App() {
	const cube = useRef()

	useFrame((state, delta) => 
	{
		cube.current.rotation.y += delta
	})

	return <>
		<Perf position="top-left" />

		<OrbitControls makeDefault />

		<color args={ [ "#040404" ] } attach="background" />

		<directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
		<ambientLight intensity={0.5} />

		<Lightsaber />

		<mesh ref={cube} castShadow position={ [ 2, 0, 0 ] } >
			<boxGeometry />
			<meshStandardMaterial color="mediumpurple" />
		</mesh>

		<mesh receiveShadow position-y={- 1.25}>
			<boxGeometry args={[10, 0.5, 10]} />
			<meshStandardMaterial color="greenyellow" />
		</mesh>
	</>
}

export default App;
