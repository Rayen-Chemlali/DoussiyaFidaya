import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsCreateNestedManyWithoutLab_documentsInput } from "../inputs/Analysis_resultsCreateNestedManyWithoutLab_documentsInput";
import { Lab_attachmentsCreateNestedManyWithoutLab_documentsInput } from "../inputs/Lab_attachmentsCreateNestedManyWithoutLab_documentsInput";
import { Lab_requestsCreateNestedOneWithoutLab_documentsInput } from "../inputs/Lab_requestsCreateNestedOneWithoutLab_documentsInput";
import { Lab_resultsCreateNestedManyWithoutLab_documentsInput } from "../inputs/Lab_resultsCreateNestedManyWithoutLab_documentsInput";
import { LaboratoriesCreateNestedOneWithoutLab_documentsInput } from "../inputs/LaboratoriesCreateNestedOneWithoutLab_documentsInput";
import { PatientsCreateNestedOneWithoutLab_documentsInput } from "../inputs/PatientsCreateNestedOneWithoutLab_documentsInput";
import { Xray_resultsCreateNestedManyWithoutLab_documentsInput } from "../inputs/Xray_resultsCreateNestedManyWithoutLab_documentsInput";
import { lab_documents_status_enum } from "../../enums/lab_documents_status_enum";

@TypeGraphQL.InputType("Lab_documentsCreateWithoutCtscan_resultsInput", {})
export class Lab_documentsCreateWithoutCtscan_resultsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completed_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  requested_at!: Date;

  @TypeGraphQL.Field(_type => lab_documents_status_enum, {
    nullable: false
  })
  status!: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section?: string | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsCreateNestedManyWithoutLab_documentsInput, {
    nullable: true
  })
  analysis_results?: Analysis_resultsCreateNestedManyWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsCreateNestedManyWithoutLab_documentsInput, {
    nullable: true
  })
  lab_attachments?: Lab_attachmentsCreateNestedManyWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesCreateNestedOneWithoutLab_documentsInput, {
    nullable: true
  })
  laboratories?: LaboratoriesCreateNestedOneWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutLab_documentsInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateNestedOneWithoutLab_documentsInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsCreateNestedOneWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsCreateNestedManyWithoutLab_documentsInput, {
    nullable: true
  })
  lab_results?: Lab_resultsCreateNestedManyWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsCreateNestedManyWithoutLab_documentsInput, {
    nullable: true
  })
  xray_results?: Xray_resultsCreateNestedManyWithoutLab_documentsInput | undefined;
}
