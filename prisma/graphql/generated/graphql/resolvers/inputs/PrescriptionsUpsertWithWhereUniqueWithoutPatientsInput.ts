import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateWithoutPatientsInput } from "../inputs/PrescriptionsCreateWithoutPatientsInput";
import { PrescriptionsUpdateWithoutPatientsInput } from "../inputs/PrescriptionsUpdateWithoutPatientsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsUpsertWithWhereUniqueWithoutPatientsInput", {})
export class PrescriptionsUpsertWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateWithoutPatientsInput, {
    nullable: false
  })
  update!: PrescriptionsUpdateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: PrescriptionsCreateWithoutPatientsInput;
}
