import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { IBCTransferStatus, iBCTransferStatusFromJSON, iBCTransferStatusToJSON } from "./quota";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuota {
  /** authority is the address of the governance account or the Emergency Group. */
  authority: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description: string;
  /** total quota defines the total outflow of ibc-transfer in USD */
  total: string;
  /** per_denom quota for outflows per denom. All denoms have the same quota size. */
  perDenom: string;
  /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
  quotaDuration: Duration;
}
export interface MsgGovUpdateQuotaProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota";
  value: Uint8Array;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaAmino {
  /** authority is the address of the governance account or the Emergency Group. */
  authority?: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description?: string;
  /** total quota defines the total outflow of ibc-transfer in USD */
  total?: string;
  /** per_denom quota for outflows per denom. All denoms have the same quota size. */
  per_denom?: string;
  /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
  quota_duration?: DurationAmino;
}
export interface MsgGovUpdateQuotaAminoMsg {
  type: "/umee.uibc.v1.MsgGovUpdateQuota";
  value: MsgGovUpdateQuotaAmino;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaSDKType {
  authority: string;
  description: string;
  total: string;
  per_denom: string;
  quota_duration: DurationSDKType;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponse {}
export interface MsgGovUpdateQuotaResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse";
  value: Uint8Array;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponseAmino {}
export interface MsgGovUpdateQuotaResponseAminoMsg {
  type: "/umee.uibc.v1.MsgGovUpdateQuotaResponse";
  value: MsgGovUpdateQuotaResponseAmino;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponseSDKType {}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatus {
  /** authority is the address of the governance account or the Emergency Group. */
  authority: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description: string;
  /** ibc_status defines status for ibc transfers */
  ibcStatus: IBCTransferStatus;
}
export interface MsgGovSetIBCStatusProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus";
  value: Uint8Array;
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusAmino {
  /** authority is the address of the governance account or the Emergency Group. */
  authority?: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description?: string;
  /** ibc_status defines status for ibc transfers */
  ibc_status?: IBCTransferStatus;
}
export interface MsgGovSetIBCStatusAminoMsg {
  type: "/umee.uibc.v1.MsgGovSetIBCStatus";
  value: MsgGovSetIBCStatusAmino;
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusSDKType {
  authority: string;
  description: string;
  ibc_status: IBCTransferStatus;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponse {}
export interface MsgGovSetIBCStatusResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
  value: Uint8Array;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponseAmino {}
export interface MsgGovSetIBCStatusResponseAminoMsg {
  type: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
  value: MsgGovSetIBCStatusResponseAmino;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponseSDKType {}
function createBaseMsgGovUpdateQuota(): MsgGovUpdateQuota {
  return {
    authority: "",
    description: "",
    total: "",
    perDenom: "",
    quotaDuration: Duration.fromPartial({})
  };
}
export const MsgGovUpdateQuota = {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
  encode(message: MsgGovUpdateQuota, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.total !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    if (message.perDenom !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.perDenom, 18).atomics);
    }
    if (message.quotaDuration !== undefined) {
      Duration.encode(message.quotaDuration, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGovUpdateQuota {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovUpdateQuota();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.total = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.perDenom = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.quotaDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGovUpdateQuota>): MsgGovUpdateQuota {
    const message = createBaseMsgGovUpdateQuota();
    message.authority = object.authority ?? "";
    message.description = object.description ?? "";
    message.total = object.total ?? "";
    message.perDenom = object.perDenom ?? "";
    message.quotaDuration = object.quotaDuration !== undefined && object.quotaDuration !== null ? Duration.fromPartial(object.quotaDuration) : undefined;
    return message;
  },
  fromAmino(object: MsgGovUpdateQuotaAmino): MsgGovUpdateQuota {
    const message = createBaseMsgGovUpdateQuota();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.per_denom !== undefined && object.per_denom !== null) {
      message.perDenom = object.per_denom;
    }
    if (object.quota_duration !== undefined && object.quota_duration !== null) {
      message.quotaDuration = Duration.fromAmino(object.quota_duration);
    }
    return message;
  },
  toAmino(message: MsgGovUpdateQuota): MsgGovUpdateQuotaAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.description = message.description;
    obj.total = message.total;
    obj.per_denom = message.perDenom;
    obj.quota_duration = message.quotaDuration ? Duration.toAmino(message.quotaDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateQuotaAminoMsg): MsgGovUpdateQuota {
    return MsgGovUpdateQuota.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateQuotaProtoMsg): MsgGovUpdateQuota {
    return MsgGovUpdateQuota.decode(message.value);
  },
  toProto(message: MsgGovUpdateQuota): Uint8Array {
    return MsgGovUpdateQuota.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateQuota): MsgGovUpdateQuotaProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
      value: MsgGovUpdateQuota.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateQuotaResponse(): MsgGovUpdateQuotaResponse {
  return {};
}
export const MsgGovUpdateQuotaResponse = {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse",
  encode(_: MsgGovUpdateQuotaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGovUpdateQuotaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovUpdateQuotaResponse();
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
  fromPartial(_: Partial<MsgGovUpdateQuotaResponse>): MsgGovUpdateQuotaResponse {
    const message = createBaseMsgGovUpdateQuotaResponse();
    return message;
  },
  fromAmino(_: MsgGovUpdateQuotaResponseAmino): MsgGovUpdateQuotaResponse {
    const message = createBaseMsgGovUpdateQuotaResponse();
    return message;
  },
  toAmino(_: MsgGovUpdateQuotaResponse): MsgGovUpdateQuotaResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateQuotaResponseAminoMsg): MsgGovUpdateQuotaResponse {
    return MsgGovUpdateQuotaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateQuotaResponseProtoMsg): MsgGovUpdateQuotaResponse {
    return MsgGovUpdateQuotaResponse.decode(message.value);
  },
  toProto(message: MsgGovUpdateQuotaResponse): Uint8Array {
    return MsgGovUpdateQuotaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateQuotaResponse): MsgGovUpdateQuotaResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse",
      value: MsgGovUpdateQuotaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetIBCStatus(): MsgGovSetIBCStatus {
  return {
    authority: "",
    description: "",
    ibcStatus: 0
  };
}
export const MsgGovSetIBCStatus = {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
  encode(message: MsgGovSetIBCStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.ibcStatus !== 0) {
      writer.uint32(32).int32(message.ibcStatus);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGovSetIBCStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSetIBCStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.ibcStatus = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGovSetIBCStatus>): MsgGovSetIBCStatus {
    const message = createBaseMsgGovSetIBCStatus();
    message.authority = object.authority ?? "";
    message.description = object.description ?? "";
    message.ibcStatus = object.ibcStatus ?? 0;
    return message;
  },
  fromAmino(object: MsgGovSetIBCStatusAmino): MsgGovSetIBCStatus {
    const message = createBaseMsgGovSetIBCStatus();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.ibc_status !== undefined && object.ibc_status !== null) {
      message.ibcStatus = iBCTransferStatusFromJSON(object.ibc_status);
    }
    return message;
  },
  toAmino(message: MsgGovSetIBCStatus): MsgGovSetIBCStatusAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.description = message.description;
    obj.ibc_status = iBCTransferStatusToJSON(message.ibcStatus);
    return obj;
  },
  fromAminoMsg(object: MsgGovSetIBCStatusAminoMsg): MsgGovSetIBCStatus {
    return MsgGovSetIBCStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetIBCStatusProtoMsg): MsgGovSetIBCStatus {
    return MsgGovSetIBCStatus.decode(message.value);
  },
  toProto(message: MsgGovSetIBCStatus): Uint8Array {
    return MsgGovSetIBCStatus.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetIBCStatus): MsgGovSetIBCStatusProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
      value: MsgGovSetIBCStatus.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetIBCStatusResponse(): MsgGovSetIBCStatusResponse {
  return {};
}
export const MsgGovSetIBCStatusResponse = {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse",
  encode(_: MsgGovSetIBCStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGovSetIBCStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSetIBCStatusResponse();
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
  fromPartial(_: Partial<MsgGovSetIBCStatusResponse>): MsgGovSetIBCStatusResponse {
    const message = createBaseMsgGovSetIBCStatusResponse();
    return message;
  },
  fromAmino(_: MsgGovSetIBCStatusResponseAmino): MsgGovSetIBCStatusResponse {
    const message = createBaseMsgGovSetIBCStatusResponse();
    return message;
  },
  toAmino(_: MsgGovSetIBCStatusResponse): MsgGovSetIBCStatusResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSetIBCStatusResponseAminoMsg): MsgGovSetIBCStatusResponse {
    return MsgGovSetIBCStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetIBCStatusResponseProtoMsg): MsgGovSetIBCStatusResponse {
    return MsgGovSetIBCStatusResponse.decode(message.value);
  },
  toProto(message: MsgGovSetIBCStatusResponse): Uint8Array {
    return MsgGovSetIBCStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetIBCStatusResponse): MsgGovSetIBCStatusResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse",
      value: MsgGovSetIBCStatusResponse.encode(message).finish()
    };
  }
};