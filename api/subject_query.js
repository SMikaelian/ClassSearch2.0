    const grad_url = 'https://api.metalab.csun.edu/curriculum/api/2.0/plans/graduate';
    const courses_url = 'https://api.metalab.csun.edu/curriculum/api/2.0/courses';

    var subject_to_search;
    var subjectArray = [
        "A/R","AAS","ACCT","AE","AFRS","AIS","AM","ANTH","ARAB","ARMN","ART","ASTR",
        "ATHL","BIOL","BLAW","BUS","CADV","CAS","CCE","CD","CE","CECS","CHEM","CHIN",
        "CHS","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","ECE","ECON","EDUC",
        "EED","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL",
        "GWS","HEBR","HHD","HIST","HSCI","HUM","IS","ITAL","JAPN","JOUR","JS","KIN",
        "KOR","LING","LRS","MATH","MCOM","ME","MGT","MKT","MPA","MSE","MUS","NURS",
        "PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RE","RS","RTM","RUSS","SBS",
        "SCI","SCM","SED","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"
    ];

    function searchSubject(){
        subject_to_search = select_list.options[select_list.selectedIndex].value
        $('#query-results').empty();
        $(document).ready(function() {
            var url = courses_url;
            $.get(url, function(data){
                var courses = data.courses;
                $(courses).each(function(index, course){
                    var courseSubject = course.subject;
                        if(courseSubject == subject_to_search){
                        $('#query-results').append(
                            '<p>' + courseSubject + ' ' + course.catalog_number
                                + ': <b>' + course.title + '.</b> ' + course.term + '</p>'
                        )
                        previous_subject = courseSubject;
                        }
                })
            });
        });
    }

    var dd_div = document.getElementById("dd-menu");
    var select_list = document.createElement("select");

    select_list.setAttribute("id", "select-list");
    dd_div.appendChild(select_list);
    select_list.onclick = searchSubject;

    for(var i = 0; i < subjectArray.length; i++){
        var option = document.createElement("option");
        option.setAttribute("value", subjectArray[i])
        option.text = subjectArray[i];
        select_list.appendChild(option);
    }