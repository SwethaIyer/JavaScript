//Program to search for a particular character in a string

let name="Swetha";

console.log(name.charAt(1));

//Program to convert minutes to seconds

let minutes=10;
let seconds=minutes*60;
console.log(`10 minutes is equal to  ${seconds}`);

//Program to search for an element in a array of strings

let str=["moon","sun","stars"];

console.log(str[2]);

//Program to display only elements containing 'a' in the term of array

let str2=["letsupgrade","Flash","ram","rom"];

for (i=0;i<str2[i].length;i++)
{
    for(j=1;j<str2.length;j++)
    {
        if(str2[i][j]=="a")
        {
           console.log(str2[i]);
        }
    }
}


 

//Print an array in reverse order

let str3=["Keyboard","Mouse","Printer","Monitor"];
console.log(str3.reverse(str3[2]));

