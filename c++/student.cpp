
#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
using namespace std;

int main() {
    // Open the txt file
    fstream inputFile("student.txt");

    // Check if the file is open
    if (!inputFile.is_open()) {
        cerr << "Unable to open file: student.txt" << endl;
        return 1;
    }

    // Open the output JSON file
    ofstream outputFile("../api/students.json");


    // Check if the file is open
    if (!outputFile.is_open()) {
        cerr << "Unable to open file: students.json" << endl;
        return 1;
    }

    string line;
    outputFile << "[" << endl;
    bool firstObj = true;
    while (getline(inputFile, line)) {
        istringstream iss(line);
        string name;
        int age, grade;

        // Extract from the line of the txt file
        iss >> name >> age >> grade;

        // Prints comma after every object & leaves for the first object
        if (!firstObj) {
            outputFile << "," << endl;
        }
        firstObj = false;

        // Output the JSON object
        outputFile << "  {\"name\": \"" << name << "\", \"age\": " << age << ", \"grade\": " << grade << "}";
    }
    outputFile << endl << "]" << endl;

    // Close the files
    inputFile.close();
    outputFile.close();

    return 0;
}
