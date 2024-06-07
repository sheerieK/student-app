3 Things to do:-
1. *Compile & run c++ code first* :  open the directory of c++ into terminal, then run the command **g++ student.cpp -o student** (install mingw with g++/gcc compiler first) then **./student** (it will generate json file within api directory).

2. *Run api code(server)* : open the api directory in terminal. install depenedencies by using **npm install** command. then run by using **node server** command.

3. *Open react application* : Open the react-app directory in terminal. install dependencies using **npm install**. then run by using **npm start** command.

*Note* : express and react command should be running simultaneously.(to run react application . it is necessary to run api server).

                    ---------------- *Explanation of Every section* -----------------------

------------------------------------------------------------------------------------------------------------------                 
This project is having 3 sections:
1. c++(directory) : in which txt file from where we have to take data as input & student.cpp(actual code for converting the txt data into JSON).
2. api: this section is having a file in which code for api endpoint is there.
3. react-app: this section is having some code for UI as well as api integration by which it displays the students data and also adds students data.



Pre Requisites(softwares needed):
1. mingw(any c++ compiler): I have used mingw.
2. nodeJS 


how and where to start

open with any editor(eg. VSCode)
open the directory in which c++, api and react-app directory resides
open 3 terminal: 
     ** run command for c++ --- "g++ student.cpp -o student". it will create an *exe* file within same directory after that run command "./student"------This command will generate the json file into api Directory(code is there to generate json file into api directory).
     
     ** after generation of the JSON File. open path for api eg:- "......your root path/Student-app/api"
     now install the dependencies first : run command 'npm install"---it will install all the depndencies"(will add node_modules directory)
     now run command in the terminal : "node server.js"
     it will display an output as server is running on port : 3001

     ** lastly come to the react-app directory: (leave the previous one as it is) , navigate to it's path first. then install the dependencies here also.
     run command  *npm install*(will install all the dependencies for react setup);
     it may take some time.
     after that run command: "npm start"
     it will start the react application.
     check that on which port it is running. generally it's localhost:3000(will open the react app automatically or you can also type localhost:3000 manually in your browser);

the student list is been displayed, if not then check that api's code is running or not.
you can add student details and it will update the list before displaying.