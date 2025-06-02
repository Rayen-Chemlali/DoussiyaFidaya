import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyPrescriptionsInput } from "../inputs/ConsultationsCreateManyPrescriptionsInput";

@TypeGraphQL.InputType("ConsultationsCreateManyPrescriptionsInputEnvelope", {})
export class ConsultationsCreateManyPrescriptionsInputEnvelope {
  @TypeGraphQL.Field(_type => [ConsultationsCreateManyPrescriptionsInput], {
    nullable: false
  })
  data!: ConsultationsCreateManyPrescriptionsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
