import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutInstituts_medicauxInput } from "../inputs/DoctorsCreateWithoutInstituts_medicauxInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateOrConnectWithoutInstituts_medicauxInput", {})
export class DoctorsCreateOrConnectWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutInstituts_medicauxInput;
}
