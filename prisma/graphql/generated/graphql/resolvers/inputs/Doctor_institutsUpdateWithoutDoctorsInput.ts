import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput } from "../inputs/Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput";

@TypeGraphQL.InputType("Doctor_institutsUpdateWithoutDoctorsInput", {})
export class Doctor_institutsUpdateWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput | undefined;
}
