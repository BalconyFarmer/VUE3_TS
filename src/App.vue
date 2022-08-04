<template>
    <router-view/>
</template>

<script lang="ts">

export default {
    name: 'App',
    setup(props: any, context: any) {
        let name = '流星'
        let age = 18

        //方法
        function say(): void {
            console.log(`我叫${name},今年${age}岁`)
        }

        //返回一个对象
        return {
            name,
            age,
            say,
            zIndex: 3000,
            size: 'small',
        }
    }
}
</script>


<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

html, body, #app {
    width: 100%;
    height: 100%;
}
</style>
