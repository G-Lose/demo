<template>
    <div>购物车</div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        hit(){
            let obj = {"姓名":"小花","姓名":"老王"}
            let objData = Object.assign({},obj,{c:"ccccc"})
            console.log(objData,'objdatas')
        }
    },
    created(){
        this.hit()

    }
}
</script>