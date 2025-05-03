import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutPrescriptionsInput } from "../inputs/DoctorsCreateWithoutPrescriptionsInput";
import { DoctorsUpdateWithoutPrescriptionsInput } from "../inputs/DoctorsUpdateWithoutPrescriptionsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutPrescriptionsInput", {})
export class DoctorsUpsertWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutPrescriptionsInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutPrescriptionsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutPrescriptionsInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
