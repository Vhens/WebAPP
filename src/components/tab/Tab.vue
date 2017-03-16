<template>
    <div class="tab">
        <div class="tab-item">
            <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/seller">商家</router-link>
        </div>

    </div>
</template>
<script type="text/javascript">
    export default {}
</script>
<style scoped lang="scss">
    .tab{
        display:flex;
        width:100%;
        height:40px;
        line-height: 40px;
        border:1px solid #ccc;
        .tab-item{
            flex:1;
            text-align:center;
            color:#666;
            &:not(:last-child){
                border-right:1px solid #ccc;
            }
        }
    }
</style>