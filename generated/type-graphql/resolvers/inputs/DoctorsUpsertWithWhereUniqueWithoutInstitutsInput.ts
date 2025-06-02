import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutInstitutsInput } from "../inputs/DoctorsCreateWithoutInstitutsInput";
import { DoctorsUpdateWithoutInstitutsInput } from "../inputs/DoctorsUpdateWithoutInstitutsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpsertWithWhereUniqueWithoutInstitutsInput", {})
export class DoctorsUpsertWithWhereUniqueWithoutInstitutsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutInstitutsInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutInstitutsInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutInstitutsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutInstitutsInput;
}
