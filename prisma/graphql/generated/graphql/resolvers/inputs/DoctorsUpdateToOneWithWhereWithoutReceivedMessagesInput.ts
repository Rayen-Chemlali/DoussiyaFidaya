import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutReceivedMessagesInput } from "../inputs/DoctorsUpdateWithoutReceivedMessagesInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutReceivedMessagesInput", {})
export class DoctorsUpdateToOneWithWhereWithoutReceivedMessagesInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutReceivedMessagesInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutReceivedMessagesInput;
}
