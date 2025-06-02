import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateManyDoctorsInputEnvelope } from "../inputs/RdvsCreateManyDoctorsInputEnvelope";
import { RdvsCreateOrConnectWithoutDoctorsInput } from "../inputs/RdvsCreateOrConnectWithoutDoctorsInput";
import { RdvsCreateWithoutDoctorsInput } from "../inputs/RdvsCreateWithoutDoctorsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateNestedManyWithoutDoctorsInput", {})
export class RdvsCreateNestedManyWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => [RdvsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: RdvsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: RdvsCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RdvsWhereUniqueInput], {
    nullable: true
  })
  connect?: RdvsWhereUniqueInput[] | undefined;
}
