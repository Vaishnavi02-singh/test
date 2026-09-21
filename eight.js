// Palindrom without reverse
let str = "nurses run";
str = str.toLowerCase();
let newStr = "";
for (let i = 0; i < str.length; i++)
     {
        if (str[i] !== " ") 
            {
        newStr = newStr + str[i];
    }
}

let isPalindrome = true;   
let left = 0;
let right = newStr.length - 1;
    while (left < right)
         {
            if (newStr[left] !== newStr[right])
                 {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}

if (isPalindrome)
     {
    console.log("Palindrome");
}
else
     {
    console.log("Not Palindrome");
}