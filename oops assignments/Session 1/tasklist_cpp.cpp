#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Task 3: Task class with properties title and isDone
class Task {
private:
    string title;
    bool isDone;

public:
    // Constructor to initialize a task
    Task(string t) {
        title = t;
        isDone = false; // initially task is not done
    }

    // Method to mark task as done
    void markDone() {
        isDone = true;
    }

    // Method to display task with its status
    void display() const {
        cout << title << " - " << (isDone ? "DONE" : "PENDING") << endl;
    }
};

// Task 4: TaskList class to store and manage multiple tasks
class TaskList {
private:
    vector<Task> tasks;

public:
    // Add a task to the list
    void addTask(string title) {
        tasks.push_back(Task(title));
    }

    // Mark a task as done by its index
    void markTaskDone(int index) {
        if (index >= 0 && index < (int)tasks.size()) {
            tasks[index].markDone();
        } else {
            cout << "Invalid index! Please enter a valid task number." << endl;
        }
    }

    // Display all tasks
    void showTasks() const {
        cout << "\n----- Task List -----" << endl;
        for (int i = 0; i < (int)tasks.size(); i++) {
            cout << i + 1 << ". ";
            tasks[i].display();
        }
        cout << "---------------------" << endl;
    }
};

int main() {
    TaskList myTasks;

    // Demonstrate adding 3 tasks
    cout << "Adding 3 tasks..." << endl;
    myTasks.addTask("Buy groceries");
    myTasks.addTask("Finish homework");
    myTasks.addTask("Call mom");

    // Display all tasks
    myTasks.showTasks();

    // Mark one task as done (e.g., task 2 at index 1)
    cout << "\nMarking task 2 as done..." << endl;
    myTasks.markTaskDone(1);

    // Display updated list with statuses
    myTasks.showTasks();

    return 0;
}


