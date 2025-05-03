import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutRdv_requestsInput } from "../inputs/PatientsUpdateWithoutRdv_requestsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutRdv_requestsInput", {})
export class PatientsUpdateToOneWithWhereWithoutRdv_requestsInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutRdv_requestsInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutRdv_requestsInput;
}
