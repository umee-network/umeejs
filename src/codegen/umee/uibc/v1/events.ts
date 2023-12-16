import { IBCTransferStatus, iBCTransferStatusFromJSON, iBCTransferStatusToJSON } from "./quota";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevert {
  /** failure event type */
  failureType: string;
  /** ibc packet data */
  packet: string;
}
export interface EventBadRevertProtoMsg {
  typeUrl: "/umee.uibc.v1.EventBadRevert";
  value: Uint8Array;
}
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevertAmino {
  /** failure event type */
  failure_type?: string;
  /** ibc packet data */
  packet?: string;
}
export interface EventBadRevertAminoMsg {
  type: "/umee.uibc.v1.EventBadRevert";
  value: EventBadRevertAmino;
}
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevertSDKType {
  failure_type: string;
  packet: string;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatus {
  status: IBCTransferStatus;
}
export interface EventIBCTransferStatusProtoMsg {
  typeUrl: "/umee.uibc.v1.EventIBCTransferStatus";
  value: Uint8Array;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatusAmino {
  status?: IBCTransferStatus;
}
export interface EventIBCTransferStatusAminoMsg {
  type: "/umee.uibc.v1.EventIBCTransferStatus";
  value: EventIBCTransferStatusAmino;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatusSDKType {
  status: IBCTransferStatus;
}
function createBaseEventBadRevert(): EventBadRevert {
  return {
    failureType: "",
    packet: ""
  };
}
export const EventBadRevert = {
  typeUrl: "/umee.uibc.v1.EventBadRevert",
  encode(message: EventBadRevert, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.failureType !== "") {
      writer.uint32(10).string(message.failureType);
    }
    if (message.packet !== "") {
      writer.uint32(18).string(message.packet);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBadRevert {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBadRevert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.failureType = reader.string();
          break;
        case 2:
          message.packet = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBadRevert>): EventBadRevert {
    const message = createBaseEventBadRevert();
    message.failureType = object.failureType ?? "";
    message.packet = object.packet ?? "";
    return message;
  },
  fromAmino(object: EventBadRevertAmino): EventBadRevert {
    const message = createBaseEventBadRevert();
    if (object.failure_type !== undefined && object.failure_type !== null) {
      message.failureType = object.failure_type;
    }
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = object.packet;
    }
    return message;
  },
  toAmino(message: EventBadRevert): EventBadRevertAmino {
    const obj: any = {};
    obj.failure_type = message.failureType;
    obj.packet = message.packet;
    return obj;
  },
  fromAminoMsg(object: EventBadRevertAminoMsg): EventBadRevert {
    return EventBadRevert.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBadRevertProtoMsg): EventBadRevert {
    return EventBadRevert.decode(message.value);
  },
  toProto(message: EventBadRevert): Uint8Array {
    return EventBadRevert.encode(message).finish();
  },
  toProtoMsg(message: EventBadRevert): EventBadRevertProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.EventBadRevert",
      value: EventBadRevert.encode(message).finish()
    };
  }
};
function createBaseEventIBCTransferStatus(): EventIBCTransferStatus {
  return {
    status: 0
  };
}
export const EventIBCTransferStatus = {
  typeUrl: "/umee.uibc.v1.EventIBCTransferStatus",
  encode(message: EventIBCTransferStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventIBCTransferStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIBCTransferStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventIBCTransferStatus>): EventIBCTransferStatus {
    const message = createBaseEventIBCTransferStatus();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: EventIBCTransferStatusAmino): EventIBCTransferStatus {
    const message = createBaseEventIBCTransferStatus();
    if (object.status !== undefined && object.status !== null) {
      message.status = iBCTransferStatusFromJSON(object.status);
    }
    return message;
  },
  toAmino(message: EventIBCTransferStatus): EventIBCTransferStatusAmino {
    const obj: any = {};
    obj.status = iBCTransferStatusToJSON(message.status);
    return obj;
  },
  fromAminoMsg(object: EventIBCTransferStatusAminoMsg): EventIBCTransferStatus {
    return EventIBCTransferStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: EventIBCTransferStatusProtoMsg): EventIBCTransferStatus {
    return EventIBCTransferStatus.decode(message.value);
  },
  toProto(message: EventIBCTransferStatus): Uint8Array {
    return EventIBCTransferStatus.encode(message).finish();
  },
  toProtoMsg(message: EventIBCTransferStatus): EventIBCTransferStatusProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.EventIBCTransferStatus",
      value: EventIBCTransferStatus.encode(message).finish()
    };
  }
};