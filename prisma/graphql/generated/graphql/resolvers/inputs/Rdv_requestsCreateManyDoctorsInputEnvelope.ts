import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateManyDoctorsInput } from "../inputs/Rdv_requestsCreateManyDoctorsInput";

@TypeGraphQL.InputType("Rdv_requestsCreateManyDoctorsInputEnvelope", {})
export class Rdv_requestsCreateManyDoctorsInputEnvelope {
  @TypeGraphQL.Field(_type => [Rdv_requestsCreateManyDoctorsInput], {
    nullable: false
  })
  data!: Rdv_requestsCreateManyDoctorsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
