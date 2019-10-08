<template>
  <div class="result">
    <h1> Result page</h1>
    
   <form>
   	<table width="50%">
   		<tr>
   			<td>
				<select name="Term" required class="size">
					<option disabled selected>Term</option>
					<option>Spring</option>
					<option>Summer</option>
					<option>Fall</option>
					<option>Winter</option>
				</select>
			</td>
			<td>
				<select name="MAJOR" required class="size" >
					<option disabled selected>MAJOR</option>
					<option>Arts</option>
					<option>Computer Science</option>
					<option>Computer Information</option>
					<option>Information System</option>
					<option>.....</option>
					<option>.....</option>
					<option>.....</option>
					<option>.....</option>
				</select>
			</td>
			<td>
				<select name="Time" required class="size">
					<option disabled selected>TIME</option>
					<option>Morning</option>
					<option>Afternoon</option>
					<option>Night</option>
	
				</select>
			</td>
		</tr>
	</table>
	</form>
	
	<h3 align="center" >{{semester}} {{year}}, {{major}}, {{day_time}}</h3>

	<table width="100%" class="color">
		<tr >
			<td width="30%">Name: {{fname }}</td>
			<td>Pre-Req: {{ prereq }}</td>
		</tr>
		<tr >
			<td>Teacher: {{ teacher }}</td>
			<td>Co-Req: {{ coreq }}</td>
		</tr>
		<tr >
			<td>D.O.W: {{ dow }}</td>
			
		</tr>
		<tr >
			<td>Time: {{ time }}</td>
			
		</tr>

	</table>	

		

  </div>
</template>

<script>


// @ is an alias to /src
	
	

export default {
  name: "result",
  data() {
  	return {
  			semester: 'Fall',
  			year: "2019",
  			major: 'Computer Science',
  			day_time: 'Morning',
  			fname: 'Abdul',
  			teacher: 'asd',
  			dow: 'ddd',
  			time: '10:40',
  			prereq: 'cit 110',
  			coreq: 'cit 111'

  			}
  		  } 


  
		};
</script>

<style scoped>
h3 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.color {background: #D3D3D3;}
.size {width: 50%}

</style>