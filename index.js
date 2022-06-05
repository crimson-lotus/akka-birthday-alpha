$('#background-div').hide()
$('.first').hide()
$('.second').hide()
$('.third').hide()
$('.fourth').hide()
$('.fifth').hide()
$('.sixth').hide()
$('.seventh').hide()
$('.eigth').hide()
$('.ninth').hide()
var child = 2;

$('.switch').click(function() {
    $('#initial-div').hide()
    $('#background-div').fadeIn(300)
    // $('.ninth').show()
    $('.first').fadeIn(1000)
    setInterval(function() { 
        $(".content").show().not(".content:nth-child(" + child + ")").hide(); 
        if (child === 9) { 
        //   child = 2; 
        } else { 
          child++; 
        } 
      }, 4000);
})