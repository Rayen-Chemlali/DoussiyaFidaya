import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyInstituts_medicauxInput } from "../inputs/ConsultationsCreateManyInstituts_medicauxInput";

@TypeGraphQL.InputType("ConsultationsCreateManyInstituts_medicauxInputEnvelope", {})
export class ConsultationsCreateManyInstituts_medicauxInputEnvelope {
  @TypeGraphQL.Field(_type => [ConsultationsCreateManyInstituts_medicauxInput], {
    nullable: false
  })
  data!: ConsultationsCreateManyInstituts_medicauxInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
