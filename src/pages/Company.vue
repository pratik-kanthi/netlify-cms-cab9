<template>
    <div>
        <Layout>
            <ImageBlock title="Cab9 a product of e9"
                desc="Cab9 is developed by the talented team of e9. Here at e9 we have established ourselves as a unique and innovative partner in the area of software and application development. We are a forward thinking, dynamic and proactive company which prides itself on providing our clients with a truly memorable experience. "
                link-text="Learn More" media-align="right" :link-action="scrollToFn('#about-company')"
                class="pb-0 xl:h-screen">
                <template v-slot:media>
                    <div class="flex items-end w-full h-full">
                        <div class="relative">
                            <img src="@/assets/images/company/e9-map.png" class="w-full" data-aos="fade-up"
                                data-aos-duration="500" data-aos-anchor-placement="top-bottom"
                                data-aos-offset="-200" />
                            <img src="@/assets/images/company/e9-marker.png" class="absolute top-0 right-0"
                                data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="top-bottom"
                                data-aos-offset="-200" />
                        </div>
                    </div>
                </template>
            </ImageBlock>
            <section class="py-16 md:py-20 xl:py-32" id="about-company">
                <div class="container px-5 sm:px-8 xl:px-40">
                    <h1 class="mb-8 text-xl font-bold text-center font-base md:text-3xl lg:text-4xl xl:text-5xl">Our
                        Mission is to give you the <span class="text-primary">competitive</span> edge in a busy market
                        place</h1>
                    <g-image immediate="true" blur="0" src="~/assets/images/company/mission.jpg"
                        class="w-4/5 mx-auto" />
                </div>
            </section>
            <section class="relative flex items-center py-16 bg-gray-100 md:py-20 xl:py-32">
                <div class="container px-5 sm:px-8 xl:px-4">
                    <div class="flex grid items-center grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 xl:gap-12">
                        <div>
                            <p class="mb-1 text-sm tracking-widest uppercase text-primary md:text-base font-demi md:mb-3">
                                We promise you</p>
                            <h1 class="mb-3 xl:mb-5">We are always learning & improving our technology</h1>
                            <p class="lg:text-lg">
                                The Cab9 team is a motivated group of people. We are always on the hunt for the latest
                                technological advances, so that both company and customer are able to grow.<br><br> Our
                                support and sales teams are always listening to customers and reporting back with new
                                features and functions that should also be included. Finally and most importantly, we
                                only make software that we believe actually improves people’s lives, this holistic
                                approach, combined with strong leadership is the formula for our success.
                            </p>
                        </div>
                        <div class="flex items-center">
                            <g-image immediate="true" blur="0" src="~/assets/images/company/customer-base.jpg"
                                class="rounded shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="pt-16 pb-0 md:pt-20 xl:py-32">
                <div class="container px-5 text-center sm:px-8 xl:px-36">
                    <h1 class="mb-3 xl:mb-5">Headquarters in central London with offices in Manchester and
                        Bangalore</h1>
                </div>
                <div class="container px-5 text-center sm:px-8 xl:px-40">
                    <p class="lg:text-lg">Our primary HQ is based in Central London with a development center in
                        Bangalore. This allows us to offer exceptional development times and at the same time have
                        effective communication with our clients in the UK.</p>
                    <div class="mx-auto mt-8 mb-8 md:w-9/12 lg:w-8/12 md:mt-10 md:mb-10">
                        <div class="flex flex-col justify-around md:flex-row">
                            <div class="mb-1">
                                <span class="mr-2 text-xl font-demi xl:text-3xl text-primary">6+</span>
                                <span class="uppercase lg:text-lg">Years</span>
                            </div>
                            <div class="mb-1">
                                <span class="mr-2 text-xl font-demi xl:text-3xl text-primary">100+</span>
                                <span class="uppercase lg:text-lg">Clients</span>
                            </div>
                            <div class="mb-1">
                                <span class="mr-2 text-xl font-demi xl:text-3xl text-primary">1 Million+</span>
                                <span class="uppercase lg:text-lg">Bookings</span>
                            </div>
                        </div>
                    </div>
                    <a class="btn-primary" href="https://e9.co.uk/" target="_blank">Visit Site</a>
                </div>
                <div class="container mt-12 md:mt-16 xl:mt-20">
                    <g-image immediate="true" blur="0" src="~/assets/images/company/london-office.jpg" class="w-full" />
                </div>
            </section>
        </Layout>
    </div>
</template>

<script>
import { scrollTo } from '@/utilities';
import AOS from '~/assets/js/aos';

export default {
    metaInfo: {
        title: 'Company'
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
