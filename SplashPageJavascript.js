window.addEventListener('load', function(){

    $.ajax({
      url:'https://lit-fortress-6467.herokuapp.com/object',
      success:function(data){
      var image =(data["results"][0]['cover_art']);
      $('.albImgOne').attr('src', image)
      }
    });

});
