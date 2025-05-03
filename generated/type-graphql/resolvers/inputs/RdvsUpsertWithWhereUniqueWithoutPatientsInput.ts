import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutPatientsInput } from "../inputs/RdvsCreateWithoutPatientsInput";
import { RdvsUpdateWithoutPatientsInput } from "../inputs/RdvsUpdateWithoutPatientsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsUpsertWithWhereUniqueWithoutPatientsInput", {})
export class RdvsUpsertWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RdvsUpdateWithoutPatientsInput, {
    nullable: false
  })
  update!: RdvsUpdateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutPatientsInput;
}
