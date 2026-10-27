#include <stdio.h>
#include <string.h>

#define MAX_TASKS 5
#define MAX_LEN   100

/* ------------------------------------------------------------
 * Procedural implementation using a global array of strings.
 * ------------------------------------------------------------ */

// Global storage for tasks
char tasks[MAX_TASKS][MAX_LEN];
int  taskCount = 0;

// Add a task if space is available
void addTask(const char *title) {
    if (taskCount < MAX_TASKS) {
        strncpy(tasks[taskCount], title, MAX_LEN - 1);
        tasks[taskCount][MAX_LEN - 1] = '\0'; // safety termination
        taskCount++;
    } else {
        printf("[Error] Task list is full.\n");
    }
}

// Print all stored tasks
void printTasks(void) {
    printf("\n--- Current Tasks (%d) ---\n", taskCount);
    for (int i = 0; i < taskCount; ++i) {
        printf("%d. %s\n", i + 1, tasks[i]);
    }
    printf("---------------------------\n");
}

// Mark a task as done by appending " - DONE"
void markTaskDone(int index) {
    if (index < 0 || index >= taskCount) {
        printf("[Error] Invalid task index.\n");
        return;
    }
    const char *doneTag = " - DONE";
    if (strstr(tasks[index], doneTag) == NULL) {
        // Ensure we do not overflow the buffer
        strncat(tasks[index], doneTag, MAX_LEN - strlen(tasks[index]) - 1);
    }
}

int main(void) {
    // Demo: add three tasks
    addTask("Buy groceries");
    addTask("Finish homework");
    addTask("Call mom");

    printTasks();

    // Mark the second task as done (index 1)
    markTaskDone(1);
    printf("\nAfter marking task 2 as done:\n");
    printTasks();
    return 0;
}
