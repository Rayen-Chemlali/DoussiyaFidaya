import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCountAggregate } from "../outputs/Instituts_medicauxCountAggregate";
import { Instituts_medicauxMaxAggregate } from "../outputs/Instituts_medicauxMaxAggregate";
import { Instituts_medicauxMinAggregate } from "../outputs/Instituts_medicauxMinAggregate";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.ObjectType("Instituts_medicauxGroupBy", {})
export class Instituts_medicauxGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: false
  })
  type!: "doctor" | "clinique" | "hopital";

  @TypeGraphQL.Field(_type => Instituts_medicauxCountAggregate, {
    nullable: true
  })
  _count!: Instituts_medicauxCountAggregate | null;

  @TypeGraphQL.Field(_type => Instituts_medicauxMinAggregate, {
    nullable: true
  })
  _min!: Instituts_medicauxMinAggregate | null;

  @TypeGraphQL.Field(_type => Instituts_medicauxMaxAggregate, {
    nullable: true
  })
  _max!: Instituts_medicauxMaxAggregate | null;
}
