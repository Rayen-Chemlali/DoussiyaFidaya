import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCountMedicationsArgs } from "./args/PrescriptionsCountMedicationsArgs";

@TypeGraphQL.ObjectType("PrescriptionsCount", {})
export class PrescriptionsCount {
  medications!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "medications",
    nullable: false
  })
  getMedications(@TypeGraphQL.Root() root: PrescriptionsCount, @TypeGraphQL.Args() args: PrescriptionsCountMedicationsArgs): number {
    return root.medications;
  }
}
