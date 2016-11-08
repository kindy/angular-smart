import angular from 'angular';


const reNgIdParse = /([^/]+)\.(component|service|filter)\.(?:js|es[56]?)$/;


export function createModule(name, requireContext, otherDeps) {
  const deps = [];
  const depMap = {};

  const stuff = {
    component: {},
    service: {},
    filter: {}
  };

  requireContext.keys().forEach(function(id) {
    const m = id.match(reNgIdParse);
    if (!m) {
      return;
    }

    const name = m[1];
    const type = m[2];
    const module = requireContext(id);

    stuff[type][name] = module['default'];

    if (module.ngModules) {
      module.ngModules.forEach(function(dep) {
        if (!depMap.hasOwnProperty(dep)) {
          depMap[dep] = true;
          deps.push(dep);
        }
      });
    }
  });

  const finalDeps = deps.concat(otherDeps || []);

  const module = angular.module(name, finalDeps);

  for (let name in stuff.component) {
    module.component(name, new stuff.component[name]());
  }
  for (let name in stuff.service) {
    module.service(name, stuff.service[name]);
  }
  for (let name in stuff.filter) {
    module.filter(name, stuff.filter[name]);
  }

  return module;
}
