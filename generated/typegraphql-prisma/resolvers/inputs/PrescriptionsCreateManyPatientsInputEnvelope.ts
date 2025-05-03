import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateManyPatientsInput } from "../inputs/PrescriptionsCreateManyPatientsInput";

@TypeGraphQL.InputType("PrescriptionsCreateManyPatientsInputEnvelope", {})
export class PrescriptionsCreateManyPatientsInputEnvelope {
  @TypeGraphQL.Field(_type => [PrescriptionsCreateManyPatientsInput], {
    nullable: false
  })
  data!: PrescriptionsCreateManyPatientsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
