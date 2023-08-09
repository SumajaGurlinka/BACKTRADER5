import { init } from '@rematch/core';
import { register } from './register';
import { login } from './login';
import { forgot } from './forgot';
import { reset } from './reset';
import { user } from './user';
import { admin } from './admin';
import { buy } from './buy';
import { stock } from './stock';
import { orders } from './orders';
import { sell } from './sell';
import { spicked } from './spicked';
import { adminstock } from './adminstock';
import { symbol } from './symbol';
import { margin } from './margin';
import { symbol1 } from './symbol1';
const models = { register ,login,forgot,reset,user,admin,stock,buy,orders,sell,spicked,adminstock,margin,symbol,symbol1};

const store = init({ models });

export default store;
