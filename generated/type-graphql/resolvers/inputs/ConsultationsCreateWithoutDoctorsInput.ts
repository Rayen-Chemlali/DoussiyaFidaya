import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreatenotesInput } from "../inputs/ConsultationsCreatenotesInput";
import { Instituts_medicauxCreateNestedOneWithoutConsultationsInput } from "../inputs/Instituts_medicauxCreateNestedOneWithoutConsultationsInput";
import { Lab_requestsCreateNestedManyWithoutConsultationsInput } from "../inputs/Lab_requestsCreateNestedManyWithoutConsultationsInput";
import { PatientsCreateNestedOneWithoutConsultationsInput } from "../inputs/PatientsCreateNestedOneWithoutConsultationsInput";
import { PrescriptionsCreateNestedOneWithoutConsultationsInput } from "../inputs/PrescriptionsCreateNestedOneWithoutConsultationsInput";
import { RdvsCreateNestedOneWithoutConsultationsInput } from "../inputs/RdvsCreateNestedOneWithoutConsultationsInput";

@TypeGraphQL.InputType("ConsultationsCreateWithoutDoctorsInput", {})
export class ConsultationsCreateWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => ConsultationsCreatenotesInput, {
    nullable: true
  })
  notes?: ConsultationsCreatenotesInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  measures?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCreateNestedManyWithoutConsultationsInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsCreateNestedManyWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateNestedOneWithoutConsultationsInput, {
    nullable: true
  })
  prescriptions?: PrescriptionsCreateNestedOneWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateNestedOneWithoutConsultationsInput, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxCreateNestedOneWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutConsultationsInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => RdvsCreateNestedOneWithoutConsultationsInput, {
    nullable: true
  })
  rdvs?: RdvsCreateNestedOneWithoutConsultationsInput | undefined;
}
