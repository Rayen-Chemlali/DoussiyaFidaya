import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyPatientsInput } from "../inputs/ConsultationsCreateManyPatientsInput";

@TypeGraphQL.InputType("ConsultationsCreateManyPatientsInputEnvelope", {})
export class ConsultationsCreateManyPatientsInputEnvelope {
  @TypeGraphQL.Field(_type => [ConsultationsCreateManyPatientsInput], {
    nullable: false
  })
  data!: ConsultationsCreateManyPatientsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
