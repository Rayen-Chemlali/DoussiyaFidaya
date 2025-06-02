import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput } from "../inputs/DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput";

@TypeGraphQL.InputType("Doctor_institutsUpdateWithoutInstituts_medicauxInput", {})
export class Doctor_institutsUpdateWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput, {
    nullable: true
  })
  doctors?: DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput | undefined;
}
