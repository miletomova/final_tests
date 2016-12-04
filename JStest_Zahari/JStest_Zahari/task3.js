//sega shte vidite nai-typiq nachin po koito moje da se izpylni zadachata!
var first = $("img").first();
var second = first.next();
var third = second.next();
var fourth = third.next();
var fifth = fourth.next();
var sixth = fifth.next();
var seventh = sixth.next();
var eight = seventh.next();

$(first).on("mouseover", function (){
	$("#img-container").html('<p style="font-size:2em;">City</p><p><img src="img/city.jpg" alt="city" width="300"></p>');
}
);
$(second).on("mouseover", function (){
	$("#img-container").html('<p style="font-size:2em;">Flowers</p><p><img src="img/flowers.jpg" alt="flowers" width="300"></p>');
}
);
$(third).on("mouseover", function (){
	$("#img-container").html('<p style="font-size:2em;">Horse</p><p><img src="img/horse.jpg" alt="horse" width="300"></p>');
}
);
$(fourth).on("mouseover", function (){
	$("#img-container").html('<p style="font-size:2em;">Lawn</p><p><img src="img/lawn.jpg" alt="lawn" width="300"></p>');
}
);
$(fifth).on("mouseover", function (){
	$("#img-container").html('<p style="font-size:2em;">Men</p><p><img src="img/men.jpg" alt="men" width="300"></p>');
}
);
$(sixth).on("mouseover", function (){
	$("#img-container").html('<p style="font-size:2em;">Pizza</p><p><img src="img/pizza.jpg" alt="pizza" width="300"></p>');
}
);
$(seventh).on("mouseover", function (){
	$("#img-container").html('<p style="font-size:2em;">Sea</p><p><img src="img/sea.jpg" alt="sea" width="300"></p>');
}
);
$(eight).on("mouseover", function (){
	$("#img-container").html('<p style="font-size:2em;">Tree</p><p><img src="img/tree.jpg" alt="tree" width="300"></p>');
}
);