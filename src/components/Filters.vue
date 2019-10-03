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

<div class="checkbox">
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

<div class="checkbox">
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

.checkbox 
 {

 }


.topleft {
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 18px;
}

/* Dropdown Button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #3e8e41;
}

/* The search field */
#myInput {
  box-sizing: border-box;
  background-image: url('searchicon.png');
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 14px 20px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
}

/* The search field when it gets focus/clicked on */
#myInput:focus {outline: 3px solid #ddd;}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  border: 1px solid #ddd;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}

</style>

