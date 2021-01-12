async function insertionSort(){

  let i, key, j, key1;
    for (i = 1; i < array.length; i++)
    {
        key = array[i];
        key1 = document.getElementById("p"+i).style.height;
        j = i - 1;

        while (j >= 0 && array[j] > key)
        {
          document.getElementById("p"+i).style.backgroundColor = "red";
          document.getElementById("p"+j).style.backgroundColor = "red";
          await sleep(algoSpeed);

            array[j + 1] = array[j];
            let k = j+1;
            document.getElementById("p"+k).style.height = document.getElementById("p"+j).style.height;;


            document.getElementById("p"+i).style.backgroundColor = "blue";
            document.getElementById("p"+j).style.backgroundColor = "blue";
            j = j - 1;
        }

        array[j + 1] = key;
        let m = j+1;
        document.getElementById("p"+m).style.height = key1;
    }
}
