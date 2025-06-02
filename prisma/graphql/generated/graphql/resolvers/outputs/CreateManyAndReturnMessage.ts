import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctors } from "../../models/Doctors";

@TypeGraphQL.ObjectType("CreateManyAndReturnMessage", {})
export class CreateManyAndReturnMessage {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  senderId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  receiverId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isRead!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientId!: string | null;

  @TypeGraphQL.Field(_type => Doctors, {
    nullable: false
  })
  sender!: Doctors;

  @TypeGraphQL.Field(_type => Doctors, {
    nullable: false
  })
  receiver!: Doctors;
}
