express-starter
==================
Quick express server enables you to make an api call to it then returns data from another api, to bypass CORS issues.

https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters


###curl
`curl -X GET "http://localhost:8080/api/test"`

###xhr/ajax

```
$.ajax({
      url: "http://localhost:8080/api/test",
      jsonp: "callback",
      dataType: "jsonp",
      data: {
          token: Date.now() //proper token here
      },
      success: function( response ) {
          console.log( response ); // server response
      }
  });
```
