import * as THREE from 'https://cdn.skypack.dev/three@0.136';

//scene

const scene = new THREE.Scene()

// //objects

const distance = 4

const material = new THREE.MeshToonMaterial({
    color: 'violet',
    wireframe: false,
})

const mesh1 = new THREE.Mesh(
    new THREE.TorusKnotGeometry( 10, 3, 300, 20, 2, 3),
    material
)

const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry( 5, 10, 8, 1 ),
    material
)

const mesh3 = new THREE.Mesh(
    new THREE.TorusGeometry( 10, 3, 16, 100, 6.283185 ),
    material
)

//scale + position

mesh1.scale.set(0.07,0.07,0.07),
mesh2.scale.set(0.15,0.15,0.15),
mesh3.scale.set(0.09,0.09,0.09),
mesh1.position.set(1.68, -3, 0)
mesh2.position.set(-1.68, -6.5, 0)
mesh3.position.set(1.68, -11, 0)
scene.add(mesh1, mesh2, mesh3)
console.log(mesh3.position, mesh2.position)
//sizes

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

//Camera

const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 5

scene.add(camera)

//lights

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set(1,1,0)
scene.add( directionalLight );

//canvas

const canvas = document.querySelector('#webgl')

//renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
})
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio /0.4);

//scroll

let scrolly = window.scrollY

window.addEventListener('scroll', () => 
{
  scrolly = window.scrollY

  console.log(scrolly)
})

//tick

const move = () => {

    //camera 
    camera.position.y = -scrolly / sizes.height * distance

    //rotation
     mesh1.rotation.y += 0.002
     mesh2.rotation.y += 0.002
     mesh3.rotation.y += 0.002

     mesh1.rotation.x += 0.002
     mesh2.rotation.x += 0.002
     mesh3.rotation.x += 0.002
    //update

    
    renderer.render(scene, camera)
    window.requestAnimationFrame(move)
}
move()