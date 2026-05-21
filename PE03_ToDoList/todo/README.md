# React ToDo app analysis - Nikolaj Wochnik

## Input

The program takes input from the user through the text box. The user types a task they want to add to the to-do list, such as “Buy groceries” or “Finish homework.” When the Add Task button is clicked, the app reads the text entered in the input field. The delete button also acts as an input because it allows the user to remove a task from the list. User actions like typing, clicking Add Task, and clicking Delete are the main inputs of the program.

## Process

The program uses React state to manage and update the to-do list. When the user types, the input value is stored in the task state. After clicking Add Task, the app checks if the input is empty. If it is not empty, a new task object with a unique ID is added to the todos array. When Delete is clicked, the matching task is removed using the filter method.

## Output

The output is the updated to-do list displayed on the screen. Tasks appear instantly after being added and disappear when deleted.