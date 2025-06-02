import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCreateNestedManyWithoutLab_requestsInput } from "../inputs/Consultation_lab_requestsCreateNestedManyWithoutLab_requestsInput";
import { ConsultationsCreateNestedManyWithoutLab_requestsInput } from "../inputs/ConsultationsCreateNestedManyWithoutLab_requestsInput";
import { DoctorsCreateNestedOneWithoutLab_requestsInput } from "../inputs/DoctorsCreateNestedOneWithoutLab_requestsInput";
import { Lab_documentsCreateNestedManyWithoutLab_requestsInput } from "../inputs/Lab_documentsCreateNestedManyWithoutLab_requestsInput";
import { PatientsCreateNestedOneWithoutLab_requestsInput } from "../inputs/PatientsCreateNestedOneWithoutLab_requestsInput";
import { lab_requests_priority_enum } from "../../enums/lab_requests_priority_enum";

@TypeGraphQL.InputType("Lab_requestsCreateInput", {})
export class Lab_requestsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => lab_requests_priority_enum, {
    nullable: true
  })
  priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsCreateNestedManyWithoutLab_requestsInput, {
    nullable: true
  })
  consultation_lab_requests?: Consultation_lab_requestsCreateNestedManyWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateNestedManyWithoutLab_requestsInput, {
    nullable: true
  })
  lab_documents?: Lab_documentsCreateNestedManyWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutLab_requestsInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedOneWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutLab_requestsInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutLab_requestsInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateNestedManyWithoutLab_requestsInput, {
    nullable: true
  })
  consultations?: ConsultationsCreateNestedManyWithoutLab_requestsInput | undefined;
}
