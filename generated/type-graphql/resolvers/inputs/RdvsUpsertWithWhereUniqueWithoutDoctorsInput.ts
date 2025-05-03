import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutDoctorsInput } from "../inputs/RdvsCreateWithoutDoctorsInput";
import { RdvsUpdateWithoutDoctorsInput } from "../inputs/RdvsUpdateWithoutDoctorsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsUpsertWithWhereUniqueWithoutDoctorsInput", {})
export class RdvsUpsertWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RdvsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  update!: RdvsUpdateWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutDoctorsInput;
}
