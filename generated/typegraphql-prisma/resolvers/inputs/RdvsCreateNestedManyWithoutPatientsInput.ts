import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateManyPatientsInputEnvelope } from "../inputs/RdvsCreateManyPatientsInputEnvelope";
import { RdvsCreateOrConnectWithoutPatientsInput } from "../inputs/RdvsCreateOrConnectWithoutPatientsInput";
import { RdvsCreateWithoutPatientsInput } from "../inputs/RdvsCreateWithoutPatientsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateNestedManyWithoutPatientsInput", {})
export class RdvsCreateNestedManyWithoutPatientsInput {
  @TypeGraphQL.Field(_type => [RdvsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: RdvsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: RdvsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RdvsWhereUniqueInput], {
    nullable: true
  })
  connect?: RdvsWhereUniqueInput[] | undefined;
}
