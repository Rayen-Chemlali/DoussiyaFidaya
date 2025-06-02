import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enuminstituts_medicaux_type_enumFilter } from "../inputs/Enuminstituts_medicaux_type_enumFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Instituts_medicauxScalarWhereInput", {})
export class Instituts_medicauxScalarWhereInput {
  @TypeGraphQL.Field(_type => [Instituts_medicauxScalarWhereInput], {
    nullable: true
  })
  AND?: Instituts_medicauxScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxScalarWhereInput], {
    nullable: true
  })
  OR?: Instituts_medicauxScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxScalarWhereInput], {
    nullable: true
  })
  NOT?: Instituts_medicauxScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Enuminstituts_medicaux_type_enumFilter, {
    nullable: true
  })
  type?: Enuminstituts_medicaux_type_enumFilter | undefined;
}
