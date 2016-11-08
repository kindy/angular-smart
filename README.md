# angular-smart

This module should be used with Webpack now.

```js
// -- abc/module.js --
import {createModule} from 'angular-smart';
import otherNgModule from 'other-ng-module';

const otherDeps = [otherNgModule];
export const module = createModule(
  'my.module.name',
  require.context('./', false, /\.jsx?$/),
  otherDeps);

export default module.name;


// -- abc/myA.component.js --
import ngMaterial from 'angular-material';
import Controller from './myA.controller';

export const ngModules = [ngMaterial];

export default class myAComponent {
  controller = Controller;

  template = `
    <md-button />
    {{ 1 | myA }}
  `;
}

// -- abc/myA.controller.js --
export default class myAController {
  constructor($myA) {
    'ngInject';

    this.$myA = $myA;
  }

  $onInit() {
    this.$myA.getData();
  }
}

// -- abc/myA.filter.js --
export default myAFilter($myA) {
  'ngInject';

  return function(arg) {
    return arg;
  };
}

// -- abc/$myA.service.js --
export default class $myAService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  getData() {
    this.$http.get('/api');
  }
}
```





# Copyright and License

This module is licensed under the MIT license.

Copyright (C) 2016, by Kindy Lin, at LinkDoc Inc.

All rights reserved.