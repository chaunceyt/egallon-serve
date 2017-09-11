// Insert your scripts here

var pymChild = new pym.Child();

// Initial Script

var loop2 = ["onestG","tenthstG","hundrethstG","onestE","tenthstE","hundrethstE","name","price1","price2"];
var html2 = [];
//loading a json above and then for loop to define them below using a for loop. 5/6.

for (var i = 0; i<loop2.length; i++) {
    html2.push(document.getElementById(loop2[i]));
};  

(function ($) { 
	$(document).ready(function(){
	    $.getJSON("js/combined.json",function(result){
        // When CORS is enabled on energy.gov allowing energyapps.github.io access, uncomment the below
        // $.getJSON("https://energy.gov/api/egallon/current/combined.json",function(result){


		    var mySelect = $('#mySelect');
            $.each(result['states'], function(i, field){
	            mySelect.append(
                	$('<option></option>').val(i).html(field.name)
	            );
	        });			
        
            $('#date').text(result.dateGenerated)

            // Inital run set to USA
	    	i = 44;
    		egallon = result.states[i].data.electricity.egallon;
			oil = result.states[i].data.oil.price;
			state = result.states[i].name;
			$('select').val(i)
        	newState(i, egallon, oil, state);

			//what happens when you select a state
            $('select').change(function (e){
            	e.preventDefault();     
            	i = this.value
        		egallon = result.states[i].data.electricity.egallon
				oil = result.states[i].data.oil.price
				state = result.states[i].name 
            	newState(i, egallon, oil, state)	
            });
	    });
	});
}(jQuery));  

function newState(i, egallon, oil, state){
	var onesE = String(egallon).charAt(0);
	var tenthsE = String(egallon).charAt(2);
	var hundrethsE = String(egallon).charAt(3);

	//put those characters collected into the appropriate innerHTML

	html2[3].innerHTML=onesE;
	html2[4].innerHTML=tenthsE;
	html2[5].innerHTML=hundrethsE;	

	var onesG = String(oil).charAt(0);
	var tenthsG = String(oil).charAt(2);
	var hundrethsG = String(oil).charAt(3);    

	html2[0].innerHTML=onesG;
	html2[1].innerHTML=tenthsG; 
	html2[2].innerHTML=hundrethsG;
}

(function ($) {
$(document).ready(function() {

    var timesRun = 0;

    //on load, cycle through numbers to data
    var mp = setInterval(function () {
                minutePlay()
                
            }, 60);
    var sp = setInterval(function () {
                secondPlay()
            }, 90);
    var ml = setInterval(function () {
                milliPlay()
            }, 120); 
    var mp2 = setInterval(function () {
                minutePlay2()
            }, 70);
    var sp2 = setInterval(function () {
                secondPlay2()
            }, 100);
    var ml2 = setInterval(function () {
                milliPlay2();
                //step through time to get to 8 times (there are 7 li's in html)
                timesRun += 1;

                //when it gets to 8 times, chop it off.     
                if(timesRun === 8){
                    clearInterval(mp);
                    clearInterval(sp);
                    clearInterval(ml);
                    clearInterval(mp2);
                    clearInterval(sp2);
                    clearInterval(ml2);
                }
            }, 140);   

//on select, cycle through numbers to new data
  $('select').change(function (e){
    //reset iterations variable to 0
    var timesRun = 0;

    //On select when last child, reset to no active, so that we can start process of function correctly.
    var bb = $("ul.secondPlay li.active"); 
    if (bb.is(":last-child")) {
        $("ul.secondPlay li").removeClass("active");
        $("ul.minutePlay li").removeClass("active");
        $("ul.milliPlay li").removeClass("active");
        $("ul.secondPlay2 li").removeClass("active");
        $("ul.minutePlay2 li").removeClass("active");
        $("ul.milliPlay2 li").removeClass("active");
    };
    
    var mp = setInterval(function () {
                minutePlay()
                
            }, 60);
    var sp = setInterval(function () {
                secondPlay()
            }, 90);
    var ml = setInterval(function () {
                milliPlay()
            }, 120); 
    var mp2 = setInterval(function () {
                minutePlay2()
            }, 70);
    var sp2 = setInterval(function () {
                secondPlay2()
            }, 100);
    var ml2 = setInterval(function () {
                milliPlay2();
                //step through time to get to 8 times (there are 7 li's in html)
                timesRun += 1;

                //when it gets to 8 times, chop it off.     
                if(timesRun === 8){
                    clearInterval(mp);
                    clearInterval(sp);
                    clearInterval(ml);
                    clearInterval(mp2);
                    clearInterval(sp2);
                    clearInterval(ml2);
                }
            }, 140);                  
    });


    function milliPlay() {
        $("body").removeClass("play");
        var aa = $("ul.milliPlay li.active");

//if nothing in aa, go through sequence to step through number to next li
        if (aa.html() == undefined) {
            aa = $("ul.milliPlay li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        //On last child add active and stop their
        else if (aa.is(":last-child")) {
            $("ul.milliPlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.milliPlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        //normally, (not first/last) cycle through, add active to next li, take away current active
        else {
            $("ul.milliPlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }

    

    function secondPlay() {
        $("body").removeClass("play");
        var aa = $("ul.secondPlay li.active");

        if (aa.html() == undefined) {
            aa = $("ul.secondPlay li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.secondPlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.secondPlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.secondPlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }

    function minutePlay() {
        $("body").removeClass("play");
        var aa = $("ul.minutePlay li.active");

        if (aa.html() == undefined) {
            aa = $("ul.minutePlay li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.minutePlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
           // aa = $("ul.minutePlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.minutePlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }


    function secondPlay2() {
        $("body").removeClass("play");
        var aa = $("ul.secondPlay2 li.active");

        if (aa.html() == undefined) {
            aa = $("ul.secondPlay2 li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.secondPlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.secondPlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.secondPlay2 li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }

    function minutePlay2() {
        $("body").removeClass("play");
        var aa = $("ul.minutePlay2 li.active");

        if (aa.html() == undefined) {
            aa = $("ul.minutePlay2 li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.minutePlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
           // aa = $("ul.minutePlay2 li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.minutePlay2 li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }


function milliPlay2() {
        $("body").removeClass("play");
        var aa = $("ul.milliPlay2 li.active");

//if nothing in aa, go through sequence to step through number to next li
        if (aa.html() == undefined) {
            aa = $("ul.milliPlay2 li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        //On last child add active and stop their
        else if (aa.is(":last-child")) {
            $("ul.milliPlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.milliPlay2 li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        //normally, (not first/last) cycle through, add active to next li, take away current active
        else {
            $("ul.milliPlay2 li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }
    
});
}(jQuery));

function getIEVersion(){
    var agent = navigator.userAgent;
    var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
    var matches = agent.match(reg);
    if (matches != null) {
        return { major: matches[1], minor: matches[2] };
    }
    return { major: "-1", minor: "-1" };
}

var ie_version =  getIEVersion();
var is_ie10 = ie_version.major == 10;

if (is_ie10 === true) {alert("Internet Explorer 10 does not fully support this feature.");};