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
            title: 'Girls Who Code',
            start: '2016-01-29',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-02-05',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-02-12',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-02-19',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-02-26',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-03-04',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-03-11',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-03-18',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-04-01',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-04-08',
            color: '#ff9966',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Girls Who Code',
            start: '2016-04-15',
            color: '#cc99ff',   // an option!
            textColor: 'white' // an option!
        },

        {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-01-11',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },

        {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-01-11',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },

        {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-01-11',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },

        {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-02-01',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },

        {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-02-08',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
         {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-02-15',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
         {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-02-22',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },

        {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-02-29',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
         {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-03-07',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'Gainesville Coding Club - PK Yonge',
            start: '2016-03-14',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'GCC - PK Yonge',
            start: '2016-03-28',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'GCC - PK Yonge',
            start: '2016-04-04',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'GCC - PK Yonge',
            start: '2016-04-11',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'GCC - PK Yonge',
            start: '2016-04-18',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'GCC - Instructor Info Session',
            start: '2016-04-12',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        },
        {
            title: 'GCC - Instructor Applications Due',
            start: '2016-04-15',
            color: 'green',   // an option!
            textColor: 'white' // an option!
        }
        


    ],

});
