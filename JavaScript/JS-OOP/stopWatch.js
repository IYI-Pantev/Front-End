function Stopwatch() {
  let startTime = 0;
  let running = false;
  let duration = 0;
  let endTime = 0;
  let elapsedTime = 0;
  // Start the stopwatch
  this.start = function () {
    if (running) throw new Error("Stopwatch already running.");
    running = true;
    startTime = new Date();
  };

  // Stop the stopwatch
  this.stop = function () {
    if (!running) throw new Error("Stopwatch already stopped");
    running = false;
    endTime = new Date();
    // Calculate the time elapsed in seconds and add to duration
    const seconds = (endTime - startTime) / 1000;
    duration += seconds;
  };

  // Reset stopwatch
  this.reset = function () {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };

  // Calculate elapsed time
  // Get the formatted time in HH:MM:SS
  Object.defineProperty(this, "elapsedTime", {
    get: function () {
      const totalSeconds = Math.floor(duration);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`;
    },
  });
}

const stopwatch = new Stopwatch();
