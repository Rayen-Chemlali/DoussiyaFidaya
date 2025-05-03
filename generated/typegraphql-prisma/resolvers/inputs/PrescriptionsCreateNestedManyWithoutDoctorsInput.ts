import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateManyDoctorsInputEnvelope } from "../inputs/PrescriptionsCreateManyDoctorsInputEnvelope";
import { PrescriptionsCreateOrConnectWithoutDoctorsInput } from "../inputs/PrescriptionsCreateOrConnectWithoutDoctorsInput";
import { PrescriptionsCreateWithoutDoctorsInput } from "../inputs/PrescriptionsCreateWithoutDoctorsInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsCreateNestedManyWithoutDoctorsInput", {})
export class PrescriptionsCreateNestedManyWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => [PrescriptionsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: PrescriptionsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: PrescriptionsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: PrescriptionsCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsWhereUniqueInput], {
    nullable: true
  })
  connect?: PrescriptionsWhereUniqueInput[] | undefined;
}
