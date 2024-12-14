var studentArray = [];
var SubmitStudentdata = [];
var StudentData = {};
var rejectData = {};
var rejectFinal = [];
var fin;
var action;

function delteevent(row, data){
    return '<i class="fa-solid fa-trash" style="color:red">'
}

var col = [
    {
        title: 'session',
        field: 'Session'
    },
    {
        title: 'reason',
        field: 'Reason'
    },
    {
        title: 'action',
        formatter: delteevent
    }
]
// Current date and time
var currentDate = new Date();

var fins = $(".contain").children().length;

var year = currentDate.getFullYear();
var month = currentDate.getMonth(); // Zero-based (0 - 11)
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var milliseconds = currentDate.getMilliseconds();
var months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };
  if(hours > 12){
    hours -= 12;
  }
  var day ;
  setTimeout(function() {
    day = `${year}/${months[month]}/${day}(${hours}/${minutes}/${seconds})`;
    console.log(day);
  }, 2000); // Set the timeout duration (in milliseconds) as desired
 $(document).ready(function(){
    $("#profiles").on("click", function(){
        // Show elements when profiles is clicked
        $("#card1, #card2, #stu , .content").hide();
        $(".gr_info, #img-gr, #personal-info, #change-pass, #back-to-request").show();
    });

    $("#req").on("click", function(){
        // Hide elements when back-to-request is clicked
        $(" #card2 , #stu ,   .content").show();
        $(".gr_info, #img-gr, #personal-info, #change-pass , #back-to-request ").hide();
    });
});



  
 
$(document).ready(function(){
    $(".add").on("click" , function(){
        Swal.fire({
            title: "Are you sure?",
            text: "You want add this value!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Added!",
                    text: "Your value has been added.",
                    icon: "success"
                });
                if ($(".e").find("td").length > 0) {
                    return;
                }
                StudentData = {
                    Session : $("#form_session").val(),
                    Reason : $("#Reasons").val(),
                    reject_reason : ""
                };
                if (!StudentData.Reason) {
                    $("#Reason_Pre").text("Please fill out this field").css({"color":"red" , "margin-left":"5px"});
                    return;
                }
                else{
                     $("#Reason_Pre").text(" ");
                }
                $("#Reasons").val("")
                studentArray.push(StudentData);
                console.log(StudentData)
                
                console.log("Session Value:", StudentData.Session);
                console.log("Reason Value:", StudentData.Reason);
                
              
                $(".e").append(`<td class="td">${StudentData.Session}</td>
                <td class="td">${StudentData.Reason}</td>
                <td class="td"><i class="fa-solid fa-trash" style="color:red"></i></td>`)
                .css("text-align", "center");        
                $("#mataching").hide();        
            }
        });
       
        
    })

    $(document).on("click", ".fa-trash", function () {
        Swal.fire({
            title: "Are you sure?",
            text: "You want delete this value!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                // Remove the closest tr
                $(this).closest("tr").remove();
                $("#matching").show();
                var ind = studentArray.length - 1;
                console.log(ind);
                studentArray.splice(ind, 1);
                console.log(studentArray);
            }
        });
    });
});


$(document).ready(function(){
    $("#gro").on('click',function(){
        console.log(day)
        var ro = $(".e").children().length;
        console.log(ro)
        if(ro === 0){
            return;
        }
        else{
            
            $(".td").closest("td").remove();
            $("#mataching").show();
      
        // console.log(studentArray)
        // console.log(studentArray[studentArray.length - 1])
       
      
     
       
        SubmitStudentdata.push(StudentData);
        console.log("Update new array", SubmitStudentdata)
        // console.log($(".e").find("<td>"))
        // if ($(".e").find("<td>").length > 0) {
        //     return;
        // }
          var New1 = $("<p>").text('Mr.Teng Chantola').addClass("Name").css({"font-weight": "700" , "margin-top":"10px" ,"margin-right":"5px",})
          var New2 = $("<p>").text('has').css({"margin-top":"10px" ,"margin-right":"5px",}); ;
          var New3 = $("<p>").text('Pending').addClass("Action").css({
            "color": "orange",
           
            "font-weight": "700",
            "margin-top":"10px",
            "margin-right":"5px",
          });
          var New4 =$("<p>").text('your request ').css("margin-top", "10px"); 
          var New5 =$("<p>").text('View ').css({"color":"orange" , "font-weight":"700", "margin-left":"203px","margin-top":"10px"})
          var newDiv =$("<div>").addClass("color_approve").css("background-color","orange")  
          var RowNew =$("<div>").addClass("row")
          var DivNEw =$("<div>").addClass("col-12 notibody d-flex");
          DivNEw = DivNEw.append(newDiv)    
          DivNEw = DivNEw.append(New1)
          DivNEw = DivNEw.append(New2)
          DivNEw = DivNEw.append(New3)
          DivNEw = DivNEw.append(New4)
          DivNEw = DivNEw.append(New5)
          RowNew = DivNEw.append(DivNEw)
          $("#mac").hide();
          $(".contain").append(RowNew); 
        //   final.push(StudentData);
        }
        
        
    })  
   // Event delegation for dynamically added elements
   $(".contain").on("click", ".notibody", function() {
        // Hide/show elements based on your requirements
        $("#popupContainer").fadeOut();
        $("#card2").hide();
        $("#stu").hide();
        $("#card1").show();
        
    
    
        // Use $(this) to reference the clicked element
        var clickedElement = $(this);
        // var lengt = clickedElement.children().length;
    
        console.log(studentArray[0])
    
        // Extract data from the clicked element
        var status = clickedElement.parent().data("status");
        var name = clickedElement.find(".Name").text();
        action = clickedElement.find(".Action").text();
       
        if(action == "Rejected"){
            $("#emailHelp").text("Your request was Rejected by teacher " + day).css({"color":"red","font-weight":"500"});
            $("#reject").hide();
            $("#Approved").hide();
            $("#Delete").css("margin-left","225px")
            $("#Rejected_reason_btn").show();
            console.log(day)
           
            console.log( $(this).index())
        }
        else if(action == "Pending"){
            $("#emailHelp").text("Your request waiting teacher to Approved " + day).css({"color":"orange","font-weight":"500"});
            $("#reject").show();
            $("#Approved").show();
            $("#Delete").css("margin-left","0")
            $("#Rejected_reason_btn").hide();
            console.log(day)
        }
        else if(action == "Approved"){
            $("#emailHelp").text("Your request was approved by teacher " + day).css({"color":"#00C62F","font-weight":"500"});
            $("#reject").hide();
            $("#Approved").hide();
            $("#Delete").css("margin-left","225px")
            $("#Rejected_reason_btn").hide();
        }

        console.log("Status:", status);
        console.log("Name:", name);
        console.log("Action:", action);
    
        fin = $(".contain").find(this).index();
        console.log(fin)
        $("#Default01").val(SubmitStudentdata[fin - 1].Session);
        $("#validation").val(SubmitStudentdata[fin - 1].Reason)
        $("#Approved").off("click").on("click", function () {
            console.log("Approved button clicked");
            var Approved_btn = $(".contain").children().eq(fin).html(' <div class="color_approve"></div><p style=" margin-top:10px"><b class="Name">Mr.Teng Chantola</b> has <span class="Action" style="color: #00C62F; margin-left: 5px; font-weight: 700; margin-top:10px;">Approved</span> your request</p><p style="margin-left:200px;margin-top:10px"><b style="color: #00C62F;">View</b></p>');
            $("#emailHelp").text("Your request was approved by teacher " + day).css({"color":"#00C62F","font-weight":"500"});
            $("#reject").hide();
            $("#Approved").hide();
            $("#Delete").css("margin-left", "225px")
            
        });
        $("#reject").off("click").on("click", function () {
            $("#Popreject").fadeIn();
        });
        $("#back").off("click").on("click", function () {
            $("#card2").show();
            $("#card1").hide()
        });
        $("#Delete").off("click").on("click", function (){
            $("#delete_check").show();
            
        })
        $(".fa-circle-xmark").off("click").on("click",function(){
            $("#Popreject").fadeOut();
        })
        $("#close").off("click").on("click" , function(){
            $("#delete_check").hide();
        })
        $("#checkDelete").off("click").on("click",function(){
            $("#delete_check").hide();
            $(".contain").children().eq(fin).remove();
            var subtr = fin - 1;
            SubmitStudentdata.splice(subtr,1)
            console.log(fin)
            console.log(SubmitStudentdata)
            $("#card1").hide();
            $("#card2").show();
            if($(".contain").children().length == 1){
                $("#mac").show();
            }
        })
        $("#checkReject").off("click").on("click",function(){
            if(!$("#Default011").val()){
                $("#fill").text("Please fill out this field").css("color" , "red")
                return;
            }
            $("#Popreject").fadeOut();
             $("#Rejected_reason_btn").show();
             
             var Approved_btn = $(".contain").children().eq(fin).html(' <div class="color_reject"></div><p style=" margin-top:10px"><b class="Name">Mr.Teng Chantola</b> has <span class="Action" style="color:red; margin-left: 5px; font-weight: 700; margin-top:10px;">Rejected</span> your request</p><p style="margin-left:200px;margin-top:10px"><b style="color:red;">View</b></p>');
             $("#emailHelp").text("Your request was Rejected by teacher " + day).css({"color":"red","font-weight":"500"});
             $("#reject").hide();
             $("#Approved").hide();
             $("#Delete").css("margin-left", "225px")
             
            
            StudentData.reason_reject = $("#Default011").val(); 
            studentArray.push(StudentData); 
            $("#Rejected_reason").val(studentArray[fin - 1].reason_reject)
            
            console.log("all array " + studentArray)
            console.log("reject reason " + studentArray[fin - 1].reason_reject)
            console.log("Approved button clicked");
            $("#Default011").val("")
           
        })
       
    }); 
    
$(".contain").append(RowNew);

})
$(document).ready(function(){
    $("#showPopup").click(function(){
        $("#popupContainer").fadeIn();
    });

    $("#closePopup").click(function(){
        $("#popupContainer").fadeOut();
    });
});

$(document).ready(function() {
    $("#change-pass").click(function() {
      $('#pass').fadeIn();
    });
    $("#checkpass").click(function(){
        $('#pass').fadeOut();
    })
    $(".fa-circle-xmark").click(function(){
        $('#pass').fadeOut();
    })    
});
