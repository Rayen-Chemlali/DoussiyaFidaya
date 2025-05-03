import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MedicationsCreateManyPrescriptionsInputEnvelope } from "../inputs/MedicationsCreateManyPrescriptionsInputEnvelope";
import { MedicationsCreateOrConnectWithoutPrescriptionsInput } from "../inputs/MedicationsCreateOrConnectWithoutPrescriptionsInput";
import { MedicationsCreateWithoutPrescriptionsInput } from "../inputs/MedicationsCreateWithoutPrescriptionsInput";
import { MedicationsWhereUniqueInput } from "../inputs/MedicationsWhereUniqueInput";

@TypeGraphQL.InputType("MedicationsCreateNestedManyWithoutPrescriptionsInput", {})
export class MedicationsCreateNestedManyWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => [MedicationsCreateWithoutPrescriptionsInput], {
    nullable: true
  })
  create?: MedicationsCreateWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsCreateOrConnectWithoutPrescriptionsInput], {
    nullable: true
  })
  connectOrCreate?: MedicationsCreateOrConnectWithoutPrescriptionsInput[] | undefined;

  @TypeGraphQL.Field(_type => MedicationsCreateManyPrescriptionsInputEnvelope, {
    nullable: true
  })
  createMany?: MedicationsCreateManyPrescriptionsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MedicationsWhereUniqueInput], {
    nullable: true
  })
  connect?: MedicationsWhereUniqueInput[] | undefined;
}
