import Todo from "../models/todo.schema.js";
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../services/CustomError.js";

/**********************************************************
 * @ADD_TASK
 * @POST_REQUEST
 * @route https://localhost:5000/api/v1/todo
 * @description Controller used for adding new tasks
 * @returns Task Object
 *********************************************************/
export const addTask = asyncHandler(async (req, res) => {
  const { task } = req.body;
  if (!task) {
    throw new CustomError("Provide a task", 400);
  }
  const tasks = await Todo.create({
    task,
  });
  if (!tasks) {
    throw new CustomError("Failed to add tasks", 400);
  }
  res.status(200).json({
    success: true,
    message: "Task added successfully",
    tasks,
  });
});

/**********************************************************
 * @GET_TASK
 * @GET_REQUEST
 * @route https://localhost:5000/api/v1/todo
 * @description Controller used for getting task 
 * @returns Task Object
 *********************************************************/
export const getTask = asyncHandler( async(req, res) => {
    const tasks = await Todo.find()
    if (!tasks) {
        throw new CustomError("There are no tasks", 400);
    }
    res.status(200).json({
        success: true,
        message: "List of tasks",
        tasks
    })
});

/**********************************************************
 * @UPDATE_TASK
 * @PUT_REQUEST
 * @route https://localhost:5000/api/v1/todo/:id
 * @description Controller used for update a new task
 * @returns Task Object
 *********************************************************/
export const updateTask = asyncHandler( async(req, res) => {
    const { task } = req.body
  const { id: taskId } = req.params;

    if (!task) {
        throw new CustomError("Provide a taskId", 400);
    }
    const tasks = await Todo.findByIdAndUpdate(
        taskId, { task },
        {
            new: true,
            runValidators: true
        }
    )

    res.status(200).json({
        success: true,
        message: 'Tasks updated successfully',
        tasks
    })
});

/**********************************************************
 * @DELETING_TASK
 * @DELETE_REQUEST
 * @route https://localhost:5000/api/v1/todo/:id
 * @description Controller used for deleting a new task
 * @returns Task Object
 *********************************************************/
export const deleteTask = asyncHandler( async(req, res) => {
    const { id: taskId } = req.params;

    if (!taskId) {
        throw new CustomError("Provide a taskId", 400);
    }
    const tasks = await Todo.findByIdAndDelete(taskId)

    res.status(200).json({
        success: true,
        message: 'Tasks deleted successfully'
    })
});