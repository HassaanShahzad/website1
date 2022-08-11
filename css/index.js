$(document).ready(function(){

    $("#abc22").hide()
      $("#abc23").hide()

    $("#abc").click(function(){
        $("#abc1").slideToggle()
    })

    $("#abc3").click(function(){
        $("#abc2").show()
    })

    $("#abc26").click(function(){
        $("#abc22").show()
        $("#abc28").hide()
    })
    $("#abc25").click(function(){
        $("#abc22").hide()
        $("#abc28").show()
    })
   
    $("#abc27").click(function(){
        $("#abc22").hide()
        $("#abc28").hide()
        $("#abc30").show()

    })
    
   
})
$(document).ready(function(){
    $('#ab3').click(function(){
      $('#ab2').slideToggle()
    })
  })