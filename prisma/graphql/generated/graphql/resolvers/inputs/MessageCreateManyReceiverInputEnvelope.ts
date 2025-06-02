import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyReceiverInput } from "../inputs/MessageCreateManyReceiverInput";

@TypeGraphQL.InputType("MessageCreateManyReceiverInputEnvelope", {})
export class MessageCreateManyReceiverInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManyReceiverInput], {
    nullable: false
  })
  data!: MessageCreateManyReceiverInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
