import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCreateManyConsultationsInput } from "../inputs/Consultation_lab_requestsCreateManyConsultationsInput";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateManyConsultationsInputEnvelope", {})
export class Consultation_lab_requestsCreateManyConsultationsInputEnvelope {
  @TypeGraphQL.Field(_type => [Consultation_lab_requestsCreateManyConsultationsInput], {
    nullable: false
  })
  data!: Consultation_lab_requestsCreateManyConsultationsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
