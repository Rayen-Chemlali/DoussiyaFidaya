import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutSentMessagesInput } from "../inputs/DoctorsCreateOrConnectWithoutSentMessagesInput";
import { DoctorsCreateWithoutSentMessagesInput } from "../inputs/DoctorsCreateWithoutSentMessagesInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedOneWithoutSentMessagesInput", {})
export class DoctorsCreateNestedOneWithoutSentMessagesInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutSentMessagesInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutSentMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutSentMessagesInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutSentMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;
}
