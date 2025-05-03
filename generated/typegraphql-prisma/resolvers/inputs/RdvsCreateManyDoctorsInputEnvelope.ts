import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateManyDoctorsInput } from "../inputs/RdvsCreateManyDoctorsInput";

@TypeGraphQL.InputType("RdvsCreateManyDoctorsInputEnvelope", {})
export class RdvsCreateManyDoctorsInputEnvelope {
  @TypeGraphQL.Field(_type => [RdvsCreateManyDoctorsInput], {
    nullable: false
  })
  data!: RdvsCreateManyDoctorsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
