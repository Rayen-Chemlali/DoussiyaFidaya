import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateManyPatientsInput } from "../inputs/Rdv_requestsCreateManyPatientsInput";

@TypeGraphQL.InputType("Rdv_requestsCreateManyPatientsInputEnvelope", {})
export class Rdv_requestsCreateManyPatientsInputEnvelope {
  @TypeGraphQL.Field(_type => [Rdv_requestsCreateManyPatientsInput], {
    nullable: false
  })
  data!: Rdv_requestsCreateManyPatientsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
