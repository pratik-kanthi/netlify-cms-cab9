<template>
    <section class="relative p-0 md:h-60vh lg:h-80vh xl:h-screen image-section" id="image-section">
        <div class="relative flex items-center h-full py-16 bg-local bg-center bg-cover md:py-20 xl:py-32"
            :style="[imgUrl ? {'background-image': 'url(' + require(`@/assets/images/${imgUrl}`) + ')'}:'' ]">
            <div class="absolute inset-0" v-if="videoUrl">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <video loop autoplay muted playsinline class="object-cover w-full h-full">
                    <source :src="require(`@/assets/images/${videoUrl}`)" type="video/mp4" />
                </video>
            </div>
            <div class="container z-10 flex flex-col items-center md:flex-row">
                <div class="px-4 md:w-7/12 md:px-8 pro:px-8 xl:px-0">
                    <h1 class="text-3xl font-bold text-center font-base md:text-4xl lg:text-5xl xl:text-6xl text-shadow-lg md:text-left"
                        :class="theme == 'dark' ? 'text-white' : ''" v-html="text"></h1>
                    <slot name="content"></slot>
                </div>
                <div class="inset-y-0 right-0 md:absolute md:w-4/12">
                    <slot name="overlay-img"></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ImageSection',
    props: {
        text: { type: String },
        imgUrl: { type: String },
        videoUrl: { type: String },
        height: { type: String },
        theme: { type: String }
    }
};
</script>

<style lang='scss' scoped>
@media only screen and (max-width: 812px) and (orientation: landscape) {
	.image-section {
		height: 100vh !important;
	}
}
</style>
