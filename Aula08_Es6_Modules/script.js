import { helloWorld } from './module.js';
import MyModule from './module2.js'
import * as MeuModuloNovo from './module3.js'
helloWorld()
MyModule()
console.log(MeuModuloNovo.name)
console.log(MeuModuloNovo.age)
console.log(MeuModuloNovo.country)