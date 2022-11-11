import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** EventDelegateFeedConsent is emitted on Msg/DelegateFeedConsent */

export interface EventDelegateFeedConsent {
  /** Operator bech32 address who delegates his feed consent */
  operator: string;
  /** Delegate bech32 address */

  delegate: string;
}
/** EventDelegateFeedConsent is emitted on Msg/DelegateFeedConsent */

export interface EventDelegateFeedConsentSDKType {
  /** Operator bech32 address who delegates his feed consent */
  operator: string;
  /** Delegate bech32 address */

  delegate: string;
}
/** EventSetFxRate is emitted on exchange rate update */

export interface EventSetFxRate {
  /** uToken denom */
  denom: string;
  /** Exchange rate (based to USD) */

  rate: string;
}
/** EventSetFxRate is emitted on exchange rate update */

export interface EventSetFxRateSDKType {
  /** uToken denom */
  denom: string;
  /** Exchange rate (based to USD) */

  rate: string;
}

function createBaseEventDelegateFeedConsent(): EventDelegateFeedConsent {
  return {
    operator: "",
    delegate: ""
  };
}

export const EventDelegateFeedConsent = {
  encode(message: EventDelegateFeedConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegateFeedConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegateFeedConsent();

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

  fromPartial(object: DeepPartial<EventDelegateFeedConsent>): EventDelegateFeedConsent {
    const message = createBaseEventDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  }

};

function createBaseEventSetFxRate(): EventSetFxRate {
  return {
    denom: "",
    rate: ""
  };
}

export const EventSetFxRate = {
  encode(message: EventSetFxRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetFxRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetFxRate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.rate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSetFxRate>): EventSetFxRate {
    const message = createBaseEventSetFxRate();
    message.denom = object.denom ?? "";
    message.rate = object.rate ?? "";
    return message;
  }

};