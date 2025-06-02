import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MessageAttachmentMaxAggregate", {})
export class MessageAttachmentMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filename!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mimeType!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  size!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  messageId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
