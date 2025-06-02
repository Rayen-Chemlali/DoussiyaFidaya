import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateManyDoctorsInput } from "../inputs/PrescriptionsCreateManyDoctorsInput";

@TypeGraphQL.InputType("PrescriptionsCreateManyDoctorsInputEnvelope", {})
export class PrescriptionsCreateManyDoctorsInputEnvelope {
  @TypeGraphQL.Field(_type => [PrescriptionsCreateManyDoctorsInput], {
    nullable: false
  })
  data!: PrescriptionsCreateManyDoctorsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
