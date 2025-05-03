import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesCountAggregate } from "../outputs/LaboratoriesCountAggregate";
import { LaboratoriesMaxAggregate } from "../outputs/LaboratoriesMaxAggregate";
import { LaboratoriesMinAggregate } from "../outputs/LaboratoriesMinAggregate";

@TypeGraphQL.ObjectType("AggregateLaboratories", {})
export class AggregateLaboratories {
  @TypeGraphQL.Field(_type => LaboratoriesCountAggregate, {
    nullable: true
  })
  _count!: LaboratoriesCountAggregate | null;

  @TypeGraphQL.Field(_type => LaboratoriesMinAggregate, {
    nullable: true
  })
  _min!: LaboratoriesMinAggregate | null;

  @TypeGraphQL.Field(_type => LaboratoriesMaxAggregate, {
    nullable: true
  })
  _max!: LaboratoriesMaxAggregate | null;
}
