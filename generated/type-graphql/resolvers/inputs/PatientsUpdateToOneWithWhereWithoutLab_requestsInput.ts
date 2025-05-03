import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutLab_requestsInput } from "../inputs/PatientsUpdateWithoutLab_requestsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutLab_requestsInput", {})
export class PatientsUpdateToOneWithWhereWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutLab_requestsInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutLab_requestsInput;
}
