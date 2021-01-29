<template>
    <Layout>
        <section class="relative flex items-center pb-8 cover">
            <div class="container">
                <div class="inset-y-0 right-0 flex items-center lg:w-6/12 lg:absolute">
                    <div id="cab9Anim" data-aos="lottie" data-aos-id="cab9-anim" data-aos-mirror="true" class="w-full"></div>
                </div>
                <div class="px-4 lg:w-6/12 md:px-8 xl:px-0">
                    <h1 class="mb-3 xl:mb-5">Powerful, Simple and Innovative way to manage your Private Hire & Taxi Business</h1>
                    <div class="flex justify-between mb-8 text-xs tracking-wider lg:mb-10 md:text-base">
                        <div>
                            <span class="mr-1 font-demi md:mr-2">6+</span>
                            <span class="text-gray-600 uppercase">Years</span>
                        </div>
                        <div>
                            <span class="mr-1 font-demi md:mr-2">100+</span>
                            <span class="text-gray-600 uppercase">Clients</span>
                        </div>
                        <div>
                            <span class="mr-1 font-demi md:mr-2">1 Million+</span>
                            <span class="text-gray-600 uppercase">Bookings</span>
                        </div>
                    </div>
                    <a href="" class="btn-primary" @click="scrollToFn('#about-cab9')">Learn More</a>
                </div>
            </div>
        </section>
        <section class="pb-16 xl:py-8 md:pb-20 xl:pb-32" id="about-cab9">
            <div class="container px-5 text-center sm:px-8 xl:px-36">
                <h1 class="mb-3 md:mb-5">
                    Easy to use. <br />
                    <span class="text-primary">Cab9</span> is a comprehensive and streamlined dispatch solution.
                </h1>
                <p class="lg:text-lg">
                    A powerful dispatch system and fully featured driver and passenger apps that seamlessly integrate with your workflow.<br />
                    Configure the system to suit your business needs and let <span class="font-demi text-primary">Cab9</span> take care of the rest.
                </p>
            </div>
            <div class="container px-5 text-center sm:px-8 xl:px-40">
                <div class="relative mt-8 xl:mt-16">
                    <g-image immediate="true" blur="0" src="~/assets/images/home/dispatch-system/dispatch-portal.png" data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
                    <g-image immediate="true" blur="0" src="~/assets/images/home/dispatch-system/web-booker.png" class="absolute top-0 right-0" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="center-bottom" />
                    <g-image immediate="true" blur="0" src="~/assets/images/home/dispatch-system/driver-app.png" class="absolute top-0 right-0" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="center-bottom" />
                    <g-image immediate="true" blur="0" src="~/assets/images/home/dispatch-system/passenger-app.png" class="absolute top-0 right-0" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="center-bottom" />
                </div>
            </div>
        </section>
        <FeatureList title="Why Use Cab9" desc="After consultation with industry experts and investing time to understand the end-to-end processes in a busy dispatch office, Cab9 was developed from the ground up to answer real issues faced by ground transport companies." :features="features"> </FeatureList>
        <ImageSection text="Making Dispatching Painless" img-url="home/dispatch-system.jpg" height="screen" theme="dark">
            <template v-slot:content>
                <div class="flex justify-center md:justify-start">
                    <g-link to="/products/dispatch-system" class="mt-8 btn-gray-100 md:mt-10">Learn More</g-link>
                </div>
            </template>
        </ImageSection>
        <section class="bg-gray-100">
            <div class="container px-5 text-center sm:px-8 xl:px-40">
                <p class="mb-1 text-xs tracking-widest uppercase text-primary md:text-base font-demi md:mb-3">Passenger App</p>
                <h1 class="mb-3 xl:mb-5">Focused On Keeping Your Clients Happy!</h1>
                <p class="xl:text-xl">Our industry leading iOS & Android passenger app offers a smooth transaction from booking to payment. This provides high customer satisfaction, enabling you to stand out in a crowded market place. Mobile booking has never been so simple.</p>
                <ul class="flex flex-wrap justify-center mt-5 feature-list">
                    <li class="mx-3">Integrated Wallet</li>
                    <li class="mx-3">Bookings History</li>
                    <li class="mx-3">Journey Tracking</li>
                    <li class="mx-3">Secure Payments</li>
                </ul>
                <div class="mt-8 md:mt-10">
                    <g-link to="/products/passenger-app/" class="btn btn-primary">Learn More</g-link>
                </div>
            </div>
            <div class="container grid grid-flow-col px-5 mt-8 text-center sm:px-8 xl:px-4 xl:mt-16">
                <g-image immediate="true" blur="0" src="~/assets/images/home/passenger-app/request-journey.png" data-aos="fade-left" data-aos-anchor-placement="center-bottom" />
                <g-image immediate="true" blur="0" src="~/assets/images/home/passenger-app/vehicle-options.png" />
                <g-image immediate="true" blur="0" src="~/assets/images/home/passenger-app/onroute.png" data-aos="fade-right" data-aos-anchor-placement="center-bottom" />
            </div>
        </section>
        <ImageBlock
            tagline="Driver App"
            title="Perfect Solution For Drivers"
            desc="Drivers are at the heart of your business and our driver app reflects this. Available on iOS & Android, simple to use and understand, the driver app keeps valuable Information to hand. Allow your drivers to view their bookings and earnings build on the intuitive dashboard, keeping them engaged with your company."
            link-text="Learn More"
            media-align="right"
            media-content-align="right"
            link-url="/products/driver-app/"
            class="pb-0 md:pb-0"
        >
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Easy-to-use navigation</li>
                    <li>Track Bookings</li>
                    <li>Driver Earnings</li>
                    <li>Real Time data</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="flex items-end h-full">
                    <div class="relative">
                        <g-image immediate="true" blur="0" src="~/assets/images/home/driver-app-menu.png" data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
                        <g-image immediate="true" blur="0" src="~/assets/images/home/driver-app-en-route.png" class="absolute top-0 right-0" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="center-bottom" />
                    </div>
                </div>
            </template>
        </ImageBlock>
        <section class="relative flex items-center py-16 overflow-hidden bg-gray-100 xl:py-32 md:py-20 integrations">
            <div class="container">
                <div class="px-5 text-center sm:px-8 xl:px-40">
                    <p class="mb-1 text-sm tracking-widest uppercase text-primary md:text-base font-demi md:mb-3">Integrations</p>
                    <h1 class="mb-3 md:mb-5">Looking to The Future, To Help You Grow Your Business</h1>
                    <p class="lg:text-lg">Technology is changing and Cab9 wants you to keep pace by offering 3rd party API integrations with new products and systems. Each one is selected for being a market leader and for the value it will provide you as a Cab9 user, giving you an unfair advantage over the competition.</p>
                    <g-link to="/products/integrations/" class="mt-8 btn btn-primary md:mt-10">Learn More</g-link>
                </div>
                <div class="flex flex-wrap items-center justify-center px-5 mt-4 md:mt-8 md:flex-no-wrap sm:px-8 xl:px-36">
                    <div class="flex items-center justify-center w-24 h-10 px-4 mt-8 md:h-12 md:w-32 xl:w-48 xl:h-16 xl:px-8">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full" src="~/assets/images/home/integrations/city-fleet.png" />
                    </div>
                    <div class="flex items-center justify-center w-24 h-10 px-4 mt-8 md:h-12 md:w-32 xl:w-48 xl:h-16 xl:px-8">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full" src="~/assets/images/home/integrations/get-taxi.png" />
                    </div>
                    <div class="flex items-center justify-center w-24 h-10 px-4 mt-8 md:h-12 md:w-32 xl:w-48 xl:h-16 xl:px-8">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full" src="~/assets/images/home/integrations/one-transport.png" />
                    </div>
                    <div class="flex items-center justify-center w-24 h-10 px-4 mt-8 md:h-12 md:w-32 xl:w-48 xl:h-16 xl:px-8">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full" src="~/assets/images/home/integrations/what-3-words.png" />
                    </div>
                    <div class="flex items-center justify-center w-24 h-10 px-4 mt-8 md:h-12 md:w-32 xl:w-48 xl:h-16 xl:px-8">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full" src="~/assets/images/home/integrations/groundscope.png" />
                    </div>
                    <div class="flex items-center justify-center w-24 h-10 px-4 mt-8 md:h-12 md:w-32 xl:w-48 xl:h-16 xl:px-8">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full" src="~/assets/images/home/integrations/minicabit.png" />
                    </div>
                </div>
            </div>
        </section>
        <ImageBlock
            tagline="Vehicles/Fleet"
            title="Minimising The Hassle Of Fleet Management"
            desc="To help with fleet management, Cab9 offers one location to store all of your relevant vehicle documents and information. All data is easily accessible and expiration dates are tracked, with reminders being sent at the appropriate time. Any vehicle that is not compliant can be automatically deactivated.<br><br>"
            media-align="right"
            content-class="pb-16 lg:pb-0"
            class="pb-0 bg-gray-200 md:pb-0 lg:bg-transparent"
        >
            <template v-slot:media>
                <g-image immediate="true" blur="0" src="~/assets/images/home/fleet.png" class="bg-white lg:w-auto lg:h-full lg:max-w-none" />
            </template>
        </ImageBlock>
        <ImageBlock
            tagline="Cab9 Chat"
            title="Stay Connected"
            desc="New technologies are at the heart of Cab9. Technologies which make the Cab9 more connected, capable and intuitive.<br><br><span class='font-demi text-primary'>Introducing Cab9 Chat.</span><br><br>Cab9 Chat is a native chat application available for Windows and Macs which allows users to stay in control of all communications via the software. You can choose to message individuals or predetermined groups, depending on the message.<br><br>Cab9 Chat is also available through the driver application and offers the driver a seamless way to stay in touch with the control."
            media-align="left"
            content-class="pb-8 sm:pb-0"
            class="bg-gray-100"
        >
            <template v-slot:content>
                <div class="mt-8 md:mt-10">
                    <a href="https://www.dropbox.com/s/zsg2jasz7sslfub/Cab9ChatInstaller-0-1-30.dmg?dl=0" target="_blank">
                        <g-image immediate="true" blur="0" src="~/assets/images/home/app-store-btn.png" class="inline-block w-auto h-10 mr-4 max-w-none"></g-image>
                    </a>
                    <a href="https://www.dropbox.com/s/3uz606bn9854ny1/Cab9ChatInstaller-0-1-21.exe?dl=0" target="_blank">
                        <g-image immediate="true" blur="0" src="~/assets/images/home/play-store-btn.png" class="inline-block w-auto h-10 max-w-none"></g-image>
                    </a>
                </div>
            </template>
            <template v-slot:media>
                <div class="flex items-center w-full h-full md:mt-10">
                    <g-image immediate="true" blur="0" src="~/assets/images/home/cab9-chat.png" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="center-bottom" class="lg:-ml-8 xl:-ml-12" />
                </div>
            </template>
        </ImageBlock>
        <Testimonials></Testimonials>
    </Layout>
</template>
<page-query>
query{
posts:allBlog(limit:3,order:DESC){
edges{
node{
title
date
excerpt
}
}
}
}
</page-query>
<script>
import { scrollTo } from '@/utilities';
import AOS from '~/assets/js/aos';
import FeatureList from '~/components/FeatureList';
import ImageBlock from '~/components/ImageBlock';
import ImageSection from '~/components/ImageSection';
import Testimonials from '~/components/Testimonials';

export default {
    metaInfo: {
        title: 'Powerful, Simple and Innovative way to manage your Private Hire & Taxi Business',
    },
    components: {
        ImageBlock,
        FeatureList,
        ImageSection,
        Testimonials,
    },
    data() {
        return {
            features: [
                {
                    title: 'Easy To Use',
                    desc: 'Designed with the user in mind, Cab9’s interface is built around simplicity of use, everything you need is at your fingertips.',
                    iconUrl: '/icons/click.svg',
                },
                {
                    title: 'National Workshare Platform',
                    desc: 'Our expanding network means you can utilise our workshare function to collaborate with other CAB9 operators.',
                    iconUrl: '/icons/workshare.svg',
                },
                {
                    title: '24/7 Support',
                    desc: 'We like to exceed expectations with coordinated and collaborative customer support, from our skilled technical team.',
                    iconUrl: '/icons/support.svg',
                },
                {
                    title: 'Intelligent Automation',
                    desc: 'Cab9 has the ability to Dispatch, Auto Allocate work and allow job bidding, managed by your own pre-defined business rules.',
                    iconUrl: '/icons/smooth.svg',
                },
                {
                    title: 'Management Suit',
                    desc: 'Cab9 takes care of back office functions, including invoicing, driver pay and record keeping while you focus on running your business.',
                    iconUrl: '/icons/user-friendly.svg',
                },
                {
                    title: 'Fully Customisable',
                    desc: 'Cab9 offers great flexibility and control. Customise the system to your needs, helping you run your business efficiently.',
                    iconUrl: '/icons/customisable.svg',
                },
            ],
        };
    },
    methods: {
        scrollToFn(goToSection) {
            scrollTo(goToSection);
        },
    },
    computed: {
        posts() {
            return this.$page.posts.edges.map(function (item) {
                let d = item.node.date.split(' ');
                item.node.day = d.splice(1, 1)[0].substr(0, 2);
                item.node.month = d.join(' ');
                return item.node;
            });
        },
    },
    mounted() {
        if (process.isClient) {
            AOS.init({
                once: true,
                offset: 0,
            });
            let cab9Anim = this.$lottie.loadAnimation({
                container: document.getElementById('cab9Anim'),
                renderer: 'svg',
                loop: true,
                autoplay: false,
                animationData: require('@/assets/data/lottie/cab9.json'),
                rendererSettings: {
                    progressiveLoad: true,
                },
            });

            cab9Anim.setSubframe(false);
            cab9Anim.play();

            document.addEventListener('aos:in:cab9-anim', () => {
                cab9Anim.play();
            });
            document.addEventListener('aos:out:cab9-anim', () => {
                cab9Anim.pause();
            });
        }
    },
};
</script>

<style lang="scss">
.home-links a {
    margin-right: 1rem;
}
</style>
