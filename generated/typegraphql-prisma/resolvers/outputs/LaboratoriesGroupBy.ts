import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesCountAggregate } from "../outputs/LaboratoriesCountAggregate";
import { LaboratoriesMaxAggregate } from "../outputs/LaboratoriesMaxAggregate";
import { LaboratoriesMinAggregate } from "../outputs/LaboratoriesMinAggregate";

@TypeGraphQL.ObjectType("LaboratoriesGroupBy", {})
export class LaboratoriesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

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
