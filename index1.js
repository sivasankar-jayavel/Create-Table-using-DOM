//This table is in HTML, create the same table With Below Mentioned Information
//Using DOM 
//Deploy the same using netlify
//Remainder:don't use innerHTML propery 1st Method

// /* <table class="table">
// <thead class="thead-dark">
//   <tr>
//     <th scope="col">First</th>
//     <th scope="col">Middle</th>
//     <th scope="col">Last</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>


// </tbody>
// </table> */


// Answer :


var table=createtable("table","class","table");

var thead=createtable("thead","class","thead-dark");

var tr1= createtablerow("tr");

var thead1=createtablehead("th","scope","col","First");
var thead2=createtablehead("th","scope","col","Middle");
var thead3=createtablehead("th","scope","col","Last");

var tbody=createtable("tbody");

var tr2=createtablerow("tr");

var tdata1=createtabledata("td","Mark");
var tdata2=createtabledata("td","Otto");
var tdata3=createtabledata("td","@mdo");

table.append(thead);
thead.append(tr1);
tr1.append(thead1,thead2,thead3);
table.append(tbody);
tbody.append(tr2);
tr2.append(tdata1,tdata2,tdata3);

document.body.append(table);

function createtable(tagname,attributename,attributevalue){
   var element=document.createElement(tagname);
   element.setAttribute(attributename,attributevalue);
   return element;
}
function createtablehead(tagname,attributename,attributevalue,content){
   var element=document.createElement(tagname);
   element.setAttribute(attributename,attributevalue);
   element.innerHTML=content;
   return element;
}
function createtabledata(tagname,content){
   var element=document.createElement(tagname);
   element.innerHTML=content;
   return element;
}
function createtablerow(tagname){
   var element=document.createElement(tagname);
   return element;
}