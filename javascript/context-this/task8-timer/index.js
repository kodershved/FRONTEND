export const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  startTimer() {
    this.id = setInterval(() => {
      this.secondsPassed++;
      console.log(this.secondsPassed);
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed++;
      }
    }, 1000);
  },

  stopTimer() {
    clearInterval(this.id);
  },

  getTime() {
    let seconds = "";
    if (this.secondsPassed < 10) {
      seconds = `0${this.secondsPassed}`;
    } else {
      seconds = this.secondsPassed;
    }

    return `${this.minsPassed}:${seconds}`;
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
const timerFirst = timer;
timerFirst.startTimer();

setTimeout(console.log(timerFirst.getTime()), 2000);
