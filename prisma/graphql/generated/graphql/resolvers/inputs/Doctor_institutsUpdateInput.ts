import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput } from "../inputs/DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput";
import { Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput } from "../inputs/Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput";

@TypeGraphQL.InputType("Doctor_institutsUpdateInput", {})
export class Doctor_institutsUpdateInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput, {
    nullable: true
  })
  doctors?: DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput | undefined;
}
