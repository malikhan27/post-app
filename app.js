var datetoday = new Date().toUTCString();
var selectedimage;
function imageselector(src) {
  backGroundimage = document.getElementsByClassName("bg-image");

  for (i = 0; i < backGroundimage.length; i++) {
    backGroundimage[i].className = "bg-image";
  }
  event.target.classList.add("select");
  selectedimage = src;
  console.log(selectedimage)
}

function submit() {
  var userName = document.getElementById("username");
  var postTitle = document.getElementById("post-title");
  var thought = document.getElementById("thoughts");

  if (userName.value.trim() !== "") {
    if (postTitle.value.trim() !== "") {
      if (thought.value.trim() !== "") {
        document.getElementById("main-div").innerHTML += ` 
      <div class=" w-100 card mt-4 mb-4 new" 
       data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
         <div class="card-header d-flex flex-column flex-sm-row flex=wrap justify-content-between fw-bold" style="color: rgb(31, 160, 235) !important;">
         <span> ~@${userName.value}</span> <span> ${datetoday} </span>
         </div>
         <div class= "text-uppercase text-center ms-2" style="border-bottom: 1px solid lightgrey  !important"; color:rgb(31, 160, 235) !important>
          <h4>TITLE : ${postTitle.value}:</h4>
         </div>
         <div class="special-div pb-5" style="background:url(${selectedimage})">
         <span class="ms-5">${thought.value}</span>
         </div>
      </div> `
       userName.value=""
       postTitle.value=""
       thought.value= ""
      } else {
        alert("Fill The Comment Box");
      }
    } else {
      alert("Fill The Post Title");
    }
  } else {
    alert("Fill The Name Field");
  }
}
