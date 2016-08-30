express-starter
==================
Quick express server Enables you to make an api call to it then returns data from another api. To bypass cors issues.

https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters


###curl
`curl -X GET "http://localhost:8080/api/contacts?token=1"`

###xhr/ajax

`
$.ajax({
      url: "http://localhost:8080/api/contacts",
      jsonp: "callback",
      dataType: "jsonp",
      data: {
          token: Date.now() //proper token here
      },
      success: function( response ) {
          console.log( response ); // server response
      }
  });
`