var filteredObject = [{
    "class_number": "17002",
    "subject": "COMP",
    "catalog_number": "110L",
    "section_number": "21",
    "title": "Introduction to Algorithms and Programming Lab",
    "course_id": 15268,
    "description": "Prerequisites: Grade of C or better in MATH 102 103  104 105 150A or 255A or a passing score on the Math Placement Test (MPT) that satisfies prerequisites for MATH 150A or 255A . Corequisites: COMP 110. Introduction to algorithms their representation design structuring analysis and optimization. Implementation of algorithms as structured programs in a high level language. Lab: three hours per week. (Available for General Education Lifelong Learning if required by students major.)\n",
    "units": "1",
    "term": "Fall-2019",
    "class_type": "LAB",
    "enrollment_cap": 20,
    "enrollment_count": 20,
    "waitlist_cap": 0,
    "waitlist_count": 0,
    "meetings": [{
        "meeting_number": 1,
        "location": "JD1104",
        "start_time": "1100h",
        "end_time": "1215h",
        "days": "MW"
    }],
    "instructors": [{
        "instructor": "bahram.zartoshty@csun.edu"
    }]
}, {
    "class_number": "17003",
    "subject": "COMP",
    "catalog_number": "110L",
    "section_number": "22",
    "title": "Introduction to Algorithms and Programming Lab",
    "course_id": 15268,
    "description": "Prerequisites: Grade of C or better in MATH 102 103  104 105 150A or 255A or a passing score on the Math Placement Test (MPT) that satisfies prerequisites for MATH 150A or 255A . Corequisites: COMP 110. Introduction to algorithms their representation design structuring analysis and optimization. Implementation of algorithms as structured programs in a high level language. Lab: three hours per week. (Available for General Education Lifelong Learning if required by students major.)\n",
    "units": "1",
    "term": "Fall-2019",
    "class_type": "LAB",
    "enrollment_cap": 17,
    "enrollment_count": 20,
    "waitlist_cap": 0,
    "waitlist_count": 0,
    "meetings": [{
        "meeting_number": 1,
        "location": "JD1105",
        "start_time": "1730h",
        "end_time": "1845h",
        "days": "TR"
    }],
    "instructors": [{
        "instructor": "mhagoo@csun.edu"
    }]
}, ]

function () {
    function MilitaryCovert(filteredObject) {
        //var time = "16:30:00"; // they input as example

        //filteredObject = filteredObject.split(':'); // convert to array
        var time = filteredObject[0].meetings[0].start_time['']; // start_time
        var time1 = filteredObject[0].meetings[0].end_time['']; // end_time

        // fetch for start_time
        var hours = Number(time + time);
        var minutes = Number(time + time);
        //var seconds = Number(filteredObject[2]); remove here. (unnecessary)

        // second fetch for end_time
        var hours1 = Number(time1 + time1);
        var minutes1 = Number(time1 + time1);

        // calculate for start_time
        var timeValue;
        if (hours > 0 && hours <= 12) {
            timeValue = "" + hours;
        } else if (hours > 12) {
            timeValue = "" + (hours - 12);
        } else if (hours == 0) {
            timeValue = "12";
        }

        // calculate1 for end_time
        var timeValue1;
        if (hours > 0 && hours <= 12) {
            timeValue1 = "" + hours1;
        } else if (hours1 > 12) {
            timeValue1 = "" + (hours1 - 12);
        } else if (hours1 == 0) {
            timeValue1 = "12";
        }

        // start_time part
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes; // get minutes
        //timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds; // get seconds
        timeValue += (hours >= 12) ? " P.M." : " A.M."; // get AM/PM

        // end_time part
        timeValue1 += (minutes1 < 10) ? ":0" + minutes1 : ":" + minutes1; // get minutes
        //timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds; // get seconds
        timeValue1 += (hours1 >= 12) ? " P.M." : " A.M."; // get AM/PM

        // show
        console.log(timeValue);
        console.log(timeValue1);
        // for (var i = 0; i < filteredObject; i++) {

        // }
        // * NOTE using console.log(filteredObject[0].meetings[0].start_time) // important to dive the array
    }

    function classFilter(preferences, APIresponse) {
        var validCLasses //variable that will contain the classes that fit all the criteria, probably an array of objects
        return validClasses
    }

    function options() = {
        /* //courses level
        course_level = 0, // meaning lower division maybe
        course_level = 1, // upper division

        //day of week and weekend
        /*         day_of_week: 'MW', //Monday and Wednesday
                day_of_week1: 'TTH', //Tuesday and Thursday
                day_of_weekend: 'FS' // Friday and Saturday ---academic level
        // ...include the rest of the preferences that were in the figma component
        // means lower division
        var undergraduate = 0
        var graduate = 0; */
    }
}();

// the comment by edgar " this is an example of how the function needed would look/work"
//should return classes that contain the user preferences stated