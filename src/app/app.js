import { Component, View } from 'angular2/angular2';
import template from 'app/app.html';

@Component({ selector: 'my-app' })
@View({ template })
class App {
  constructor() {
    this.what = "a good time!";
  }
}

export default App;