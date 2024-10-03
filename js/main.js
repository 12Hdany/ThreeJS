import * as THREE from 'three'
//scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 
//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);
 
//geometry
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({color: 0xc81e8f});
const cube = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.BoxGeometry(5,0.5,0.5);
const material2 = new THREE.MeshStandardMaterial({color: 0x781ec8});
const cube2 = new THREE.Mesh(geometry2, material2);

const geometry3 = new THREE.PlaneGeometry(10,10);
const material3 = new THREE.MeshStandardMaterial({color: 0xffc017, side: THREE.DoubleSide});
const plane = new THREE.Mesh(geometry3, material3);


const light = new THREE.AmbientLight(0x404040);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
 
scene.add(cube);
scene.add(cube2);
scene.add(plane);
scene.add(light);
scene.add(directionalLight);
 
camera.position.set(1,1,1);
directionalLight.position.set(10,1,5);
camera.lookAt (cube.position);
 
 
console.log(THREE.AmbientLight);
 
function animate(){

   plane.rotation.x = Math.PI / 2;
   plane.position.y = -1;
 
    renderer.render(scene, camera);
}