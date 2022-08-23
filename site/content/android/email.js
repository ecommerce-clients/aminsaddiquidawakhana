// var address;
// var city;
// var province;
// var ttbody='';
// stoprice = 0;
// $.ajax({
//     url: 'http://localhost:8000/api/userdata/'+u_id,
//     type: 'GET',
//     dataType: 'json',
//     success: function(response){
//         console.log('email',response['apis'][0])
      
//         var len = 0;
//         if(response['apis'] != null){
//           len = response['apis'].length;
//         }
//         else(
//             alert(response.id)
//         )
//         if(len > 0){
        
//         }
//         address=response['apis'][0].address
//         city=response['apis'][0].city
//         province=response['apis'][0].province


//         $.ajax({
//             url: 'http://localhost:8000/api/tracker/' + orderid,
//             type: 'GET',
//             dataType: 'json',
//             success: function(response){
//                 console.log(response['track'][1])
              
//                 var len = 0;
//                 if(response['track'] != null){
//                   len = response['track'].length;
//                 }
//                 else(
//                     alert(response.id)
//                 )
//                 if(len > 0){
                   
//                   for(var i=0; i<len; i++){
        
//                     var price = parseInt(response['track'][i].price * response['track'][i].qty)
//                     stoprice = parseInt(stoprice + price);
                
                
//                         ttbody +=
//                         "<tbody>"+
//                         "<tr>"+
//                             "<td>"+i+"</td>"+
//                             "<td>"+response['track'][i].name+"</td>"+
//                             "<td>"+response['track'][i].qty+"</td>"+
//                             "<td>"+response['track'][i].price+"</td>"+
//                             "<td>"+price+"</td>"+
//                             "<td>"+response['track'][i].status+"</td>"+
//                         "</tr>"+
//                         "</tbody>"

//                     // document.getElementById("abc").innerHTML = name;
                   
//                   }
//                   emails()
//                 }
        
//               }
//          });
        




       

//       }
//  });


// function emails(){

// var style = "<style>table.table{width:100%}.table td,.table th{text-align:left;padding:.25em}.table tr{border-bottom:1px solid #DDD}td.edit-buttons{text-align:right}button{border-radius:3px;border:none;margin:0 .25em;transition:all .3s}button:hover{box-shadow:0 0 4px rgba(3,3,3,.8);opacity:.9}button.edit{background:#6F9}button.delete{background:#F69}@media screen and (max-width:800px){tr{display:flex;flex-direction:row;flex-wrap:wrap;margin:.5em 0;border:1px solid rgba(3,3,3,.2)}td,th{flex:1 1 150px;border:.5px solid rgba(3,3,3,.2)}}*{box-model:border-box;font-family:futura}#Content{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;margin:0 auto;color: black;padding:0;width:600px}#CompanyDetails{width:50%}#Header h1,h2,h3{color:#006400}#invoice{width:100%}#invoice thead tr td{border-bottom:solid 2px #000;padding:5px}#invoice tbody tr td{padding:10px;border-bottom:solid 1px gray}#Master{margin-top:10px}#Master #Left{width:35%;float:left}#Master #Right{width:40%;float:right;margin-left:10px}#Master #Right p{margin:0}#detail{float:left;width:100%;margin-top:15px}#summary{width:30%;float:right;margin-top:15px}</style>";

// var Content = "<div id='Content'>"

// var CompanyDetails = "<div id='CompanyDetails'><h3>[Company Title]</h1><p>Office # 102, ABC Building, DEF Street, AlphaTown.</p><p><a href='https://google.com'>Website URL</a></p></div>"

// var Header = "<div id='Header'><h1>INVOICE</h1><b>Ref: "+orderid+"</b></div>"

// var Master = "<div id='Master'>"+
// "<div id='Left'>"+
//     "<table width='100%' class='table'>"+
//     "<tr>"+
//     "<td>Issue Date</td>"+
//     "<td>2021-05-01</td>"+
// "</tr>"+
// "<tr>"+
//     "<td>Due Date</td>"+
//     "<td>2021-05-31</td>"+
// "</tr>"+
// "<tr>"+
//     "<td>Issue Date</td>"+
//     "<td>2021-05-01</td>"+
// "</tr>"+
//         "<tr>"+
//             "<td>Currency</td>"+
//             "<td>PKR</td>"+
//         "</tr>"+
//         "<tr>"+
//             "<td>P.O #</td>"+
//             "<td>123/ABC-200</td>"+
//         "</tr>"+
//     "</table>"+
// "</div>"



// var Right = "<div id='Right'>"+
//     "<p>Bill to.</p>"+
//     "<p><b>Customer/Client's Company</b></p>"+
//     "<p>"+address+"</p>"+
//     "<p>"+city+","+province+"</p>"+
//     // "<p>Contact Info</p>"+
//     "<p>"+email+"</p>"+
// "</div>"+
// "</div>"



// var Detail = "<div id='Detail'>"+
// "<table id='invoice' class='table'>"+
//     "<thead>"+
//         "<tr>"+
//             "<td></td>"+
//             "<td>Item</td>"+
//             "<td>Quantity</td>"+
//             "<td>Price</td>"+
//             "<td>Total price</td>"+
//             "<td>Status</td>"+
           
//         "</tr>"+
//     "</thead>"
    
//    var Summary = "</table> <br>"+
// "<table id='Summary' class='table'>"+
//     "<tr>"+
//         "<td>Subtotal:</td>"+
//         "<td>"+stoprice+"</td>"+
//     "</tr>"+
//     "<tr>"+
//         "<td>Total:</td>"+
//         "<td>"+stoprice+"</td>"+
//     "</tr>"+
//     // "<tr>"+
//     //     "<td>Paid:</td>"+
//     //     "<td>$0.00</td>"+
//     // "</tr>"+
//     // "<tr>"+
//     //     "<td>Amount Due:</td>"+
//     //     "<td>0</td>"+
//     // "</tr>"+
// "</table>"+
// "</div>"

// var Contentclose = "</div>"


// var comple = style+Content+CompanyDetails+Header+Master+Right+Detail+ttbody+Summary+Contentclose

// // console.log(comple);

// // document.write(comple);
// var url = "https://smtpjs.com/v3/smtp.js";


// $.getScript(url, function(){
//     $(document).ready(function(){
//    Email.send({
//       Host: "smtp.gmail.com",
//       Username: "amofficial888@gmail.com",
//       Password: "ovzkgghbuqsfpgqb",
//       To: 'ahmed1701f@gmail.com',
//       From: "amofficial888@gmail.com",
//       Subject: "Check mail  ",
//       Body: comple
//     }).then(
//       message => alert("mail sent successfully")
//     );
//     })
// });


// }
