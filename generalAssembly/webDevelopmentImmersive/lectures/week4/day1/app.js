var pokemonJSON = $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=pokemon&jsoncallback=?', function(data) {
   debugger;
   console.log(data)
   for (var i = 0; i < data.items.length; i++) {
     data.items.eq(i).append( $("<div>") )
     
   }
   debugger;
   });

