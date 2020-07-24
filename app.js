
//chap 38-42
//q no 1
// function power(a,b){
//     var a= +prompt("enter the number");
//     var b= +prompt("enter the power of a")
//     var c = Math.pow(a , b);
//     alert(c)
// }
// power()

//q no 2
//  function leapYear(year){
//     var year = prompt('Enter a Year');
//     if (year == 1700 || year == 1800 ||year==1900){
//       alert(year+" "+ "is not a leap year");
//     }
//     else if(year % 4 == 0){
//       alert(year+" "+"is a leap year")
//     }
//     else{
//         alert(year+" "+ "is not a leap year")
//     }
//  leapYear()

//q no 3
// var a = +prompt("enter the raduis of circle");
// var b = +prompt("enter the raduis of circle");
// var c = +prompt("enter the raduis of circle");
// function area(){
//         var s = (a+b+c)/2;
//         document.write("The value of s is :"+ s+ "<br>")
//             var triangle = s*(s-a)*(s-b)*(s-c)
//             document.write("The area is :"+" "+ triangle+ "<br>")
//     }
//     area();

// q no 4
// var marks1 = prompt("enter marks of subject 1");
// var marks2 = prompt("enter marks of subject 2");
// var marks3 = prompt("enter marks of subject 3");
// var total = 300;
// function mainfunction(){
//     return average()
//     function average(){
//         var avg = +((+marks1) + (+marks2) + (+marks3))/3;
//         document.write("the average of marks is "+" "+ avg+ "<br>")
//       var per = (((+marks1) + (+marks2)+ (+marks3))/total) *100;
//       document.write("the percentage of three subjects is "+" "+per+"%"+"<br>")
//     }
// }
// mainfunction()
// 


//q no 5
// var a = 'aneeqa';
// var b= prompt('enter any character');
// for(var i = 0 ; i<a.length ; i++){
//     if(a[i]==b){
//         alert(i);
//         break;
//     }
//     else{
//         alert("sorry! wrong character")
//     }
// }


//q no 6


//q no 7


//q 8
// var km = prompt('Enter the distance between roads in km');
// var m = km*1000;
// var feet = km*3281;
// var inch = km*39370;
// var cm = km*100000;
// document.write("The Distance between two roads in km is : "+ km +"Km"+"<br>")
// document.write("In Meters :"+ m+ "m" +"<br>")
// document.write("In Feets :"+ feet+ "ft" +"<br>")
// document.write("In Inches ;"+ inch+"in'"+"<br>")
// document.write("In Centimeters :"+ cm+ "cm" +"<br>")



//q 10
// var amount = prompt("enter your amount");
// var h =parseInt(amount/100);
// var r1 = amount%100;
// var f = parseInt(r1/50);
// var r2 = r1%50;
// var t =parseInt (r2/10);
// document.write("you will have "+" "+ h+ " " +"hundred notes"+" "+ f + " "+" fifty notes and"+" " +t + " "+ "ten notes");




//chap 43-48
//q 3
// function remove(){
//     var element = document.getElementById('delete')
//     element.parentNode.removeChild(element)
// }

//q 4
// function rollover(my_image){

//     my_image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8oj07JQ7-nYWttRYucoiqvjyKze_ua0QJ5w&usqp=CAU'

// }
// function mouseaway(my_image){

//         my_image.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-thnhL1NQsUKZMBOLJ3luShgT4CXPbNfflQ&usqp=CAU'
//     }

//q 5
// var button = document.getElementById("increasec"),
//   count = 0;
//  function increase() {
//   count += 1;
//   button.innerHTML = "increase: " + count;
// } 

// var button = document.getElementById("decrease"),
//   count = 0;
//  function decrease() {
//   count -= 1;
//   button.innerHTML = "decrease: " + count ;
// };

// chap 49-52
// q no 1 
// function info(){
//     var name = document.getElementById('name')
//     var fathername = document.getElementById('fathername')
//     var EMAILID= document.getElementById('email')
//     var dateofbirth = document.getElementById('dob')
//     var city= document.getElementById('city')
//     document.write("NAME"+" " +name.value+"<br> ")
//     document.write("FATHER NAME"+ " "+ fathername.value +"<br> ")
//     document.write("EMAIL ID"+" "+ EMAILID.value +"<br> ")
//     document.write("DATE OF BIRTH"+" "+ dateofbirth.value+"<br> ")
// document.write("CITY"+" "+ city.value+"<br> ")}

//q no 2
//  function readmore(){
//      var text= "<ul><li>cookies</li><li>pastry</li><li>patties</li><li>spring rolls</li><li>vegetable roll</li><li>cream roll</li><li>pizza</li><li>nuggets</li><li>veg patties</li><li>cake</li></ul>"
//      var list = document.getElementById('items')
//      list.innerHTML = text
//  }


//q no 3
// function del(){
//         var n = document.getElementById('name')
//         n.parentNode.removeChild(n)
//         var fname = document.getElementById('fname')
//         fname.parentNode.removeChild(fname)
//         var date = document.getElementById('date')
//         date.parentNode.removeChild(date)
//         var city1 = document.getElementById('shehar')
//         city1.parentNode.removeChild(city1)
//         var grade = document.getElementById('grade')
//         grade.parentNode.removeChild(grade)
//     }
//     function table(){
//         var name = document.getElementById('name')
//         var fathername = document.getElementById('fname')
//             var date = document.getElementById('date')
//             var city = document.getElementById('shehar')
//             var grade= document.getElementById('grade')
//             var n = name.value
//             document.write('<table>'+'<tr>'+'<td>'+ n + '</td>'+'<td>'+ fathername.value +'</td>'+'</tr>'+'</table>')
//  }

//chap 53 -58
// q n01
// function showimage(e){
// var modalimage = document.getElementById('modalimage')
// modalimage.src = e.src
// }
 
//q no 2
// function zoomin(){
//     var para = document.getElementById('para')
//     para.style.fontSize = "40px"
// }
// function zoomout(){
//     var para = document.getElementById("para");
//     para.style.fontSize = "15px"
// }

//chap 58-67
//q no 1(i)
// var d = document.getElementById("main-content");
// //q no 1(ii)
// var p=document.getElementsByTagName("p");
// //q no 1(iii)
// for(var i = 0; i<p.length;i++){
//     var content = p[i].innerHTML;
//     console.log(content)
// }
// //q no 1(iv)
// var firstname = document.getElementById("first-name");
// firstname.value = "Aneeqa";
// //q no 1(v)
// var lastname = document.getElementById("last-name");
// lastname.value = "Rafique";
// //q no 1(vi)
// var emailaddress = document.getElementById("email")
// emailaddress.value = "aneeqaraique20@gmail.com"

//q no 2(i)
// var x = document.getElementById("form-content").nodeType
// console.log(x)
// //q no 2(ii)
// var y = document.getElementById("lastName").nodeType
// console.log(y)
// console.log(y.firstchild)
// console.log(y.nextsibling)
// //q no 2(iii)

// ///q no 2(iv)
// var z = document.getElementById('main-content')
// console.log(z.firstChild)
// console.log(z.lastChild)
// //q no 2(v)
// var a = document.getElementById('lastName')
// console.log(a.previousSibling)
// console.log(a.nextSibling)
// //q no 2(vi)
// var c = document.getElementById('email')
// var d = document.getElementById('email').nodeType
// console.log(c.parentNode)
//  console.log(d);

