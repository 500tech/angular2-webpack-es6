import 'reflect-metadata';
import { bootstrap, Component, View } from 'angular2/angular2';

@Component({ selector: 'my-app' })
@View({
  template: `
<h1>Welcome to your Angular2 + Webpack + ES6 Playground</h1>
<h2>Have {{ what }}</h2>
  `
})
class App {
  constructor() {
    this.what = "a good time!";
  }
}

bootstrap(App);