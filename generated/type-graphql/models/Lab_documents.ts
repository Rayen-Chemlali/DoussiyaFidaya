import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Analysis_results } from "../models/Analysis_results";
import { Ctscan_results } from "../models/Ctscan_results";
import { Lab_attachments } from "../models/Lab_attachments";
import { Lab_requests } from "../models/Lab_requests";
import { Lab_results } from "../models/Lab_results";
import { Laboratories } from "../models/Laboratories";
import { Patients } from "../models/Patients";
import { Xray_results } from "../models/Xray_results";
import { lab_documents_status_enum } from "../enums/lab_documents_status_enum";
import { Lab_documentsCount } from "../resolvers/outputs/Lab_documentsCount";

@TypeGraphQL.ObjectType("Lab_documents", {})
export class Lab_documents {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completed_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  requested_at!: Date;

  @TypeGraphQL.Field(_type => lab_documents_status_enum, {
    nullable: false
  })
  status!: "pending" | "in_progress" | "completed" | "cancelled";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  laboratory_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab_request_id?: string | null;

  analysis_results?: Analysis_results[];

  ctscan_results?: Ctscan_results[];

  lab_attachments?: Lab_attachments[];

  laboratories?: Laboratories | null;

  patients?: Patients;

  lab_requests?: Lab_requests | null;

  lab_results?: Lab_results[];

  xray_results?: Xray_results[];

  @TypeGraphQL.Field(_type => Lab_documentsCount, {
    nullable: true
  })
  _count?: Lab_documentsCount | null;
}
