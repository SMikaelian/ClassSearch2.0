<template>
<<<<<<< HEAD
  <div class="hello">
<!-- Page Container -->
<div class="fc-content fc-margin-top" style="max-width:1600px;">
  </div>
    <!-- Right Column -->
    <div class="fc-twothird">
      <div class="fc-container fc-card fc-white fc-margin-bottom">
        <h2 class="fc-padding-small" style="float: left; margin-left: 10px; opacity:0.70">Filters:</h2>
        <div class="fc-container">
          <h5 class="fc-opacity" style="float: left"><b>Course Level:</b></h5>
          <br></br>

            <h6 class="fc-text-teal" style="float: left">
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label>
            Upper Division</h6>
            <br></br>

            <h6 class="fc-text-teal" style="float: left">
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label>
            Lower Division</h6>
            <br></br>
          <hr>
        </div>

        <div class="fc-container">
          <h5 class="fc-opacity" style="float: left"><b>Day of Week:</b></h5>
          <br></br>
          <h6 class="fc-text-teal" style="float: left">
          <input type="checkbox" name="Monday" value="M"> M 
          <input type="checkbox" name="Tuesday" value="T"> T 
          <input type="checkbox" name="Wednesday" value="W"> W 
          <input type="checkbox" name="Thursday" value="TR"> TR 
          <input type="checkbox" name="Friday" value="F"> F 
          <input type="checkbox" name="Saturday" value="S"> S<br>
          </h6>
          <br></br>
          <hr>
        </div>

        <div class="fc-container">
          <h5 class="fc-opacity" style="float: left"><b>Academic Level:</b></h5>
          <br></br>
            <h6 class="fc-text-teal" style="float: left">
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label>
            Undergraduate</h6>
            <br></br>

            <h6 class="fc-text-teal" style="float: left">
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label>
            Graduate</h6>
            <br></br>
          <hr>
        </div>

        <div class="fc-container">
          <h5 class="fc-opacity" style="float: left"><b>Time of Day:</b></h5>
          <br></br>

          <h6 class="fc-text-teal" style="float: left">
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label> Morning (7AM-12PM)</h6>
          <br></br>
          <h6 class="fc-text-teal" style="float: left">
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label> Afternoon (12PM-6PM)</h6>
          <br></br>
          <h6 class="fc-text-teal" style="float: left">
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label> Night (6PM-10PM)</h6>
          <br></br>
          <input type="submit" style="margin-left: 400px" value="Apply">
          <br></br>
        </div>
      </div>

    </div>
    <!-- End Right Column -->
    

  <!-- End Grid -->
  </div>

  <!-- End Page Container -->
</div>


  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
=======

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
>>>>>>> f446eeb37e2d7eb5bb2a653dd83f58446be3996f
  }
};
</script>

<<<<<<< HEAD
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

html,body,h1,h2,h3,h4,h5 {font-family: "Roboto", sans-serif}

h5 {
  margin: 20px 0 0;
  font-family: "Roboto", sans-serif;
}

h6 {
  margin: 20px 0 0;
  font-family: "Roboto", sans-serif;
=======


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
>>>>>>> f446eeb37e2d7eb5bb2a653dd83f58446be3996f
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
<<<<<<< HEAD

.tab { margin-left: 40px;
}

.color {
      background-color: #EAEAEA ;  
}

.mov {
  margin-left: 30px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 22px;
  height: 14px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.fc-margin{margin:16px!important}
.fc-margin-top{margin-top:16px!important}
.fc-margin-bottom{margin-bottom:0px!important}
.fc-twothird{width:30.0%}
.fc-content,.fc-auto{margin-left:auto;margin-right:auto}.fc-content{max-width:980px}.fc-auto{max-width:1140px}

.fc-white,.fc-hover-white:hover{color:#000!important;background-color:#fff!important}

.fc-container:after,.fc-container:before,.fc-panel:after,.fc-panel:before,.fc-row:after,.fc-row:before,.fc-row-padding:after,.fc-row-padding:before,
.fc-cell-row:before,.fc-cell-row:after,.fc-clear:after,.fc-clear:before,.fc-bar:before,.fc-bar:after{content:"";display:table;clear:both}

.fc-card,.fc-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}

.fc-text-grey,.fc-hover-text-grey:hover,.fc-text-gray,.fc-hover-text-gray:hover{color:#757575!important; margin-left: 11px;}
.fc-margin-left{margin-left:16px!important}
.fc-margin-right{margin-right:16px!important}

.fc-padding-small{padding:4px 8px!important}
.fc-padding{padding:8px 16px!important}
.fc-padding-large{padding:12px 24px!important}
.fc-padding-16{padding-top:16px!important;padding-bottom:16px!important}
.fc-padding-24{padding-top:24px!important;padding-bottom:24px!important}
.fc-padding-32{padding-top:32px!important;padding-bottom:32px!important}
.fc-padding-48{padding-top:48px!important;padding-bottom:48px!important}
.fc-padding-64{padding-top:64px!important;padding-bottom:64px!important}

.fc-opacity,.fc-hover-opacity:hover{opacity:0.70; margin-left: 20px;}
.fc-opacity-off,.fc-hover-opacity-off:hover{opacity:1}
.fc-opacity-max{opacity:0.25}
.fc-opacity-min{opacity:0.75}
.fc-light-grey,.fc-hover-light-grey:hover,.fc-light-gray,.fc-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}
.fc-text-teal,.fc-hover-text-teal:hover{color:#222A35!important; margin-left: 20px;}

.slider:before {
  position: absolute;
  content: "";
  height: 8.5px;
  width: 8.5px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(9px);
  -ms-transform: translateX(9px);
  transform: translateX(9px);
}

.slider.round {
  border-radius: 10px;
}

.slider.round:before {
  border-radius: 50%;
}

input[type=submit] {
  background-color: #EFEFEF;
  border: none;
  color: 21201C;
  padding: 8px 16px;
  font-family: "Arial", Sans-serif;
  margin: 2px 2px;
  cursor: pointer;
}

</style>
=======
</style>

>>>>>>> f446eeb37e2d7eb5bb2a653dd83f58446be3996f
