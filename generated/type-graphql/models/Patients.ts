import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Authorizations } from "../models/Authorizations";
import { Certificates } from "../models/Certificates";
import { Consultations } from "../models/Consultations";
import { GeneralMedicalRecords } from "../models/GeneralMedicalRecords";
import { Lab_documents } from "../models/Lab_documents";
import { Lab_requests } from "../models/Lab_requests";
import { Prescriptions } from "../models/Prescriptions";
import { Rdv_requests } from "../models/Rdv_requests";
import { Rdvs } from "../models/Rdvs";
import { Users } from "../models/Users";
import { patients_gender_enum } from "../enums/patients_gender_enum";
import { PatientsCount } from "../resolvers/outputs/PatientsCount";

@TypeGraphQL.ObjectType("Patients", {})
export class Patients {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cin!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_birth!: Date;

  @TypeGraphQL.Field(_type => patients_gender_enum, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE" | "OTHER";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  general_medical_record_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id?: string | null;

  GeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatients?: GeneralMedicalRecords | null;

  authorizations?: Authorizations[];

  certificates?: Certificates[];

  consultations?: Consultations[];

  lab_documents?: Lab_documents[];

  lab_requests?: Lab_requests[];

  users?: Users | null;

  GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords?: GeneralMedicalRecords | null;

  prescriptions?: Prescriptions[];

  rdv_requests?: Rdv_requests[];

  rdvs?: Rdvs[];

  @TypeGraphQL.Field(_type => PatientsCount, {
    nullable: true
  })
  _count?: PatientsCount | null;
}
