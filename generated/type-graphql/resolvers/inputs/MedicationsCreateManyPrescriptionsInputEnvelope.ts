import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MedicationsCreateManyPrescriptionsInput } from "../inputs/MedicationsCreateManyPrescriptionsInput";

@TypeGraphQL.InputType("MedicationsCreateManyPrescriptionsInputEnvelope", {})
export class MedicationsCreateManyPrescriptionsInputEnvelope {
  @TypeGraphQL.Field(_type => [MedicationsCreateManyPrescriptionsInput], {
    nullable: false
  })
  data!: MedicationsCreateManyPrescriptionsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
