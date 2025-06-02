import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnConsultationsDoctorsArgs } from "./args/CreateManyAndReturnConsultationsDoctorsArgs";
import { CreateManyAndReturnConsultationsInstituts_medicauxArgs } from "./args/CreateManyAndReturnConsultationsInstituts_medicauxArgs";
import { CreateManyAndReturnConsultationsPrescriptionsArgs } from "./args/CreateManyAndReturnConsultationsPrescriptionsArgs";
import { Doctors } from "../../models/Doctors";
import { Instituts_medicaux } from "../../models/Instituts_medicaux";
import { Patients } from "../../models/Patients";
import { Prescriptions } from "../../models/Prescriptions";

@TypeGraphQL.ObjectType("CreateManyAndReturnConsultations", {})
export class CreateManyAndReturnConsultations {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  notes!: string[] | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  measures!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  institut_medical_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prescription_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => Patients, {
    nullable: false
  })
  patients!: Patients;

  prescriptions!: Prescriptions | null;
  instituts_medicaux!: Instituts_medicaux | null;
  doctors!: Doctors | null;

  @TypeGraphQL.Field(_type => Prescriptions, {
    name: "prescriptions",
    nullable: true
  })
  getPrescriptions(@TypeGraphQL.Root() root: CreateManyAndReturnConsultations, @TypeGraphQL.Args() args: CreateManyAndReturnConsultationsPrescriptionsArgs): Prescriptions | null {
    return root.prescriptions;
  }

  @TypeGraphQL.Field(_type => Instituts_medicaux, {
    name: "instituts_medicaux",
    nullable: true
  })
  getInstituts_medicaux(@TypeGraphQL.Root() root: CreateManyAndReturnConsultations, @TypeGraphQL.Args() args: CreateManyAndReturnConsultationsInstituts_medicauxArgs): Instituts_medicaux | null {
    return root.instituts_medicaux;
  }

  @TypeGraphQL.Field(_type => Doctors, {
    name: "doctors",
    nullable: true
  })
  getDoctors(@TypeGraphQL.Root() root: CreateManyAndReturnConsultations, @TypeGraphQL.Args() args: CreateManyAndReturnConsultationsDoctorsArgs): Doctors | null {
    return root.doctors;
  }
}
