import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyDoctorsInputEnvelope } from "../inputs/ConsultationsCreateManyDoctorsInputEnvelope";
import { ConsultationsCreateOrConnectWithoutDoctorsInput } from "../inputs/ConsultationsCreateOrConnectWithoutDoctorsInput";
import { ConsultationsCreateWithoutDoctorsInput } from "../inputs/ConsultationsCreateWithoutDoctorsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateNestedManyWithoutDoctorsInput", {})
export class ConsultationsCreateNestedManyWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => [ConsultationsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: ConsultationsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationsCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput[] | undefined;
}
