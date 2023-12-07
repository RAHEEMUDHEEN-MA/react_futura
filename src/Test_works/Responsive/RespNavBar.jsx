import React from 'react'
import '../Responsive/RespNavBar.css'
function RespNavBar() {
  return (
    <div>
      
<div class="navbar">
  <a href="#" class="active">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
  <button id="toggleButton">Toggle Nav</button>
</div>

<div class="content">
  <p>This is the main content of the page.</p>
</div>
    </div>
  )
}

export default RespNavBar
