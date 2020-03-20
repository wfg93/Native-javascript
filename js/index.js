let RE_member = document.getElementsByClassName("re_MemBER");
let ion = document.getElementsByClassName("my-icon");
let ull = document.getElementById("ull");
let lis = ull.getElementsByTagName("li");
let elem_li = "";
let I_nput = document.getElementById("I_nput");
let dete_Input = document.getElementById("determine");

for (let i = 0; i < RE_member.length; i++) {
  RE_member[i].onclick = function() {
    if (ion[i].className === "my-icon el-icon-arrow-right") {
      ion[i].className = "my-icon el-icon-arrow-down";
    } else {
      ion[i].className = "my-icon el-icon-arrow-right";
    }
  };
}
function S_ubmit() {
  elem_li +=
    "<li><input class='determine' id='determine' type='checkbox' /> <div>" +
    I_nput.value +
    "</div><button class='cancel'>取消</button></li>";
  ull.innerHTML = elem_li;
}

// ull.onclick = function(e) {
//   console.log(e);
//   // var li = e.target.parentElement;
//   // ull.removeChild(li);
// };
ull.addEventListener("click", function(ev) {
  var target = ev.target || ev.srcElement;
  // console.log(lis.length);

  for (var i = 0; i < lis.length; i++) {
    console.log(i);
  }

  // if (target.nodeName == "INPUT") {
  //   console.log(lis.length);
  //   for (var i = 0; i < lis.length; i++) {
  //     console.log(i);
  //   }

  //. ull.removeChild(lis[0]);
  // this.parentNode.removeChild(this);

  // var target = ev.target || ev.srcElement;
  // if (target.nodeName.toLowerCase() == "li") {
  //   alert(target.innerHTML);
  //   console.log(target);
  // }
});
