import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCountConsultationsArgs } from "./args/PrescriptionsCountConsultationsArgs";
import { PrescriptionsCountMedicationsArgs } from "./args/PrescriptionsCountMedicationsArgs";

@TypeGraphQL.ObjectType("PrescriptionsCount", {})
export class PrescriptionsCount {
  consultations!: number;
  medications!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "consultations",
    nullable: false
  })
  getConsultations(@TypeGraphQL.Root() root: PrescriptionsCount, @TypeGraphQL.Args() args: PrescriptionsCountConsultationsArgs): number {
    return root.consultations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "medications",
    nullable: false
  })
  getMedications(@TypeGraphQL.Root() root: PrescriptionsCount, @TypeGraphQL.Args() args: PrescriptionsCountMedicationsArgs): number {
    return root.medications;
  }
}
