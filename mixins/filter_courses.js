// you're making a function that a component is calling
// the comp courses api "COURSE LISTING"
//https://api.metalab.csun.edu/curriculum/api/2.0/courses/comp
var courses = {
    "api": "curriculum",
    "status": "200",
    "success": "true",
    "version": "2.0",
    "collection": "courses",
    "courses": [{
        "subject": "COMP",
        "catalog_number": "100",
        "section_number": "04",
        "title": "Computers: Their Impact and Use",
        "course_id": 10080,
        "description": "Not open to Computer Science majors. Introduction to the uses concepts techniques and terminology of computing. Places the possibilities and problems of computer use in historical economic and social contexts. Shows how computers can assist in a wide range of personal commercial and organizational activities. Typical computer applications including word processing spreadsheets and databases. (Available for General Education Lifelong Learning.) (IC)\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "100HON",
        "section_number": "01",
        "title": "COMPTRS\/IMPCT-USE",
        "course_id": 21107,
        "description": null,
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "105BAS",
        "section_number": "01",
        "title": "Computer Programming in BASIC",
        "course_id": 8331,
        "description": "Prerequisite: COMP 101 110\/L or 106\/L. Instruction and practice in a particular computer programming language as listed below. 3 hours of lab per week. ; COMP\t105BAS\t\tComputer Programming in BASIC (1) ; COMP\t105C\t\tComputer Programming in C (1) ; COMP\t105COB\tComputer Programming in COBOL (1) ; COMP\t105FOR\t\tComputer Programming in FORTRAN (1) ; COMP\t105JAV\t\tComputer Programming in JAVA (1)\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "108",
        "section_number": "01",
        "title": "Orientation to Computer Science",
        "course_id": 22295,
        "description": "Prerequisite: Passing score on or exemption from the ELM or credit in MATH 093. Not a required course in the major. Recommended for incoming Computer Science majors with limited computing experience as well as those considering a major in Computer Science. Introduction to the Computer Science major and profession. Main focus on developing problem solving algorithm development and programming skills and acquiring critical thinking abilities especially when applied to Computer Science. Additional emphasis on orientation to the University campus resources study skills motivation and career awareness.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "110",
        "section_number": "01",
        "title": "Introduction to Algorithms and Programming",
        "course_id": 18237,
        "description": "Prerequisites: Grade of C or better in MATH 102 103  104 105 150A or 255A or a passing score on the Math Placement Test (MPT) that satisfies prerequisites for MATH 150A or 255A . Corequisites: COMP 110L. Introduction to algorithms their representation design structuring analysis and optimization. Implementation of algorithms as structured programs in a high level language. Lab: three hours per week. (Available for General Education Lifelong Learning if required by students major.)\n",
        "units": "2",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "110L",
        "section_number": "01",
        "title": "Introduction to Algorithms and Programming Lab",
        "course_id": 15268,
        "description": "Prerequisites: Grade of C or better in MATH 102 103  104 105 150A or 255A or a passing score on the Math Placement Test (MPT) that satisfies prerequisites for MATH 150A or 255A . Corequisites: COMP 110. Introduction to algorithms their representation design structuring analysis and optimization. Implementation of algorithms as structured programs in a high level language. Lab: three hours per week. (Available for General Education Lifelong Learning if required by students major.)\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "122",
        "section_number": "03",
        "title": "Computer Architecture and Assembly Language",
        "course_id": 24324,
        "description": "Prerequisite: Grade of C or better in COMP 110\/L; Grade of C or better in MATH 103 104 105 150A or 255A or a passing score on the Math Placement Test (MPT) that satisfies prerequisites for MATH 150A or 255A; Lower Division writing requirement. Corequisite: COMP 122L. Introduction to computer architecture assembly language programming system software and computer applications. Number systems and data representation. Internal organization of a computer. Primitive instructions and operations. Assembly language. Integrated lecture\/lab environment. Lab: 3 hours per week.\n",
        "units": "2",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "122L",
        "section_number": "03",
        "title": "Computer Architecture and Assembly Language Lab",
        "course_id": 24325,
        "description": "Prerequisite: Grade of C or better in COMP 110\/L; Grade of C or better in MATH 103 104 105 150A or 255A or a passing score on the Math Placement Test (MPT) that satisfies prerequisites for MATH 150A or 255A; Lower Division writing requirement. Corequisite: COMP 122. Introduction to computer architecture assembly language programming system software and computer applications. Number systems and data representation. Internal organization of a computer. Primitive instructions and operations. Assembly language. Integrated lecture\/lab environment. Lab: 3 hours per week.\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "182",
        "section_number": "03",
        "title": "Data Structures and Program Design",
        "course_id": 13869,
        "description": "Prerequisites: Grade of C or better in COMP 110\/L; Grade of C or better in MATH 103 104 105 150A or 255A or a passing score on the Math Placement Test (MPT) that satisfies prerequisites for MATH 150A or 255A; Lower Division writing requirement. Corequisite: COMP 182L. Introduction to data structures and the algorithms that use them. Review of composite data types such as arrays records strings and sets. Role of the abstract data type in program design. Definition implementation and application of data structures such as stacks queues linked lists trees and graphs. Recursion. Use of time complexity expressions in evaluating algorithms. Comparative study of sorting and searching algorithms. Lab: 3 hours per week.\n",
        "units": "2",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "182L",
        "section_number": "03",
        "title": "Data Structures and Program Design Lab",
        "course_id": 21480,
        "description": "Prerequisites: Grade of C or better in COMP 110\/L; Grade of C or better in MATH 103 104 105 150A or 255A or a passing score on the Math Placement Test (MPT) that satisfies prerequisites for MATH 150A or 255A; Lower Division writing requirement. Corequisite: COMP 182. Introduction to data structures and the algorithms that use them. Review of composite data types such as arrays records strings and sets. Role of the abstract data type in program design. Definition implementation and application of data structures such as stacks queues linked lists trees and graphs. Recursion. Use of time complexity expressions in evaluating algorithms. Comparative study of sorting and searching algorithms. Lab: 3 hours per week.\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "196AA",
        "section_number": "01",
        "title": "ALGRTH\/PROG A",
        "course_id": 43734,
        "description": null,
        "units": "2",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "196AAL",
        "section_number": "01",
        "title": "ALGRTH\/PROG A LAB",
        "course_id": 43735,
        "description": null,
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "222",
        "section_number": "01",
        "title": "Computer Organization",
        "course_id": 8340,
        "description": "Prerequisites: Grade of C or better in COMP 122\/L and 182\/L. Extension of basic addressing concepts to more advanced addressability such as base register and self-relative addressing. Comparative computer architecture focusing on such organizations as multiple register processors and stack machines. Basics of virtual memory input-output. Introduction to the concept of microprogrammable systems. Low-level language translation process associated with assemblers. System functions such as relocatable loading and memory management. Application of data structure and hashing techniques to the above. Other related topics.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "256",
        "section_number": "01",
        "title": "Discrete Structures for Computer Science",
        "course_id": 41749,
        "description": "Prerequisites: COMP 182\/L; MATH 150A; PHIL 230.  Study of discrete mathematical structures and proof techniques as used in computer science. Discrete structures such as functions relations sets graphs and trees. Proof techniques such as proof by induction proof by contradiction and proof by cases. Counting techniques. Lab: 3 hours per week.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "256L",
        "section_number": "01",
        "title": "Discrete Structures for Computer Science Lab",
        "course_id": 41750,
        "description": "Prerequisites: COMP 182\/L; MATH 150A; PHIL 230.  Study of discrete mathematical structures and proof techniques as used in computer science. Discrete structures such as functions relations sets graphs and trees. Proof techniques such as proof by induction proof by contradiction and proof by cases. Counting techniques. Lab: 3 hours per week.\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "282",
        "section_number": "01",
        "title": "Advanced Data Structures",
        "course_id": 20702,
        "description": "Prerequisites: Grade of C or better in COMP 182\/L and MATH 150A. Introduction to advanced data structures (particularly persistent structures) using object-oriented design. Main memory structures hash tables and trees. Architectural foundations for files. Large-scale sorting. Hash-based persistent structures. Indexed files. Introduction to databases.\n",
        "units": "2",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "300",
        "section_number": "01",
        "title": "Computer Fluency",
        "course_id": 40082,
        "description": "Prerequisite: Completion of the Lower Division writing requirement.\u00a0 Does not provide credit toward Computer Science major. Study of fundamental computing concepts related to: information technology data and its digital representation technological power computing limitations and social impact. Survey of essential and advanced applications designed to process different forms of information other than text. Promote such computing skills as basic algorithmic thinking debugging logical reasoning and critical use of information. Develop capabilities for applying the technology. (Available for General Education Lifelong Learning)\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "310",
        "section_number": "01",
        "title": "Automata, Languages, and Computation",
        "course_id": 10083,
        "description": "Prerequisites: COMP 256\/L 333. Study of the relation of languages (e.g.. sets of strings) and machines for processing these languages with emphasis on classes of languages and corresponding classes of machines. Phrase structure languages and grammar. Types of grammar and classes of languages. Regular languages and finite state automata. Context-free languages and pushdown automata. Unrestricted languages and Turing Machines. Computability models of Turing Church Markov and McCarthy. Applications to programming languages compiler design and program design and testing.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "322",
        "section_number": "01",
        "title": "Introduction to Operating Systems and System Architecture",
        "course_id": 18524,
        "description": "Prerequisite: COMP 222 or ECE 422 and ECE 425\/L. Corerequisite: COMP 322L; Recommended Prerequisite: COMP 105C or knowledge ofC Language. Examination of the principal types of systems including batch multi-programminga nd time-sharing. Discusses networked system. Considers the salient problems associated with implementing systems including interrupt of event driven systems multitasking storage and database management and input-output. Emphasizes some of the simple algorithms used to solve common problems encountered such as deadlocks queue service and multiple access to data. Projects are implemented to reinforce the lectures. One 3-hour lab per week.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "322L",
        "section_number": "01",
        "title": "Introduction to Operating Systems and System Architecture Lab",
        "course_id": 15269,
        "description": "Prerequisite: COMP 222 or ECE 422 and ECE 425\/L. Corerequisite: COMP 322; Recommended Prerequisite: COMP 105C or knowledge ofC Language. Examination of the principal types of systems including batch multi-programminga nd time-sharing. Discusses networked system. Considers the salient problems associated with implementing systems including interrupt of event driven systems multitasking storage and database management and input-output. Emphasizes some of the simple algorithms used to solve common problems encountered such as deadlocks queue service and multiple access to data. Projects are implemented to reinforce the lectures. One 3-hour lab per week.\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "333",
        "section_number": "01",
        "title": "Concepts of Programming Languages",
        "course_id": 8341,
        "description": "Prerequisites: COMP 122\/L 182\/L. Discussion of issues in the design implementation and use of high-level programming languages through a historical framework including how languages reflect different design philosophies and use requirements and the technical issues in the design of main abstraction constructs of programming languages. Other approaches to imperative or object-oriented programming functional programming logical programming and parallel programming.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "380",
        "section_number": "02",
        "title": "Introduction to Software Engineering",
        "course_id": 23712,
        "description": "Prerequisites: COMP 270\/L or 282. Corerequisite: COMP 380L. Concepts and techniques for systems engineering requirements analysis design implementation and testing of large-scale computer systems. Principles of software engineering for production of reliable maintainable and portable software products. Emphasis on object-oriented analysis and design techniques. Topics include unit integration and systems testing configuration management software quality assurance practices and an introduction to Computer Aided Software Engineering (CASE). This is a lecture portion of a course in software engineering involving the design and partial implementation of a software system as a group project. Lab: 3 hours per week.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "380L",
        "section_number": "02",
        "title": "Introduction to Software Engineering Lab",
        "course_id": 23709,
        "description": "Prerequisites: COMP 270\/L or 282. Corerequisite: COMP 380. Concepts and techniques for systems engineering requirements analysis design implementation and testing of large-scale computer systems. Principles of software engineering for production of reliable maintainable and portable software products. Emphasis on object-oriented analysis and design techniques. Topics include unit integration and systems testing configuration management software quality assurance practices and an introduction to Computer Aided Software Engineering (CASE). This is a lecture portion of a course in software engineering involving the design and partial implementation of a software system as a group project. Lab: 3 hours per week.\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "410",
        "section_number": "01",
        "title": "Logic Programming",
        "course_id": 14804,
        "description": "Prerequisites: COMP 232 282 310; Attempted Upper Division Writing Proficiency Exam. Programming techniques in the logic programming language PROLOG. Prenex conjunctive normal form and grammatical algorithms. Tableaux sequenzen resolution and other semi-decision procedures. Closures of relations fixed point theory control mechanisms relationship to functional programming.\n",
        "units": "2",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "424",
        "section_number": "01",
        "title": "Computer System Security",
        "course_id": 10084,
        "description": "Prerequisites: COMP 322\/L and 380\/L or CIT 360 and IS 435; Attempted Upper Division Writing Proficiency Exam. Analysis of the need for computer system security and the security techniques in operating systems databases and computer networks. Supporting techniques such as auditing risk analysis and cost-benefit tradeoffs are discussed.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "429",
        "section_number": "01",
        "title": "Computer Network Software",
        "course_id": 10619,
        "description": "Prerequisites: COMP 322\/L; Attempted Upper Division Writing Proficiency Exam. Basic software design and analysis considerations in networking computers into coherent cooperating systems capable of processing computational tasks in a distributed manner. Network topology routing procedures message multiplexing and process scheduling techniques.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "465",
        "section_number": "01",
        "title": "Computer Graphic Systems and Design",
        "course_id": 8891,
        "description": "Prerequisites: MATH 262; Attempted Upper Division Writing Proficiency Exam. Corequisite: COMP 465L. Fundamental concepts of computer graphics. Graphics devices; graphics languages; interactive systems. Applications to art science engineering and business. Trade-offs between hardware devices and software support. Lab: 3 hours per week.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "465L",
        "section_number": "01",
        "title": "Computer Graphic Systems and Design Lab",
        "course_id": 15270,
        "description": "Prerequisites: MATH 262; Attempted Upper Division Writing Proficiency Exam. Corequisite: COMP 465. Fundamental concepts of computer graphics. Graphics devices; graphics languages; interactive systems. Applications to art science engineering and business. Trade-offs between hardware devices and software support. Lab: 3 hours per week.\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "467",
        "section_number": "01",
        "title": "Multimedia Systems Design",
        "course_id": 21092,
        "description": "Prerequisites: COMP 380\/L; Attempted Upper Division Writing Proficiency Exam. Study of fundamentals of multimedia storage processing communication presentation and display by digital means with emphasis on audio still images and video media. Includes sampling theory compression techniques and synchronization. Discussion of hypermedia and methodology issues. Multimedia programming; software tools for authoring multimedia applications and interfaces.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "482",
        "section_number": "01",
        "title": "ALGORITHM DESIGN",
        "course_id": 43176,
        "description": null,
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "484",
        "section_number": "01",
        "title": "Web Engineering I",
        "course_id": 24552,
        "description": "Prerequisites: COMP 322\/L or 380\/L or CIT 360 and IS 451; Attempted Upper Division Writing Proficiency Exam. Corequisite: COMP 484L. Internet infrastructure and the underlying networking technologies. Study of system and software architectures for web applications e-business and e-commerce systems. Principles of website design. Advances in web-engineering technologies. Principles of web-based based transaction processing. XML and the associated technologies. Web service technology. Security and privacy issues. Study of the emerging Internet technologies. Lab: three hours per week.\n",
        "units": "2",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "484L",
        "section_number": "01",
        "title": "Web Engineering I Lab",
        "course_id": 40863,
        "description": "Prerequisites: COMP 322\/L or 380\/L or CIT 360 and IS 451; Attempted Upper Division Writing Proficiency Exam. Corequisite: COMP 484. Internet infrastructure and the underlying networking technologies. Study of system and software architectures for web applications e-business and e-commerce systems. Principles of website design. Advances in web-engineering technologies. Principles of web-based based transaction processing. XML and the associated technologies. Web service technology. Security and privacy issues. Study of the emerging Internet technologies. Lab: three hours per week.\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "485",
        "section_number": "02",
        "title": "Human-Computer Interaction",
        "course_id": 11131,
        "description": "Prerequisites: COMP 380\/L or CIT 360 and IS 451; Attempted Upper Division Writing Proficiency Exam. Examines the information exchange between humans and computer systems. Discusses aspects of input\/output devices software engineering and human factors with respect to human-computer interactions. Topics include text and graphic display; user modeling; program design debugging complexity and comprehension; and current research studies and methodologies.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "490",
        "section_number": "01",
        "title": "Senior Design Project",
        "course_id": 41915,
        "description": "Prerequisites: COMP 380\/L; Upper Division Writing Proficiency Exam. Corequisite: COMP 490L. Project-oriented course to allow students to apply their knowledge of software engineering to the design and implementation of a system to solve a real-world problem. Students select and specify a suitable problem investigate design alternatives and select an appropriate one implement a solution and verify and validate the result all as part of a team effort. The role of digital computers in modern society are investigated including the dangers of computer misuse as well as the proper and intelligent use of computers. Ethical concerns of software professionals are studied. Lab: 3 hours per week.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "490L",
        "section_number": "01",
        "title": "Senior Design Project Lab",
        "course_id": 41916,
        "description": "Prerequisites: COMP 380\/L; Upper Division Writing Proficiency Exam. Corequisite: COMP 490. Project-oriented course to allow students to apply their knowledge of software engineering to the design and implementation of a system to solve a real-world problem. Students select and specify a suitable problem investigate design alternatives and select an appropriate one implement a solution and verify and validate the result all as part of a team effort. The role of digital computers in modern society are investigated including the dangers of computer misuse as well as the proper and intelligent use of computers. Ethical concerns of software professionals are studied. Lab: 3 hours per week.\n",
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "528",
        "section_number": "01",
        "title": "MOBILE COMPUTING",
        "course_id": 42912,
        "description": null,
        "units": "2",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "528L",
        "section_number": "01",
        "title": "MOBILE COMP LAB",
        "course_id": 42915,
        "description": null,
        "units": "1",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "541",
        "section_number": "01",
        "title": "Data Mining",
        "course_id": 40849,
        "description": "Prerequisite: COMP 380\/L. A study of the concepts principles techniques and applications of data mining. Topics include data preprocessing the ChiMerge algorithm data warehousing OLAP technology the Apriori algorithm for mining frequent patterns classification methods (such as decision tree induction Bayesian classification neural networks support vector machines and genetic algorithms) clustering methods (such as k-means algorithm hierarchical clustering methods and self-organizing feature map)and data mining applications (such as Web finance telecommunication biology medicine science and engineering). Privacy protection and information security in data mining are also discussed.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "542",
        "section_number": "01",
        "title": "MACHINE LEARNING",
        "course_id": 43430,
        "description": null,
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "582",
        "section_number": "01",
        "title": "Software Requirements Analysis and Specification",
        "course_id": 40510,
        "description": "Prerequisite: COMP 380\/L. An in-depth study of the early phases of the software development life cycle commonly called software requirements analysis and specification. Topics include the gathering of both functional and nonfunctional requirements customer communication requirements prototyping requirements modeling requirements validation the documentation of requirements in terms of a formal software requirements specification and the management of software requirements.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "585",
        "section_number": "01",
        "title": "Graphical User Interfaces",
        "course_id": 18162,
        "description": "Prerequisites: COMP 322\/L 380\/L. The design development and analysis of programs requiring graphical direct manipulation and user interfaces (GUIs) will be examined. The majority of modern software includes a GUI. The development tools environments and style guides for common GUIs will be used in course assignments and discussed in lecture. The course involves the design and development of several GUI programs. The aesthetic and human computer interaction aspects and future trends in GUIs design and development also will be reviewed.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "586",
        "section_number": "01",
        "title": "Object-Oriented Software Development",
        "course_id": 20701,
        "description": "Prerequisites: COMP 322\/L 380\/L. Review of object-oriented concepts. Comparison with functional methods. Benefits and pitfalls of object orientation. Fundamentals of object-oriented modeling -- associations links and states. Survey of object-oriented development methods. In-depth study of a current object-oriented method. Object-oriented software requirements analysis and modeling. Object-oriented preliminary design. Designing concurrent and multiprocessor systems. Object-oriented detailed design. Object-oriented and object-based implementations. Object-oriented testing.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "589",
        "section_number": "01",
        "title": "SOFTWARE METRICS",
        "course_id": 41249,
        "description": null,
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "615",
        "section_number": "01",
        "title": "Advanced Topics in Computation Theory",
        "course_id": 17114,
        "description": "Prerequisites: COMP 310; MATH 482. Languages and the theory of computation are studied in depth. Covers advanced material concerning regular and context free languages. Study of deterministic context-free languages context sensitive languages recursive and recursively enumerable sets. Investigation of current areas of interest.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "620",
        "section_number": "01",
        "title": "Computer System Architecture",
        "course_id": 16349,
        "description": "Prerequisites: COMP 322\/L 380\/L. Analysis and evaluation of individual computers networks of computers and the programs that support their operation and use. Emphasis on comparison of architectures and the risks and benefits associated with various approaches and configurations.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "684",
        "section_number": "01",
        "title": "Software Architecture and Design",
        "course_id": 40928,
        "description": "Prerequisites: COMP 380\/L 682. Techniques methods and tools for designing building analyzing and evaluating the structural architectural and behavioral properties of software systems. It includes the study of the fundamental concepts and principles of software architectural design structured design object-oriented design component-level design and design for reuse.\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "696C",
        "section_number": "01",
        "title": "Directed Graduate Research",
        "course_id": 16639,
        "description": "Prerequisite: Permission of Project\/Thesis Committee Cbair. (Credit\/No Credit only)\n",
        "units": "3",
        "term": "Fall-2019"
    }, {
        "subject": "COMP",
        "catalog_number": "698C",
        "section_number": "01",
        "title": "Thesis or Graduate Project",
        "course_id": 15471,
        "description": "No Course Description.\n",
        "units": "3",
        "term": "Fall-2019"
    }]
}