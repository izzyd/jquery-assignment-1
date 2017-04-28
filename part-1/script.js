// Do your work in this file.

// var view = $('.view');
// var grass = $('.grass');
// var sun = $('.sun');

// //.append() 
// var $newdiv1 = $( "<div id='view'></div>" ),
//   newdiv2 = document.createElement( "div" ),
//   existingdiv1 = document.getElementById( "foo" );
 
// $( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );

// //.appendTo() 
// $( "h2" ).appendTo( $( ".container" ) );
// $( "view" ).appendTo( $( document.body ) );
// $( "grass").appendTo( $( "view" ) ); 

$("<div>").addClass("view").appendTo(document.body);
$("<div>").addClass("grass").appendTo(".view");

