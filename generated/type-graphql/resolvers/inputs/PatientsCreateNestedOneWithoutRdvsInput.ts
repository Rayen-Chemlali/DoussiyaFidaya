import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutRdvsInput } from "../inputs/PatientsCreateOrConnectWithoutRdvsInput";
import { PatientsCreateWithoutRdvsInput } from "../inputs/PatientsCreateWithoutRdvsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutRdvsInput", {})
export class PatientsCreateNestedOneWithoutRdvsInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutRdvsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutRdvsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
