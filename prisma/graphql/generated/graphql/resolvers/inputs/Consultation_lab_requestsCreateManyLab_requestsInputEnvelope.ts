import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCreateManyLab_requestsInput } from "../inputs/Consultation_lab_requestsCreateManyLab_requestsInput";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateManyLab_requestsInputEnvelope", {})
export class Consultation_lab_requestsCreateManyLab_requestsInputEnvelope {
  @TypeGraphQL.Field(_type => [Consultation_lab_requestsCreateManyLab_requestsInput], {
    nullable: false
  })
  data!: Consultation_lab_requestsCreateManyLab_requestsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
