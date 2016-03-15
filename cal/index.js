/* Javascript */
$(function () {
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		editable: true
	});
});

var event = 

$('#calendar').fullCalendar({
    events: [
        {
            title  : 'event1',
            start  : '2016-01-01'
        }
    ]
});
