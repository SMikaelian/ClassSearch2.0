<template>

<h2> This is a filter component </h2> 

  <form>
    <table style="width:50%">
      <tr>
        <td>Firstname</td>
        <td>Lastname</td>
        <td>Age</td>
      </tr>

      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>

      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
  </form>

<div>
<div style="float: left">checkbox #1</div>
<div style="float: left">checkbox #2</div>
<div style="float: left">checkbox #3</div>
<div style="float: none">checkbox #4</div>
</div>

<div>
<input type="checkbox" name="vehicle1" value="Bike"> I have a bike<br>
<input type="checkbox" name="vehicle2" value="Car"> I have a car<br>
<input type="checkbox" name="vehicle3" value="Boat" checked> I have a boat<br>
</div>

<div>
<div style="float: left">checkbox #5</div>
<div style="float: left">checkbox #6</div>
<div style="float: left">checkbox #7</div>
<div style="float: none">checkbox #8</div>
</div>

<div>
<input type="submit" value="Submit">
</div>


  <div>
    
    <h3>Essential</h3>
    <ul>
      <li>

      </li>


      <li>

      </li>
      <li>
        
      </li>
    </ul>
    
  </div>
</template>



<script>
export default {
  name: "Filters",
  props: {
    msg: String
  },

  data() {
    return {
      filters: "Filters"
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>

