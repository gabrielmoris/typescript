abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  // This method is not necesary to declare in the inheritance
  getReelTime(): number {
    //some complex calculation
    return Math.random();
  }
}

// It is not possible to create an object, but It is possible to extend it
// const gc = new TakePhoto("", "");

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    //If I don`t pass the super() It will complain!
    super(cameraMode, filter);
  }

  //Also I mus`t implement the method getSepia
  getSepia(): void {
    console.log("sepia effect");
  }
}

const gc = new Instagram("gabriel", "chamorro", 45);

gc.getReelTime();
gc.getSepia();
