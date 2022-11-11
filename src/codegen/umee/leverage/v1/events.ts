import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** EventSupply is emitted on Msg/Supply */

export interface EventSupply {
  /** Liquidity supplier bech32 address. */
  supplier: string;
  /** Liquidity provided to the module. */

  asset?: Coin;
  /** uToken received by the supplier in exchange for the provided liquidity. */

  utoken?: Coin;
}
/** EventSupply is emitted on Msg/Supply */

export interface EventSupplySDKType {
  /** Liquidity supplier bech32 address. */
  supplier: string;
  /** Liquidity provided to the module. */

  asset?: CoinSDKType;
  /** uToken received by the supplier in exchange for the provided liquidity. */

  utoken?: CoinSDKType;
}
/** EventWithdraw is emitted on Msg/Withdraw */

export interface EventWithdraw {
  /** Liquidity supplier bech32 address. */
  supplier: string;
  /** uToken sent to the module in exchange for the underlying asset. */

  utoken?: Coin;
  /** Liquidity received by the supplier. */

  asset?: Coin;
}
/** EventWithdraw is emitted on Msg/Withdraw */

export interface EventWithdrawSDKType {
  /** Liquidity supplier bech32 address. */
  supplier: string;
  /** uToken sent to the module in exchange for the underlying asset. */

  utoken?: CoinSDKType;
  /** Liquidity received by the supplier. */

  asset?: CoinSDKType;
}
/** EventCollaterize is emitted on Msg/Collaterize */

export interface EventCollaterize {
  /** Borrower bech32 address. */
  borrower: string;
  /** uToken provided as a collateral. */

  utoken?: Coin;
}
/** EventCollaterize is emitted on Msg/Collaterize */

export interface EventCollaterizeSDKType {
  /** Borrower bech32 address. */
  borrower: string;
  /** uToken provided as a collateral. */

  utoken?: CoinSDKType;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */

export interface EventDecollaterize {
  /** Borrower bech32 address. */
  borrower: string;
  /** utoken removed from collateral. */

  utoken?: Coin;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */

export interface EventDecollaterizeSDKType {
  /** Borrower bech32 address. */
  borrower: string;
  /** utoken removed from collateral. */

  utoken?: CoinSDKType;
}
/** EventBorrow is emitted on Msg/Borrow */

export interface EventBorrow {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset borrowed. */

  asset?: Coin;
}
/** EventBorrow is emitted on Msg/Borrow */

export interface EventBorrowSDKType {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset borrowed. */

  asset?: CoinSDKType;
}
/** EventRepay is emitted on Msg/Repay */

export interface EventRepay {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset repaid */

  repaid?: Coin;
}
/** EventRepay is emitted on Msg/Repay */

export interface EventRepaySDKType {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset repaid */

  repaid?: CoinSDKType;
}
/** EventLiquidate is emitted on Msg/Liquidate */

export interface EventLiquidate {
  /** Liquidator bech32 address. */
  liquidator: string;
  /** Borrower bech32 address. */

  borrower: string;
  /** Assets liquidated from the borrower */

  liquidated?: Coin;
}
/** EventLiquidate is emitted on Msg/Liquidate */

export interface EventLiquidateSDKType {
  /** Liquidator bech32 address. */
  liquidator: string;
  /** Borrower bech32 address. */

  borrower: string;
  /** Assets liquidated from the borrower */

  liquidated?: CoinSDKType;
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */

export interface EventInterestAccrual {
  blockHeight: Long;
  /** Unix timestamp (in seconds) */

  timestamp: Long;
  totalInterest: Coin[];
  reserved: Coin[];
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */

export interface EventInterestAccrualSDKType {
  block_height: Long;
  /** Unix timestamp (in seconds) */

  timestamp: Long;
  total_interest: CoinSDKType[];
  reserved: CoinSDKType[];
}
/**
 * EventRepayBadDebt is emitted when bad debt is detected and repayed
 * (potentially partially)
 */

export interface EventRepayBadDebt {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset repaid */

  asset?: Coin;
}
/**
 * EventRepayBadDebt is emitted when bad debt is detected and repayed
 * (potentially partially)
 */

export interface EventRepayBadDebtSDKType {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset repaid */

  asset?: CoinSDKType;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */

export interface EventReservesExhausted {
  /** Borrower bech32 address. */
  borrower: string;
  /** Outstanding bad debt */

  outstandingDebt?: Coin;
  /** Module balance remaining */

  moduleBalance?: Coin;
  /** Reserves remaining */

  reserves?: Coin;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */

export interface EventReservesExhaustedSDKType {
  /** Borrower bech32 address. */
  borrower: string;
  /** Outstanding bad debt */

  outstanding_debt?: CoinSDKType;
  /** Module balance remaining */

  module_balance?: CoinSDKType;
  /** Reserves remaining */

  reserves?: CoinSDKType;
}
/** EventFundOracle is emitted when sending rewards to oracle module */

export interface EventFundOracle {
  /** Assets sent to oracle module */
  assets: Coin[];
}
/** EventFundOracle is emitted when sending rewards to oracle module */

export interface EventFundOracleSDKType {
  /** Assets sent to oracle module */
  assets: CoinSDKType[];
}

function createBaseEventSupply(): EventSupply {
  return {
    supplier: "",
    asset: undefined,
    utoken: undefined
  };
}

export const EventSupply = {
  encode(message: EventSupply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }

    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }

    if (message.utoken !== undefined) {
      Coin.encode(message.utoken, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSupply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSupply();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.supplier = reader.string();
          break;

        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.utoken = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSupply>): EventSupply {
    const message = createBaseEventSupply();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
    return message;
  }

};

function createBaseEventWithdraw(): EventWithdraw {
  return {
    supplier: "",
    utoken: undefined,
    asset: undefined
  };
}

export const EventWithdraw = {
  encode(message: EventWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }

    if (message.utoken !== undefined) {
      Coin.encode(message.utoken, writer.uint32(18).fork()).ldelim();
    }

    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.supplier = reader.string();
          break;

        case 2:
          message.utoken = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.asset = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventWithdraw>): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.supplier = object.supplier ?? "";
    message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }

};

function createBaseEventCollaterize(): EventCollaterize {
  return {
    borrower: "",
    utoken: undefined
  };
}

export const EventCollaterize = {
  encode(message: EventCollaterize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }

    if (message.utoken !== undefined) {
      Coin.encode(message.utoken, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCollaterize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCollaterize();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;

        case 2:
          message.utoken = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCollaterize>): EventCollaterize {
    const message = createBaseEventCollaterize();
    message.borrower = object.borrower ?? "";
    message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
    return message;
  }

};

function createBaseEventDecollaterize(): EventDecollaterize {
  return {
    borrower: "",
    utoken: undefined
  };
}

export const EventDecollaterize = {
  encode(message: EventDecollaterize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }

    if (message.utoken !== undefined) {
      Coin.encode(message.utoken, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDecollaterize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDecollaterize();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;

        case 2:
          message.utoken = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventDecollaterize>): EventDecollaterize {
    const message = createBaseEventDecollaterize();
    message.borrower = object.borrower ?? "";
    message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
    return message;
  }

};

function createBaseEventBorrow(): EventBorrow {
  return {
    borrower: "",
    asset: undefined
  };
}

export const EventBorrow = {
  encode(message: EventBorrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }

    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBorrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBorrow();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;

        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBorrow>): EventBorrow {
    const message = createBaseEventBorrow();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }

};

function createBaseEventRepay(): EventRepay {
  return {
    borrower: "",
    repaid: undefined
  };
}

export const EventRepay = {
  encode(message: EventRepay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }

    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRepay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRepay();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;

        case 2:
          message.repaid = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventRepay>): EventRepay {
    const message = createBaseEventRepay();
    message.borrower = object.borrower ?? "";
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    return message;
  }

};

function createBaseEventLiquidate(): EventLiquidate {
  return {
    liquidator: "",
    borrower: "",
    liquidated: undefined
  };
}

export const EventLiquidate = {
  encode(message: EventLiquidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidator !== "") {
      writer.uint32(10).string(message.liquidator);
    }

    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }

    if (message.liquidated !== undefined) {
      Coin.encode(message.liquidated, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLiquidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLiquidate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidator = reader.string();
          break;

        case 2:
          message.borrower = reader.string();
          break;

        case 3:
          message.liquidated = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventLiquidate>): EventLiquidate {
    const message = createBaseEventLiquidate();
    message.liquidator = object.liquidator ?? "";
    message.borrower = object.borrower ?? "";
    message.liquidated = object.liquidated !== undefined && object.liquidated !== null ? Coin.fromPartial(object.liquidated) : undefined;
    return message;
  }

};

function createBaseEventInterestAccrual(): EventInterestAccrual {
  return {
    blockHeight: Long.UZERO,
    timestamp: Long.UZERO,
    totalInterest: [],
    reserved: []
  };
}

export const EventInterestAccrual = {
  encode(message: EventInterestAccrual, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).uint64(message.blockHeight);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    for (const v of message.totalInterest) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.reserved) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInterestAccrual {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInterestAccrual();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.uint64() as Long);
          break;

        case 2:
          message.timestamp = (reader.uint64() as Long);
          break;

        case 3:
          message.totalInterest.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.reserved.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventInterestAccrual>): EventInterestAccrual {
    const message = createBaseEventInterestAccrual();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.totalInterest = object.totalInterest?.map(e => Coin.fromPartial(e)) || [];
    message.reserved = object.reserved?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventRepayBadDebt(): EventRepayBadDebt {
  return {
    borrower: "",
    asset: undefined
  };
}

export const EventRepayBadDebt = {
  encode(message: EventRepayBadDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }

    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRepayBadDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRepayBadDebt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;

        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventRepayBadDebt>): EventRepayBadDebt {
    const message = createBaseEventRepayBadDebt();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }

};

function createBaseEventReservesExhausted(): EventReservesExhausted {
  return {
    borrower: "",
    outstandingDebt: undefined,
    moduleBalance: undefined,
    reserves: undefined
  };
}

export const EventReservesExhausted = {
  encode(message: EventReservesExhausted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }

    if (message.outstandingDebt !== undefined) {
      Coin.encode(message.outstandingDebt, writer.uint32(18).fork()).ldelim();
    }

    if (message.moduleBalance !== undefined) {
      Coin.encode(message.moduleBalance, writer.uint32(26).fork()).ldelim();
    }

    if (message.reserves !== undefined) {
      Coin.encode(message.reserves, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventReservesExhausted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventReservesExhausted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;

        case 2:
          message.outstandingDebt = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.moduleBalance = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.reserves = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventReservesExhausted>): EventReservesExhausted {
    const message = createBaseEventReservesExhausted();
    message.borrower = object.borrower ?? "";
    message.outstandingDebt = object.outstandingDebt !== undefined && object.outstandingDebt !== null ? Coin.fromPartial(object.outstandingDebt) : undefined;
    message.moduleBalance = object.moduleBalance !== undefined && object.moduleBalance !== null ? Coin.fromPartial(object.moduleBalance) : undefined;
    message.reserves = object.reserves !== undefined && object.reserves !== null ? Coin.fromPartial(object.reserves) : undefined;
    return message;
  }

};

function createBaseEventFundOracle(): EventFundOracle {
  return {
    assets: []
  };
}

export const EventFundOracle = {
  encode(message: EventFundOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFundOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFundOracle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventFundOracle>): EventFundOracle {
    const message = createBaseEventFundOracle();
    message.assets = object.assets?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};