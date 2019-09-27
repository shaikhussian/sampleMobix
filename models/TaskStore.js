import { types } from "mobx-state-tree";
import Todo from "./Todo";

const TaskStore = types
  .model("Todo", {
    Todo: types.array(Todo)
  })
  .actions(self => ({
    add(task) {
      // console.log("task", JSON.stringify(task));
      self.Todo.push(task);
    }
  }));

export default TaskStore;
