import axios from "axios";
import { publicKey, url } from "./constants";

function subscribe() {
  navigator.serviceWorker.ready.then((registration) => {
    registration.pushManager.getSubscription().then((subscription) => {
      if (subscription) {
        axios.post(`${url}/subscribe`, subscription.toJSON());
      } else {
        registration.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: publicKey,
          })
          .then((subscription) => {
            axios.post(`${url}/subscribe`, subscription.toJSON());
          });
      }
    });
  });
}

export { subscribe };
