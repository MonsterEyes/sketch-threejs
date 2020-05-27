<template>
    <div class="container">
        <ThreeCamera></ThreeCamera>
        <div>
            <h1 class="title">
                Camera Video
            </h1>
        </div>
    </div>
</template>

<script>

    import * as THREE from "three";


    export default {
        components: {

        },
        props     : {},
        methods   : {},
        data: function() {
            return {

            };
        },
        mounted() {
            var camera;

            var scene, renderer;
            var geometry, material, mesh;

            init();
            animate();

            function init() {

                camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
                camera.position.z = 1;

                scene = new THREE.Scene();

                geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
                material = new THREE.MeshNormalMaterial();

                mesh = new THREE.Mesh( geometry, material );
                scene.add( mesh );

                renderer = new THREE.WebGLRenderer( { antialias: true } );
                renderer.setSize( window.innerWidth, window.innerHeight );
                document.body.appendChild( renderer.domElement );

            }

            function animate() {

                requestAnimationFrame( animate );

                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.02;

                renderer.render( scene, camera );

            }
        }
    }
</script>

<style>
    .container {
        margin          : 0 auto;
        display         : flex;
        justify-content : center;
        align-items     : center;
        text-align      : center;
    }

    .title {
        font-family    : 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display        : block;
        font-weight    : 300;
        font-size      : 100px;
        color          : #35495e;
        letter-spacing : 1px;
    }

</style>
