var url = 'https://randomuser.me/api/'

$('#btn').click(function(){
  $.ajax({
    method : 'GET',
    url : url,
    dataType : 'json'
  })
  .done(mohit)
  .fail(function(){
    console.log('failed')
  }) 
});

// $('#btn').click(function(){
    $.ajax({
        method : 'GET',
        url : url,
        dataType : 'json'
      })
      .done(mohit)
      .fail(function(){
        console.log('failed')
      }) 
  
  function mohit(data){
    var info = data.results[0];

 $("#username").text(info.login.username)
 console.log(data.results[0])
  $("#fullname").text(info.name.first+ " " + data.results[0].name.last)
  $("#avatar").attr("src",info.picture.medium)  
  $("#email").text(info.email)
  $("#city").text(info.location.city)  
 }