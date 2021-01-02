var output = 0
function onClickHandler(num){
   output = document.getElementById("pad").value+=num;
    }
    function simp() {
  let x = document.getElementById("pad").value;
  let y = eval(x);
 document.getElementById("pad").value = y
    }
    function clean(){
        
  document.getElementById("pad").value=""
    }