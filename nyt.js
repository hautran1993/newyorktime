 

 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    <script type="text/javascript">;
      // This .on("click") function will trigger the AJAX Call



      $("#find-news").on("click", function(event) {

        // Preventing the submit button from trying to submit the form
        // We're optionally using a form so the user may hit Enter to search instead of clicking the button
        event.preventDefault();
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        // Here we grab the text from the input box
        var news = $("#news-input").val();

        // Here we construct our URL
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE
var url = "https://api.nytimes.com/svc/archive/v1/2016/1.json"; 
// key  "433a9d812d87471b941f6c036c564d1f"
        // =================================================================
  $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        console.log(queryURL);
    console.log(response);
      // Create CODE HERE to transfer content to HTML$()
$("#movie-view").html("<h1>" + JSON.stringify(response) + "news Details</h1>");// new from Code School





