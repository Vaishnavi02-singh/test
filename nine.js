// Find the Most frequent element
let arr = [4, 2, 4, 3, 2, 4, 5, 2];
let frequency = {};
for (let i = 0; i < arr.length; i++)
     {
    let element = arr[i];
        if (frequency[element]) 
            {
        frequency[element]++;
    }
    else 
        {
        frequency[element] = 1;
    }
}

let maxCount = 0;
let mostFrequent;

for (let i = 0; i < arr.length; i++)
     {

    let element = arr[i];

    if (frequency[element] > maxCount) 
        {
        maxCount = frequency[element];
        mostFrequent = element;
    }
}
console.log("Most Frequent Element:", mostFrequent);