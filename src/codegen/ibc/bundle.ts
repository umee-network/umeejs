import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./applications/transfer/v2/packet";
import * as _107 from "./core/channel/v1/channel";
import * as _108 from "./core/channel/v1/genesis";
import * as _109 from "./core/channel/v1/query";
import * as _110 from "./core/channel/v1/tx";
import * as _111 from "./core/client/v1/client";
import * as _112 from "./core/client/v1/genesis";
import * as _113 from "./core/client/v1/query";
import * as _114 from "./core/client/v1/tx";
import * as _115 from "./core/commitment/v1/commitment";
import * as _116 from "./core/connection/v1/connection";
import * as _117 from "./core/connection/v1/genesis";
import * as _118 from "./core/connection/v1/query";
import * as _119 from "./core/connection/v1/tx";
import * as _120 from "./core/port/v1/query";
import * as _121 from "./core/types/v1/genesis";
import * as _122 from "./lightclients/localhost/v1/localhost";
import * as _123 from "./lightclients/solomachine/v1/solomachine";
import * as _124 from "./lightclients/solomachine/v2/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _243 from "./applications/transfer/v1/tx.amino";
import * as _244 from "./core/channel/v1/tx.amino";
import * as _245 from "./core/client/v1/tx.amino";
import * as _246 from "./core/connection/v1/tx.amino";
import * as _247 from "./applications/transfer/v1/tx.registry";
import * as _248 from "./core/channel/v1/tx.registry";
import * as _249 from "./core/client/v1/tx.registry";
import * as _250 from "./core/connection/v1/tx.registry";
import * as _251 from "./applications/transfer/v1/query.lcd";
import * as _252 from "./core/channel/v1/query.lcd";
import * as _253 from "./core/client/v1/query.lcd";
import * as _254 from "./core/connection/v1/query.lcd";
import * as _255 from "./applications/transfer/v1/query.rpc.Query";
import * as _256 from "./core/channel/v1/query.rpc.Query";
import * as _257 from "./core/client/v1/query.rpc.Query";
import * as _258 from "./core/connection/v1/query.rpc.Query";
import * as _259 from "./core/port/v1/query.rpc.Query";
import * as _260 from "./applications/transfer/v1/tx.rpc.msg";
import * as _261 from "./core/channel/v1/tx.rpc.msg";
import * as _262 from "./core/client/v1/tx.rpc.msg";
import * as _263 from "./core/connection/v1/tx.rpc.msg";
import * as _297 from "./lcd";
import * as _298 from "./rpc.query";
import * as _299 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._243,
        ..._247,
        ..._251,
        ..._255,
        ..._260
      };
      export const v2 = {
        ..._106
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._107,
        ..._108,
        ..._109,
        ..._110,
        ..._244,
        ..._248,
        ..._252,
        ..._256,
        ..._261
      };
    }
    export namespace client {
      export const v1 = {
        ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._245,
        ..._249,
        ..._253,
        ..._257,
        ..._262
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._115
      };
    }
    export namespace connection {
      export const v1 = {
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._246,
        ..._250,
        ..._254,
        ..._258,
        ..._263
      };
    }
    export namespace port {
      export const v1 = {
        ..._120,
        ..._259
      };
    }
    export namespace types {
      export const v1 = {
        ..._121
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._122
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._123
      };
      export const v2 = {
        ..._124
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._125
      };
    }
  }
  export const ClientFactory = {
    ..._297,
    ..._298,
    ..._299
  };
}