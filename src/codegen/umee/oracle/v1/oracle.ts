import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
/** Params defines the parameters for the oracle module. */

export interface Params {
  votePeriod: Long;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: Long;
  acceptList: Denom[];
  slashFraction: string;
  slashWindow: Long;
  minValidPerWindow: string;
  /**
   * Stamp Period represents the amount of blocks the historacle module
   * waits before recording a set of prices from the oracle.
   */

  stampPeriod: Long;
  /**
   * Prune Period represents the maximum amount of blocks which we want
   * to keep a record of our set of exchange rates.
   */

  prunePeriod: Long;
  /**
   * Median Period represents the amount blocks we will wait between
   * calculating the median and standard deviation of the median of
   * historic prices in the last Prune Period.
   */

  medianPeriod: Long;
}
/** Params defines the parameters for the oracle module. */

export interface ParamsSDKType {
  vote_period: Long;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: Long;
  accept_list: DenomSDKType[];
  slash_fraction: string;
  slash_window: Long;
  min_valid_per_window: string;
  /**
   * Stamp Period represents the amount of blocks the historacle module
   * waits before recording a set of prices from the oracle.
   */

  stamp_period: Long;
  /**
   * Prune Period represents the maximum amount of blocks which we want
   * to keep a record of our set of exchange rates.
   */

  prune_period: Long;
  /**
   * Median Period represents the amount blocks we will wait between
   * calculating the median and standard deviation of the median of
   * historic prices in the last Prune Period.
   */

  median_period: Long;
}
/** Denom - the object to hold configurations of each denom */

export interface Denom {
  baseDenom: string;
  symbolDenom: string;
  exponent: number;
}
/** Denom - the object to hold configurations of each denom */

export interface DenomSDKType {
  base_denom: string;
  symbol_denom: string;
  exponent: number;
}
/**
 * AggregateExchangeRatePrevote -
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */

export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitBlock: Long;
}
/**
 * AggregateExchangeRatePrevote -
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */

export interface AggregateExchangeRatePrevoteSDKType {
  hash: string;
  voter: string;
  submit_block: Long;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */

export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */

export interface AggregateExchangeRateVoteSDKType {
  exchange_rate_tuples: ExchangeRateTupleSDKType[];
  voter: string;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */

export interface ExchangeRateTuple {
  denom: string;
  exchangeRate: string;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */

export interface ExchangeRateTupleSDKType {
  denom: string;
  exchange_rate: string;
}
/** HistoricPrice is an instance of a price "stamp" */

export interface HistoricPrice {
  exchangeRate?: ExchangeRateTuple;
  blockNum: Long;
}
/** HistoricPrice is an instance of a price "stamp" */

export interface HistoricPriceSDKType {
  exchange_rate?: ExchangeRateTupleSDKType;
  block_num: Long;
}

function createBaseParams(): Params {
  return {
    votePeriod: Long.UZERO,
    voteThreshold: "",
    rewardBand: "",
    rewardDistributionWindow: Long.UZERO,
    acceptList: [],
    slashFraction: "",
    slashWindow: Long.UZERO,
    minValidPerWindow: "",
    stampPeriod: Long.UZERO,
    prunePeriod: Long.UZERO,
    medianPeriod: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).uint64(message.votePeriod);
    }

    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
    }

    if (message.rewardBand !== "") {
      writer.uint32(26).string(message.rewardBand);
    }

    if (!message.rewardDistributionWindow.isZero()) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }

    for (const v of message.acceptList) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.slashFraction !== "") {
      writer.uint32(50).string(message.slashFraction);
    }

    if (!message.slashWindow.isZero()) {
      writer.uint32(56).uint64(message.slashWindow);
    }

    if (message.minValidPerWindow !== "") {
      writer.uint32(66).string(message.minValidPerWindow);
    }

    if (!message.stampPeriod.isZero()) {
      writer.uint32(72).uint64(message.stampPeriod);
    }

    if (!message.prunePeriod.isZero()) {
      writer.uint32(80).uint64(message.prunePeriod);
    }

    if (!message.medianPeriod.isZero()) {
      writer.uint32(88).uint64(message.medianPeriod);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votePeriod = (reader.uint64() as Long);
          break;

        case 2:
          message.voteThreshold = reader.string();
          break;

        case 3:
          message.rewardBand = reader.string();
          break;

        case 4:
          message.rewardDistributionWindow = (reader.uint64() as Long);
          break;

        case 5:
          message.acceptList.push(Denom.decode(reader, reader.uint32()));
          break;

        case 6:
          message.slashFraction = reader.string();
          break;

        case 7:
          message.slashWindow = (reader.uint64() as Long);
          break;

        case 8:
          message.minValidPerWindow = reader.string();
          break;

        case 9:
          message.stampPeriod = (reader.uint64() as Long);
          break;

        case 10:
          message.prunePeriod = (reader.uint64() as Long);
          break;

        case 11:
          message.medianPeriod = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? Long.fromValue(object.votePeriod) : Long.UZERO;
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.rewardDistributionWindow = object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null ? Long.fromValue(object.rewardDistributionWindow) : Long.UZERO;
    message.acceptList = object.acceptList?.map(e => Denom.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? Long.fromValue(object.slashWindow) : Long.UZERO;
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    message.stampPeriod = object.stampPeriod !== undefined && object.stampPeriod !== null ? Long.fromValue(object.stampPeriod) : Long.UZERO;
    message.prunePeriod = object.prunePeriod !== undefined && object.prunePeriod !== null ? Long.fromValue(object.prunePeriod) : Long.UZERO;
    message.medianPeriod = object.medianPeriod !== undefined && object.medianPeriod !== null ? Long.fromValue(object.medianPeriod) : Long.UZERO;
    return message;
  }

};

function createBaseDenom(): Denom {
  return {
    baseDenom: "",
    symbolDenom: "",
    exponent: 0
  };
}

export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }

    if (message.symbolDenom !== "") {
      writer.uint32(18).string(message.symbolDenom);
    }

    if (message.exponent !== 0) {
      writer.uint32(24).uint32(message.exponent);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;

        case 2:
          message.symbolDenom = reader.string();
          break;

        case 3:
          message.exponent = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = createBaseDenom();
    message.baseDenom = object.baseDenom ?? "";
    message.symbolDenom = object.symbolDenom ?? "";
    message.exponent = object.exponent ?? 0;
    return message;
  }

};

function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return {
    hash: "",
    voter: "",
    submitBlock: Long.UZERO
  };
}

export const AggregateExchangeRatePrevote = {
  encode(message: AggregateExchangeRatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (!message.submitBlock.isZero()) {
      writer.uint32(24).uint64(message.submitBlock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRatePrevote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRatePrevote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.submitBlock = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.voter = object.voter ?? "";
    message.submitBlock = object.submitBlock !== undefined && object.submitBlock !== null ? Long.fromValue(object.submitBlock) : Long.UZERO;
    return message;
  }

};

function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return {
    exchangeRateTuples: [],
    voter: ""
  };
}

export const AggregateExchangeRateVote = {
  encode(message: AggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRateVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          break;

        case 2:
          message.voter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AggregateExchangeRateVote>): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples = object.exchangeRateTuples?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
    message.voter = object.voter ?? "";
    return message;
  }

};

function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return {
    denom: "",
    exchangeRate: ""
  };
}

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateTuple();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.exchangeRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.denom = object.denom ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  }

};

function createBaseHistoricPrice(): HistoricPrice {
  return {
    exchangeRate: undefined,
    blockNum: Long.UZERO
  };
}

export const HistoricPrice = {
  encode(message: HistoricPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRate !== undefined) {
      ExchangeRateTuple.encode(message.exchangeRate, writer.uint32(10).fork()).ldelim();
    }

    if (!message.blockNum.isZero()) {
      writer.uint32(16).uint64(message.blockNum);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricPrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = ExchangeRateTuple.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockNum = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<HistoricPrice>): HistoricPrice {
    const message = createBaseHistoricPrice();
    message.exchangeRate = object.exchangeRate !== undefined && object.exchangeRate !== null ? ExchangeRateTuple.fromPartial(object.exchangeRate) : undefined;
    message.blockNum = object.blockNum !== undefined && object.blockNum !== null ? Long.fromValue(object.blockNum) : Long.UZERO;
    return message;
  }

};