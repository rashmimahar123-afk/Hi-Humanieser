import { BehaviorSubject } from "rxjs";

class PersistStorage<T> {
  private keyName: string;
  private observer: BehaviorSubject<T>;

  constructor(keyName: string, observer: BehaviorSubject<T>) {
    this.keyName = keyName;
    this.observer = observer;

    if (typeof window !== "undefined") {
      const lastDataString = window.localStorage.getItem(this.keyName);

      if (lastDataString) {
        try {
          this.observer.next(JSON.parse(lastDataString) as T);
        } catch {
          // ignore invalid JSON
        }
      }

      this.observer.subscribe((next) => {
        window.localStorage.setItem(this.keyName, JSON.stringify(next));
      });
    }
  }
}

export default PersistStorage;
