import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateNestedOneWithoutDoctor_institutsInput } from "../inputs/DoctorsCreateNestedOneWithoutDoctor_institutsInput";
import { Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput";

@TypeGraphQL.InputType("Doctor_institutsCreateInput", {})
export class Doctor_institutsCreateInput {
  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutDoctor_institutsInput, {
    nullable: false
  })
  doctors!: DoctorsCreateNestedOneWithoutDoctor_institutsInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput, {
    nullable: false
  })
  instituts_medicaux!: Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput;
}
