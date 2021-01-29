<template>
    <div class="font-base text-body">
        <header class="fixed inset-x-0 z-20 px-5 pt-4 bg-white xl:bg-opacity-75 xl:pt-8 sm:px-8 pro:px-4 xl:px-0">
            <div class="container flex-col items-center xl:flex xl:flex-row xl:justify-between">
                <g-link to="/" class="inline-block">
                    <g-image immediate="true" blur="0" alt="Cab9 logo" src="~/assets/images/logo.png" class="logo" />
                </g-link>
                <nav class="pt-8 text-lg xl:pt-0 xl:mt-0 xl:block" :class="[showMenu ? 'block' : 'hidden']">
                    <ul class="inline-flex flex-col xl:flex-row">
                        <li class="relative mb-3 xl:mb-0 has-nav" onclick="">
                            <a class="pb-2 xl:pb-0 xl:px-8">Product</a>
                            <div
                                class="flex-col mt-2 whitespace-no-wrap bg-white rounded-lg xl:mt-0 xl:shadow-lg xl:p-5 xl:absolute subnav">
                                <g-link class="mb-1 text-base font-medium xl:mb-3 hover:text-gray-500"
                                    to="/products/dispatch-system/">Dispatch System
                                </g-link>
                                <g-link class="mb-1 text-base font-medium xl:mb-3 hover:text-gray-500"
                                    to="/products/passenger-app/">Passenger App
                                </g-link>
                                <g-link class="mb-1 text-base font-medium xl:mb-3 hover:text-gray-500"
                                    to="/products/driver-app/">Driver App
                                </g-link>
                                <g-link class="text-base font-medium hover:text-gray-500" to="/products/integrations/">
                                    Integrations
                                </g-link>
                            </div>
                        </li>
                        <li class="mb-3 xl:mb-0">
                            <g-link class="pb-2 xl:pb-0 xl:px-8 hover:text-gray-500" to="/customers/">Customers</g-link>
                        </li>
                        <li class="mb-3 xl:mb-0">
                            <g-link class="pb-2 xl:pb-0 xl:px-8 hover:text-gray-500" to="/company/">Company</g-link>
                        </li>
                        <li class="mb-3 xl:mb-0">
                            <g-link class="pb-2 xl:pb-0 xl:px-8 hover:text-gray-500" to="/blog/">Blog</g-link>
                        </li>
                        <li class="mb-3 xl:mb-0"><a href="https://support.cab9.app/" target="_blank"
                            class="pb-2 xl:pb-0 xl:px-8 hover:text-gray-500">Support</a></li>
                        <li class="mb-3 xl:mb-0"><a href="http://e9.co.uk/" target="_blank"
                            class="pb-2 font-demi text-primary xl:pb-0 xl:px-8">e9</a></li>
                    </ul>
                </nav>
                <g-link to="/book-demo/" class="mt-3 mb-6 btn-primary xl:inline-block xl:mb-0 xl:mt-0 login-btn"
                    :class="[showMenu ? 'inline-block' : 'hidden',currentRoute=='/book-demo/'?'opacity-0':'']">Book
                    Demo
                </g-link>
                <g-image immediate="true" blur="0" alt="Cab9 logo" src="~/assets/images/icons/menu.svg"
                    class="absolute top-0 right-0 w-6 pt-4 mr-4 sm:block xl:hidden"
                    @click="showMenu = !showMenu" />
            </div>
        </header>
        <div class="pt-8 lg:pt-16 xl:pt-0">
            <slot />
        </div>
        <section class="py-16 bg-pink-100 md:py-20 xl:py-32" id="book-demo" v-show="currentRoute!='/book-demo/'">
            <div class="container px-5 sm:px-8 xl:px-40">
                <div class="text-center">
                    <h1 class="mb-3 xl:mb-5">Get In Touch</h1>
                    <p>Let us show you how Cab9 can make your business more efficient, provide your staff with the
                        software they need whilst always focusing on helping your business become more profitable.</p>
                    <g-link to="/book-demo/" class="mt-8 btn btn-primary md:mt-10">Book a demo today</g-link>

                </div>
            </div>
        </section>
        <footer class="py-16">
            <div class="container px-5 sm:px-8 xl:px-4">
                <div class="text-center md:text-left md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <g-link to="/">
                            <g-image immediate="true" blur="0" alt="Cab9 logo" src="~/assets/images/logo.png"
                                class="w-32 mx-auto md:mx-0" />
                        </g-link>
                        <p class="mt-5 text-gray-600">14 Great College Street <br>Westminster, <br>
                            London SW1P 3RX
                        </p>
                        <div class="mt-4 leading-relaxed">
                            <a class="font-medium tracking-wider text-primary hover:text-red-700"
                                href="tel:+44 203 388 8999">+44 203 388 8999</a>
                            <br />
                            <a class="font-medium tracking-wider text-primary hover:text-red-700"
                                href="mailto:sales@cab9.co">sales@cab9.co</a>
                        </div>
                    </div>
                    <nav>
                        <ul class="flex flex-wrap justify-center text-lg md:grid md:grid-flow-col md:gap-6 lg:gap-12 xl:gap-20">
                            <li class="px-2 mb-2 lg:mb-0 md:px-0">
                                <a href="" @click="showProducts=!showProducts">Product</a>
                                <div class="flex-col mt-1 md:absolute lg:mt-4" :class="[showProducts?'flex':'hidden']">
                                    <g-link class="mb-1 text-sm lg:mb-3 hover:text-gray-500"
                                        to="/products/dispatch-system/">Dispatch System
                                    </g-link>
                                    <g-link class="mb-1 text-sm lg:mb-3 hover:text-gray-500"
                                        to="/products/passenger-app/">Passenger App
                                    </g-link>
                                    <g-link class="mb-1 text-sm lg:mb-3 hover:text-gray-500" to="/products/driver-app/">
                                        Driver App
                                    </g-link>
                                    <g-link class="text-sm hover:text-gray-500" to="/products/integrations/">
                                        Integrations
                                    </g-link>
                                </div>
                            </li>
                            <li class="px-2 mb-2 lg:mb-0 md:px-0">
                                <g-link class="hover:text-gray-500" to="/customers/">Customers</g-link>
                            </li>
                            <li class="px-2 mb-2 lg:mb-0 md:px-0">
                                <g-link class="hover:text-gray-500" to="/company/">Company</g-link>
                            </li>
                            <li class="px-2 mb-2 lg:mb-0 md:px-0">
                                <g-link class="hover:text-gray-500" to="/blog/">Blog</g-link>
                            </li>
                            <li class="px-2 mb-2 lg:mb-0 md:px-0"><a href="https://support.cab9.app/" target="_blank"
                                class="hover:text-gray-500">Support</a></li>
                            <li class="px-2 mb-2 lg:mb-0 md:px-0"><a href="http://e9.co.uk/" target="_blank"
                                class="font-demi text-primary">e9</a></li>

                        </ul>
                    </nav>
                </div>
                <div class="mt-6 text-center md:mt-16 md:flex md:justify-between">
                    <p class="mb-2 mr-4 text-gray-600 md:mb-0">© Copyright <span>{{ currentYear }}</span> CAB 9 Ltd -
                        All Rights Reserved
                    </p>
                    <ul class="md:flex">
                        <li>
                            <g-link to="/cookie-policy" class="text-primary hover:text-body md:mr-8">Cookie Policy
                            </g-link>
                        </li>
                        <li>
                            <g-link to="/privacy-policy" class="text-primary hover:text-body">Privacy Policy</g-link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div id="back-to-top">
            <a href="#">
                <g-image immediate="true" blur="0" title="Back to Top" src="~/assets/images/icons/up.svg"
                    alt="Icon backtotop"></g-image>
            </a>
        </div>
    </div>
</template>

<static-query>
query {
metadata {
siteName
}
}
</static-query>
<script>
import { greet } from '@/utilities';

export default {
    name: 'Layout',
    data() {
        return {
            showMenu: false,
            currentYear: new Date().getFullYear(),
            showProducts: false
        };
    },
    computed: {
        currentRoute() {
            return this.$route.path;
        }
    },
    mounted() {
        greet();

        // Hide Header on on scroll down
        let lastScrollTop = 0;
        let delta = 5;
        let navbarHeight = window.$('header').outerHeight();
        // if (window.$(window).width() > 768) {
        window.$(window).scroll(function() {
            hasScrolled();
        });

        // }

        function hasScrolled() {
            var st = window.$(window).scrollTop();
            if (st == 0) window.$('header').removeClass('scrolled');

            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }

            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                window.$('header').addClass('scrolled');
                window.$('header').addClass('scrolled-down');
            } else {
                // Scroll Up
                if (st + window.$(window).height() < window.$(document).height()) {
                    window.$('header').removeClass('scrolled-down');
                }
            }
            lastScrollTop = st;

            //back to top
            if ($(window).scrollTop() > 250) {
                $('#back-to-top').fadeIn(800);
            } else {
                $('#back-to-top').fadeOut('fast');

            }
        }

        $('#back-to-top').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1000);
        });
    }
};
</script>


<style lang='scss' scoped>
header {
	transition: all .5s;
	top: 0;

	&.scrolled {
		padding-top: 16px;
		padding-bottom: 16px;
	}

	&.scrolled-down {
		top: -150px;

		@media (max-width: 767px) {

			nav,
			.login-btn {
				display: none;
			}
		}

	}
}

#back-to-top {
	position: fixed;
	bottom: 15px;
	right: 20px;
	z-index: 3;
	display: none;

	a {
		opacity: 0.20;
		display: block;
		transition: color 200ms ease;
		background: #000000;
		padding: 16px;
		border-radius: 50%;

		img {
			height: 30px;
			width: 30px;
		}

		&:hover {
			opacity: .4;
		}
	}
}
</style>
