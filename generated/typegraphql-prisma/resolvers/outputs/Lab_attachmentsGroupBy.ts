import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_attachmentsCountAggregate } from "../outputs/Lab_attachmentsCountAggregate";
import { Lab_attachmentsMaxAggregate } from "../outputs/Lab_attachmentsMaxAggregate";
import { Lab_attachmentsMinAggregate } from "../outputs/Lab_attachmentsMinAggregate";

@TypeGraphQL.ObjectType("Lab_attachmentsGroupBy", {})
export class Lab_attachmentsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_document_id!: string;

  @TypeGraphQL.Field(_type => Lab_attachmentsCountAggregate, {
    nullable: true
  })
  _count!: Lab_attachmentsCountAggregate | null;

  @TypeGraphQL.Field(_type => Lab_attachmentsMinAggregate, {
    nullable: true
  })
  _min!: Lab_attachmentsMinAggregate | null;

  @TypeGraphQL.Field(_type => Lab_attachmentsMaxAggregate, {
    nullable: true
  })
  _max!: Lab_attachmentsMaxAggregate | null;
}
