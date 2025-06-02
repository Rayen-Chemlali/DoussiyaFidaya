import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutSentMessagesInput } from "../inputs/DoctorsCreateOrConnectWithoutSentMessagesInput";
import { DoctorsCreateWithoutSentMessagesInput } from "../inputs/DoctorsCreateWithoutSentMessagesInput";
import { DoctorsUpdateToOneWithWhereWithoutSentMessagesInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutSentMessagesInput";
import { DoctorsUpsertWithoutSentMessagesInput } from "../inputs/DoctorsUpsertWithoutSentMessagesInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneRequiredWithoutSentMessagesNestedInput", {})
export class DoctorsUpdateOneRequiredWithoutSentMessagesNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutSentMessagesInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutSentMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutSentMessagesInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutSentMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutSentMessagesInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutSentMessagesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutSentMessagesInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutSentMessagesInput | undefined;
}
