import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutSentMessagesInput } from "../inputs/DoctorsUpdateWithoutSentMessagesInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutSentMessagesInput", {})
export class DoctorsUpdateToOneWithWhereWithoutSentMessagesInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutSentMessagesInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutSentMessagesInput;
}
