<template>
    <Layout>
        <section class="py-16 md:py-20 xl:py-32">
            <div class="container px-5 sm:px-8 xl:px-40">
                <div class="mx-auto lg:w-9/12 xl:mt-16">
                    <h1 class="mb-3 xl:mb-5">{{ $page.blog.title }}</h1>
                    <div class="flex items-center justify-between mb-8">
                        <div class="flex items-center">
                            <div class="w-12 h-12 mr-3 bg-local bg-center bg-cover rounded-full"
                                :style="{ 'background-image': 'url(' + $page.blog.authorImage + ')' }"></div>
                            <div class="leading-4">
                                <h6 class="text-lg font-semibold">{{ $page.blog.author }}</h6>
                                <span class="text-sm">{{ $page.blog.date }}</span>
                            </div>
                        </div>
                        <div class="relative">
                            <g-image src="~/assets/images/icons/share.svg" class="w-8 cursor-pointer hover:opacity-75"
                                @click="showShareOptions=!showShareOptions"></g-image>
                            <div class="absolute right-0 p-5 bg-white rounded-lg shadow-lg lg:right-auto"
                                style="width:max-content" v-show="showShareOptions" id="share-options">
                                <div class="flex items-center mb-3 font-medium hover:text-gray-500">
                                    <g-image src="~/assets/images/icons/twitter.svg" class="w-5 mr-2"></g-image>
                                    <a href="http://twitter.com/share?url=https://cab9.app/blog/thoughts-on-uber-autocab&text=Thoughts on Uber’s acquisition of Autocab">Twitter</a>
                                </div>
                                <div class="flex items-center mb-3 font-medium hover:text-gray-500">
                                    <g-image src="~/assets/images/icons/facebook.svg" class="w-5 mr-2"></g-image>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://cab9.app/blog/thoughts-on-uber-autocab">Facebook</a>
                                </div>
                                <div class="flex items-center mb-3 font-medium hover:text-gray-500">
                                    <g-image src="~/assets/images/icons/linkedin.svg" class="w-5 mr-2"></g-image>
                                    <a href="http://www.linkedin.com/shareArticle?mini=true&url=https://cab9.app/blog/thoughts-on-uber-autocab&title=Thoughts on Uber’s acquisition of Autocab&source=cab9.app">LinkedIn</a>
                                </div>
                                <div class="flex items-center font-medium hover:text-gray-500">
                                    <g-image src="~/assets/images/icons/paper-plane.svg" class="w-5 mr-2"></g-image>
                                    <a href="mailto:?subject=Thoughts on Uber’s acquisition of Autocab&body=Cab9 has always respected the success of Autocab - specifically their client relationships as Autocab customers are by in large loyal and have always supported the growth of the platform. https://cab9.app/blog/thoughts-on-uber-autocab">Email</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-local bg-center bg-cover rounded blog-image"
                        :style="{ 'background-image': 'url(' + $page.blog.coverImage + ')' }"></div>
                    <div v-html="$page.blog.content" class="mt-8 text-lg" />
                </div>
            </div>
        </section>
    </Layout>
</template>


<page-query>
query Blog($path:String!){
blog:blog(path:$path){
title
authorImage
author
date
featuredImage
content
}
}
</page-query>


<script>
export default {
    metaInfo() {
        return {
            title: this.$page.blog.title
        };

    },
    data() {
        return {
            showShareOptions: false
        };
    },
    methods: {
        hideShareOptions(e) {
            let container = $('#share-options');

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                this.showShareOptions = false;
            }
        }
    },
    mounted() {
        document.addEventListener('mouseup', this.hideShareOptions);
    },
    beforeDestroy() {
        document.removeEventListener('mouseup', this.hideShareOptions);
    }
};
</script>

<style lang='scss' scoped></style>
