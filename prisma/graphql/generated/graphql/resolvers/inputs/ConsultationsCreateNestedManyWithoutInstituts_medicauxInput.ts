import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateManyInstituts_medicauxInputEnvelope } from "../inputs/ConsultationsCreateManyInstituts_medicauxInputEnvelope";
import { ConsultationsCreateOrConnectWithoutInstituts_medicauxInput } from "../inputs/ConsultationsCreateOrConnectWithoutInstituts_medicauxInput";
import { ConsultationsCreateWithoutInstituts_medicauxInput } from "../inputs/ConsultationsCreateWithoutInstituts_medicauxInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateNestedManyWithoutInstituts_medicauxInput", {})
export class ConsultationsCreateNestedManyWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => [ConsultationsCreateWithoutInstituts_medicauxInput], {
    nullable: true
  })
  create?: ConsultationsCreateWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsCreateOrConnectWithoutInstituts_medicauxInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateManyInstituts_medicauxInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationsCreateManyInstituts_medicauxInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput[] | undefined;
}
