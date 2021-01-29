<template>
    <section class="py-16 overflow-hidden xl:py-32 md:py-20 testimonial-slider">
        <div class="container px-5 sm:px-8 xl:px-4">
            <div class="text-center">
                <h1 class="mb-3 md:mb-5">Happy Customers Are Good Sales People</h1>
                <p class="lg:text-lg">We have an excellent track record of delivering results to a range of ground transport providers, both big and small. Please take a moment to review some of the companies we have worked alongside.</p>
            </div>
            <div class="relative mt-8 xl:mt-20">
                <VueSlickCarousel v-bind="testimonialSliderSettings" ref="testimonialCarousel">
                    <div class="h-full p-4" v-for="(t, i) in testimonials" :key="i">
                        <div class="flex flex-col justify-between h-full p-8 bg-white shadow-lg rounded-xl">
                            <p class="mb-4 font-demi">{{ t.Text }}</p>
                            <div class="flex items-center pt-5 border-t border-gray-200">
                                <div class="w-10 h-10 mr-3 bg-local bg-center bg-cover border border-gray-200 rounded-full" :style="{ 'background-image': 'url(' + require(`@/assets/images/` + t.LogoImageURL) + ')' }"></div>
                                <div class="flex-1 leading-4">
                                    <h6 class="text-lg font-semibold">{{ t.Name }}</h6>
                                    <span class="text-sm text-primary">{{ t.Role }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </VueSlickCarousel>
                <ol class="slick-slider-arrows">
                    <li @click="showPrevious" class="left-arrow"><img src="@/assets/images/icons/arrow-left.svg" alt="" /></li>
                    <li @click="showNext" class="right-arrow"><img src="@/assets/images/icons/arrow-right.svg" alt="" /></li>
                </ol>
            </div>
        </div>
    </section>
</template>

<script>
import testimonials from '@/assets/data/testimonials.json';
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'Testimonials',
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            testimonials,
            testimonialSliderSettings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                speed: 500,
                focusOnSelect: false,
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 926,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            adaptiveHeight: true,
                        },
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            adaptiveHeight: true,
                        },
                    },
                ],
            },
        };
    },
    methods: {
        showPrevious() {
            this.$refs.testimonialCarousel.prev();
        },
        showNext() {
            this.$refs.testimonialCarousel.next();
        },
    },
};
</script>

<style lang="scss" scoped></style>
