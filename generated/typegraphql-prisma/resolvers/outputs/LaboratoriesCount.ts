import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesCountLab_documentsArgs } from "./args/LaboratoriesCountLab_documentsArgs";

@TypeGraphQL.ObjectType("LaboratoriesCount", {})
export class LaboratoriesCount {
  lab_documents!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "lab_documents",
    nullable: false
  })
  getLab_documents(@TypeGraphQL.Root() root: LaboratoriesCount, @TypeGraphQL.Args() args: LaboratoriesCountLab_documentsArgs): number {
    return root.lab_documents;
  }
}
