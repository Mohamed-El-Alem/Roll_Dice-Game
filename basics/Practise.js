/////////Exercise/////
//Jhon and his friend invented a simple game where the player with the highest value
 //of his hight plus give times his age wins;

/*
H:hieght; A :Age
var jH=180;
var jA=25;
var FH=180;
var FA=25;
var MH=160;
var MA=24;
var jhon =jH+(jA*5);
var Friend=FH+(FA*5);
var Mouin=MH+(MA*5);
if(jhon > Friend && jhon > Mouin){
    console.log('the winner is Jhon '+jhon);
}else if(Friend > jhon && Frined > Mouin){
    console.log('the winner is Friend '+Friend);
}else if (Mouin > jhon && Mouin > Friend ){ console.log('the winner is mouin '+ Mouin);
}else {console.log('there is smth happens');}


function yearOfBirth(year){

   var year =  2019 - year ;
   return year
}

function retirment(name ,year){
    var age = yearOfBirth(year);
    var retirment=65-age;
    if (retirment <= 0){
        console.log(name+' has already retired')
    }else{
    console.log(name+' retire in '+retirment+' years');}
}
retirment('mouin',1995);
retirment('Ahmed',1948);
*/

/*var names = ['mouin' ,'med','sidi', 'mark' , 'jhon'];
var years = new Array(1994 ,1997 ,1948);
console.log(names);
names.pop();
names.shift();
names.indexOf('med');

console.log(names);
alert(names.indexOf('jhon'));

var jhon= {
    name : 'mouin',
    age: 18,
    job : 'programmer',
    family:['selmou','khalil', 'cheikh'],
    calculatAge : function(yearOfBirth){
        return 2019 - yearOfBirth;

    }
};

console.log(jhon.calculatAge(jhon.age));

////////Execrise////////

// Creat an array with years , then another empty array and fill it with ages of persons.
// log the ages of persons under 18. create a function fullPrint receive table years as anrgument 
//and do the previous steps
var years=[1995, 1987, 1993, 1994];
var ages = new Array();
for( var i =0 ; i < years.length - 1; i++){
    ages[i]= 2019 - years[i];
}
console.log(ages);
for( var i =0 ; i < years.length - 1; i++){
    if (ages[i] >= 18){
        console.log(ages[i]+' is full age');
    }else continue;
}

var years=[1995, 1987, 1993, 1994];
function printfullAge(years){
    var ages = new Array();
    var test = new Array();
    for( var i =0 ; i < years.length - 1; i++){
        ages[i]= 2019 - years[i];
        if (ages[i] >= 18) {
           console.log('person '+(i + 1)+' is '+ages[i]+' years old and is of full ages');
           test.push(true);
  
        }else {
            console.log('person '+(i + 1)+' is +'+ages[i]+' years old and is Not of full ages');
            test.push(false);
   
        } }
    return test;
}
var i = printfullAge(years);
console.log(i);

var jhon= {
    name: 'jhon',
    yearOfBirth:1994,
    calculatAge: function(){
        console.log(this);
   
    }
}
jhon.calculatAge();

var mike={
    name:'mike',
    age: 1997
}
mike.calculatAge=jhon.calculatAge;
mike.calculatAge();*/
