<template>
    <section class="py-16 overflow-hidden bg-gray-100 xl:py-32 md:py-20">
        <div class="container px-4 sm:px-8 xl:px-40">
            <div class="text-center">
                <h1 class="mb-3 xl:mb-5">{{ title }}</h1>
                <p class="mb-10 lg:text-lg xl:mb-16">{{ desc }}</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-12 xl:gap-x-20 xl:gap-y-16">
                <div v-for="(item, index) in features" :key="index">
                    <g-image immediate="true" blur="0" :src="require(`!!assets-loader!@/assets/images${item.iconUrl}`)"
                        class="w-auto h-8 mb-3 md:h-10 lg:h-12 md:mb-5 max-w-none" />
                    <p class="mb-1 leading-tight font-demi xl:leading-normal text-secondary xl:mb-3 lg:text-lg">
                        {{ item.title }}</p>
                    <p class="text-sm lg:text-base">{{ item.desc }}</p>
                </div>
            </div>
        </div>
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'FeatureList',
    props: {
        title: { type: String },
        desc: { type: String },
        features: { type: Array }
    }
};
</script>

<style lang='scss' scoped></style>
