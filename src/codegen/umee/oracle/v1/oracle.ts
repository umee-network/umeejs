import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: bigint;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: bigint;
  acceptList: Denom[];
  slashFraction: string;
  slashWindow: bigint;
  minValidPerWindow: string;
  /**
   * Historic Stamp Period represents the amount of blocks the oracle
   * module waits before recording a new historic price.
   */
  historicStampPeriod: bigint;
  /**
   * Median Stamp Period represents the amount blocks the oracle module
   * waits between calculating and stamping a new median and standard
   * deviation of that median.
   */
  medianStampPeriod: bigint;
  /**
   * Maximum Price Stamps represents the maximum amount of historic prices
   * the oracle module will store before pruning via FIFO.
   */
  maximumPriceStamps: bigint;
  /**
   * Maximum Median Stamps represents the maximum amount of medians the
   * oracle module will store before pruning via FIFO.
   */
  maximumMedianStamps: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/umee.oracle.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsAmino {
  vote_period?: string;
  vote_threshold?: string;
  reward_band?: string;
  reward_distribution_window?: string;
  accept_list?: DenomAmino[];
  slash_fraction?: string;
  slash_window?: string;
  min_valid_per_window?: string;
  /**
   * Historic Stamp Period represents the amount of blocks the oracle
   * module waits before recording a new historic price.
   */
  historic_stamp_period?: string;
  /**
   * Median Stamp Period represents the amount blocks the oracle module
   * waits between calculating and stamping a new median and standard
   * deviation of that median.
   */
  median_stamp_period?: string;
  /**
   * Maximum Price Stamps represents the maximum amount of historic prices
   * the oracle module will store before pruning via FIFO.
   */
  maximum_price_stamps?: string;
  /**
   * Maximum Median Stamps represents the maximum amount of medians the
   * oracle module will store before pruning via FIFO.
   */
  maximum_median_stamps?: string;
}
export interface ParamsAminoMsg {
  type: "/umee.oracle.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
  vote_period: bigint;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: bigint;
  accept_list: DenomSDKType[];
  slash_fraction: string;
  slash_window: bigint;
  min_valid_per_window: string;
  historic_stamp_period: bigint;
  median_stamp_period: bigint;
  maximum_price_stamps: bigint;
  maximum_median_stamps: bigint;
}
/** AvgCounterParams - Historic avg counter params */
export interface AvgCounterParams {
  /** avg_period */
  avgPeriod: Duration;
  /** avg shift */
  avgShift: Duration;
}
export interface AvgCounterParamsProtoMsg {
  typeUrl: "/umee.oracle.v1.AvgCounterParams";
  value: Uint8Array;
}
/** AvgCounterParams - Historic avg counter params */
export interface AvgCounterParamsAmino {
  /** avg_period */
  avg_period?: DurationAmino;
  /** avg shift */
  avg_shift?: DurationAmino;
}
export interface AvgCounterParamsAminoMsg {
  type: "/umee.oracle.v1.AvgCounterParams";
  value: AvgCounterParamsAmino;
}
/** AvgCounterParams - Historic avg counter params */
export interface AvgCounterParamsSDKType {
  avg_period: DurationSDKType;
  avg_shift: DurationSDKType;
}
/** Denom - the object to hold configurations of each denom */
export interface Denom {
  baseDenom: string;
  symbolDenom: string;
  exponent: number;
}
export interface DenomProtoMsg {
  typeUrl: "/umee.oracle.v1.Denom";
  value: Uint8Array;
}
/** Denom - the object to hold configurations of each denom */
export interface DenomAmino {
  base_denom?: string;
  symbol_denom?: string;
  exponent?: number;
}
export interface DenomAminoMsg {
  type: "/umee.oracle.v1.Denom";
  value: DenomAmino;
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
  submitBlock: bigint;
}
export interface AggregateExchangeRatePrevoteProtoMsg {
  typeUrl: "/umee.oracle.v1.AggregateExchangeRatePrevote";
  value: Uint8Array;
}
/**
 * AggregateExchangeRatePrevote -
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevoteAmino {
  hash?: string;
  voter?: string;
  submit_block?: string;
}
export interface AggregateExchangeRatePrevoteAminoMsg {
  type: "/umee.oracle.v1.AggregateExchangeRatePrevote";
  value: AggregateExchangeRatePrevoteAmino;
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
  submit_block: bigint;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}
export interface AggregateExchangeRateVoteProtoMsg {
  typeUrl: "/umee.oracle.v1.AggregateExchangeRateVote";
  value: Uint8Array;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVoteAmino {
  exchange_rate_tuples?: ExchangeRateTupleAmino[];
  voter?: string;
}
export interface AggregateExchangeRateVoteAminoMsg {
  type: "/umee.oracle.v1.AggregateExchangeRateVote";
  value: AggregateExchangeRateVoteAmino;
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
export interface ExchangeRateTupleProtoMsg {
  typeUrl: "/umee.oracle.v1.ExchangeRateTuple";
  value: Uint8Array;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleAmino {
  denom?: string;
  exchange_rate?: string;
}
export interface ExchangeRateTupleAminoMsg {
  type: "/umee.oracle.v1.ExchangeRateTuple";
  value: ExchangeRateTupleAmino;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleSDKType {
  denom: string;
  exchange_rate: string;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounter {
  /** sum of prices in the counter */
  sum: string;
  /** number of aggregated prices in the counter */
  num: number;
  /** Unix timestamp when the first price was aggregated in the counter */
  start: Date;
}
export interface AvgCounterProtoMsg {
  typeUrl: "/umee.oracle.v1.AvgCounter";
  value: Uint8Array;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounterAmino {
  /** sum of prices in the counter */
  sum?: string;
  /** number of aggregated prices in the counter */
  num?: number;
  /** Unix timestamp when the first price was aggregated in the counter */
  start?: string;
}
export interface AvgCounterAminoMsg {
  type: "/umee.oracle.v1.AvgCounter";
  value: AvgCounterAmino;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounterSDKType {
  sum: string;
  num: number;
  start: Date;
}
/** DenomExchangeRate stores exchange rate with timestamp */
export interface DenomExchangeRate {
  denom: string;
  rate: string;
  timestamp: Date;
}
export interface DenomExchangeRateProtoMsg {
  typeUrl: "/umee.oracle.v1.DenomExchangeRate";
  value: Uint8Array;
}
/** DenomExchangeRate stores exchange rate with timestamp */
export interface DenomExchangeRateAmino {
  denom?: string;
  rate?: string;
  timestamp?: string;
}
export interface DenomExchangeRateAminoMsg {
  type: "/umee.oracle.v1.DenomExchangeRate";
  value: DenomExchangeRateAmino;
}
/** DenomExchangeRate stores exchange rate with timestamp */
export interface DenomExchangeRateSDKType {
  denom: string;
  rate: string;
  timestamp: Date;
}
function createBaseParams(): Params {
  return {
    votePeriod: BigInt(0),
    voteThreshold: "",
    rewardBand: "",
    rewardDistributionWindow: BigInt(0),
    acceptList: [],
    slashFraction: "",
    slashWindow: BigInt(0),
    minValidPerWindow: "",
    historicStampPeriod: BigInt(0),
    medianStampPeriod: BigInt(0),
    maximumPriceStamps: BigInt(0),
    maximumMedianStamps: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/umee.oracle.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votePeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardBand, 18).atomics);
    }
    if (message.rewardDistributionWindow !== BigInt(0)) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }
    for (const v of message.acceptList) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.slashFraction !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.slashFraction, 18).atomics);
    }
    if (message.slashWindow !== BigInt(0)) {
      writer.uint32(56).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.minValidPerWindow, 18).atomics);
    }
    if (message.historicStampPeriod !== BigInt(0)) {
      writer.uint32(72).uint64(message.historicStampPeriod);
    }
    if (message.medianStampPeriod !== BigInt(0)) {
      writer.uint32(80).uint64(message.medianStampPeriod);
    }
    if (message.maximumPriceStamps !== BigInt(0)) {
      writer.uint32(88).uint64(message.maximumPriceStamps);
    }
    if (message.maximumMedianStamps !== BigInt(0)) {
      writer.uint32(96).uint64(message.maximumMedianStamps);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votePeriod = reader.uint64();
          break;
        case 2:
          message.voteThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.rewardBand = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.rewardDistributionWindow = reader.uint64();
          break;
        case 5:
          message.acceptList.push(Denom.decode(reader, reader.uint32()));
          break;
        case 6:
          message.slashFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.slashWindow = reader.uint64();
          break;
        case 8:
          message.minValidPerWindow = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.historicStampPeriod = reader.uint64();
          break;
        case 10:
          message.medianStampPeriod = reader.uint64();
          break;
        case 11:
          message.maximumPriceStamps = reader.uint64();
          break;
        case 12:
          message.maximumMedianStamps = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.rewardDistributionWindow = object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null ? BigInt(object.rewardDistributionWindow.toString()) : BigInt(0);
    message.acceptList = object.acceptList?.map(e => Denom.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? BigInt(object.slashWindow.toString()) : BigInt(0);
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    message.historicStampPeriod = object.historicStampPeriod !== undefined && object.historicStampPeriod !== null ? BigInt(object.historicStampPeriod.toString()) : BigInt(0);
    message.medianStampPeriod = object.medianStampPeriod !== undefined && object.medianStampPeriod !== null ? BigInt(object.medianStampPeriod.toString()) : BigInt(0);
    message.maximumPriceStamps = object.maximumPriceStamps !== undefined && object.maximumPriceStamps !== null ? BigInt(object.maximumPriceStamps.toString()) : BigInt(0);
    message.maximumMedianStamps = object.maximumMedianStamps !== undefined && object.maximumMedianStamps !== null ? BigInt(object.maximumMedianStamps.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.vote_period !== undefined && object.vote_period !== null) {
      message.votePeriod = BigInt(object.vote_period);
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.voteThreshold = object.vote_threshold;
    }
    if (object.reward_band !== undefined && object.reward_band !== null) {
      message.rewardBand = object.reward_band;
    }
    if (object.reward_distribution_window !== undefined && object.reward_distribution_window !== null) {
      message.rewardDistributionWindow = BigInt(object.reward_distribution_window);
    }
    message.acceptList = object.accept_list?.map(e => Denom.fromAmino(e)) || [];
    if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
      message.slashFraction = object.slash_fraction;
    }
    if (object.slash_window !== undefined && object.slash_window !== null) {
      message.slashWindow = BigInt(object.slash_window);
    }
    if (object.min_valid_per_window !== undefined && object.min_valid_per_window !== null) {
      message.minValidPerWindow = object.min_valid_per_window;
    }
    if (object.historic_stamp_period !== undefined && object.historic_stamp_period !== null) {
      message.historicStampPeriod = BigInt(object.historic_stamp_period);
    }
    if (object.median_stamp_period !== undefined && object.median_stamp_period !== null) {
      message.medianStampPeriod = BigInt(object.median_stamp_period);
    }
    if (object.maximum_price_stamps !== undefined && object.maximum_price_stamps !== null) {
      message.maximumPriceStamps = BigInt(object.maximum_price_stamps);
    }
    if (object.maximum_median_stamps !== undefined && object.maximum_median_stamps !== null) {
      message.maximumMedianStamps = BigInt(object.maximum_median_stamps);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.vote_period = message.votePeriod ? message.votePeriod.toString() : undefined;
    obj.vote_threshold = message.voteThreshold;
    obj.reward_band = message.rewardBand;
    obj.reward_distribution_window = message.rewardDistributionWindow ? message.rewardDistributionWindow.toString() : undefined;
    if (message.acceptList) {
      obj.accept_list = message.acceptList.map(e => e ? Denom.toAmino(e) : undefined);
    } else {
      obj.accept_list = [];
    }
    obj.slash_fraction = message.slashFraction;
    obj.slash_window = message.slashWindow ? message.slashWindow.toString() : undefined;
    obj.min_valid_per_window = message.minValidPerWindow;
    obj.historic_stamp_period = message.historicStampPeriod ? message.historicStampPeriod.toString() : undefined;
    obj.median_stamp_period = message.medianStampPeriod ? message.medianStampPeriod.toString() : undefined;
    obj.maximum_price_stamps = message.maximumPriceStamps ? message.maximumPriceStamps.toString() : undefined;
    obj.maximum_median_stamps = message.maximumMedianStamps ? message.maximumMedianStamps.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseAvgCounterParams(): AvgCounterParams {
  return {
    avgPeriod: Duration.fromPartial({}),
    avgShift: Duration.fromPartial({})
  };
}
export const AvgCounterParams = {
  typeUrl: "/umee.oracle.v1.AvgCounterParams",
  encode(message: AvgCounterParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.avgPeriod !== undefined) {
      Duration.encode(message.avgPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.avgShift !== undefined) {
      Duration.encode(message.avgShift, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AvgCounterParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvgCounterParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.avgPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.avgShift = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AvgCounterParams>): AvgCounterParams {
    const message = createBaseAvgCounterParams();
    message.avgPeriod = object.avgPeriod !== undefined && object.avgPeriod !== null ? Duration.fromPartial(object.avgPeriod) : undefined;
    message.avgShift = object.avgShift !== undefined && object.avgShift !== null ? Duration.fromPartial(object.avgShift) : undefined;
    return message;
  },
  fromAmino(object: AvgCounterParamsAmino): AvgCounterParams {
    const message = createBaseAvgCounterParams();
    if (object.avg_period !== undefined && object.avg_period !== null) {
      message.avgPeriod = Duration.fromAmino(object.avg_period);
    }
    if (object.avg_shift !== undefined && object.avg_shift !== null) {
      message.avgShift = Duration.fromAmino(object.avg_shift);
    }
    return message;
  },
  toAmino(message: AvgCounterParams): AvgCounterParamsAmino {
    const obj: any = {};
    obj.avg_period = message.avgPeriod ? Duration.toAmino(message.avgPeriod) : undefined;
    obj.avg_shift = message.avgShift ? Duration.toAmino(message.avgShift) : undefined;
    return obj;
  },
  fromAminoMsg(object: AvgCounterParamsAminoMsg): AvgCounterParams {
    return AvgCounterParams.fromAmino(object.value);
  },
  fromProtoMsg(message: AvgCounterParamsProtoMsg): AvgCounterParams {
    return AvgCounterParams.decode(message.value);
  },
  toProto(message: AvgCounterParams): Uint8Array {
    return AvgCounterParams.encode(message).finish();
  },
  toProtoMsg(message: AvgCounterParams): AvgCounterParamsProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.AvgCounterParams",
      value: AvgCounterParams.encode(message).finish()
    };
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
  typeUrl: "/umee.oracle.v1.Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Denom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Denom>): Denom {
    const message = createBaseDenom();
    message.baseDenom = object.baseDenom ?? "";
    message.symbolDenom = object.symbolDenom ?? "";
    message.exponent = object.exponent ?? 0;
    return message;
  },
  fromAmino(object: DenomAmino): Denom {
    const message = createBaseDenom();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.symbol_denom !== undefined && object.symbol_denom !== null) {
      message.symbolDenom = object.symbol_denom;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    return message;
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
    obj.symbol_denom = message.symbolDenom;
    obj.exponent = message.exponent;
    return obj;
  },
  fromAminoMsg(object: DenomAminoMsg): Denom {
    return Denom.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomProtoMsg): Denom {
    return Denom.decode(message.value);
  },
  toProto(message: Denom): Uint8Array {
    return Denom.encode(message).finish();
  },
  toProtoMsg(message: Denom): DenomProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.Denom",
      value: Denom.encode(message).finish()
    };
  }
};
function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return {
    hash: "",
    voter: "",
    submitBlock: BigInt(0)
  };
}
export const AggregateExchangeRatePrevote = {
  typeUrl: "/umee.oracle.v1.AggregateExchangeRatePrevote",
  encode(message: AggregateExchangeRatePrevote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.submitBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.submitBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AggregateExchangeRatePrevote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.submitBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.voter = object.voter ?? "";
    message.submitBlock = object.submitBlock !== undefined && object.submitBlock !== null ? BigInt(object.submitBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AggregateExchangeRatePrevoteAmino): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.submit_block !== undefined && object.submit_block !== null) {
      message.submitBlock = BigInt(object.submit_block);
    }
    return message;
  },
  toAmino(message: AggregateExchangeRatePrevote): AggregateExchangeRatePrevoteAmino {
    const obj: any = {};
    obj.hash = message.hash;
    obj.voter = message.voter;
    obj.submit_block = message.submitBlock ? message.submitBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AggregateExchangeRatePrevoteAminoMsg): AggregateExchangeRatePrevote {
    return AggregateExchangeRatePrevote.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregateExchangeRatePrevoteProtoMsg): AggregateExchangeRatePrevote {
    return AggregateExchangeRatePrevote.decode(message.value);
  },
  toProto(message: AggregateExchangeRatePrevote): Uint8Array {
    return AggregateExchangeRatePrevote.encode(message).finish();
  },
  toProtoMsg(message: AggregateExchangeRatePrevote): AggregateExchangeRatePrevoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.AggregateExchangeRatePrevote",
      value: AggregateExchangeRatePrevote.encode(message).finish()
    };
  }
};
function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return {
    exchangeRateTuples: [],
    voter: ""
  };
}
export const AggregateExchangeRateVote = {
  typeUrl: "/umee.oracle.v1.AggregateExchangeRateVote",
  encode(message: AggregateExchangeRateVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AggregateExchangeRateVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<AggregateExchangeRateVote>): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples = object.exchangeRateTuples?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: AggregateExchangeRateVoteAmino): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples = object.exchange_rate_tuples?.map(e => ExchangeRateTuple.fromAmino(e)) || [];
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: AggregateExchangeRateVote): AggregateExchangeRateVoteAmino {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchange_rate_tuples = message.exchangeRateTuples.map(e => e ? ExchangeRateTuple.toAmino(e) : undefined);
    } else {
      obj.exchange_rate_tuples = [];
    }
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object: AggregateExchangeRateVoteAminoMsg): AggregateExchangeRateVote {
    return AggregateExchangeRateVote.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregateExchangeRateVoteProtoMsg): AggregateExchangeRateVote {
    return AggregateExchangeRateVote.decode(message.value);
  },
  toProto(message: AggregateExchangeRateVote): Uint8Array {
    return AggregateExchangeRateVote.encode(message).finish();
  },
  toProtoMsg(message: AggregateExchangeRateVote): AggregateExchangeRateVoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.AggregateExchangeRateVote",
      value: AggregateExchangeRateVote.encode(message).finish()
    };
  }
};
function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return {
    denom: "",
    exchangeRate: ""
  };
}
export const ExchangeRateTuple = {
  typeUrl: "/umee.oracle.v1.ExchangeRateTuple",
  encode(message: ExchangeRateTuple, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.denom = object.denom ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
  fromAmino(object: ExchangeRateTupleAmino): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    return message;
  },
  toAmino(message: ExchangeRateTuple): ExchangeRateTupleAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.exchange_rate = message.exchangeRate;
    return obj;
  },
  fromAminoMsg(object: ExchangeRateTupleAminoMsg): ExchangeRateTuple {
    return ExchangeRateTuple.fromAmino(object.value);
  },
  fromProtoMsg(message: ExchangeRateTupleProtoMsg): ExchangeRateTuple {
    return ExchangeRateTuple.decode(message.value);
  },
  toProto(message: ExchangeRateTuple): Uint8Array {
    return ExchangeRateTuple.encode(message).finish();
  },
  toProtoMsg(message: ExchangeRateTuple): ExchangeRateTupleProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.ExchangeRateTuple",
      value: ExchangeRateTuple.encode(message).finish()
    };
  }
};
function createBaseAvgCounter(): AvgCounter {
  return {
    sum: "",
    num: 0,
    start: new Date()
  };
}
export const AvgCounter = {
  typeUrl: "/umee.oracle.v1.AvgCounter",
  encode(message: AvgCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sum !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.sum, 18).atomics);
    }
    if (message.num !== 0) {
      writer.uint32(16).uint32(message.num);
    }
    if (message.start !== undefined) {
      Timestamp.encode(toTimestamp(message.start), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AvgCounter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvgCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sum = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.num = reader.uint32();
          break;
        case 3:
          message.start = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AvgCounter>): AvgCounter {
    const message = createBaseAvgCounter();
    message.sum = object.sum ?? "";
    message.num = object.num ?? 0;
    message.start = object.start ?? undefined;
    return message;
  },
  fromAmino(object: AvgCounterAmino): AvgCounter {
    const message = createBaseAvgCounter();
    if (object.sum !== undefined && object.sum !== null) {
      message.sum = object.sum;
    }
    if (object.num !== undefined && object.num !== null) {
      message.num = object.num;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = fromTimestamp(Timestamp.fromAmino(object.start));
    }
    return message;
  },
  toAmino(message: AvgCounter): AvgCounterAmino {
    const obj: any = {};
    obj.sum = message.sum;
    obj.num = message.num;
    obj.start = message.start ? Timestamp.toAmino(toTimestamp(message.start)) : undefined;
    return obj;
  },
  fromAminoMsg(object: AvgCounterAminoMsg): AvgCounter {
    return AvgCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: AvgCounterProtoMsg): AvgCounter {
    return AvgCounter.decode(message.value);
  },
  toProto(message: AvgCounter): Uint8Array {
    return AvgCounter.encode(message).finish();
  },
  toProtoMsg(message: AvgCounter): AvgCounterProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.AvgCounter",
      value: AvgCounter.encode(message).finish()
    };
  }
};
function createBaseDenomExchangeRate(): DenomExchangeRate {
  return {
    denom: "",
    rate: "",
    timestamp: new Date()
  };
}
export const DenomExchangeRate = {
  typeUrl: "/umee.oracle.v1.DenomExchangeRate",
  encode(message: DenomExchangeRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomExchangeRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomExchangeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomExchangeRate>): DenomExchangeRate {
    const message = createBaseDenomExchangeRate();
    message.denom = object.denom ?? "";
    message.rate = object.rate ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: DenomExchangeRateAmino): DenomExchangeRate {
    const message = createBaseDenomExchangeRate();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: DenomExchangeRate): DenomExchangeRateAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.rate = message.rate;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomExchangeRateAminoMsg): DenomExchangeRate {
    return DenomExchangeRate.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomExchangeRateProtoMsg): DenomExchangeRate {
    return DenomExchangeRate.decode(message.value);
  },
  toProto(message: DenomExchangeRate): Uint8Array {
    return DenomExchangeRate.encode(message).finish();
  },
  toProtoMsg(message: DenomExchangeRate): DenomExchangeRateProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.DenomExchangeRate",
      value: DenomExchangeRate.encode(message).finish()
    };
  }
};