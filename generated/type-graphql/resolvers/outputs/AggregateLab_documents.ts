import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCountAggregate } from "../outputs/Lab_documentsCountAggregate";
import { Lab_documentsMaxAggregate } from "../outputs/Lab_documentsMaxAggregate";
import { Lab_documentsMinAggregate } from "../outputs/Lab_documentsMinAggregate";

@TypeGraphQL.ObjectType("AggregateLab_documents", {})
export class AggregateLab_documents {
  @TypeGraphQL.Field(_type => Lab_documentsCountAggregate, {
    nullable: true
  })
  _count!: Lab_documentsCountAggregate | null;

  @TypeGraphQL.Field(_type => Lab_documentsMinAggregate, {
    nullable: true
  })
  _min!: Lab_documentsMinAggregate | null;

  @TypeGraphQL.Field(_type => Lab_documentsMaxAggregate, {
    nullable: true
  })
  _max!: Lab_documentsMaxAggregate | null;
}
