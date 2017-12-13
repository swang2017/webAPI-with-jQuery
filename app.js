let url='http://www.omdbapi.com/?s=batman&apikey=afa6531e'

$('#movieIntro').html("which movies do you like?")
$.get(url,function(data){
    $(data.Search).each(function(index,item){
      $("<div>")
      .addClass("movieList")
      .append($("<li>").html($("<img>",{src:item.Poster, class:"small-img" })))
      .append($("<li>").append($("<a>").attr("href","#").html(item.Title).addClass("titleFont").click(function(){display(item.imdbID)})))
      .appendTo($('#movieList'))})})


function display(itemID){

      let urlx='http://www.omdbapi.com/?i='+itemID+'&apikey=afa6531e'
        $('#movieIntro').html("")
      $.get(urlx,function(data1){
            const data1Array=Object.entries($(data1))

            let newdata=$(data1Array)[0][1]
            for (const [key, value] of Object.entries(newdata)) {
              $("<div>")
              .append($("<li>").html(`${key}`+":"+`${value}`))
              .appendTo($('#movieIntro'))
            }})



            // $(data1).each(function(key,item){
            //
            //                   $("<div>")
            //                   .addClass("movieDetail")
            //                   .append($("<li>").html($("<img>",{src:item.Poster, class:"fluid-img" })))
            //                   .append($("<li>").html( "Title:  "+item.Title))
            //                   .append($("<li>").html( "Year:  "+item.Year))
            //                   .append($("<li>").html( "Rated:  "+item.Rated))
            //                   .append($("<li>").html( "Released:  "+item.Released))
            //                   .append($("<li>").html( "Runtime:  "+item.Runtime))
            //                   .append($("<li>").html( "Genre:  "+item.Genre))
            //                   .append($("<li>").html( "Director:  "+item.Director))
            //                   .append($("<li>").html( "Writer:  "+item.Writer))
            //                   .append($("<li>").html( "Actors:  "+item.Actors))
            //                   .append($("<li>").html( "Plot:  "+item.Plot))
            //                   .append($("<li>").html( "Language:  "+item.Language))
            //                   .append($("<li>").html( "Country:  "+item.Country))
            //                   .append($("<li>").html( "Awards:  "+item.Awards))
            //                   .append($("<li>").html( "Ratings:  "+item.Ratings))
            //                   .append($("<li>").html( "Metascore:  "+item.Metascore))
            //                   .append($("<li>").html( "imdbRating:  "+item.imdbRating))
            //                   .append($("<li>").html( "imdbVotes:  "+item.imdbVotes))
            //                   .appendTo($('#movieIntro'))})})
}
