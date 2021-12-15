    /*              Start JS code of hotel.html                 */

    //Facility Info Display
    $('#divFacilityInfo').hide();
    $('.section-hotel a').click(function(){
        $('#divFacilityInfo').focus();
        $('#divFacilityInfo').show();
    });

   //For dropdown box for HOTEL CLASS
   function hotelFunction() {
     let x = document.getElementById("hotelDiv");
     if (x.style.display === "none") {
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
   }

   //Populate hotel checkbox
   populateHotel();

   window.onload=function(){
   let input = document.getElementById("txtSearch");              // Get User's entered value
   input.addEventListener("keyup", (event) => {
     event.preventDefault();
     if (event.key === "Enter") {                                 //Perfomrs the action when "Enter" key pressed from the keyboard              
         event.preventDefault();                                  //Cancel the default action whenever needed     
        
         unCheck();                                               //Uncheck values
         hotelSearch(input.value, 0);                             //Call Search Function
       }
   });
  }

   function unCheck() {                                           //Uncheck values of all checkbox  
    var chkElement = document.getElementsByName('chkHotel');  
    for(var i = 0; i < chkElement.length; i++){  
        if(chkElement[i].type=='checkbox')  
            chkElement[i].checked=false;    
    }  
  }   
  
   //calling search function using javascript event
   let checkHotel = document.getElementsByName('chkHotel');
   for (var i = 0; i < checkHotel.length; i++) {
      checkHotel[i].addEventListener("click", searchFunction, true);
   }

   //calling hotel search using javascript event
   const searchButton = document.getElementById("btnSearchHotel");
   searchButton.addEventListener("click", searchHotelFunction);

   //hotel dropdown click event
   const hotelDropdown = document.getElementById("btnHotel");
   hotelDropdown.addEventListener("click", hotelFunction);

   function searchFunction() {
    document.getElementById("txtSearch").value = "";         //Clears textbox
    $('#divFacilityInfo').hide();
    let hotelIDs = [];

    //insert values into array of checked checkbox's input
    $.each($("input[name='chkHotel']:checked"), function() {
      hotelIDs.push($(this).val());
    });

      if(hotelIDs.length > 0 && hotelIDs.length === 2) {       
        hotelSearch(hotelIDs[0], hotelIDs[1]);                  //for any 2 checkbox selection
      }
      else if(hotelIDs.length > 0 && hotelIDs.length === 1){  
        hotelSearch(hotelIDs[0], 0);                            //for any 1 checkbox selection
      }
      else if(hotelIDs.length > 0 && hotelIDs.length === 3){  
        hotelSearch(1, 0);                                      //for all checkbox selection
      }
      else {
        hotelSearch(1, 0);  
      }
  }

  function searchHotelFunction() {
    $('#divFacilityInfo').hide();
    unCheck();                                                       //Uncheck values
    hotelSearch(document.getElementById("txtSearch").value, 0);      //for search bar's filter
  }

  //Hotel search according to its star rating
  function hotelSearch(input, input1){

    $('.search-hotel-result').text("Showing 9 Results....");

    //get all sections which class name is "section-hotel"
    const section = document.querySelectorAll(".section-hotel");

    //for each loop on the sections
    section.forEach(function(element, index) {
      $(section[index]).show();                   //display all sections
    });
    
    if(input >= 0){ 
      if(input == 5) {  
          $('.search-hotel-result').text("Showing 3 Results....");
          sectionOperation(section, 5);           //calling function for displaying search result
      } else if(input == 4) {
            $('.search-hotel-result').text("Showing 3 Results....");
            sectionOperation(section, 4);
      } else if(input == 3) {
            $('.search-hotel-result').text("Showing 3 Results....");
            sectionOperation(section, 3);
      } if((input == 3 && input1 == 4) || (input1 == 3 && input == 4)) {
            $('.search-hotel-result').text("Showing 6 Results....");
            sectionOperation(section, 34);
      } else if((input == 3 && input1 == 5) || (input1 == 3 && input == 5)) {
            $('.search-hotel-result').text("Showing 6 Results....");
            sectionOperation(section, 35);
      } else if((input == 5 && input1 == 4) || (input1 == 5 && input == 4)) {
            $('.search-hotel-result').text("Showing 6 Results....");
            sectionOperation(section, 45);
      } else if(input === 1){
            $('.search-hotel-result').text("Showing 9 Results....");
            sectionOperation(section, 1);
      }     
      else {

      }
  }
}

//function for show or hide particular section using search result
function sectionOperation(section, searchInput) {

      for(let i = 0; i <= 8; i++) {
        $(section[i]).hide();                   //hide all sections before search
      }

      // show or hide particular section according to search result
      if(searchInput == 5) {
          for(let i = 0; i <= 2; i++) {
                $(section[i]).show();                   //show sections from 1-2-3
          }
      } else if (searchInput == 4) {
          for(let i = 3; i <= 5; i++) {
            $(section[i]).show();                   //show sections from 4-5-6
          }
      } else if (searchInput == 3) {
        for(let i = 6; i <= 8; i++) {
          $(section[i]).show();                   //show sections from 4-5-6
        }
      } else if(searchInput == 34) {
        $('.search-hotel-result').text("Showing 6 Results....");
        for(let i = 3; i <= 8; i++) {
          $(section[i]).show();                   //show sections from 4-5-6-7-8-9
        }
      } else if(searchInput == 35) {
        $('.search-hotel-result').text("Showing 6 Results....");
        for(let i = 0; i <= 2; i++) {
          $(section[i]).show();                   //show sections from 1-2-3
        }

        for(let i = 6; i <= 8; i++) {
          $(section[i]).show();                   //show sections from 7-8-9
        }
      } else if(searchInput == 45) {
        $('.search-hotel-result').text("Showing 6 Results....");
        for(let i = 0; i <= 5; i++) {
          $(section[i]).show();                   //show sections from 1-2-3-4-5-6
        }
      } else if(searchInput === 1){
        $('.search-hotel-result').text("Showing 9 Results....");
        for(let i = 0; i <= 8; i++) {
           $(section[i]).show();                   //show all sections 
        }
      } else { }
}

//Populate luxury stay checkbox
function populateHotel() {

  //array of luxury sta5 Star
  let hotelOption = ['3 Star', '4 Star', '5 Star'];

  //When array is not null
  if(hotelOption.length > 0) {
    hotelOption.forEach(function(item, index) {
        $("#hotelDiv").append("<input type='checkbox' class='chk-hotel' id='chkHotel" + (index+3) + "' name='chkHotel' value=" + (index+3) + ">")
                      .append("<label class='labelCheckbox' for='chkHotel" + (index+3) + "'>" + item + "</label><br>");
    });
  }
}

/*              End JS code of hotel.html                   */