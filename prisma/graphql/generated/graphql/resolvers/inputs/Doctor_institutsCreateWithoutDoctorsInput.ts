import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput";

@TypeGraphQL.InputType("Doctor_institutsCreateWithoutDoctorsInput", {})
export class Doctor_institutsCreateWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput, {
    nullable: false
  })
  instituts_medicaux!: Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput;
}
