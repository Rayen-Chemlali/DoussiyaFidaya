import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutInstituts_medicauxInput } from "../inputs/DoctorsUpdateWithoutInstituts_medicauxInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateWithWhereUniqueWithoutInstituts_medicauxInput", {})
export class DoctorsUpdateWithWhereUniqueWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutInstituts_medicauxInput;
}
