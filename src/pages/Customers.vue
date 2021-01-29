<template>
    <Layout>
        <ImageBlock title="Growing Your Business Is Our Business"
            desc="Cab9 sees its future in providing a competitive edge for small, medium and large Taxi and Private Hire companies across the globe, allowing them to thrive especially with big global businesses trying to disrupt and take market control."
            link-text="Learn More" media-align="right" :link-action="scrollToFn('#about-customers')"
            class="pb-0 xl:h-screen">
            <template v-slot:media>
                <div class="flex items-end w-full h-full">
                    <div class="relative">
                        <img src="@/assets/images/customers/passenger-app-onroute.png" class="w-full" data-aos="fade-up"
                            data-aos-duration="500" data-aos-id="stat-growth" data-aos-anchor-placement="top-bottom"
                            data-aos-offset="-200" />
                    </div>
                </div>
            </template>
        </ImageBlock>
        <FeatureList title="We Focus On Your Business Growth"
            desc="Our simple philosophy is to ensure we develop solutions, which are client driven. This begins with ensuring we understand each facet of the client requirement and the associated business processes before choosing the best technologies to meet the required output."
            :features="features" id="about-customers"></FeatureList>
        <section class="py-16 xl:py-32 md:py-20">
            <div class="container px-4 text-center xl:px-40">
                <h1 class="mb-3 md:mb-5">Your Business is in good hands. <br /><span class="text-primary">Join Hundreds of companies on Cab9</span>
                </h1>
                <p class="lg:text-lg">Cab9 is trusted by a network of companies which span the length and breadth of the
                    United Kingdom. Each company faces its own challenges, which we investigate by engaging key
                    stakeholders and gaining an understanding of your business requirements. We then demonstrate how
                    Cab9 can provide solutions, enabling you to achieve your business goals.</p>
                <div class="mt-8 xl:mt-20">
                    <VueSlickCarousel v-bind="clientSliderSettings">
                        <div class="logos-wrapper" v-for="(logoArr, index) in logoChunks" :key="index">
                            <a href="" class="logo-wrapper" v-for="(logo, i) in logoArr" :key="i">
                                <div class="logo">
                                    <img :src="getImgPath(logo.ImageURL)" :alt="logo.Name" />
                                </div>
                            </a>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </section>
        <Testimonials class="bg-gray-100"></Testimonials>
    </Layout>
</template>

<script>
import { chunk, scrollTo } from '@/utilities';
import AOS from '~/assets/js/aos';
import FeatureList from '~/components/FeatureList';
import logos from '@/assets/data/clients.json';
import Testimonials from '../components/Testimonials.vue';
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    metaInfo: {
        title: 'Customers'
    },
    components: {
        FeatureList,
        VueSlickCarousel,
        Testimonials
    },
    data() {
        return {
            features: [
                {
                    title: 'Accelerate Growth',
                    desc: 'We help companies grow and expand their business, through our platform, technological expertise and integrations. Our team is always listening to feedback & constantly working towards improving the capabilities of the system.',
                    iconUrl: '/icons/growth.svg'
                },
                {
                    title: 'Smooth Management',
                    desc: 'Cab9 offers a simple yet sophisticated automated dispatch system, business management suite, driver & passenger apps, client booking portal, reporting and invoice production capabilities.',
                    iconUrl: '/icons/smooth.svg'
                },
                {
                    title: 'Increase Customers',
                    desc: 'Our dedicated customer support team is not only well versed in the intricacies of our software, but also has knowledge about the running of a successful transport business.',
                    iconUrl: '/icons/customers.svg'
                }
            ],
            logos: logos,
            clientSliderSettings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                dotsClass: 'slick-dots line-dots',
                arrows: false
            }
        };
    },
    methods: {
        getImgPath(img) {
            return require(`@/assets/images/${img}`);
        },
        scrollToFn(goToSection) {
            function a() {
                scrollTo(goToSection);
            }

            return a;
        }
    },
    computed: {
        logoChunks() {
            return chunk(this.logos, 12);
        }
    },
    created() {
        if (process.isClient) {
            AOS.init({
                once: true,
                offset: 0
            });
        }
    }
};
</script>

<style lang='scss' scoped></style>
