<template>
    <div>
        <upload-img></upload-img>
        <upload-file></upload-file>
    </div>
</template>
<style scoped>

</style>
<script>
import { uploadImg,uploadFile } from './upload/index.js';
export default {
    name:'upload',
    components:{ uploadImg,uploadFile },                
}
</script>


