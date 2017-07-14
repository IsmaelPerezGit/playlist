window.addEventListener('load', function(){

    $.ajax({
      url:'https://lit-fortress-6467.herokuapp.com/object',
      success:function(data){

        for (var i = 0; i < data.results.length; i++) {
          var  image = (data.results[0]['cover_art']);
          var element = document.createElement('img');
          $('image').attr('class', 'images')
          $('.images').attr('src', image);
        }
    }
  });
});
