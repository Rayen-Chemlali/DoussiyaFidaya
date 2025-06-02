import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MessageMaxAggregate", {})
export class MessageMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  senderId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  receiverId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isRead!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientId!: string | null;
}
