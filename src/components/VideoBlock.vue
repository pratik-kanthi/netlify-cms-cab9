<template>
    <section class="py-0 h-70vh md:h-50vh lg:h-60vh xl:h-screen xl:py-20 xl:px-24 video-block">
        <div class="flex items-center justify-center h-full bg-local bg-center bg-cover"
            :style="{ 'background-image': 'url(' + require(`@/assets/images/${posterUrl}`) + ')' }"
            v-if="!protoypeMode">
            <div class="px-5 text-center lg:w-3/4 sm:px-8 xl:px-4">
                <h1 class="mb-5 text-2xl font-bold text-center font-base lg:text-4xl xl:text-5xl text-shadow-md"
                    :class="theme == 'dark' ? 'text-white' : ''" v-html="title"></h1>
                <div class="inline-flex items-center cursor-pointer" @click="protoypeMode=true">
                    <div
                        class="flex items-center justify-center w-10 h-10 mr-3 bg-white rounded-full shadow-lg md:h-12 md:w-12">
                        <g-image immediate="true" blur="0" src="~/assets/images/icons/play.svg"></g-image>
                    </div>
                    <span class="font-semibold tracking-wider uppercase text-shadow"
                        :class="theme == 'dark' ? 'text-white' : 'text-secondary'">{{ playBtnText }}</span>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center h-full py-16 bg-local bg-center bg-cover"
            :style="{ 'background-image': 'url(' + require('@/assets/images/sprinkle.svg') + ')' }"
            v-if="prototypeUrl && protoypeMode">
            <iframe :src="prototypeUrl" width="453" height="100%" allowTransparency="true" frameborder="0"
                class="mx-auto"></iframe>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VideoBlock',
    props: {
        title: { type: String },
        videoUrl: { type: String },
        posterUrl: { type: String },
        prototypeUrl: { type: String },
        playBtnText: { type: String },
        theme: { type: String }
    },
    data() {
        return {
            protoypeMode: false
        };
    }
};
</script>

<style lang='scss' scoped>
@media only screen and (max-width: 812px) and (orientation: landscape) {
	.video-block {
		height: 100vh !important;
	}
}
</style>
