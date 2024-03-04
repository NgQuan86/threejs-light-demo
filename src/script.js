import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()


// Debug
const gui = new GUI()

const Spot = gui.addFolder('Spot')
const debugLight = {}
debugLight.color = '#ff5c5c'

const Spot1 = gui.addFolder('Spot1')
const debugLight1 = {}
debugLight1.color = '#66ffe0'

const Spot2 = gui.addFolder('Spot2')
const debugLight2 = {}
debugLight2.color = '#a778d8'

const Point = gui.addFolder('Point Light')
const pointL = {}
pointL.color = '#70f5ff'

const Fix = gui.addFolder('Light fix')

// +++++++++++++++++++++++++ LIGHT +++++++++++++++++++++++++++++

//LIGHT GLOBAL
// const ambientLight = new THREE.AmbientLight(0xffffff, 3)
// ambientLight.intensity = 0.5
// ambientLight.color = new THREE.Color(0xffffff)
// scene.add(ambientLight)

//LIGHT one direction
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(1, 0.25, 0)
// scene.add(directionalLight)


//HEMISPHERELIGHT (from sky to terre like sun one direct and one reflex from terre) 
const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff)
// scene.add(hemisphereLight)


//POINTLIGHT (source of light)
const pointLight = new THREE.PointLight(pointL.color, 5, 10)
pointLight.position.set(0, 2.5, 0)
gsap.to(pointLight, {
    intensity: 0, duration: 2, delay: 1,
    ease: 'Power2.easeInOut',
});
scene.add(pointLight)


//Debug
Point.add(pointLight, 'intensity').min(0).max(5).step(0.01)
Point.addColor(pointLight, 'color')
    .onChange(() => {
        pointL.color.set(pointL.color)
    })

//RECTAREALIGHT 
const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 4, 2, 2) //(color, intensity, width, height)
rectAreaLight.position.set(0, 1, 0)
// rectAreaLight.lookAt(new THREE.Vector3)
// scene.add(rectAreaLight)





//SPOT FIX 
const spotFix1 = new THREE.SpotLight('#ffde66', 10, 10, Math.PI * 0.075, 1, 0.3)
spotFix1.position.set(-4, 3, -4)
spotFix1.target.position.x = -4
spotFix1.target.position.y = 0
spotFix1.target.position.z = -4
scene.add(spotFix1, spotFix1.target)

const spotFix2 = new THREE.SpotLight(0x4e00ff, 10, 10, Math.PI * 0.075, 1, 0.3)
spotFix2.position.set(-4, 3, 4)
spotFix2.target.position.x = -4
spotFix2.target.position.y = 0
spotFix2.target.position.z = 4
scene.add(spotFix2, spotFix2.target)

const spotFix3 = new THREE.SpotLight('#ffde66', 10, 10, Math.PI * 0.075, 1, 0.3)
spotFix3.position.set(4, 3, 4)
spotFix3.target.position.x = 4
spotFix3.target.position.y = 0
spotFix3.target.position.z = 4
scene.add(spotFix3, spotFix3.target)

const spotFix4 = new THREE.SpotLight(0x4e00ff, 10, 10, Math.PI * 0.075, 1, 0.3)
spotFix4.position.set(4, 3, -4)
spotFix4.target.position.x = 4
spotFix4.target.position.y = 0
spotFix4.target.position.z = -4
scene.add(spotFix4, spotFix4.target)


gsap.to(spotFix1.target.position, { duration: 3, delay: 3, x: 0, y: 1, z: 0, })
gsap.to(spotFix2.target.position, { duration: 3, delay: 3, x: 0, y: 1, z: 0, })
gsap.to(spotFix3.target.position, { duration: 3, delay: 3, x: 0, y: 1, z: 0, })
gsap.to(spotFix4.target.position, { duration: 3, delay: 3, x: 0, y: 1, z: 0, })


//---------------------------------SPOT RANDOM--------------------------------------------

//SPOT LIGHT 
const spot = new THREE.SpotLight(debugLight.color, 5, 10, Math.PI * 0.05, 0.5, 1)
spot.position.set(0, 2, 0)
spot.target.position.x = 1
scene.add(spot, spot.target)

//Debug
Spot.add(spot, 'intensity').min(0).max(5).step(0.01)
Spot.add(spot, 'angle').min(Math.PI * 0.05).max(Math.PI * 0.1).step(0.01)
Spot.addColor(debugLight, 'color')
    .onChange(() => {
        spot.color.set(debugLight.color)
    })

//********** 

//SPOT LIGHT 1 
const spot1 = new THREE.SpotLight(debugLight1.color, 5, 10, Math.PI * 0.05, 0.5, 1)
spot1.position.set(0, 2, 0)
scene.add(spot1, spot1.target)

//Debug 1
Spot1.add(spot1, 'intensity').min(0).max(5).step(0.01)
Spot1.add(spot1, 'angle').min(Math.PI * 0.05).max(Math.PI * 0.1).step(0.01)
Spot1.addColor(debugLight1, 'color')
    .onChange(() => {
        spot1.color.set(debugLight1.color)
    })

//*************** 

//SPOT LIGHT 2 
const spot2 = new THREE.SpotLight(debugLight2.color, 5, 10, Math.PI * 0.05, 0.5, 1)
spot2.position.set(0, 2, 0)
scene.add(spot2, spot2.target)

//Debug 2
Spot2.add(spot2, 'intensity').min(0).max(5).step(0.01)
Spot2.add(spot2, 'angle').min(Math.PI * 0.05).max(Math.PI * 0.1).step(0.01)
Spot2.addColor(debugLight2, 'color')
    .onChange(() => {
        spot2.color.set(debugLight2.color)
    })

//-------------------------------------------------------------------------------------------



//----- HELPER LIGHT -----

// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.1)
// scene.add(directionalLightHelper)

// const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.1)
// scene.add(hemisphereLightHelper)

// const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.1)
// scene.add(pointLightHelper)

// const spotLightHelper = new THREE.SpotLightHelper(spotFix1, 0.1)
// scene.add(spotLightHelper)

// const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight) // that one we need to import { RectAreaLightHelper } 
// scene.add(rectAreaLightHelper)




//OBJECT
// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.5
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.75, 0.75),
    material
)
cube.position.y = -10
gsap.to(cube.position, { duration: 2, delay: 2, y: 0.75 })


const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    material
)
plane.rotation.x = - Math.PI * 0.5

const torus = new THREE.Mesh(
    new THREE.ConeGeometry(0.3, 0.2, 32, 64),
    material
)
torus.position.y = 10
gsap.to(torus.position, { duration: 2, delay: 2, y: 1.5 })

scene.add(cube, plane, torus)

//size
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 7
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

//Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// +++ANIMATE+++
const clock = new THREE.Clock()


const move = () => {
    gsap.to(spot.target.position, {
        duration: 0.5, delay: 0,
        x: Math.random() * 10 - 7,
        z: Math.random() * 10 - 7,
        onComplete: move
    })
}
move();

//
const move1 = () => {
    gsap.to(spot1.target.position, {
        duration: 0.5, delay: 0.25,
        x: Math.random() * 10 - 7,
        z: Math.random() * 10 - 7,
        onComplete: move1
    })
}
move1();

//
const move2 = () => {
    gsap.to(spot2.target.position, {
        duration: 0.5, delay: 0.75,
        x: Math.random() * 10 - 7,
        z: Math.random() * 10 - 7,
        onComplete: move2
    })
}
move2();



const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects

    cube.rotation.y = 0.5 * elapsedTime
    cube.rotation.x = 0.5 * elapsedTime
    cube.rotation.z = 0.5 * elapsedTime


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()





