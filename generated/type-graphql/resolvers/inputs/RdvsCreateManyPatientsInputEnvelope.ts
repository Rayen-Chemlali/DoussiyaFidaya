import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateManyPatientsInput } from "../inputs/RdvsCreateManyPatientsInput";

@TypeGraphQL.InputType("RdvsCreateManyPatientsInputEnvelope", {})
export class RdvsCreateManyPatientsInputEnvelope {
  @TypeGraphQL.Field(_type => [RdvsCreateManyPatientsInput], {
    nullable: false
  })
  data!: RdvsCreateManyPatientsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
