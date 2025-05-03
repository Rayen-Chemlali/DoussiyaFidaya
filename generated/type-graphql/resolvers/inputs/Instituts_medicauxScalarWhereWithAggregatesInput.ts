import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enuminstituts_medicaux_type_enumWithAggregatesFilter } from "../inputs/Enuminstituts_medicaux_type_enumWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Instituts_medicauxScalarWhereWithAggregatesInput", {})
export class Instituts_medicauxScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Instituts_medicauxScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Instituts_medicauxScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Instituts_medicauxScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Instituts_medicauxScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enuminstituts_medicaux_type_enumWithAggregatesFilter, {
    nullable: true
  })
  type?: Enuminstituts_medicaux_type_enumWithAggregatesFilter | undefined;
}
