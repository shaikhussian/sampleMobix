import { types } from "mobx-state-tree";

const Todo = types
  .model("Todo", {
    name: "",
    details: "",
    is_done: false
  })
  .actions(self => ({
    markDone() {
      self.is_done = true;
    }
  }))
  .views(self => ({
    status() {
      // console.log("done", self.is_done);
      return self.is_done ? "Done" : "Not Done";
    }
  }));

export default Todo;
