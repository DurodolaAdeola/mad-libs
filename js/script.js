$(document).ready(function() {
    $("#formOne").submit(function(event) {
      //$(".person1").append("adebayo");
    let person1 = $("#person1").val().toUpperCase();
     // $(".person2").append("blah blah");
     let person2 =$("#person2").val().toUpperCase();
      //$(".animal").append("blah blah");
      let animal =$("#animal").val().toUpperCase();
     // $(".exclamation").append("blah blah");
     let exclamation =$("#exclamation").val().toUpperCase();
     //$(".verb").append("blah blah");
     let verb =$("#verb").val().toUpperCase();
      //$(".noun").append("blah blah");
      let noun =$("#noun").val().toUpperCase();

      $(".person1").text(person1);
      $(".person2").text(person2);
      $(".animal").text(animal);
      $(".exclamation").text(exclamation);
      $(".verb").text(verb);
      $(".noun").text(noun);
     
     
     $("#story").show();
      
      event.preventDefault();
    });
  });