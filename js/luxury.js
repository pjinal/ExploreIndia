/*              Start JS code of luxury.html                 */

//Populate checkbox
populateLuxuryStay();

//Populate radio button
populateSeason();

//Display Range Amount
$("#rangeAmount").html($("#rangeBudget").val() + " INR");

//Range Amount when its value change
$("#rangeBudget").on("click", function(){
  $("#rangeAmount").html($("#rangeBudget").val() + " INR");
});

//Get modal from HTML
const modal = document.querySelector(".modal");

//Toggle function for Modal
function toggleModal(e) {
  e.preventDefault();
  var fname = $('#txtFName').val();
  var lname = $('#txtLName').val();
  var email = $('#txtEmail').val();
  
  $(".error-message").remove();
  $('#txtFName').css('border-color', 'black');
  $('#txtLName').css('border-color', 'black');
  $('#txtEmail').css('border-color', 'black');

  //check validation
  if (fname.length < 1) {
    $('#txtFName').after('<span class="error-message">Please Enter Your First Name</span>');
    $('#txtFName').css('border-color', 'red');
  }
  if (lname.length < 1) {
    $('#txtLName').after('<span class="error-message">Please Enter Your Last Name</span>');
    $('#txtLName').css('border-color', 'red');
  }
  if (email.length < 1) {
    $('#txtEmail').after('<span class="error-message">Please Enter Your Email</span>');
    $('#txtEmail').css('border-color', 'red');
  } else {
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validEmail = regEx.test(email);
    if (!validEmail) {
      $('#txtEmail').after('<span class="error-message">Please Enter Your Valid Email</span>');
      $('#txtEmail').css('border-color', 'red');
    } else {
      modal.classList.toggle("show-modal");  
      //display modal
    }
  }
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

$("#btnSubmit").on("click", toggleModal);
$(".close-button").on("click", toggleModal);
$(window).on("click", windowOnClick);
$("#btnReset").on("click", reset);

//Function for Reset button
function reset() {
  $("#rangeBudget").val("12000");
  $("#rangeAmount").html("12000 INR");
  $(".error-message").remove();
  $("#radioSeasonWinter").prop("checked", true);

  $('#txtFName').val("");
  $('#txtFName').css('border-color', '');
  $('#txtLName').val("");
  $('#txtLName').css('border-color', '');
  $('#txtEmail').val("");
  $('#txtEmail').css('border-color', '');

  // Uncheck All Checkbox
  $('#divCheckboxLuxury').find('input:checkbox').prop('checked', false);

  //first checkbox checked
  $("#chkLuxury1").prop('checked', true);
}

//Populate luxury stay checkbox
function populateLuxuryStay() {

  //array of luxury stay
  let luxuryStay = ['Luxury Stay', 'Jungle Lodge', 'Luxury Trains', 'River Cruise', 'Luxury Tent', 'Luxury Resort', 'Luxury Palace', 'Golf Court'];

  //When array is not null
  if(luxuryStay.length > 0) {
    luxuryStay.forEach(function(item, index) {
        $("#divCheckboxLuxury").append("<input type='checkbox' id='chkLuxury" + (index+1) + "' name='chkLuxury" + (index+1) +"' value=" + (index+1) + " class='chk-luxury'>")
                               .append("<label class='label-checkbox-luxury' for='chkLuxury" + (index+1) + "'>" + item + "</label>");
    });

  //first checkbox checked
  $("#chkLuxury1").prop('checked', true);
  }
}

function populateSeason() {
  //array of Indian Season
  let season = ['Winter', 'Summer', 'Monsoon'];

  //When array is not null
  if(season.length > 0) {
    season.forEach(function(item, index) {
        $("#divRadioSeason").append("<input type='radio' class='radio-season' name='radioSeason' id='radioSeason"+ item +"' value='" + (index+1) + "'>")
                            .append("<label class='label-radio-season' for='radioSeason"+ item +"'>" + item + "</label>");
    });

    //first radio button checked
    $("#radioSeasonWinter").prop("checked", true);
  }
}

/*              End JS code of luxury.html                 */