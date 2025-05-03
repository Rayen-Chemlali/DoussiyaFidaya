import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Lab_documents } from "../models/Lab_documents";
import { LaboratoriesCount } from "../resolvers/outputs/LaboratoriesCount";

@TypeGraphQL.ObjectType("Laboratories", {})
export class Laboratories {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  lab_documents?: Lab_documents[];

  @TypeGraphQL.Field(_type => LaboratoriesCount, {
    nullable: true
  })
  _count?: LaboratoriesCount | null;
}
