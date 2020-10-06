export class Service {
  //   url: string;

  constructor() {
    // super();
  }
}

export class Request {
  url: string;
  constructor() {
    this.url = "https://google.com";
  }
}

export class Response {
  #secretValues: string;
  #secretToken: string;

  constructor() {
    this.#secretValues = "";
    this.#secretToken = "A secret token";
    console.log("Service created");
  }

  set setValue(name: string) {
    console.log(this.#secretToken);
    this.#secretValues = name;
  }

  static get Fields() {
    return Object.freeze({
      address_string: "address_string",
      label: "label",
      latitude: "latitude",
      location_source_id: "location_source_id",
      longitude: "longitude",
      type: "type",
    });
  }
  //   Count: number;
}

let r = new Response();
// r.setValue = "this is a string";

///

class test {
  _data: any;

  defineProperty(field: any) {
    Object.defineProperty(this, field, {
      get: () => this._data[field],
      set: (value) => {
        this._data[field] = value;
      },
      enumerable: true,
    });
  }
}

// export default class AbstractObject {
//   _data: any;
//   _fields: Array<string>;
//   static get Fields() {
//     return Object.freeze({});
//   }
//   constructor() {
//     this._data = {};

//     if (this.constructor.Fields === undefined) {
//       throw new Error(
//         'A "Fields" frozen object must be defined in the object class'
//       );
//     }
//     let fields: any = this.constructor.Fields;
//     this._fields = Object.keys(fields);
//     this._fields.forEach((field) => {
//       this._defineProperty(field);
//     });
//   }

//   /**
//    * Define data getter and setter field
//    * @param {String} field
//    */
//   _defineProperty(field: string) {
//     Object.defineProperty(this, field, {
//       get: () => this._data[field],
//       set: (value) => {
//         this._data[field] = value;
//       },
//       enumerable: true,
//     });
//   }

//   /**
//    * Set data field
//    * @param {String} field
//    * @param {Mixed} value
//    * @return this
//    */
//   set(field: string, value: mixed) {
//     if (this._fields.indexOf(field) < 0) {
//       this._defineProperty(field);
//     }
//     var that: { [key: string]: any } = this;
//     that[field] = value;
//     return this;
//   }

//   /**
//    * Set multiple data fields
//    * @param {Object} data
//    * @return this
//    */
//   setData(data: Object) {
//     Object.keys(data).forEach((key) => {
//       this.set(key, data[key]);
//     });
//     return this;
//   }

//   /**
//    * Export object data
//    * @return {Object}
//    */
//   exportData(): Object {
//     return this._data;
//   }
// }
