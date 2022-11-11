import * as _137 from "./leverage/v1/events";
import * as _138 from "./leverage/v1/genesis";
import * as _139 from "./leverage/v1/gov";
import * as _140 from "./leverage/v1/leverage";
import * as _141 from "./leverage/v1/query";
import * as _142 from "./leverage/v1/tx";
import * as _143 from "./oracle/v1/events";
import * as _144 from "./oracle/v1/genesis";
import * as _145 from "./oracle/v1/oracle";
import * as _146 from "./oracle/v1/query";
import * as _147 from "./oracle/v1/tx";
import * as _246 from "./leverage/v1/tx.amino";
import * as _247 from "./oracle/v1/tx.amino";
import * as _248 from "./leverage/v1/tx.registry";
import * as _249 from "./oracle/v1/tx.registry";
import * as _250 from "./leverage/v1/query.lcd";
import * as _251 from "./oracle/v1/query.lcd";
import * as _252 from "./leverage/v1/query.rpc.Query";
import * as _253 from "./oracle/v1/query.rpc.Query";
import * as _254 from "./leverage/v1/tx.rpc.msg";
import * as _255 from "./oracle/v1/tx.rpc.msg";
import * as _262 from "./lcd";
import * as _263 from "./rpc.query";
import * as _264 from "./rpc.tx";
export namespace umee {
  export namespace leverage {
    export const v1 = { ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._246,
      ..._248,
      ..._250,
      ..._252,
      ..._254
    };
  }
  export namespace oracle {
    export const v1 = { ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._247,
      ..._249,
      ..._251,
      ..._253,
      ..._255
    };
  }
  export const ClientFactory = { ..._262,
    ..._263,
    ..._264
  };
}