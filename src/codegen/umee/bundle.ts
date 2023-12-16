import * as _137 from "./incentive/v1/genesis";
import * as _138 from "./incentive/v1/incentive";
import * as _139 from "./incentive/v1/query";
import * as _140 from "./incentive/v1/tx";
import * as _141 from "./leverage/v1/events";
import * as _142 from "./leverage/v1/genesis";
import * as _143 from "./leverage/v1/leverage";
import * as _144 from "./leverage/v1/query";
import * as _145 from "./leverage/v1/tx";
import * as _146 from "./metoken/v1/events";
import * as _147 from "./metoken/v1/genesis";
import * as _148 from "./metoken/v1/metoken";
import * as _149 from "./metoken/v1/query";
import * as _150 from "./metoken/v1/tx";
import * as _151 from "./oracle/v1/events";
import * as _152 from "./oracle/v1/genesis";
import * as _153 from "./oracle/v1/oracle";
import * as _154 from "./oracle/v1/query";
import * as _155 from "./oracle/v1/tx";
import * as _156 from "./ugov/v1/events";
import * as _157 from "./ugov/v1/genesis";
import * as _158 from "./ugov/v1/query";
import * as _159 from "./ugov/v1/tx";
import * as _160 from "./ugov/v1/ugov";
import * as _161 from "./uibc/v1/events";
import * as _162 from "./uibc/v1/genesis";
import * as _163 from "./uibc/v1/query";
import * as _164 from "./uibc/v1/quota";
import * as _165 from "./uibc/v1/tx";
import * as _264 from "./incentive/v1/tx.amino";
import * as _265 from "./leverage/v1/tx.amino";
import * as _266 from "./metoken/v1/tx.amino";
import * as _267 from "./oracle/v1/tx.amino";
import * as _268 from "./ugov/v1/tx.amino";
import * as _269 from "./uibc/v1/tx.amino";
import * as _270 from "./incentive/v1/tx.registry";
import * as _271 from "./leverage/v1/tx.registry";
import * as _272 from "./metoken/v1/tx.registry";
import * as _273 from "./oracle/v1/tx.registry";
import * as _274 from "./ugov/v1/tx.registry";
import * as _275 from "./uibc/v1/tx.registry";
import * as _276 from "./incentive/v1/query.lcd";
import * as _277 from "./leverage/v1/query.lcd";
import * as _278 from "./metoken/v1/query.lcd";
import * as _279 from "./oracle/v1/query.lcd";
import * as _280 from "./ugov/v1/query.lcd";
import * as _281 from "./uibc/v1/query.lcd";
import * as _282 from "./incentive/v1/query.rpc.Query";
import * as _283 from "./leverage/v1/query.rpc.Query";
import * as _284 from "./metoken/v1/query.rpc.Query";
import * as _285 from "./oracle/v1/query.rpc.Query";
import * as _286 from "./ugov/v1/query.rpc.Query";
import * as _287 from "./uibc/v1/query.rpc.Query";
import * as _288 from "./incentive/v1/tx.rpc.msg";
import * as _289 from "./leverage/v1/tx.rpc.msg";
import * as _290 from "./metoken/v1/tx.rpc.msg";
import * as _291 from "./oracle/v1/tx.rpc.msg";
import * as _292 from "./ugov/v1/tx.rpc.msg";
import * as _293 from "./uibc/v1/tx.rpc.msg";
import * as _300 from "./lcd";
import * as _301 from "./rpc.query";
import * as _302 from "./rpc.tx";
export namespace umee {
  export namespace incentive {
    export const v1 = {
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._264,
      ..._270,
      ..._276,
      ..._282,
      ..._288
    };
  }
  export namespace leverage {
    export const v1 = {
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._265,
      ..._271,
      ..._277,
      ..._283,
      ..._289
    };
  }
  export namespace metoken {
    export const v1 = {
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._266,
      ..._272,
      ..._278,
      ..._284,
      ..._290
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._267,
      ..._273,
      ..._279,
      ..._285,
      ..._291
    };
  }
  export namespace ugov {
    export const v1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._268,
      ..._274,
      ..._280,
      ..._286,
      ..._292
    };
  }
  export namespace uibc {
    export const v1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._269,
      ..._275,
      ..._281,
      ..._287,
      ..._293
    };
  }
  export const ClientFactory = {
    ..._300,
    ..._301,
    ..._302
  };
}