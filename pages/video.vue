<template>
    <div class="container">
        <div>
            <h1 class="title">
                Video
            </h1>
        </div>
    </div>
</template>

<script>

    import * as THREE from "three";
    /*import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
    import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
    import {TransformControls} from "three/examples/jsm/controls/TransformControls.js";*/

    class Asset {
        constructor(name, meshes) {
            this.name = name;
            this.meshes = meshes;
        }
    }

    export default {
        components: {

        },
        props     : {},
        methods   : {},
        data() {
            return {
                cube: null,
                renderer: null,
                scene: null,
                camera: null
            }
        },
        methods: {
            init: function() {
                this.scene = new THREE.Scene()
                this.camera = new THREE.PerspectiveCamera(
                    75,
                    window.innerWidth / window.innerHeight,
                    0.1,
                    1000
                )

                this.renderer = new THREE.WebGLRenderer()
                this.renderer.setSize(window.innerWidth, window.innerHeight)
                document.body.appendChild(this.renderer.domElement)

                const geometry = new THREE.BoxGeometry(1, 1, 1)
                const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
                this.cube = new THREE.Mesh(geometry, material)
                this.scene.add(this.cube)

                this.camera.position.z = 5

                const animate = function() {}
            },
            animate: function() {
                requestAnimationFrame(this.animate)

                this.cube.rotation.x += 0.01
                this.cube.rotation.y += 0.01

                this.renderer.render(this.scene, this.camera)
            }
        },
        mounted() {
            this.init()
            this.animate()
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
