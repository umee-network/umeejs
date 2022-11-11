import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit an aggregate
 * exchange rate prevote.
 */

export interface MsgAggregateExchangeRatePrevote {
  hash: string;
  /** Feeder is the author and the signer of the message. */

  feeder: string;
  validator: string;
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit an aggregate
 * exchange rate prevote.
 */

export interface MsgAggregateExchangeRatePrevoteSDKType {
  hash: string;
  /** Feeder is the author and the signer of the message. */

  feeder: string;
  validator: string;
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 */

export interface MsgAggregateExchangeRatePrevoteResponse {}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 */

export interface MsgAggregateExchangeRatePrevoteResponseSDKType {}
/**
 * MsgAggregateExchangeRateVote represents a message to submit anaggregate
 * exchange rate vote.
 */

export interface MsgAggregateExchangeRateVote {
  salt: string;
  exchangeRates: string;
  /** Feeder is the author and the signer of the message. */

  feeder: string;
  validator: string;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit anaggregate
 * exchange rate vote.
 */

export interface MsgAggregateExchangeRateVoteSDKType {
  salt: string;
  exchange_rates: string;
  /** Feeder is the author and the signer of the message. */

  feeder: string;
  validator: string;
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 */

export interface MsgAggregateExchangeRateVoteResponse {}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 */

export interface MsgAggregateExchangeRateVoteResponseSDKType {}
/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting rights
 * to another address.
 */

export interface MsgDelegateFeedConsent {
  /** Operator is the author and the signer of the message. */
  operator: string;
  delegate: string;
}
/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting rights
 * to another address.
 */

export interface MsgDelegateFeedConsentSDKType {
  /** Operator is the author and the signer of the message. */
  operator: string;
  delegate: string;
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 */

export interface MsgDelegateFeedConsentResponse {}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 */

export interface MsgDelegateFeedConsentResponseSDKType {}

function createBaseMsgAggregateExchangeRatePrevote(): MsgAggregateExchangeRatePrevote {
  return {
    hash: "",
    feeder: "",
    validator: ""
  };
}

export const MsgAggregateExchangeRatePrevote = {
  encode(message: MsgAggregateExchangeRatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }

    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRatePrevote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;

        case 2:
          message.feeder = reader.string();
          break;

        case 3:
          message.validator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAggregateExchangeRatePrevote>): MsgAggregateExchangeRatePrevote {
    const message = createBaseMsgAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  }

};

function createBaseMsgAggregateExchangeRatePrevoteResponse(): MsgAggregateExchangeRatePrevoteResponse {
  return {};
}

export const MsgAggregateExchangeRatePrevoteResponse = {
  encode(_: MsgAggregateExchangeRatePrevoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgAggregateExchangeRatePrevoteResponse>): MsgAggregateExchangeRatePrevoteResponse {
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
    return message;
  }

};

function createBaseMsgAggregateExchangeRateVote(): MsgAggregateExchangeRateVote {
  return {
    salt: "",
    exchangeRates: "",
    feeder: "",
    validator: ""
  };
}

export const MsgAggregateExchangeRateVote = {
  encode(message: MsgAggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.salt !== "") {
      writer.uint32(10).string(message.salt);
    }

    if (message.exchangeRates !== "") {
      writer.uint32(18).string(message.exchangeRates);
    }

    if (message.feeder !== "") {
      writer.uint32(26).string(message.feeder);
    }

    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.salt = reader.string();
          break;

        case 2:
          message.exchangeRates = reader.string();
          break;

        case 3:
          message.feeder = reader.string();
          break;

        case 4:
          message.validator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote();
    message.salt = object.salt ?? "";
    message.exchangeRates = object.exchangeRates ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  }

};

function createBaseMsgAggregateExchangeRateVoteResponse(): MsgAggregateExchangeRateVoteResponse {
  return {};
}

export const MsgAggregateExchangeRateVoteResponse = {
  encode(_: MsgAggregateExchangeRateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    return message;
  }

};

function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
  return {
    operator: "",
    delegate: ""
  };
}

export const MsgDelegateFeedConsent = {
  encode(message: MsgDelegateFeedConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.delegate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  }

};

function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
  return {};
}

export const MsgDelegateFeedConsentResponse = {
  encode(_: MsgDelegateFeedConsentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  }

};