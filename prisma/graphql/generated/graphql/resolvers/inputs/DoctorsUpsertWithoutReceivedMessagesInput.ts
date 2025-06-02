import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutReceivedMessagesInput } from "../inputs/DoctorsCreateWithoutReceivedMessagesInput";
import { DoctorsUpdateWithoutReceivedMessagesInput } from "../inputs/DoctorsUpdateWithoutReceivedMessagesInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutReceivedMessagesInput", {})
export class DoctorsUpsertWithoutReceivedMessagesInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutReceivedMessagesInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutReceivedMessagesInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutReceivedMessagesInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutReceivedMessagesInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
