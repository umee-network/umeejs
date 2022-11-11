import { Token, TokenSDKType } from "./leverage";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * UpdateRegistryProposal defines a governance proposal type where the token
 * registry can be updated in the Umee capital facility. Note, the registry
 * defined in the proposal replaces the current registry in its entirety.
 */

export interface UpdateRegistryProposal {
  title: string;
  description: string;
  registry: Token[];
}
/**
 * UpdateRegistryProposal defines a governance proposal type where the token
 * registry can be updated in the Umee capital facility. Note, the registry
 * defined in the proposal replaces the current registry in its entirety.
 */

export interface UpdateRegistryProposalSDKType {
  title: string;
  description: string;
  registry: TokenSDKType[];
}

function createBaseUpdateRegistryProposal(): UpdateRegistryProposal {
  return {
    title: "",
    description: "",
    registry: []
  };
}

export const UpdateRegistryProposal = {
  encode(message: UpdateRegistryProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.registry) {
      Token.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRegistryProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.registry.push(Token.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateRegistryProposal>): UpdateRegistryProposal {
    const message = createBaseUpdateRegistryProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.registry = object.registry?.map(e => Token.fromPartial(e)) || [];
    return message;
  }

};