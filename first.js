// Q1. Second Largest Distinct Element
function secondLargest() 
{
let input = document.getElementById("q1Input").value;
let arr = input.split(",").map(Number);
 let largest = -Infinity;
 let second = -Infinity;
 for (let i = 0; i < arr.length; i++)
     {
            if (arr[i] > largest)
                 {
             second = largest;
             largest = arr[i];
        }
        else if (arr[i] > second && arr[i] !== largest) 
            {
            second = arr[i];
        }
    }
                if (second === -Infinity) 
                    {
                    document.getElementById("q1Output").innerText =
                     "At least two distinct elements required.";
    }
         else 
            {
             document.getElementById("q1Output").innerText =
                "Second Largest: " + second;
    }
}


