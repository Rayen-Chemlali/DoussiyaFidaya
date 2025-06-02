import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateNestedManyWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateNestedManyWithoutPrescriptionsInput";
import { DoctorsCreateNestedOneWithoutPrescriptionsInput } from "../inputs/DoctorsCreateNestedOneWithoutPrescriptionsInput";
import { MedicationsCreateNestedManyWithoutPrescriptionsInput } from "../inputs/MedicationsCreateNestedManyWithoutPrescriptionsInput";
import { PatientsCreateNestedOneWithoutPrescriptionsInput } from "../inputs/PatientsCreateNestedOneWithoutPrescriptionsInput";
import { prescriptions_status_enum } from "../../enums/prescriptions_status_enum";

@TypeGraphQL.InputType("PrescriptionsCreateInput", {})
export class PrescriptionsCreateInput {
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
  status!: "ACTIVE" | "COMPLETED" | "CANCELLED";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateNestedManyWithoutPrescriptionsInput, {
    nullable: true
  })
  consultations?: ConsultationsCreateNestedManyWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => MedicationsCreateNestedManyWithoutPrescriptionsInput, {
    nullable: true
  })
  medications?: MedicationsCreateNestedManyWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutPrescriptionsInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedOneWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutPrescriptionsInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutPrescriptionsInput;
}
