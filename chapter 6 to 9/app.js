// chapter 6

//  Q1

//     var num = 10
//     document.write("<h1>Resullt</h1>")
//     document.write("The value of a is " + num + "<br>" + "<br>" )

//     ++num

//     document.write("The value of ++a is " + num + "<br>" )
//     document.write("Now The value of a is : " + num + "<br>" + "<br>" )
//     document.write("The value of a++ is " + num + "<br>" )

//     num++

//     document.write("Now The value of a is : " + num + "<br>"  + "<br>" )

//     --num

//     document.write("The value of --a is " + num + "<br>" )
//     document.write("Now The value of a is : " + num + "<br>" + "<br>" )
//     document.write("The value of a-- is " + num + "<br>" )

//     num--   

//     document.write("Now The value of a is : " + num  )

//  Q2
 
//  var a = 2 ;
// var b = 1 ;
// var result = --a - --b + ++b + b-- ;

// document.write("a is " + a + "<br>")
// document.write("b is " + b + "<br>")
// document.write("result " + result + "<br>")
// console.log(result);


// Q3
// var userName = prompt("Enter your name")
// alert("welcome  " + userName) 

// Q4

// var num = prompt("Enter the number ") || 5 ;

// document.write("<h1>Multiplication table of " + num + "</h1>" )
// document.write( num + " x  1  = " + (num * 1 ) + "<br>" )
// document.write( num + " x  2  = " + (num * 2 ) + "<br>" )
// document.write( num + " x  3  = " + (num * 3 ) + "<br>" )
// document.write( num + " x  4  = " + (num * 4 ) + "<br>" )
// document.write( num + " x  5  = " + (num * 5 ) + "<br>" )
// document.write( num + " x  6  = " + (num * 6 ) + "<br>" )
// document.write( num + " x  7  = " + (num * 7 ) + "<br>" )
// document.write( num + " x  8 = " + (num * 8 ) + "<br>" )
// document.write( num + " x  9 = " + (num * 9 ) + "<br>" )
// document.write( num + " x  10  = " + (num * 10 ) + "<br>" )

// Q5

// var sub1 = prompt("enter your subject 1 ")
// var sub2 = prompt("enter your subject 2 ")
// var sub3 = prompt("enter your subject 3 ")

// var marks_sub1 = prompt("enter your marks of subject 1 ")
// var marks_sub2 = prompt("enter your marks of subject 2 ")
// var marks_sub3 = prompt("enter your marks of subject 3 ")

// var percentage_sub1 = (marks_sub1 / 100 ) * 100   
// var percentage_sub2 = (marks_sub2 / 100 ) * 100   
// var percentage_sub3 = (marks_sub3 / 100 ) * 100   

// var total_marks = marks_sub1 + marks_sub2 + marks_sub3
// var percentage = (total_marks / 300) * 100



// document.write("<table > <tr> <th> subject </th> <th> total marks </th> <th> obtained marks </th> <th> percentage </th> </tr> <tr> <td> "+ sub1 +  "</td> <td>  100  </td> <td> "+ marks_sub1 +   "</td> <td> "+ percentage_sub1 +  "%</td></tr> <tr> <td> "+ sub2 +  "</td> <td>  100  </td> <td> "+ marks_sub2 +   "</td> <td> "+ percentage_sub2 +  "%</td></tr> <tr> <td> "+ sub3 +  "</td> <td>  100  </td> <td> "+ marks_sub3 +   "</td> <td> "+ percentage_sub3 +  "%</td> </tr>   <tr> <th>  </th>    <th> 300 </th> <th>" +total_marks + "</th> <th>" + percentage+"</th>     </tr>  </table>  " )

