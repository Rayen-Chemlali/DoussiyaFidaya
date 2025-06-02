import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutSentMessagesInput } from "../inputs/DoctorsCreateWithoutSentMessagesInput";
import { DoctorsUpdateWithoutSentMessagesInput } from "../inputs/DoctorsUpdateWithoutSentMessagesInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutSentMessagesInput", {})
export class DoctorsUpsertWithoutSentMessagesInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutSentMessagesInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutSentMessagesInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutSentMessagesInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutSentMessagesInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
