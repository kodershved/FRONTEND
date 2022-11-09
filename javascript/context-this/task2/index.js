export const callbackPrompt = {
  message: "Hello",
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },

  showDeferredPrompt(interval) {
    setTimeout(() => {
      this.showPrompt();
    }, interval);
  },
};

callbackPrompt.showDeferredPrompt(3000);
