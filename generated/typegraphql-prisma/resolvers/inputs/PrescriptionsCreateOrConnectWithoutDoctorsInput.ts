import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateWithoutDoctorsInput } from "../inputs/PrescriptionsCreateWithoutDoctorsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsCreateOrConnectWithoutDoctorsInput", {})
export class PrescriptionsCreateOrConnectWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: PrescriptionsCreateWithoutDoctorsInput;
}
