<template>
  <div >
    
	<form class="form-horizontal" role="form">
				<div class="form-group">
					<label for="firstname" class="col-sm-1 control-label">姓名</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="name" v-model="emp.name" placeholder="请输入姓名">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-1 control-label">年龄</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="age" v-model="emp.age" placeholder="请输入年龄">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-1 control-label">性别</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="sex" v-model="emp.sex" placeholder="请输入性别">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-10 col-sm-offset-1">
						<button type="button" class="btn btn-default" @click="addemp()">登录</button>
					</div>
				</div>
			</form>
	
   
  </div>
</template>

<script>
export default {
  name: 'empadd',
  data () {
    return {
     emp:{
     	name:'',
     	age:'',
     	sex:''
     }
    }
  },
  methods:{
  	addemp:function(){
  		console.log(this.emp.name);
  		console.log(this.emp.age);
  		console.log(this.emp.sex);
  		this.$http.get("http://localhost:8086/emp1",{
  			params:{
  			name:this.emp.name,
  			age:this.emp.age,
  			sex:this.emp.sex,
  			}
  			
  		}).then(
  			function(){
  				alert("新增成功");
  				this.$router.push({
  					path:'/'
  				})
  			},
  			function(){
  				alert("失败了");
  			}
  		)
  		
  	}
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
