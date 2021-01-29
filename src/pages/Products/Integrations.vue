<template>
    <Layout>
        <ImageBlock title="Looking to the future, to grow your business"
            desc="At Cab9 we are always looking for ways to improve the service we offer, empowering you to grow your business. Our third-party integrations increase your visibility, efficiency and client pool."
            link-text="Learn More" media-align="right" :link-action="scrollToFn('#custom-portal')"
            class="xl:h-screen">
            <template v-slot:media>
                <div class="flex items-center w-full h-full">
                    <div class="relative">
                        <img src="@/assets/images/products/integrations/cover/9.png" class="w-full" data-aos="fade"
                            data-aos-duration="500" />
                        <img src="@/assets/images/products/integrations/cover/taxi.png" class="absolute top-0 right-0"
                            data-aos="fade" data-aos-delay="100" />
                        <img src="@/assets/images/products/integrations/cover/messages.png"
                            class="absolute top-0 right-0" data-aos="fade" data-aos-delay="200" />
                        <img src="@/assets/images/products/integrations/cover/flight.png" class="absolute top-0 right-0"
                            data-aos="fade" data-aos-delay="300" />
                        <img src="@/assets/images/products/integrations/cover/portal.png" class="absolute top-0 right-0"
                            data-aos="fade" data-aos-delay="400" />
                        <img src="@/assets/images/products/integrations/cover/payment.png"
                            class="absolute top-0 right-0" data-aos="fade" data-aos-delay="500" />
                        <img src="@/assets/images/products/integrations/cover/phone.png" class="absolute top-0 right-0"
                            data-aos="fade" data-aos-delay="600" />
                    </div>
                </div>
            </template>
        </ImageBlock>
        <ImageBlock id="custom-portal" title="Custom Client Booking and Management Portal"
            desc="Increase engagement with your clients via their own booking portal. Reduce time by allowing clients to book directly onto your system and get paid faster with self service invoicing."
            media-align="right" class="bg-gray-100">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Client Branding</li>
                    <li>Self Service</li>
                    <li>Professional Interface</li>
                    <li>Client Dashboards</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="flex items-center w-full h-full">
                    <div class="relative">
                        <g-image immediate="true" blur="0" src="~/assets/images/products/integrations/portal-login.png"
                            class="w-full" data-aos="fade-up" />
                        <g-image immediate="true" blur="0"
                            src="~/assets/images/products/integrations/client-web-booker.png"
                            class="absolute top-0 right-0" data-aos="fade-up" data-aos-delay="200" />
                    </div>
                </div>
            </template>
        </ImageBlock>
        <ImageBlock title="Speed up Bookings with Cloud Telephony Integration"
            desc="Let Cab9 do the heavy lifting with our smart telephony integration, which finds the customer and previous journeys. Three clicks and it’s booked."
            media-align="left">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Screen Popping</li>
                    <li>Incoming Call Alert</li>
                    <li>Call recording</li>
                    <li>Booking History</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="relative xl:w-10/12">
                    <g-image immediate="true" blur="0" src="~/assets/images/products/integrations/aircall/base.png"
                        class="w-full" data-aos="fade-up" data-aos-duration="500"
                        data-aos-anchor-placement="center-bottom" />
                    <g-image immediate="true" blur="0" src="~/assets/images/products/integrations/aircall/mic.png"
                        class="absolute top-0 right-0 w-full" data-aos="fade" data-aos-delay="200"
                        data-aos-anchor-placement="center-bottom" />
                    <g-image immediate="true" blur="0" src="~/assets/images/products/integrations/aircall/call.png"
                        class="absolute top-0 right-0 w-full" data-aos="fade" data-aos-delay="400"
                        data-aos-anchor-placement="center-bottom" />
                    <g-image immediate="true" blur="0"
                        src="~/assets/images/products/integrations/aircall/microphone.png"
                        class="absolute top-0 right-0 w-full" data-aos="fade" data-aos-delay="600"
                        data-aos-anchor-placement="center-bottom" />
                </div>
            </template>
        </ImageBlock>
        <ImageBlock title="Chat and Share Information Anytime"
            desc="Our chat application allows you to talk to one, or groups of drivers, configured by you. No more picking up the phone to keep in touch with your fleet or Cab9 Partners."
            media-align="right" class="bg-gray-100">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Message Drivers</li>
                    <li>Broadcast Groups</li>
                    <li>Smart Messages</li>
                    <li>Chat with Partners</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="flex items-center justify-end w-full h-full mt-10">
                    <g-image immediate="true" blur="0" src="~/assets/images/home/cab9-chat.png"
                        class="lg:-mr-8 xl:-mr-12" data-aos="fade-up" data-aos-delay="200"
                        data-aos-anchor-placement="center-bottom" />
                </div>
            </template>
        </ImageBlock>
        <section class="relative flex items-center py-16 overflow-hidden xl:py-32 md:py-20">
            <div class="container px-5 sm:px-8 xl:px-40">
                <div class="text-center">
                    <h1 class="mb-3 md:mb-5">Payment Gateway Solution</h1>
                    <p class="lg:text-lg">Our secure card payment solution can be set to manual or automated to suit
                        your workflow. Cab9 provides full back end reporting on all card transactions for your peace of
                        mind.</p>
                    <ul class="flex flex-wrap justify-center mt-5 gap-x-6 feature-list">
                        <li class="mx-3">Secure PCI Compliant</li>
                        <li class="mx-3">Pre-auth Function</li>
                        <li class="mx-3">Multiple Providers</li>
                        <li class="mx-3">Set and Forget</li>
                    </ul>
                </div>
                <div class="flex flex-wrap justify-center mt-8 md:mt-16 md:flex-no-wrap">
                    <div class="flex items-center justify-center w-24 h-10 px-2 md:h-auto md:w-full md:px-6 lg:px-10">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full"
                            src="~/assets/images/products/integrations/payment-gateway/stripe.png" />
                    </div>
                    <div class="flex items-center justify-center w-24 h-10 px-2 md:h-auto md:w-full md:px-6 lg:px-10">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full"
                            src="~/assets/images/products/integrations/payment-gateway/paypal.png" />
                    </div>
                    <div class="flex items-center justify-center w-24 h-10 px-2 md:h-auto md:w-full md:px-6 lg:px-10">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full"
                            src="~/assets/images/products/integrations/payment-gateway/judo-pay.png" />
                    </div>
                    <div class="flex items-center justify-center w-24 h-10 px-2 md:h-auto md:w-full md:px-6 lg:px-10">
                        <g-image immediate="true" blur="0" class="object-contain max-h-full w-max-full"
                            src="~/assets/images/products/integrations/payment-gateway/worldpay.png" />
                    </div>
                </div>
            </div>
        </section>
        <section class="relative">
            <div class="absolute inset-0">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <video loop autoplay muted playsinline class="object-cover w-full h-full">
                    <source src="@/assets/images/products/integrations/flight-status/flight-landing.mp4"
                        type="video/mp4" />
                </video>
            </div>
            <div class="container relative px-5 text-center sm:px-8 xl:px-40">
                <h1 class="mb-3 text-white md:mb-5">Real-time flight arrival alerts</h1>
                <p class="text-gray-300 lg:text-lg">Cab9 tracks flights from all around the world and keeps your
                    controllers and drivers updated of changes or setbacks in real-time, so they never have to worry
                    about being late or missing a job because a flight has been delayed.</p>
                <div class="relative mt-8 xl:mt-16">
                    <g-image immediate="true" blur="0"
                        src="~/assets/images/products/integrations/flight-status/flight-base.png" class="w-full" />
                    <g-image immediate="true" blur="0"
                        src="~/assets/images/products/integrations/flight-status/flight-no.png"
                        class="absolute top-0 right-0 w-full" data-aos="fade-up" data-aos-delay="200" />
                    <g-image immediate="true" blur="0"
                        src="~/assets/images/products/integrations/flight-status/departs.png"
                        class="absolute top-0 right-0 w-full" data-aos="fade-up" data-aos-delay="300" />
                    <g-image immediate="true" blur="0"
                        src="~/assets/images/products/integrations/flight-status/scheduled.png"
                        class="absolute top-0 right-0 w-full" data-aos="fade-up" data-aos-delay="400" />
                    <g-image immediate="true" blur="0"
                        src="~/assets/images/products/integrations/flight-status/actual.png"
                        class="absolute top-0 right-0 w-full" data-aos="fade-up" data-aos-delay="500" />

                </div>
            </div>
        </section>
        <ImageBlock title="Increase Booking with Aggregators"
            desc="Cab9 seamlessly integrates with the API of aggregators like One Transport and allows you to configure Automated Job acceptance or rejection based on your business parameters. Keeping you in control but helping to increase your workload in the leaner parts of the day."
            media-align="right" class="xl:my-10">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Increase in Bookings</li>
                    <li>Automated System</li>
                    <li>Booking Filters</li>
                    <li>Service Mapping</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="flex items-center float-right w-full h-full">
                    <g-image immediate="true" blur="0" src="~/assets/images/products/integrations/aggregators.png"
                        class="w-full" data-aos="fade" data-aos-delay="200"
                        data-aos-anchor-placement="center-bottom" />
                </div>
            </template>
        </ImageBlock>
        <section class="py-0 lg:mt-20 h-70vh md:h-50vh lg:h-80vh xl:h-screen" id="helping-business">
            <div class="flex h-full bg-local bg-center bg-cover md:items-center"
                :style="{ 'background-image': 'url(' + require('@/assets/images/products/integrations/integration.jpg') + ')' }">
                <div class="container">
                    <div class="px-5 lg:w-6/12 sm:px-8 xl:px-4">
                        <h1 class="mb-5 text-2xl font-bold text-center font-base lg:text-4xl xl:text-5xl text- md:text-left">
                            Building connections to <br> expand your business</h1>
                    </div>
                </div>
            </div>
        </section>
        <Next name="Dispatch System" link="/products/dispatch-system"></Next>
    </Layout>
</template>

<script>
import { scrollTo } from '@/utilities';
import AOS from '~/assets/js/aos';
import Next from '@/components/Next';


export default {
    metaInfo: {
        title: 'Integrations'
    },
    components: {
        Next
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

<style lang='scss' scoped>
#helping-business {
	@media only screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
		height: 60vh !important;
	}
}
</style>
