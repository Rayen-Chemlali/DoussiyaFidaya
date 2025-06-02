import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutSentMessagesInput } from "../inputs/DoctorsCreateWithoutSentMessagesInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateOrConnectWithoutSentMessagesInput", {})
export class DoctorsCreateOrConnectWithoutSentMessagesInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutSentMessagesInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutSentMessagesInput;
}
