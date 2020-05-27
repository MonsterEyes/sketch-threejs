<template>

    <nav class="fixed-header"
         v-bind:class="{shrink: scrollPosition > 100}">

        <header class="header nav-container">

            <!--Brand Logo and Slogan-->
            <div class="logo-slogan menu menu--adsila">
                <a href="/" class="menu__item">
                    <img class="logo-image" :src="nav.brandLogo">
                    <span id="slogan"><span class="menu__item-name">{{nav.slogan}}</span></span>
                </a>

            </div>

            <!-- menu menu--adsila -->
            <!-- menu__item -->
            <!-- menu__item-name -->


            <!--Main Nav Items-->
            <ul class="main-nav menu menu--adsila">
                <li v-for="item in nav.menuItems"
                    :key="item.title"
                    class="menu__item"
                    :to="item.path">
                    <a :href="item.path" class="menu__item-name" :download="item.download">
                        {{ item.title }}
                        <img v-if="item.icon" class="nav-icon" :src="item.icon">
                    </a>
                </li>
            </ul>

            <!--Mobile Hamburger-->
            <span class="open-slide">
                <button @click="opened = !opened">
                    <div>
                        <div class="bar" :class="{topopen: opened}"></div>
                        <div class="bar" :class="{midopen: opened}"></div>
                        <div class="bar" :class="{botopen: opened}"></div>
                    </div>
                </button>
              </span>

        </header>

        <!--Mobile Side Nav-->
        <div id="allTheNav">
            <div id="side-menu menu menu--adsila" class="side-nav" :class="{sidenavopen: opened}">
                <a v-for="item in nav.menuItems"
                   class="menu__item"
                   :key="item.title"
                   :href="item.path"
                   :download="item.download"
                   @click="opened = !opened">
                    <span class="menu__item-name">
                         {{ item.title }}
                    </span>
                </a>
            </div>
        </div>

    </nav>


</template>


<script>


    export default {

        data() {
            return {
                scrollPosition: null,
                sidebar       : false,
                opened        : false,
            }
        },

        props  : {
            siteSlogan: String,
            nav       : Object
        },
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.updateScroll);
        }
    }


</script>


<style lang="scss">


    $medium : 768px;
    $accentColor : #99cccc;
    $lightColor : #fff;
    $darkColor : #000;

    body {
        //background : #dedede; /*delete*/
        overflow-x : hidden;
    }

    .nav-container {
        padding-right : 15px;
        padding-left  : 15px;
        margin-right  : auto;
        margin-left   : auto;
        @media screen and (min-width : $medium) {
            width : 750px;
        }
        @media screen and (min-width : 992px) {
            width : 970px;
        }
        @media screen and (min-width : 1200px) {
            width : 1170px;
        }
    }

    .header,
    .main-nav,
    .open-slide {
        display : flex;
    }

    .header {
        padding-top     : .6rem;
        align-items     : center;
        flex-direction  : row;
        justify-content : space-between;
    }

    .main-nav {
        margin-bottom : 0;
    }

    @media (max-width : 768px) {
        .main-nav {
            display : none;
        }
    }

    .fixed-header {
        position           : fixed;
        overflow           : visible;
        top                : 0;
        left               : 0;
        width              : 100%;
        color              : #fff;
        z-index            : 10000;
        height             : 70px;
        -webkit-transition : height 0.5s;
        -moz-transition    : height 0.5s;
        transition         : all 0.5s;
        @media (min-width : $medium) {
            height : 150px;
        }
        .logo-slogan {
            font-size   : .9rem;
            color       : $darkColor;
            display     : flex;
            align-items : center;
            a {
                display : contents;
                &:hover {
                    color: black;
                    font-weight: 600;
                }
            }
        }
        #slogan {
            @media (max-width : $medium) {
                font-size : .7rem;
            }
        }
        .logo-image {
            height             : 40px;
            border-radius      : 50px;
            margin             : 0 10px;
            @media (min-width : $medium) {
                height : 50px;
            }
            -webkit-transition : all 0.4s ease-in-out;
            -moz-transition    : all 0.4s ease-in-out;
            transition         : all 0.4s ease-in-out;
            &:hover {
                animation : ring .4s ease-in-out;
            }
        }
        a {
            color           : $darkColor;
            padding         : 0 2rem;
            text-decoration : none;
            &:hover {
                color : $accentColor;
            }
            .nav-icon {
                width: 13px;
            }
        }
        &.shrink {
            height           : 60px;
            background-color : rgba(255, 255, 255, 0.95);
            box-shadow       : 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
            @media (min-width : $medium) {
                height : 62px;
            }
            /*a, .logo-slogan {
                color : $lightColor;
            }*/
            .logo-image {
                @media (min-width : $medium) {
                    height : 40px;
                }
            }
            /*.bar {
                background : $lightColor;
            }*/
        }
        li {
            list-style : none;
        }
    }

    /*mobile side nav*/

    .open-slide {
        z-index  : 2;
        position : relative;
        @media (min-width : $medium) {
            display : none;
        }
        button {
            border     : none;
            background : none;
            margin     : 0;
        }
    }

    .side-nav {
        height           : 0;
        width            : 100%;
        position         : fixed;
        z-index          : 1;
        top              : -100px;
        left             : 0;
        background-color : #111;
        opacity          : 0.9;
        overflow-x       : hidden;
        padding-top      : 60px;
        transition       : 0.3s;
    }

    .sidenavopen {
        height           : 100%;
        position         : fixed;
        z-index          : 1;
        top              : 0;
        left             : 0;
        background-color : #111;
        opacity          : 0.9;
        overflow-x       : hidden;
        padding-top      : 60px;
        transition       : 0.3s;
        a {
            opacity   : 0;
            animation : fadeInUpNav .8s ease forwards;
            &:nth-child(1) {
                animation-delay : .1s;
            }
            &:nth-child(2) {
                animation-delay : .2s;
            }
            &:nth-child(3) {
                animation-delay : .3s;
            }
            &:nth-child(4) {
                animation-delay : .4s;
            }
            &:nth-child(5) {
                animation-delay : .5s;
            }
            &:nth-child(6) {
                animation-delay : .6s;
            }


        }
    }

    .side-nav a {
        opacity         : 0;
        padding         : 10px 10px 10px 30px;
        text-decoration : none;
        color           : #ccc;
        display         : block;
        text-align      : center;
        transition      : all 0.3s;
        font-weight     : bold;
        font-size       : 32px;
        .nav-icon {
            width: 20px;
        }
    }

    @keyframes fadeInUpNav {
        0% {
            opacity   : 0;
            transform : translateY(-20px);
        }
        100% {
            opacity   : 1;
            transform : translateY(0);
        }
    }

    .bar {
        display    : block;
        height     : 3px;
        width      : 25px;
        background : $darkColor;
        margin     : 5px auto;
        transition : all .3s ease;
        &.midopen, &.topopen, &.botopen {
            background : $lightColor;
        }
    }

    .midopen {
        width : 0;
    }

    .topopen {
        transform : translateY(8px) rotateZ(45deg);
    }

    .botopen {
        transform : translateY(-8px) rotateZ(-45deg);
    }

    /*Link Hover Effect*/
    .menu__item-name {
        position : relative;
        display  : inline-block;
    }

    .menu--adsila .menu__item-name {
        padding                    : 0 0.35em;
        font-weight                : bold;
        line-height                : 1.4;
        transition                 : color 0.5s;
        transition-timing-function : cubic-bezier(0.2, 1, 0.3, 1);
    }

    .menu--adsila .menu__item-name::before {
        content                    : '';
        position                   : absolute;
        z-index                    : -1;
        width                      : 100%;
        height                     : 50%;
        left                       : 0;
        bottom                     : 0;
        opacity                    : 0.3;
        transform                  : scale3d(0, 1, 1);
        transform-origin           : 0% 50%;
        transition                 : transform 0.5s;
        transition-timing-function : cubic-bezier(0.2, 1, 0.3, 1);
    }

    .menu--adsila .menu__item .menu__item-name::before {
        background : $accentColor;
    }

    /* Hover */

    .menu--adsila .menu__item:hover,
    .menu--adsila .menu__item:focus {
        color : $accentColor;
    }

    .menu--adsila .menu__item:hover .menu__item-name::before,
    .menu--adsila .menu__item:focus .menu__item-name::before {
        transform : scale3d(1, 1, 1);
    }

    @keyframes ring {
        0%, 74% {
            transform : scale(1);
        }
        85%, 100% {
            transform : scale(1.05);
        }
    }


</style>
