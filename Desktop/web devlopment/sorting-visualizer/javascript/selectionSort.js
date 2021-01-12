async function selectionSort(){

  var i, j, min_idx;

  for (i = 0; i < array.length-1; i++)
  {

      min_idx = i;
      for (j = i+1; j < array.length; j++) {
        document.getElementById("p"+j).style.backgroundColor = "red";
        document.getElementById("p"+i).style.backgroundColor = "red";
        await sleep(algoSpeed);
        if (array[j] < array[min_idx]){
            min_idx = j;
        }

        document.getElementById("p"+j).style.backgroundColor = "purple";
        document.getElementById("p"+i).style.backgroundColor = "purple";
      }

      document.getElementById("p"+min_idx).style.backgroundColor = "green";
      document.getElementById("p"+i).style.backgroundColor = "green";
      await sleep(algoSpeed);
      document.getElementById("p"+min_idx).style.backgroundColor = "purple";
      document.getElementById("p"+i).style.backgroundColor = "green";
      let temp = array[min_idx];
      let temp1;
      temp1 = document.getElementById("p"+min_idx).style.height;
      array[min_idx] = array[i];
      document.getElementById("p"+min_idx).style.height = document.getElementById("p"+i).style.height;
      array[i]  = temp;
      document.getElementById("p"+i).style.height = temp1;

      for(var k=0;k<=i;k++){
        document.getElementById("p"+k).style.backgroundColor = "blue";
      }
  }
  let size = array.length - 1;
  document.getElementById("p"+ size).style.backgroundColor = "blue";
}
