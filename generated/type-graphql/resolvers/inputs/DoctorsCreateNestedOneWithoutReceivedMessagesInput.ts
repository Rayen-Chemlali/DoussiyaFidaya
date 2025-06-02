import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutReceivedMessagesInput } from "../inputs/DoctorsCreateOrConnectWithoutReceivedMessagesInput";
import { DoctorsCreateWithoutReceivedMessagesInput } from "../inputs/DoctorsCreateWithoutReceivedMessagesInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedOneWithoutReceivedMessagesInput", {})
export class DoctorsCreateNestedOneWithoutReceivedMessagesInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutReceivedMessagesInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutReceivedMessagesInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;
}
