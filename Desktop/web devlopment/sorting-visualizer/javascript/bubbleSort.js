async function bubbleSort(){

  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length-i-1; j++) {
        document.getElementById("p"+j).style.backgroundColor = "red";
        let m = j+1;
        document.getElementById("p"+m).style.backgroundColor = "red";
        await sleep(algoSpeed);
          if (array[j] > array[j + 1]) {
            let k = j+1;
            document.getElementById("p"+j).style.backgroundColor = "green";
            document.getElementById("p"+k).style.backgroundColor = "green";
            await sleep(algoSpeed);
              let tmp = array[j];
              let tmp1 = document.getElementById("p"+j).style.height;
              array[j] = array[j + 1];

              document.getElementById("p"+j).style.height = document.getElementById("p"+k).style.height;
              array[j + 1] = tmp;
              document.getElementById("p"+k).style.height = tmp1;
          }
          document.getElementById("p"+j).style.backgroundColor = "purple";
          document.getElementById("p"+m).style.backgroundColor = "purple";
      }

      for(var k=array.length-1;k>=array.length-1-i;k--){
        document.getElementById("p"+k).style.backgroundColor = "blue";
      }
  }

}
