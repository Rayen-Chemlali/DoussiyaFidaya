import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyPatientsInputEnvelope } from "../inputs/ConsultationsCreateManyPatientsInputEnvelope";
import { ConsultationsCreateOrConnectWithoutPatientsInput } from "../inputs/ConsultationsCreateOrConnectWithoutPatientsInput";
import { ConsultationsCreateWithoutPatientsInput } from "../inputs/ConsultationsCreateWithoutPatientsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateNestedManyWithoutPatientsInput", {})
export class ConsultationsCreateNestedManyWithoutPatientsInput {
  @TypeGraphQL.Field(_type => [ConsultationsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: ConsultationsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput[] | undefined;
}
