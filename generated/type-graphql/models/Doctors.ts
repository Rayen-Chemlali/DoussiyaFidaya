import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Certificates } from "../models/Certificates";
import { Consultations } from "../models/Consultations";
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
  type!: "doctor" | "clinique" | "hopital";

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
  specialty!: "generaliste" | "cardiologue" | "dermatologue" | "gynecologue" | "pediatre" | "orthopediste" | "psychiatre" | "ophtalmologue" | "otorhinolaryngologue" | "neurologue" | "urologue" | "endocrinologue" | "gastroenterologue" | "rheumatologue" | "anesthesiste" | "radiologue" | "oncologue" | "chirurgien" | "nutritionniste" | "physiotherapeute" | "psychologue" | "sexologue" | "geriatre" | "allergologue" | "hematologue" | "nephrologue" | "pneumologue" | "dentiste" | "orthodontiste" | "autre";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  certificates?: Certificates[];

  consultations?: Consultations[];

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
