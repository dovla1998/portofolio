$(document).ready(function() {
    $(".action-add").click(function() {
        $(".main-list").append("<li>" + $(".item-input").val() + " <button type='button' class='action-delete'>Brisi</button></li>");
        $(".item-input").val("");
    });
    
    //Deleting items from list
    $("ul").on("click", ".action-delete", function(){
        $(this).parent().remove();
    });

	 $(".add").click(function() {
		$(".table").append("<tr>" + "<td class='zadaca'>" + $(".text").val() + "<td class='removebtn'>X</td>" + "<td class='checkbtn'>DONE</td>" + "<td class='editbtn'>EDIT</td>" + "<td class='plusbtn'>+</td>" + "<td class='minusbtn'>-</td>" + "<td class='kolicina'>0</td>" + "</tr>");

	});

	 $(".table").on("click", "removebtn", function(){
       		 $(this).parent().remove();
    	});
	
	 $(".table").on("click", ".checkbtn", function(){
		$(this).parent().css("background-color" , "green");
	    });

    $(".table").on("click", ".removebtn", function(){
        $(this).parent().remove();
    });


    $(".table").on("click", ".editbtn", function(){
        $(this).closest('tr').find(".zadaca").empty();
		$(this).closest('tr').find(".zadaca").append( $("#my-input").val() );
    });
		$(document).on("click", ".plusbtn" , function() {
	var n = parseInt($(this).closest('tr').find(".kolicina").html());
		if(n<20) {
	  $(this).closest('tr').find(".kolicina").html(++n);
	}
    });
		$(document).on("click", ".minusbtn" , function() {
	var n = parseInt($(this).closest('tr').find(".kolicina").html());
		if(n>0) {
	  $(this).closest('tr').find(".kolicina").html(--n);
	}
    });
});

