   function refreshimage(){
      $.ajax({
         url: 'https://api.thecatapi.com/v1/images/search',
         dataType: 'json',
         success: function(data) {  
            $.each(data, function(key, val) {
                $("body").attr("style", "background-image:url('"+val['url']+"')");
            });
         },
        statusCode: {
           404: function() {
             alert('There was a problem with the server.  Try again soon!');
           }
         }
      });
    }

    function refreshfact(){
      $.ajax({
         url: 'https://catfact.ninja/fact?max_length=140',
         dataType: 'json',
         success: function(data) {  
            $("#fact").html(data['fact']);
            console.log(data);
         },
        statusCode: {
           404: function() {
             alert('There was a problem with the server.  Try again soon!');
           }
         }
      });
    }


    $(document).ready(function(){
      setInterval(refreshimage,5000);
      setInterval(refreshfact, 5000);
     });