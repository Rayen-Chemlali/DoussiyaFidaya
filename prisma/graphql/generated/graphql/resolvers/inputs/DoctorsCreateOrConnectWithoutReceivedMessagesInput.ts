import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutReceivedMessagesInput } from "../inputs/DoctorsCreateWithoutReceivedMessagesInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateOrConnectWithoutReceivedMessagesInput", {})
export class DoctorsCreateOrConnectWithoutReceivedMessagesInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutReceivedMessagesInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutReceivedMessagesInput;
}
