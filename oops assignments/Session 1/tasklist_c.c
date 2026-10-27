#include <stdio.h>
#include <string.h>

#define MAX_TASKS 5
#define MAX_LEN 100

// Task 1: Global array to store up to 5 tasks as strings
char tasks[MAX_TASKS][MAX_LEN];
int taskCount = 0;

// Function to add a task to the global array
void addTask(const char *title) {
    if (taskCount < MAX_TASKS) {
        strncpy(tasks[taskCount], title, MAX_LEN - 1);
        tasks[taskCount][MAX_LEN - 1] = '\0'; // Null termination
        taskCount++;
    } else {
        printf("Task list is full! Cannot add more tasks.\n");
    }
}

// Function to print all tasks using a for loop
void printTasks() {
    printf("\n--- Task List (%d tasks) ---\n", taskCount);
    for (int i = 0; i < taskCount; i++) {
        printf("%d. %s\n", i + 1, tasks[i]);
    }
    printf("---------------------------\n");
}

// Task 2: Function to mark a task as done (appends " - DONE")
void markTaskDone(int index) {
    if (index >= 0 && index < taskCount) {
        const char *doneTag = " - DONE";
        // Check if it is not already marked done
        if (strstr(tasks[index], doneTag) == NULL) {
            strncat(tasks[index], doneTag, MAX_LEN - strlen(tasks[index]) - 1);
        }
    } else {
        printf("Invalid task index!\n");
    }
}

int main() {
    // Adding 3 tasks as a demonstration
    printf("Adding tasks...\n");
    addTask("Buy groceries");
    addTask("Finish homework");
    addTask("Call mom");

    // Print initial task list
    printTasks();

    // Mark second task (index 1) as done
    printf("\nMarking task 2 as DONE...\n");
    markTaskDone(1);

    // Print updated task list
    printTasks();

    return 0;
}

