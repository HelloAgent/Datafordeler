// import Client from "./core/client";
// export default Client;

// import Datafordeler from "./core/client";
import { Client as Datafordeler } from "./core/client";

// Load all service classes
require("../lib/services/all");

// /**
//  * @api private
//  */
module.exports = Datafordeler;
export default Datafordeler;
