import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsOrderByRelationAggregateInput } from "../inputs/AuthorizationsOrderByRelationAggregateInput";
import { CertificatesOrderByRelationAggregateInput } from "../inputs/CertificatesOrderByRelationAggregateInput";
import { ConsultationsOrderByRelationAggregateInput } from "../inputs/ConsultationsOrderByRelationAggregateInput";
import { GeneralMedicalRecordsOrderByWithRelationInput } from "../inputs/GeneralMedicalRecordsOrderByWithRelationInput";
import { Lab_documentsOrderByRelationAggregateInput } from "../inputs/Lab_documentsOrderByRelationAggregateInput";
import { Lab_requestsOrderByRelationAggregateInput } from "../inputs/Lab_requestsOrderByRelationAggregateInput";
import { PrescriptionsOrderByRelationAggregateInput } from "../inputs/PrescriptionsOrderByRelationAggregateInput";
import { Rdv_requestsOrderByRelationAggregateInput } from "../inputs/Rdv_requestsOrderByRelationAggregateInput";
import { RdvsOrderByRelationAggregateInput } from "../inputs/RdvsOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UsersOrderByWithRelationInput } from "../inputs/UsersOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PatientsOrderByWithRelationInput", {})
export class PatientsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_of_birth?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  profile_image?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  general_medical_record_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  user_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsOrderByWithRelationInput, {
    nullable: true
  })
  GeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatients?: GeneralMedicalRecordsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsOrderByRelationAggregateInput, {
    nullable: true
  })
  authorizations?: AuthorizationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CertificatesOrderByRelationAggregateInput, {
    nullable: true
  })
  certificates?: CertificatesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsOrderByRelationAggregateInput, {
    nullable: true
  })
  consultations?: ConsultationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsOrderByRelationAggregateInput, {
    nullable: true
  })
  lab_documents?: Lab_documentsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsOrderByRelationAggregateInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersOrderByWithRelationInput, {
    nullable: true
  })
  users?: UsersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsOrderByWithRelationInput, {
    nullable: true
  })
  GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords?: GeneralMedicalRecordsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsOrderByRelationAggregateInput, {
    nullable: true
  })
  prescriptions?: PrescriptionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsOrderByRelationAggregateInput, {
    nullable: true
  })
  rdv_requests?: Rdv_requestsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RdvsOrderByRelationAggregateInput, {
    nullable: true
  })
  rdvs?: RdvsOrderByRelationAggregateInput | undefined;
}
