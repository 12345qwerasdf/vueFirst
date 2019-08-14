<template>
	<!--<form enctype="multipart/form-data" method="post" action="http://localhost:8086/upload">
		<input  class="btn btn-default" name="file" type="file" /><br><br>
		<input  class="btn btn-primary" type="submit" value="提交"/>
	</form>-->
	<div >
		
	
	<input  class="btn btn-default" name="file" type="file" />
	<!--<input  class="btn btn-default" name="file" type="file" /><br><br>-->
		<input  class="btn btn-primary" type="submit" v-on:click="upload" value="提交"/>
	</div>
	
</template>

<script>
	export default {
  name: 'empupload',
  data () {
    return {
     
    
  }
  
  },
  methods:{
  	upload:function(){
  		var formdata=new FormData;//相当于一个表单 没有构造器
  		formdata.append("file",document.querySelector("[name=file]").files[0]);//files[0]必须有
  		
  		formdata.append("name","里斯");
         this.$http.post("http://localhost:8086/upload",formdata,{
         	headers:{
         		"Content-type":"multipart/form-data"
         	}
         }).then(
         	function(result){
         		console.log(result.bodyText);
         		alert("上传成功");
         	},function(error){
         		console.log(error.body.message);
         	}
         )
         
  	}
  }
}
</script>

<style>
</style>