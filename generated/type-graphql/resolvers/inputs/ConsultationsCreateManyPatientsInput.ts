import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreatenotesInput } from "../inputs/ConsultationsCreatenotesInput";

@TypeGraphQL.InputType("ConsultationsCreateManyPatientsInput", {})
export class ConsultationsCreateManyPatientsInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  institut_medical_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prescription_id?: string | undefined;
}
