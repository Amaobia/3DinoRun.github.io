const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
const material = new THREE.MeshBasicMaterial( { color: "gray" } );
const cube = new THREE.Mesh( geometry, material );

const geometry2 = new THREE.BoxGeometry( 0.75, 1, 1 );
const material2 = new THREE.MeshBasicMaterial( { color: "gray" } );
const cube2 = new THREE.Mesh( geometry2, material2 );

const geometry3 = new THREE.BoxGeometry( 0.75, 1, 0.5 );
const material3 = new THREE.MeshBasicMaterial( { color: "gray" } );
const cube3 = new THREE.Mesh( geometry3, material3 );

const geometry4 = new THREE.BoxGeometry( 0.125, 0.25, 0.5 );
const material4 = new THREE.MeshBasicMaterial( { color: "#575555"} );
const cube4 = new THREE.Mesh( geometry4, material4 );

const geometry5 = new THREE.BoxGeometry( 0.125, 0.25, 0.5 );
const material5 = new THREE.MeshBasicMaterial( { color: "#575555"} );
const cube5 = new THREE.Mesh( geometry5, material5 );

const geometry6 = new THREE.BoxGeometry( 0.25, 1.25, 0.25 );
const material6 = new THREE.MeshBasicMaterial( { color: "#575555"} );
const cube6 = new THREE.Mesh( geometry6, material6 );

const geometry7 = new THREE.BoxGeometry( 0.25, 1.25, 0.25 );
const material7 = new THREE.MeshBasicMaterial( { color: "#575555"} );
const cube7 = new THREE.Mesh( geometry7, material7 );

const geometry8 = new THREE.BoxGeometry( 0.25, 0.25, 0.25 );
const material8 = new THREE.MeshBasicMaterial( { color: "#1c1c1c"} );
const cube8 = new THREE.Mesh( geometry8, material8 );

const geometrySky = new THREE.BoxGeometry( innerWidth, innerHeight, 0 );
const materialSky = new THREE.MeshBasicMaterial( { color: "dodgerblue"} );
const sky = new THREE.Mesh( geometrySky, materialSky );

const geometryGround = new THREE.BoxGeometry( innerWidth, 5, 0 );
const materialGround = new THREE.MeshBasicMaterial( { color: "green"} );
const ground = new THREE.Mesh( geometryGround, materialGround );

const geometryCloudOne = new THREE.BoxGeometry( 2, 1, 1 );
const materialCloudOne = new THREE.MeshBasicMaterial( { color: "white"} );
const cloudOne = new THREE.Mesh( geometryCloudOne, materialCloudOne );

const geometryCloudTwo = new THREE.BoxGeometry( 2, 1, 1 );
const materialCloudTwo = new THREE.MeshBasicMaterial( { color: "white"} );
const cloudTwo = new THREE.Mesh( geometryCloudTwo, materialCloudTwo );

const geometryCloudThree = new THREE.BoxGeometry( 2, 1, 1 );
const materialCloudThree = new THREE.MeshBasicMaterial( { color: "white"} );
const cloudThree = new THREE.Mesh( geometryCloudTwo, materialCloudTwo );

const geometryCloudFour = new THREE.BoxGeometry( 2, 0.5, 1 );
const materialCloudFour = new THREE.MeshBasicMaterial( { color: "white"} );
const cloudFour = new THREE.Mesh( geometryCloudFour, materialCloudFour );

const geometryCloudFive = new THREE.BoxGeometry( 2, 0.5, 1 );
const materialCloudFive = new THREE.MeshBasicMaterial( { color: "white"} );
const cloudFive = new THREE.Mesh( geometryCloudFive, materialCloudFive );

const geometryCloudSix = new THREE.BoxGeometry( 4, 1, 1 );
const materialCloudSix = new THREE.MeshBasicMaterial( { color: "white"} );
const cloudSix = new THREE.Mesh( geometryCloudSix, materialCloudSix );

const geometryCactus = new THREE.BoxGeometry( 0.5, 2, 1 );
const materialCactus = new THREE.MeshBasicMaterial( { color: "lime"} );
const cactus = new THREE.Mesh( geometryCactus, materialCactus );

const geometryCactusPart2 = new THREE.BoxGeometry( 1, 0.5, 3 );
const materialCactusPart2 = new THREE.MeshBasicMaterial( { color: "lime"} );
const cactusPart2 = new THREE.Mesh( geometryCactusPart2, materialCactusPart2 );

scene.add( cube );
scene.add( cube2 );
scene.add( cube3 );
scene.add( cube4 );
scene.add( cube5 );
scene.add( cube6 );
scene.add( cube7 );
scene.add( cube8 );
scene.add( sky );
scene.add( ground );
scene.add( cloudOne );
scene.add( cloudFour );
scene.add( cloudFive );
scene.add( cloudSix );
scene.add( cactus );
scene.add( cactusPart2 );

camera.position.z = 5;
cube2.position.y = 1;
cube.position.y = 0.25;
cube3.position.y = -0.5;
cube8.position.y = -0.75;
cube8.position.z = 1;
cube7.position.y = -1.2;
sky.position.z = -10;
ground.position.y = -2.5;
ground.position.z = -1;
cloudOne.position.y = 2.5;
cloudOne.position.x = -8;
cloudTwo.position.y = 2;
cloudThree.position.x = 1;
cloudThree.position.y = 3;
cloudThree.position.z = -1;
cloudFour.position.x = -4;
cloudFour.position.y = 3;
cloudFour.position.z = -1;
cloudFive.position.y = 2.5;
cloudFive.position.x = -3;
cloudSix.position.y = 2.5;
cloudSix.position.x = 5;
cube5.position.y = -0.15;
cube4.position.y = -0.15;
cube6.position.y = -1.5;
cactus.position.z = -5;
cactusPart2.position.z = -5;
cube5.position.x = -0.3;
cube4.position.x = 0.6;
cube6.position.x = -0.25;
cube7.position.x = 0.15;

function animate() {
	requestAnimationFrame( animate );
    console.log(cactus.position.z);
    if (cactus.position.z >= 0 && cactus.position.z <= 0.5 && cube8.position.y == -0.75){
        alert("you died. Restart the page to play again");
        document.location.reload(true);
    }

    document.onclick= function(event) {
        cube.position.y += 2.5;
        cube2.position.y += 2.5;
        cube3.position.y += 2.5;
        cube4.position.y += 2.5; 
        cube5.position.y += 2.5;
        cube6.position.y += 2.5; 
        cube7.position.y += 2.5;
        cube8.position.y += 2.5;
        setTimeout(() => {fall()}, 250);
    };

    document.onkeydown = function(event){
        console.log(event.keyCode);
        switch (event.keyCode){
            case 39:
                cube.rotation.y += 0.05;
                cube2.rotation.y += 0.05; 
                cube3.rotation.y += 0.05; 
                cube4.rotation.y += 0.05; 
                cube5.rotation.y += 0.05;
                cube6.rotation.y += 0.05; 
                cube7.rotation.y += 0.05; 
                cube8.rotation.y += 0.05; 
                break;
                case 37:
                    cube.rotation.y -= 0.05;
                    cube2.rotation.y -= 0.05;
                    cube3.rotation.y -= 0.05;
                    cube4.rotation.y -= 0.05; 
                    cube5.rotation.y -= 0.05;
                    cube6.rotation.y -= 0.05; 
                    cube7.rotation.y -= 0.05;
                    cube8.rotation.y -= 0.05;
                    break;
                    case 32:
                        cube.position.y += 2.5;
                        cube2.position.y += 2.5;
                        cube3.position.y += 2.5;
                        cube4.position.y += 2.5; 
                        cube5.position.y += 2.5;
                        cube6.position.y += 2.5; 
                        cube7.position.y += 2.5;
                        cube8.position.y += 2.5;
                        setTimeout(() => {fall()}, 250);
                        break;
        }
    }

	renderer.render( scene, camera );
}
animate();
moveLegs();
cactusCome();

function moveLegs(){
cube5.position.z = 1.5;

cube4.position.z = -1;

cube6.position.z = -1;

cube7.position.z = 0.5;
    setTimeout(() => {moveLegsTwo()}, 500);
}
function moveLegsTwo(){
    if(cube.position.x == 0){
    cube5.position.x = -0.3;
    cube5.position.z = -1;
    
    cube4.position.x = 0.3;
    cube4.position.z = 1.5;
    
    cube6.position.x = -0.2;
    cube6.position.z = 0.5;
    
    cube7.position.x = 0.13;
    cube7.position.z = -0.075;
    }

    setTimeout(() => {moveLegs()}, 500);
}
function fall(){
    cube.position.y -= 2.5;
    cube2.position.y -= 2.5;
    cube3.position.y -= 2.5;
    cube4.position.y -= 2.5; 
    cube5.position.y -= 2.5;
    cube6.position.y -= 2.5; 
    cube7.position.y -= 2.5;
    cube8.position.y -= 2.5;
}
function cactusCome(){
    requestAnimationFrame(cactusCome);

    if (cactus.position.z >= 1){
        cactus.position.z = -5;
        cactusPart2.position.z = -5;
    }
    else{
    cactus.position.z += 0.1;
    cactusPart2.position.z += 0.1;
    }
}