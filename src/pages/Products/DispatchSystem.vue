<template>
    <Layout>
        <ImageBlock title="Smart Dispatch Solution for Smart Businesses"
            desc="Easily keep track of clients, drivers and vehicles in real-time, manually or automatically dispatch vehicles to bookings, and set predefined rules to let Cab9 plan ahead."
            link-text="Learn More" media-align="right" :link-action="scrollToFn('#dispatch-feature-list')"
            class="pb-0 md:pb-0 xl:h-screen">
            <template v-slot:media>
                <div class="ml-12 lg:ml-6">
                    <img src="@/assets/images/products/dispatch-system/dashboard.jpg" data-aos="fade-left" />
                </div>
            </template>
        </ImageBlock>
        <FeatureList title="Why Use Our Dispatch System"
            desc="Our system has been designed as a robust and complete solution for managing any size of ground transport business. Like any good technology, Cab9 allows you to get more done, more efficiently. "
            :features="features" id="dispatch-feature-list"></FeatureList>
        <section>
            <div class="container px-5 text-center sm:px-8 xl:px-40">
                <h1 class="mb-3 xl:mb-5">Making Dispatch Painless</h1>
                <p class="xl:text-xl">Cab9 is designed to make the entire dispatch process, from initial booking to
                    dispatching the right driver, a simple and effortless one. You choose the level of automation
                    required to fulfil your business needs. Our best in class system does the thinking for you,
                    presenting logical and trouble-free solutions.</p>
            </div>
            <div class="container px-5 mt-8 text-center sm:px-8 xl:px-4 xl:mt-16">
                <div class="relative overflow-hidden border border-gray-400 rounded shadow-md">
                    <img src="@/assets/images/browser.png" alt="">
                    <img src="/uploads/dispatch-bookings.jpg" class="absolute object-cover" alt=""
                        style="top:3.43%;left:0;" id="poster">
                    <video loop autoplay muted playsinline class="absolute object-cover" style="top:3.43%;left:0;"
                        id="dispatch-video">
                        <source src="/uploads/dispatch-bookings.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="grid justify-center gap-2 mt-8 md:grid-flow-col xl:mt-16">
                    <a href="" :class="currentDispatch=='dispatch-bookings'?'btn-primary':'btn-gray-500'"
                        @click="changeVideo('dispatch-bookings')">Dispatch System</a>
                    <a href="" :class="currentDispatch=='intelligent-search'?'btn-primary':'btn-gray-500'"
                        @click="changeVideo('intelligent-search')">Intelligent Search</a>
                    <a href="" :class="currentDispatch=='driver-tracking'?'btn-primary':'btn-gray-500'"
                        @click="changeVideo('driver-tracking')">Live Driver Tracking</a>
                </div>
            </div>
        </section>
        <ImageBlock class="bg-gray-100" title="Highly Configurable Dispatch System"
            desc="Cab9 has been developed to allow you to configure it to match your business workflow, making it a dream to work with. When you choose to use CAB9, our professional support team will discuss your workflow and help you configure the system to reflect it, so you can get the most, out of the software."
            media-align="right" media-content-align="right">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Intuitive Design</li>
                    <li>Colour Coded System</li>
                    <li>Flight Tracking</li>
                    <li>Real Time Stats</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="w-11/12 mx-auto mt-8 lg:w-full xl:w-11/12">
                    <g-image immediate="true" blur="0" src="~/assets/images/products/dispatch-system/configurable.png"
                        data-aos="fade-left" data-aos-anchor-placement="center-bottom" class="rounded shadow-md" />
                </div>
            </template>
        </ImageBlock>
        <section>
            <div class="container px-5 text-center sm:px-8 xl:px-40">
                <h1 class="mb-3 xl:mb-5">Intelligent Auto Dispatch system</h1>
                <p class="xl:text-xl">Cab9 has reinvented dispatch like never before, using algorithms which take into
                    account several customisable factors to ensure the right driver is dispatched to the right job. The
                    dispatch system creates a real-time plot around every booking and assesses live driver queues within
                    it to assign the best driver. This way, your clients never wait too long and the drivers still
                    benefit from queue fairness.</p>
                <div class="relative mt-8 overflow-hidden border border-gray-300 rounded shadow-md xl:mt-16">
                    <img src="@/assets/images/browser.png" alt="">
                    <video loop autoplay muted playsinline class="absolute object-cover" style="top:3.43%;left:0;"
                        poster="@/assets/images/products/dispatch-system/auto-dispatch.jpg">
                        <source src="@/assets/images/products/dispatch-system/auto-dispatch.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
        <section class="bg-gray-100">
            <div class="container px-5 text-center sm:px-8 xl:px-40">
                <h1 class="mb-3 xl:mb-5">Workshare</h1>
                <p class="xl:text-xl">Workshare allows you to build a nationwide virtual fleet, which can be allocated
                    bookings in two clicks of a mouse. Before selecting partners, you can view fleet types and pricing
                    to ensure they are the right fit. If you want to get more customers, fill quiet times and increase
                    bookings, then you need to be a part of Workshare.</p>
                <ul class="flex flex-wrap justify-center mt-5 feature-list">
                    <li class="mx-3">Get More Bookings</li>
                    <li class="mx-3">View Partner Pricing</li>
                    <li class="mx-3">Run a Virtual Fleet</li>
                    <li class="mx-3">Easy to Use</li>
                </ul>
                <div class="relative mt-8 overflow-hidden border border-gray-300 rounded shadow-md xl:mt-16">
                    <img src="@/assets/images/browser.png" alt="">
                    <video loop autoplay muted playsinline class="absolute object-cover" style="top:3.43%;left:0;"
                        poster="@/assets/images/products/dispatch-system/workshare.jpg">
                        <source :src="require(`@/assets/images/products/dispatch-system/workshare.mp4`)"
                            type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
        <ImageBlock title="Precise Pricing and Tailored Tariffs"
            desc="Accurate and flexible pricing is the life blood of a private hire business. With Cab9 you simply set and forget, allowing the system to do all the hard work. Tariffs can be built a number of ways, including zones, postcodes, fixed pricing & layered pricing. Discount codes and client specific pricing can also be applied to bookings."
            media-align="right" media-content-align="right">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Vehicle Based</li>
                    <li>Special Rates</li>
                    <li>Chauffeur Pricing</li>
                    <li>Cancellation Policies</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="w-11/12 mx-auto mt-8">
                    <g-image immediate="true" blur="0"
                        src="~/assets/images/products/dispatch-system/tailored-tariff.jpg" data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom" class="rounded shadow-md" />
                </div>
            </template>
        </ImageBlock>
        <Next name="Passenger App" link="/products/passenger-app"></Next>
    </Layout>
</template>
<script>
import { scrollTo } from '@/utilities';
import AOS from '~/assets/js/aos';
import FeatureList from '~/components/FeatureList';
import Next from '@/components/Next';

export default {
    metaInfo: {
        title: 'Dispatch System'
    },
    components: {
        FeatureList,
        Next
    },
    data() {
        return {
            features: [
                {
                    title: 'Fully automated Dispatch',
                    desc: 'Customisable auto dispatch that allows you to set the rules for who, how and when the auto dispatch sends work to your drivers. ',
                    iconUrl: '/icons/customer.svg'
                },
                {
                    title: 'Multiple pricing models',
                    desc: 'Cab9 can be configured to meet your needs, whether it’s multiple pricing models, client specific pricing or an uplift at busy times.',
                    iconUrl: '/icons/pricing.svg'
                },
                {
                    title: 'User friendly interface',
                    desc: 'Our system has been designed with the user in mind, each element has a purpose and function adding value to the user.',
                    iconUrl: '/icons/user-friendly.svg'
                },
                {
                    title: 'Intelligent search',
                    desc: 'Data is to hand within Cab9. Our “Elasticsearch” function allows you to find information from anywhere and make decisions, fast!',
                    iconUrl: '/icons/search.svg'
                },
                {
                    title: 'Superior Customer Management',
                    desc: 'Adhere to customer needs via a secure, flexible, and easy to use operational platform to ensure expectations are met, every time.',
                    iconUrl: '/icons/status.svg'
                },
                {
                    title: 'Client Portals',
                    desc: 'Allow your most important clients to add bookings directly on your system, improving your service level and speed while reducing costs.',
                    iconUrl: '/icons/driver.svg'
                }

            ],
            currentDispatch: 'dispatch-bookings'

        };
    },
    methods: {
        scrollToFn(goToSection) {
            function a() {
                scrollTo(goToSection);
            }

            return a;
        },
        changeVideo(name) {
            this.currentDispatch = name;
            let video = $('#dispatch-video')[0];
            video.pause();
            $('#dispatch-video').attr('src', '/uploads/' + name + '.mp4');
            $('#poster').attr('src', '/uploads/' + name + '.jpg');
            video.load();
            video.play();
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

<style lang='scss' scoped></style>
