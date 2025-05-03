import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateManyPatientsInputEnvelope } from "../inputs/PrescriptionsCreateManyPatientsInputEnvelope";
import { PrescriptionsCreateOrConnectWithoutPatientsInput } from "../inputs/PrescriptionsCreateOrConnectWithoutPatientsInput";
import { PrescriptionsCreateWithoutPatientsInput } from "../inputs/PrescriptionsCreateWithoutPatientsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsCreateNestedManyWithoutPatientsInput", {})
export class PrescriptionsCreateNestedManyWithoutPatientsInput {
  @TypeGraphQL.Field(_type => [PrescriptionsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: PrescriptionsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: PrescriptionsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: PrescriptionsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsWhereUniqueInput], {
    nullable: true
  })
  connect?: PrescriptionsWhereUniqueInput[] | undefined;
}
