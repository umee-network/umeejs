import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { InflationParams, InflationParamsAmino, InflationParamsSDKType } from "./ugov";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventMinGasPrice is emitted when MsgGovUpdateMinGasPrice is correctly executed. */
export interface EventMinGasPrice {
  minGasPrices: DecCoin[];
}
export interface EventMinGasPriceProtoMsg {
  typeUrl: "/umee.ugov.v1.EventMinGasPrice";
  value: Uint8Array;
}
/** EventMinGasPrice is emitted when MsgGovUpdateMinGasPrice is correctly executed. */
export interface EventMinGasPriceAmino {
  min_gas_prices?: DecCoinAmino[];
}
export interface EventMinGasPriceAminoMsg {
  type: "/umee.ugov.v1.EventMinGasPrice";
  value: EventMinGasPriceAmino;
}
/** EventMinGasPrice is emitted when MsgGovUpdateMinGasPrice is correctly executed. */
export interface EventMinGasPriceSDKType {
  min_gas_prices: DecCoinSDKType[];
}
/** EventEmergencyGroup is emitted when MsgGovSetEmergencyGroup is correctly executed. */
export interface EventEmergencyGroup {
  emergencyGroup: string;
}
export interface EventEmergencyGroupProtoMsg {
  typeUrl: "/umee.ugov.v1.EventEmergencyGroup";
  value: Uint8Array;
}
/** EventEmergencyGroup is emitted when MsgGovSetEmergencyGroup is correctly executed. */
export interface EventEmergencyGroupAmino {
  emergency_group?: string;
}
export interface EventEmergencyGroupAminoMsg {
  type: "/umee.ugov.v1.EventEmergencyGroup";
  value: EventEmergencyGroupAmino;
}
/** EventEmergencyGroup is emitted when MsgGovSetEmergencyGroup is correctly executed. */
export interface EventEmergencyGroupSDKType {
  emergency_group: string;
}
/** EventInflationParams is emitted when GovUpdateInflationParams is correctly executed. */
export interface EventInflationParams {
  params: InflationParams;
}
export interface EventInflationParamsProtoMsg {
  typeUrl: "/umee.ugov.v1.EventInflationParams";
  value: Uint8Array;
}
/** EventInflationParams is emitted when GovUpdateInflationParams is correctly executed. */
export interface EventInflationParamsAmino {
  params?: InflationParamsAmino;
}
export interface EventInflationParamsAminoMsg {
  type: "/umee.ugov.v1.EventInflationParams";
  value: EventInflationParamsAmino;
}
/** EventInflationParams is emitted when GovUpdateInflationParams is correctly executed. */
export interface EventInflationParamsSDKType {
  params: InflationParamsSDKType;
}
function createBaseEventMinGasPrice(): EventMinGasPrice {
  return {
    minGasPrices: []
  };
}
export const EventMinGasPrice = {
  typeUrl: "/umee.ugov.v1.EventMinGasPrice",
  encode(message: EventMinGasPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMinGasPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMinGasPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minGasPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventMinGasPrice>): EventMinGasPrice {
    const message = createBaseEventMinGasPrice();
    message.minGasPrices = object.minGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventMinGasPriceAmino): EventMinGasPrice {
    const message = createBaseEventMinGasPrice();
    message.minGasPrices = object.min_gas_prices?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventMinGasPrice): EventMinGasPriceAmino {
    const obj: any = {};
    if (message.minGasPrices) {
      obj.min_gas_prices = message.minGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.min_gas_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventMinGasPriceAminoMsg): EventMinGasPrice {
    return EventMinGasPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMinGasPriceProtoMsg): EventMinGasPrice {
    return EventMinGasPrice.decode(message.value);
  },
  toProto(message: EventMinGasPrice): Uint8Array {
    return EventMinGasPrice.encode(message).finish();
  },
  toProtoMsg(message: EventMinGasPrice): EventMinGasPriceProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.EventMinGasPrice",
      value: EventMinGasPrice.encode(message).finish()
    };
  }
};
function createBaseEventEmergencyGroup(): EventEmergencyGroup {
  return {
    emergencyGroup: ""
  };
}
export const EventEmergencyGroup = {
  typeUrl: "/umee.ugov.v1.EventEmergencyGroup",
  encode(message: EventEmergencyGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.emergencyGroup !== "") {
      writer.uint32(10).string(message.emergencyGroup);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEmergencyGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEmergencyGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emergencyGroup = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventEmergencyGroup>): EventEmergencyGroup {
    const message = createBaseEventEmergencyGroup();
    message.emergencyGroup = object.emergencyGroup ?? "";
    return message;
  },
  fromAmino(object: EventEmergencyGroupAmino): EventEmergencyGroup {
    const message = createBaseEventEmergencyGroup();
    if (object.emergency_group !== undefined && object.emergency_group !== null) {
      message.emergencyGroup = object.emergency_group;
    }
    return message;
  },
  toAmino(message: EventEmergencyGroup): EventEmergencyGroupAmino {
    const obj: any = {};
    obj.emergency_group = message.emergencyGroup;
    return obj;
  },
  fromAminoMsg(object: EventEmergencyGroupAminoMsg): EventEmergencyGroup {
    return EventEmergencyGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEmergencyGroupProtoMsg): EventEmergencyGroup {
    return EventEmergencyGroup.decode(message.value);
  },
  toProto(message: EventEmergencyGroup): Uint8Array {
    return EventEmergencyGroup.encode(message).finish();
  },
  toProtoMsg(message: EventEmergencyGroup): EventEmergencyGroupProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.EventEmergencyGroup",
      value: EventEmergencyGroup.encode(message).finish()
    };
  }
};
function createBaseEventInflationParams(): EventInflationParams {
  return {
    params: InflationParams.fromPartial({})
  };
}
export const EventInflationParams = {
  typeUrl: "/umee.ugov.v1.EventInflationParams",
  encode(message: EventInflationParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      InflationParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventInflationParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInflationParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = InflationParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventInflationParams>): EventInflationParams {
    const message = createBaseEventInflationParams();
    message.params = object.params !== undefined && object.params !== null ? InflationParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: EventInflationParamsAmino): EventInflationParams {
    const message = createBaseEventInflationParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = InflationParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: EventInflationParams): EventInflationParamsAmino {
    const obj: any = {};
    obj.params = message.params ? InflationParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventInflationParamsAminoMsg): EventInflationParams {
    return EventInflationParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInflationParamsProtoMsg): EventInflationParams {
    return EventInflationParams.decode(message.value);
  },
  toProto(message: EventInflationParams): Uint8Array {
    return EventInflationParams.encode(message).finish();
  },
  toProtoMsg(message: EventInflationParams): EventInflationParamsProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.EventInflationParams",
      value: EventInflationParams.encode(message).finish()
    };
  }
};