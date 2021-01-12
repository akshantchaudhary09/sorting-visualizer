async function merge(l, m, r) {

        var n1 = m - l + 1;
        var n2 = r - m;

        let leftArray = new Array(n1);
        let rightArray = new Array(n2);

        for (i = 0; i < n1; ++i) {
            leftArray[i] = array[l+i];
        }

        for (j = 0; j < n2; ++j) {
            rightArray[j] = array[m+1+j];
        }

        var i = 0
        var j = 0;

        var k = l;

        while ((i < n1) && (j < n2)) {
            let t1 = l+i;
            let t2 = m+1+j;
            document.getElementById("p"+t1).style.backgroundColor = "red";
            document.getElementById("p"+t2).style.backgroundColor = "red";
            await sleep(algoSpeed+50);
            if (leftArray[i] >= rightArray[j]) {
                array[k] = rightArray[j];
                document.getElementById("p" + k).style.height = rightArray[j]*6 + "px";
                j++;

            } else {

                array[k] = leftArray[i];
                document.getElementById("p" + k).style.height = leftArray[i]*6 + "px";
                i++;
            }
            k++;
        }

        while (i < n1) {
            array[k] = leftArray[i];
            document.getElementById("p" + k).style.height = leftArray[i]*6 + "px";
            i++;
            k++;
        }

        while (j < n2) {
            array[k] = rightArray[j];
            document.getElementById("p" + k).style.height = rightArray[j]*6 + "px";
            j++;
            k++;
        }

}

async function mergeSort(l, r) {
    await sleep(algoSpeed);
    if (l < r) {
        var m = Math.floor((l + r) / 2);
        await mergeSort(l, m);
        await mergeSort(m + 1, r);
        await merge(l, m, r);
        for(let i=l;i<=r;i++)
           document.getElementById("p" + i).style.backgroundColor = "green";
    }
}
