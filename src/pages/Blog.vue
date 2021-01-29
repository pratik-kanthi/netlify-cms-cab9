<template>
    <div>
        <Layout>
            <section class="py-16 md:py-20 xl:py-32">
                <div class="container px-5 sm:px-8 xl:px-40">
                    <div class="mx-auto lg:w-9/12 xl:mt-16">
                        <g-link v-for="item in $page.blog.edges" :key="item.id" :to="item.node.path"
                            class="block mb-16">
                            <h2 class="mb-3 xl:mb-5">{{ item.node.title }}</h2>
                            <div class="bg-local bg-center bg-cover rounded"
                                :style="{ 'background-image': 'url(' + item.node.featuredImage + ')' }"
                                style="height:300px"></div>
                            <p class="mt-8 text-lg">{{ item.node.excerpt }}</p>
                            <p class="mt-4"><span class="font-demi">{{ item.node.author }}</span> <span
                                class="text-gray-600"> · </span> <span class="text-gray-600">{{ item.node.date }}</span>
                            </p>
                        </g-link>
                    </div>
                </div>
            </section>
        </Layout>
    </div>
</template>
<page-query>
query Blog{
blog:allBlog {
edges {
node{
path
title
featuredImage
excerpt
author
date
}
}

}
}
</page-query>
<script>
import { scrollTo } from '@/utilities';

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
    }
};
</script>