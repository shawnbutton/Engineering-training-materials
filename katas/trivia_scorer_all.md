### Trivia Game Scorer
Create a `score(answers : string) : int` 
 
It will take an empty or one character `answers`. `“Y”` indicates a correct question and returns `1`. `“X”` indicates an incorrect answer and returns `0`.

<table>
    <tr>
        <td>Input</td>
        <td>Output</td>
    </tr>
    <tr>
        <td>""</td>
        <td>0</td>
    </tr>
    <tr>
        <td>"X"</td>
        <td>0</td>
    </tr>
    <tr>
        <td>"Y"</td>
        <td>1</td>
    </tr>
</table>

<br/><br/>

### Trivia Game Scorer 2
Allow the `score()` method to handle an unknown number of questions, separated by commas. Return the number of correct answers (“Y”s). 

<table>
    <tr>
        <td>Input</td>
        <td>Output</td>
    </tr>
    <tr>
        <td>"X,Y"</td>
        <td>1</td>
    </tr>
    <tr>
        <td>"Y,X,Y,Y"</td>
        <td>3</td>
    </tr>
</table>

<br/><br/>


### Trivia Game Scorer 3
We want some questions to be worth more. A number counts for its value. All previous scenarios should still be supported.  
  
Examples:

<table>
    <tr>
        <td>Input</td>
        <td>Output</td>
    </tr>
    <tr>
        <td>"5,10"</td>
        <td>15</td>
    </tr>
    <tr>
        <td>"Y,X,5"</td>
        <td>6</td>
    </tr>
</table>

<br/><br/>

### Trivia Game Scorer 4
Calculate percent. If the input starts with `^n^` then `n` = total possible score. Return the correct percent, rounded down to the nearest integer. 
  
Examples:

<table>
    <tr>
        <td>Input</td>
        <td>Output</td>
    </tr>
    <tr>
        <td>"^20^5,5,5"</td>
        <td>75</td>
    </tr>
    <tr>
        <td>"^10^Y,X,7"</td>
        <td>80</td>
    </tr>
</table>

<br/><br/>

### Trivia Game Scorer 5
Calling `score()` with a negative number will throw an exception `“negatives not allowed”` - including the negative value that was passed in.

If there are multiple negative values, include all of them in the exception message.

<br/><br/>

### Trivia Game Scorer 6
Support numbers given in decimal format.  Add them up, including the decimal, and return the total rounded down to the nearest integer. 

<br/><br/><br/>

### Trivia Game Scorer 7 - Bonus

Some questions are worth bonus points. They might appear anywhere in the input, but are counted at the end. However, the total score cannot exceed 100. Bonus questions are prefixed with `“B”`.

<br/><br/><br/>

### Trivia Game Scorer 8 - Bonus
Some questions are two part questions. In order to get any points for those questions they need to get both questions correct, otherwise they get nothing for those questions.

Two part questions are in the format `“*n*v”`, where `n` = the same number, and `v` is `“X”`, `“Y”` or a point value.

Examples:

<table>
    <tr>
        <td>Input</td>
        <td>Output</td>
    </tr>
    <tr>
        <td>"*1*Y,*1*Y"</td>
        <td>2</td>
    </tr>
    <tr>
        <td>"*4*5,*4*6"</td>
        <td>80</td>
    </tr>
    <tr>
        <td>"*7*5,*7*X"</td>
        <td>0</td>
    </tr>
</table>
