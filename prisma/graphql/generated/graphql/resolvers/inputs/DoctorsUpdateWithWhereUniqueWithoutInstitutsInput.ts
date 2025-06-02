import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutInstitutsInput } from "../inputs/DoctorsUpdateWithoutInstitutsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateWithWhereUniqueWithoutInstitutsInput", {})
export class DoctorsUpdateWithWhereUniqueWithoutInstitutsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutInstitutsInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutInstitutsInput;
}
