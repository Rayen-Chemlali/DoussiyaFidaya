import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCreateWithoutInstituts_medicauxInput } from "../inputs/Doctor_institutsCreateWithoutInstituts_medicauxInput";
import { Doctor_institutsUpdateWithoutInstituts_medicauxInput } from "../inputs/Doctor_institutsUpdateWithoutInstituts_medicauxInput";
import { Doctor_institutsWhereUniqueInput } from "../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.InputType("Doctor_institutsUpsertWithWhereUniqueWithoutInstituts_medicauxInput", {})
export class Doctor_institutsUpsertWithWhereUniqueWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => Doctor_institutsWhereUniqueInput, {
    nullable: false
  })
  where!: Doctor_institutsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Doctor_institutsUpdateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  update!: Doctor_institutsUpdateWithoutInstituts_medicauxInput;

  @TypeGraphQL.Field(_type => Doctor_institutsCreateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  create!: Doctor_institutsCreateWithoutInstituts_medicauxInput;
}
