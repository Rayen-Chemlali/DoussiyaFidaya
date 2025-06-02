import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutReceivedMessagesInput } from "../inputs/DoctorsCreateOrConnectWithoutReceivedMessagesInput";
import { DoctorsCreateWithoutReceivedMessagesInput } from "../inputs/DoctorsCreateWithoutReceivedMessagesInput";
import { DoctorsUpdateToOneWithWhereWithoutReceivedMessagesInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutReceivedMessagesInput";
import { DoctorsUpsertWithoutReceivedMessagesInput } from "../inputs/DoctorsUpsertWithoutReceivedMessagesInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneRequiredWithoutReceivedMessagesNestedInput", {})
export class DoctorsUpdateOneRequiredWithoutReceivedMessagesNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutReceivedMessagesInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutReceivedMessagesInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutReceivedMessagesInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutReceivedMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutReceivedMessagesInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutReceivedMessagesInput | undefined;
}
