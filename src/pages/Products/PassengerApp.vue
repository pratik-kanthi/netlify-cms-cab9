<template>
    <Layout>
        <ImageBlock title="We know what your passengers expect"
            desc="While designing the passenger apps we had only one mission i.e. to put you in league with the multinational companies who are spending millions on their apps which is what passengers expect in this day & age."
            link-text="Learn More" media-align="right" :link-action="scrollToFn('#about-passenger-app')"
            class="pb-0 md:pb-0 xl:h-screen">
            <template v-slot:media>
                <div class="flex items-end w-full h-full">
                    <div class="relative">
                        <img src="@/assets/images/products/passenger-app/book-vehicle.png" class="w-full"
                            data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="-200" />
                        <img src="@/assets/images/products/passenger-app/passenger-enroute.png"
                            class="absolute top-0 right-0" data-aos="fade-up" data-aos-delay="200"
                            data-aos-offset="-200" data-aos-anchor-placement="top-bottom" />
                    </div>
                </div>
            </template>
        </ImageBlock>
        <FeatureList id="about-passenger-app" title="Nothing but the Best for Your Customers"
            desc="We build technology around people to make their life easier. That’s why we built our app around your clients allowing for full customisation both visually and functionally."
            :features="features"></FeatureList>
        <!-- <ImageSection class="passenger-app-bg" text="Stay Connected <br> Anywhere Anytime" video-url="products/passenger-app/app-video.mp4" height="screen" theme="dark"></ImageSection> -->
        <section
            class="relative flex items-center pt-16 pb-0 overflow-hidden md:pt-0 md:h-50vh lg:h-70vh xl:h-screen xl:pt-32"
            id="spline-passenger-app">
            <div class="container md:flex md:items-center">
                <div class="relative z-10 px-4 md:w-7/12 xl:w-7/12 md:px-8 pro:px-8 xl:px-0">
                    <h1 class="text-3xl font-bold text-center font-base md:text-4xl lg:text-5xl xl:text-6xl text-shadow-lg md:text-left">
                        Stay Connected <br>
                        Anywhere Anytime</h1>
                </div>
                <div
                    class="flex items-center w-full md:inset-y-0 md:right-0 md:w-7/12 xl:w-7/12 md:absolute iframe-wrapper">
                    <div class="flex justify-center w-full h-full">
                        <iframe src="/uploads/spline-passenger-app/index.html" frameborder="0"
                            class="w-full h-full"></iframe>
                    </div>
                    <div class="absolute inset-0" data-aos="fade-out" data-aos-delay="5000"
                        data-aos-anchor-placement="bottom-bottom">
                        <g-image :immediate="true" blur="0" src="@/assets/images/icons/rotate-right.svg"
                            class="absolute w-10" style="right:25%;top:40%"></g-image>
                    </div>
                    <div class="absolute inset-0" data-aos="fade-out" data-aos-delay="5000"
                        data-aos-anchor-placement="bottom-bottom">
                        <g-image :immediate="true" blur="0" src="@/assets/images/icons/rotate-left.svg"
                            class="absolute w-10" style="left:25%;top:60%;"></g-image>
                    </div>
                </div>
            </div>
        </section>
        <VideoBlock title="Try Out Our Passenger App" play-btn-text="Click Here"
            poster-url="products/passenger-app/app-video-bg.jpg" theme="dark" id="try-passenger-app"
            prototype-url="https://marvelapp.com/prototype/6e5f832?emb=1&iosapp=false&frameless=false"></VideoBlock>
        <ImageBlock title="On-demand Booking"
            desc="Your passenger selects the vehicle, chooses a payment method and books their journey. They can check the ETA of the driver from the app and know when their taxi is approaching their location in real-time, enjoy their ride and settle the bill through the app. A complete and seamless solution."
            media-align="right" media-content-align="right" class="pb-0 bg-gray-100 md:pb-0">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Quick to Book</li>
                    <li>Live Tracking</li>
                    <li>Secure Payments</li>
                    <li>Rate the Driver</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="flex items-end h-full">
                    <div class="relative -mb-1">
                        <g-image :immediate="true" blur="0"
                            src="~/assets/images/products/passenger-app/on-demand-booking.png" />
                        <video loop autoplay muted playsinline class="absolute object-cover"
                            style="width: 32.6%;left: 28.1%;top: 30.2%;transform: rotate(4deg);border-bottom-left-radius:6px;">
                            <source :src="require(`@/assets/images/products/passenger-app/on-demand-booking.mp4`)"
                                type="video/mp4" />
                        </video>
                    </div>
                </div>
            </template>
        </ImageBlock>
        <ImageBlock title="Flexible Vehicle Options"
            desc="Depending on the passenger’s needs and the number of passengers, there are various vehicle types available to choose from, configured by you. You can choose to show live times or add multipliers to account for busy periods. The whole experience can be engineered by you."
            media-align="left" class="pb-0 md:pb-0">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Create App Zones</li>
                    <li>Minimum ETA’s</li>
                    <li>Hide Drivers</li>
                    <li>Customisable Delays</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="relative flex items-end w-full h-full mt-8 bg-gray-200 lg:bg-transparent lg:mt-0">
                    <g-image :immediate="true" blur="0"
                        src="~/assets/images/products/passenger-app/vehicle-options-img.png"
                        class="absolute top-0 left-0" data-aos="fade-down"
                        data-aos-anchor-placement="center-bottom" />
                    <div class="relative">
                        <g-image :immediate="true" blur="0"
                            src="~/assets/images/products/passenger-app/vehicle-booking.png" />
                        <video loop autoplay muted playsinline class="absolute z-10 object-cover"
                            style="width: 34.1%;left: 24%;top: 28.1%;">
                            <source :src="require(`@/assets/images/products/passenger-app/vehicle-options.mp4`)"
                                type="video/mp4" />
                        </video>
                    </div>
                </div>
            </template>
        </ImageBlock>
        <ImageBlock title="Automated Route Planning"
            desc="Every route is automatically planned through the integrated mapping to take the shortest and most efficient route. The passenger will be notified at every step, including vehicle details, ETA of the driver, and other trip updates. Once the booking begins, the passenger will see the trip route and the arrival time at their destination."
            media-align="right" media-content-align="right" class="pb-0 bg-gray-100 md:pb-0">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Live Updates</li>
                    <li>Trip Routes</li>
                    <li>Live Arrival Times</li>
                    <li>Automatic Routing</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="flex items-end h-full">
                    <div class="relative">
                        <g-image :immediate="true" blur="0" src="~/assets/images/products/passenger-app/tracking.png"
                            data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="xl:-mb-20" />
                    </div>
                </div>
            </template>
        </ImageBlock>
        <Next name="Driver App" link="/products/driver-app"></Next>
    </Layout>
</template>

<script>
import { scrollTo } from '@/utilities';
import AOS from '~/assets/js/aos';

import FeatureList from '~/components/FeatureList';
import Next from '@/components/Next';
import VideoBlock from '~/components/VideoBlock';

export default {
    metaInfo: {
        title: 'Passenger App'
    },
    components: {
        FeatureList,
        VideoBlock,
        Next
    },
    data() {
        return {
            features: [
                {
                    title: 'Simple sign up',
                    desc: 'Customers just need an email id and contact number to create an account and travel with your business.',
                    iconUrl: '/icons/signup.svg'
                },
                {
                    title: 'Fully brandable',
                    desc: 'Fully reflect your business identity with our brandable passenger app. Maximising your professional image.',
                    iconUrl: '/icons/branding.svg'
                },
                {
                    title: 'Multiple payment options',
                    desc: 'Your passenger can choose to pay for the trip by cash, securely via pre-added card, or on account.',
                    iconUrl: '/icons/payment.svg'
                },
                {
                    title: 'Live vehicle tracking',
                    desc: 'Easily allow your passengers to track their ride in real time, right to their front door. Providing greater consumer confidence.',
                    iconUrl: '/icons/vehicle-tracking.svg'
                },
                {
                    title: 'Booking History',
                    desc: 'Our application captures all of your previous booking history, keeping accurate records for cost and journey tracking.',
                    iconUrl: '/icons/report.svg'
                },
                {
                    title: 'Call Driver & Controller',
                    desc: 'Offer your clients a transparent communication channel between your passenger, office and driver.',
                    iconUrl: '/icons/call.svg'
                }
            ]
        };
    },
    methods: {
        scrollToFn(goToSection) {
            function a() {
                scrollTo(goToSection);
            }

            return a;
        }
    },
    mounted() {
        if (process.isClient) {
            AOS.init({
                once: true,
                offset: 0
            });
            window.addEventListener('load', AOS.refresh);

        }

    }

};
</script>

<style lang='scss'>
[data-aos="fade-out"] {
	display: block !important;
	opacity: 1 !important;
	transition-property: opacity;

	&.aos-animate {
		display: none !important;
		opacity: 0 !important;
	}
}
</style>
