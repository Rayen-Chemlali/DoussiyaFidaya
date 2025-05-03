import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateNestedOneWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateNestedOneWithoutPrescriptionsInput";
import { DoctorsCreateNestedOneWithoutPrescriptionsInput } from "../inputs/DoctorsCreateNestedOneWithoutPrescriptionsInput";
import { PatientsCreateNestedOneWithoutPrescriptionsInput } from "../inputs/PatientsCreateNestedOneWithoutPrescriptionsInput";
import { prescriptions_status_enum } from "../../enums/prescriptions_status_enum";

@TypeGraphQL.InputType("PrescriptionsCreateWithoutMedicationsInput", {})
export class PrescriptionsCreateWithoutMedicationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instructions?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_signed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section?: string | undefined;

  @TypeGraphQL.Field(_type => prescriptions_status_enum, {
    nullable: false
  })
  status!: "Pending" | "Approved" | "Rejected";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateNestedOneWithoutPrescriptionsInput, {
    nullable: true
  })
  consultations?: ConsultationsCreateNestedOneWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutPrescriptionsInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedOneWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutPrescriptionsInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutPrescriptionsInput;
}
