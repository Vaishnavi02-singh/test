// Character Frequency
function characterFrequency() 
{
let text = document.getElementById("q4Input").value;
let frequency = {};
        for (let i = 0; i < text.length; i++) 
            {
            let char = text[i].toLowerCase();
            if (char === " ")
                 {
            continue;
        }
            if (frequency[char]) 
                {
              frequency[char]++;
        }
        else 
            {
            frequency[char] = 1;
        }
    }
    let result = "";
        for (let char in frequency) 
            {
        result += char + " : " + frequency[char] + "\n";
    }

    document.getElementById("q4Output").innerText = result;
}
