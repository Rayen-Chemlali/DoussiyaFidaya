import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutRdv_requestsInput } from "../inputs/PatientsCreateOrConnectWithoutRdv_requestsInput";
import { PatientsCreateWithoutRdv_requestsInput } from "../inputs/PatientsCreateWithoutRdv_requestsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutRdv_requestsInput", {})
export class PatientsCreateNestedOneWithoutRdv_requestsInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutRdv_requestsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutRdv_requestsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
