import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateWithoutDoctorsInput } from "../inputs/PrescriptionsCreateWithoutDoctorsInput";
import { PrescriptionsUpdateWithoutDoctorsInput } from "../inputs/PrescriptionsUpdateWithoutDoctorsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsUpsertWithWhereUniqueWithoutDoctorsInput", {})
export class PrescriptionsUpsertWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  update!: PrescriptionsUpdateWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: PrescriptionsCreateWithoutDoctorsInput;
}
