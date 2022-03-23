import { init } from "@rematch/core";
import { User } from './modals/user'

const store = init({ 
    models:{
      user:User,
    }
 });
export default store;