import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Consultation_lab_requestsScalarWhereInput", {})
export class Consultation_lab_requestsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Consultation_lab_requestsScalarWhereInput], {
    nullable: true
  })
  AND?: Consultation_lab_requestsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsScalarWhereInput], {
    nullable: true
  })
  OR?: Consultation_lab_requestsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsScalarWhereInput], {
    nullable: true
  })
  NOT?: Consultation_lab_requestsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  consultation_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  lab_request_id?: UuidFilter | undefined;
}
