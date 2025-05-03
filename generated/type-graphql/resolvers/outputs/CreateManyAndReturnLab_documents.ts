import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnLab_documentsLab_requestsArgs } from "./args/CreateManyAndReturnLab_documentsLab_requestsArgs";
import { CreateManyAndReturnLab_documentsLaboratoriesArgs } from "./args/CreateManyAndReturnLab_documentsLaboratoriesArgs";
import { Lab_requests } from "../../models/Lab_requests";
import { Laboratories } from "../../models/Laboratories";
import { Patients } from "../../models/Patients";
import { lab_documents_status_enum } from "../../enums/lab_documents_status_enum";

@TypeGraphQL.ObjectType("CreateManyAndReturnLab_documents", {})
export class CreateManyAndReturnLab_documents {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completed_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

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
  section!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  laboratory_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab_request_id!: string | null;

  @TypeGraphQL.Field(_type => Patients, {
    nullable: false
  })
  patients!: Patients;

  laboratories!: Laboratories | null;
  lab_requests!: Lab_requests | null;

  @TypeGraphQL.Field(_type => Laboratories, {
    name: "laboratories",
    nullable: true
  })
  getLaboratories(@TypeGraphQL.Root() root: CreateManyAndReturnLab_documents, @TypeGraphQL.Args() args: CreateManyAndReturnLab_documentsLaboratoriesArgs): Laboratories | null {
    return root.laboratories;
  }

  @TypeGraphQL.Field(_type => Lab_requests, {
    name: "lab_requests",
    nullable: true
  })
  getLab_requests(@TypeGraphQL.Root() root: CreateManyAndReturnLab_documents, @TypeGraphQL.Args() args: CreateManyAndReturnLab_documentsLab_requestsArgs): Lab_requests | null {
    return root.lab_requests;
  }
}
