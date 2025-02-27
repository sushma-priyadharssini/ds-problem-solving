class Tasks {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.count = concurrency;
    this.taskList = [];
    this.result = [];
  }

  async addTask(task) {
    if (this.count <= this.concurrency) {
      this.count++;
    }
    if (this.count > this.concurrency) {
      this.taskList.push(task);
      return;
    }
    try {
      let a = await task();
      this.result.push("resolved");
      this.count--;
    } catch {
      this.result.push("rejected");
      this.count--;
    } finally {
      if (this.count < this.concurrency) {
        this.addTask(this.taskList.pop());
      }
    }
  }
}

addTask(1);
addTask(2);
addTask(3);
addTask(4);
addTask(5);
