<Model  v-model="Model" >
</Model>
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
						<button type="button" class="btn btn-default" @click="update()">登录</button>
					</div>
				</div>
			</form>
	<children  ref="emplist" v-bind:class="{hidden: flag}"  ></children>
   
  </div>
</template>

<script>
import emplist from './emplist';   //引入子组件Child
export default {
  name: 'empupdate',
  
  data () {
    return {
    	flag:'true',
     emp:{
     	eid:0,
     	name:'',
     	age:'',
     	sex:''
     },
     
    }
  },
  created:function(){
  	this.sel();
  },
  components: {      
      'children': emplist
    },
  methods:{
  	sel:function(){
    var eid = this.$route.query.eid;
    console.log(eid);
    	this.$http.post("http://localhost:8086/emp",{
  			"eid":eid
  			
  		}).then(function(result){
  			console.log(result);
  			this.emp.name = result.body.name;
  			this.emp.age=result.body.age;
  			this.emp.sex=result.body.sex;
  			this.emp.eid=result.body.eid;
  		},function(error){
  			alert("加载数据失败！！");
  		})
  		
  	},
  	update:function(){
  		console.log(this.emp.name);
  		console.log(this.emp.age);
  		console.log(this.emp.sex);
  		this.$http.put("http://localhost:8086/updateEmp",{
  			
  			eid:this.emp.eid,
  			name:this.emp.name,
  			age:this.emp.age,
  			sex:this.emp.sex
  		
  			
  		}).then(
  			function(){
  				
  				alert("修改成功");
  				this.$router.push({
  					path:'/',
  					
  				})
  				
  				
  				
  			},
  			function(){
  				alert("修改失败了");
  			}
  		)
  		
  	}
  	
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
