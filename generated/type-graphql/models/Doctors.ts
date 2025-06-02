import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Certificates } from "../models/Certificates";
import { Consultations } from "../models/Consultations";
import { Doctor_instituts } from "../models/Doctor_instituts";
import { Instituts_medicaux } from "../models/Instituts_medicaux";
import { Lab_requests } from "../models/Lab_requests";
import { Message } from "../models/Message";
import { Prescriptions } from "../models/Prescriptions";
import { Rdv_requests } from "../models/Rdv_requests";
import { Rdvs } from "../models/Rdvs";
import { Users } from "../models/Users";
import { doctors_specialty_enum } from "../enums/doctors_specialty_enum";
import { doctors_type_enum } from "../enums/doctors_type_enum";
import { DoctorsCount } from "../resolvers/outputs/DoctorsCount";

@TypeGraphQL.ObjectType("Doctors", {})
export class Doctors {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => doctors_type_enum, {
    nullable: false
  })
  type!: "GENERAL_PRACTITIONER" | "SPECIALIST" | "SURGEON";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_license_verified!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  education!: string[];

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  experience!: string[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  languages!: string[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image?: string | null;

  @TypeGraphQL.Field(_type => doctors_specialty_enum, {
    nullable: false
  })
  specialty!: "GENERAL_PRACTITIONER" | "CARDIOLOGIST" | "DERMATOLOGIST" | "ENDOCRINOLOGIST" | "GASTROENTEROLOGIST" | "GYNECOLOGIST" | "HEMATOLOGIST" | "INFECTIOUS_DISEASE" | "INTERNIST" | "NEPHROLOGIST" | "NEUROLOGIST" | "OBSTETRICIAN" | "ONCOLOGIST" | "OPHTHALMOLOGIST" | "ORTHOPEDIST" | "OTOLARYNGOLOGIST" | "PEDIATRICIAN" | "PSYCHIATRIST" | "PULMONOLOGIST" | "RHEUMATOLOGIST" | "UROLOGIST";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  certificates?: Certificates[];

  consultations?: Consultations[];

  doctor_instituts?: Doctor_instituts[];

  users?: Users;

  lab_requests?: Lab_requests[];

  prescriptions?: Prescriptions[];

  rdv_requests?: Rdv_requests[];

  rdvs?: Rdvs[];

  sentMessages?: Message[];

  receivedMessages?: Message[];

  instituts?: Instituts_medicaux[];

  @TypeGraphQL.Field(_type => DoctorsCount, {
    nullable: true
  })
  _count?: DoctorsCount | null;
}
