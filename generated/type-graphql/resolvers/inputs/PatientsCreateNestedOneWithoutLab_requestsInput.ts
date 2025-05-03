import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutLab_requestsInput } from "../inputs/PatientsCreateOrConnectWithoutLab_requestsInput";
import { PatientsCreateWithoutLab_requestsInput } from "../inputs/PatientsCreateWithoutLab_requestsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutLab_requestsInput", {})
export class PatientsCreateNestedOneWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutLab_requestsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutLab_requestsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
