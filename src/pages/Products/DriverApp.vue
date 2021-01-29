<template>
    <Layout>
        <ImageBlock title="Smooth on road, <br> Seamless on mobile"
            desc="Our iOS & Android driver apps make taxi driving and the ride receiving experience easier than ever before for drivers, with information, right at their fingertips."
            link-text="Learn More" media-align="right" :link-action="scrollToFn('#about-driver-app')"
            class="pb-0 md:pb-0 xl:h-screen">
            <template v-slot:media>
                <div class="flex items-end w-full h-full pro-p:mt-8 xl:mt-0">
                    <div class="relative">
                        <img src="@/assets/images/products/driver-app/driver-home.png" class="w-full" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-offset="-200" />
                        <img src="@/assets/images/products/driver-app/job-pool.png" class="absolute top-0 right-0"
                            data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-bottom"
                            data-aos-offset="-200" />
                    </div>
                </div>
            </template>
        </ImageBlock>
        <FeatureList id="about-driver-app" title="Why Use Our Driver App"
            desc="Our apps allow drivers to feel in control with detailed job info, a birds eye or detailed view of their earnings and job bidding, amongst other functions."
            :features="features"></FeatureList>
        <ImageSection text="Making Your Drivers Lives Easier" video-url="products/driver-app/app-bg.mp4" height="screen"
            theme="dark" class="driver-app">
            <template v-slot:overlay-img>
                <div class="w-full h-full px-8 py-16 md:py-20 md:px-0">
                    <div class="relative inline-block h-full">
                        <g-image immediate="true" blur="0" src="~/assets/images/products/driver-app/start-journey.png"
                            class="md:w-auto md:h-full md:max-w-none"></g-image>
                        <div class="absolute center">
                            <div class="pulse">
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </ImageSection>
        <VideoBlock title="Don't take our word for it. <br> Try out our Driver App now" play-btn-text="Click Here"
            poster-url="products/driver-app/driver-app-video-bg.jpg" id="try-driver-app"
            prototype-url="https://marvelapp.com/prototype/5c320c3?emb=1&iosapp=false&frameless=false"></VideoBlock>
        <ImageBlock tagline="Job Pool" title="Perfect Solution For Drivers"
            desc="With our job pool it’s simple to offer bookings to selected groups of drivers and allow them to bid on the work. The configurations are endless, allowing you to consider journey distance, value and vehicle type before offering the job for bidding."
            media-align="right" media-content-align="right" class="pb-0 bg-gray-100 md:pb-0">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Quick Allocation</li>
                    <li>Easily See Bids</li>
                    <li>Manage from Dispatch Screen</li>
                    <li>Highly Configurable</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="flex items-end w-11/12 h-full">
                    <div class="relative">
                        <g-image immediate="true" blur="0"
                            src="~/assets/images/products/driver-app/preferential-bidding.png" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" />
                        <div class="absolute top-0 right-0">
                            <g-image immediate="true" blur="0"
                                src="~/assets/images/products/driver-app/job-pool-bidding.png" />
                            <video loop autoplay muted playsinline class="absolute object-cover"
                                style="width: 33%;left: 46.2%;top: 28.6%;transform: rotate(5.1deg);border-bottom-left-radius: 18px;">
                                <source :src="require(`@/assets/images/products/driver-app/job-pool.mp4`)"
                                    type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </template>
        </ImageBlock>
        <ImageBlock title="Data Rich Dashboard"
            desc="Within the driver app, your drivers can see valuable information to help them during their working day, keeping them engaged and feeling valued within your company."
            media-align="left" class="pb-0 md:pb-0">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Track Earnings</li>
                    <li>Booking History</li>
                    <li>Bid on Bookings</li>
                    <li>Accept Bookings</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="flex items-end h-full xl:w-10/12">
                    <g-image immediate="true" blur="0"
                        src="~/assets/images/products/driver-app/tailor-made-dashboard.png" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" />
                </div>
            </template>
        </ImageBlock>
        <ImageBlock title="Record and Retain"
            desc="Our flag down functionality allows drivers to quickly book jobs onto the system from the rank or roadside and with our inbuilt meter costs are calculated. Job prices can be updated before being stored on the system so your data is always accurate and complete."
            media-align="right" media-content-align="right" class="pb-0 bg-gray-100 md:pb-0">
            <template v-slot:content>
                <ul class="mt-5 feature-list">
                    <li>Auto Location Search</li>
                    <li>Adjust Prices</li>
                    <li>Record Flag downs</li>
                    <li>Inbuilt Meter</li>
                </ul>
            </template>
            <template v-slot:media>
                <div class="flex items-end h-full mt-8 bg-gray-200 xl:w-10/12 lg:bg-transparent lg:mt-0">
                    <div class="relative flex items-end h-full ">
                        <g-image immediate="true" blur="0" src="~/assets/images/products/driver-app/book-ride.png"
                            class="relative z-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom"
                            data-aos-delay="200" />
                        <g-image immediate="true" blur="0" src="~/assets/images/products/driver-app/ride-map.png"
                            class="absolute top-0 right-0" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" />
                    </div>
                </div>
            </template>
        </ImageBlock>
        <Next name="Integrations" link="/products/integrations"></Next>
    </Layout>
</template>

<script>
import { scrollTo } from '@/utilities';
import AOS from '~/assets/js/aos';


import FeatureList from '~/components/FeatureList';
import ImageSection from '~/components/ImageSection';
import Next from '~/components/Next';
import VideoBlock from '~/components/VideoBlock';

export default {
    metaInfo: {
        title: 'Driver App'
    },
    components: {
        FeatureList,
        ImageSection,
        VideoBlock,
        Next
    },
    data() {
        return {
            features: [
                {
                    title: 'Meter & Flag down functions',
                    desc: 'Our apps allow your drivers to quickly add jobs from the rank, and calculate journey price through our inbuilt meter.',
                    iconUrl: '/icons/flag-down.svg'
                },
                {
                    title: 'Commission & Earning reports',
                    desc: 'Full transparency so drivers can easily view their past and present earnings, all within the app.',
                    iconUrl: '/icons/report.svg'
                },
                {
                    title: 'Job pool & Bidding',
                    desc: 'With our job pool function, drivers have the ability to bid on jobs, allowing them an element of control over their work.',
                    iconUrl: '/icons/bid.svg'
                },
                {
                    title: 'Navigation Functions',
                    desc: 'Seamless integration with the best mobile friendly navigation applications, to assist in getting your drivers quickly from A to B.',
                    iconUrl: '/icons/navigation.svg'
                },
                {
                    title: 'Live Chat System',
                    desc: 'Communication is key and our live chat allows conversations too and from drivers. You can also broadcast to specific groups.',
                    iconUrl: '/icons/chat.svg'
                },
                {
                    title: 'Day & Night display',
                    desc: 'An important factor for working long hours at night is to have a clear, but not dazzling display that is gentle on the eyes.',
                    iconUrl: '/icons/day-and-night.svg'
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

<style lang='scss' scoped>

.center {
	position: absolute;
	top: 41.2%;
	left: 50.1%;
	transform: translate(-50%, -50%);
}

.pulse {
	width: 18px;
	height: 18px;
	background: #95db4a;
	border-radius: 50%;
	color: #FFF;
	font-size: 20px;
	text-align: center;
	line-height: 100px;
	font-family: sans-serif;
	text-transform: uppercase;
	animation: animate-pulse 2s linear infinite;
	cursor: pointer
}

@keyframes animate-pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(149, 219, 74, 0.7), 0 0 0 0 rgba(149, 219, 74, 0.7);
	}
	40% {
		box-shadow: 0 0 0 60px rgba(149, 219, 74, 0.0), 0 0 0 0 rgba(149, 219, 74, 0.7);
	}
	80% {
		box-shadow: 0 0 0 60px rgba(11, 15, 6, 0), 0 0 0 30px rgba(149, 219, 74, 0);
	}
	100% {
		box-shadow: 0 0 0 0 rgba(149, 219, 74, 0.0), 0 0 0 30px rgba(149, 219, 74, 0);
	}

}

</style>
