var Main = {
    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleUploadBefore(file) {
            console.log(file.name)
        }
    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')
