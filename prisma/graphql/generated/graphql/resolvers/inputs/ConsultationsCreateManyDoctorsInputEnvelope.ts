import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyDoctorsInput } from "../inputs/ConsultationsCreateManyDoctorsInput";

@TypeGraphQL.InputType("ConsultationsCreateManyDoctorsInputEnvelope", {})
export class ConsultationsCreateManyDoctorsInputEnvelope {
  @TypeGraphQL.Field(_type => [ConsultationsCreateManyDoctorsInput], {
    nullable: false
  })
  data!: ConsultationsCreateManyDoctorsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
