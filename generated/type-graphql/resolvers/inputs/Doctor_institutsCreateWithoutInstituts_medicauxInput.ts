import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateNestedOneWithoutDoctor_institutsInput } from "../inputs/DoctorsCreateNestedOneWithoutDoctor_institutsInput";

@TypeGraphQL.InputType("Doctor_institutsCreateWithoutInstituts_medicauxInput", {})
export class Doctor_institutsCreateWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutDoctor_institutsInput, {
    nullable: false
  })
  doctors!: DoctorsCreateNestedOneWithoutDoctor_institutsInput;
}
