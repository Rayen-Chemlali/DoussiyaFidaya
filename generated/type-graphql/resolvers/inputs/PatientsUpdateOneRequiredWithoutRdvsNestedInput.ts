import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutRdvsInput } from "../inputs/PatientsCreateOrConnectWithoutRdvsInput";
import { PatientsCreateWithoutRdvsInput } from "../inputs/PatientsCreateWithoutRdvsInput";
import { PatientsUpdateToOneWithWhereWithoutRdvsInput } from "../inputs/PatientsUpdateToOneWithWhereWithoutRdvsInput";
import { PatientsUpsertWithoutRdvsInput } from "../inputs/PatientsUpsertWithoutRdvsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateOneRequiredWithoutRdvsNestedInput", {})
export class PatientsUpdateOneRequiredWithoutRdvsNestedInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutRdvsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutRdvsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpsertWithoutRdvsInput, {
    nullable: true
  })
  upsert?: PatientsUpsertWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateToOneWithWhereWithoutRdvsInput, {
    nullable: true
  })
  update?: PatientsUpdateToOneWithWhereWithoutRdvsInput | undefined;
}
